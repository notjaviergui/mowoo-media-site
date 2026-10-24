import test from "node:test";
import assert from "node:assert/strict";
import { installMomentumScroll } from "../src/lib/momentumScroll.mjs";

function browserFixture({ fine = true, reduced = false } = {}) {
  const view = new EventTarget();
  const fineMedia = Object.assign(new EventTarget(), { matches: fine });
  const reducedMedia = Object.assign(new EventTarget(), { matches: reduced });
  const frames = new Map();
  let frameId = 0;
  let time = 0;
  class Element {
    constructor(control = false) { this.control = control; this.scrollHeight = 100; this.clientHeight = 100; }
    matches() { return this.control; }
  }
  Object.assign(view, {
    scrollY: 0, innerHeight: 800, HTMLElement: Element,
    document: { body: { dataset: {} }, documentElement: { scrollHeight: 4800 } },
    matchMedia: (query) => query.includes("reduce") ? reducedMedia : fineMedia,
    getComputedStyle: (element) => ({ overflowY: element.overflowY || "visible" }),
    requestAnimationFrame: (callback) => { frames.set(++frameId, callback); return frameId; },
    cancelAnimationFrame: (id) => frames.delete(id),
    scrollTo: ({ top }) => { view.scrollY = top; },
  });
  const cleanup = installMomentumScroll(view);
  function wheel(deltaY, properties = {}, path = []) {
    const event = new Event("wheel", { cancelable: true });
    Object.assign(event, { deltaY, deltaX: 0, deltaMode: 0, composedPath: () => path, ...properties });
    view.dispatchEvent(event);
    return event;
  }
  function frame() {
    const pending = [...frames.values()]; frames.clear(); time += 16.67;
    for (const callback of pending) callback(time);
  }
  function settle() { for (let n = 0; n < 160 && frames.size; n++) frame(); }
  return { view, fineMedia, reducedMedia, frames, Element, wheel, frame, settle, cleanup };
}

test("wheel movement eases to its destination, reverses, and clamps at page boundaries", () => {
  const f = browserFixture();
  assert.equal(f.wheel(600).defaultPrevented, true);
  f.frame(); assert.ok(f.view.scrollY > 0 && f.view.scrollY < 600);
  f.settle(); assert.ok(Math.abs(f.view.scrollY - 600) < 1);
  f.wheel(-250); f.settle(); assert.ok(Math.abs(f.view.scrollY - 350) < 1);
  f.wheel(99999); f.settle(); assert.equal(f.view.scrollY, 4000);
  f.wheel(-99999); f.settle(); assert.equal(f.view.scrollY, 0);
  f.cleanup();
});

test("touch devices, reduced motion, zoom, and nested controls keep native input", () => {
  for (const options of [{ fine: false }, { reduced: true }]) {
    const f = browserFixture(options);
    assert.equal(f.wheel(300).defaultPrevented, false); assert.equal(f.frames.size, 0); f.cleanup();
  }
  const f = browserFixture();
  const nested = Object.assign(new f.Element(), { overflowY: "auto", scrollHeight: 500 });
  for (const [properties, path] of [[{ ctrlKey: true }, []], [{ deltaX: 400 }, []], [{}, [new f.Element(true)]], [{}, [nested]]]) {
    assert.equal(f.wheel(300, properties, path).defaultPrevented, false);
  }
  f.view.document.body.dataset.intro = "active";
  assert.equal(f.wheel(300).defaultPrevented, false); f.cleanup();
});

test("keyboard, direct navigation, preference changes, and cleanup cancel pending momentum", () => {
  const f = browserFixture();
  f.wheel(500); f.frame();
  f.view.dispatchEvent(Object.assign(new Event("keydown"), { key: "End" }));
  assert.equal(f.frames.size, 0);
  f.wheel(500); f.frame(); f.view.scrollY = 1200; f.view.dispatchEvent(new Event("scroll"));
  assert.equal(f.frames.size, 0); assert.equal(f.view.scrollY, 1200);
  f.wheel(500); f.reducedMedia.matches = true; f.reducedMedia.dispatchEvent(new Event("change"));
  assert.equal(f.frames.size, 0); assert.equal(f.wheel(300).defaultPrevented, false);
  f.reducedMedia.matches = false; f.wheel(300); f.cleanup();
  assert.equal(f.frames.size, 0); assert.equal(f.wheel(300).defaultPrevented, false);
});
