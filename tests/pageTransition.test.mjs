import test from "node:test";
import assert from "node:assert/strict";
import { pageTransition } from "../src/lib/pageTransition.mjs";
test("every primary page has a distinct transition", () => {
  const routes = ["/", "/services", "/pages/clients", "/pages/us", "/book-demo", "/pages/newsletter", "/pages/join-us", "/pages/clients-portal"];
  assert.equal(new Set(routes.map(pageTransition)).size, routes.length);
});
test("route aliases retain their page transition and unknown routes remain supported", () => {
  for (const alias of ["/WorkUs", "/contact"]) assert.equal(pageTransition(alias), pageTransition("/book-demo"));
  assert.equal(pageTransition("/about"), pageTransition("/pages/us"));
  assert.equal(pageTransition("/components/services/websitessection"), pageTransition("/services"));
  assert.equal(pageTransition("/missing"), "fade");
});
import { transitionFrames, transitionShapes } from "../src/lib/pageTransition.mjs";
test("every transition shape morphs between paths with identical structure", () => {
  const shape = path => path.replace(/-?\d+(\.\d+)?/g, "#");
  for (const name of Object.keys(transitionShapes)) {
    for (const lag of [0, .22]) {
      const frames = transitionFrames(name, lag);
      assert.ok(frames.length > 4, name);
      assert.ok(frames.every(frame => shape(frame) === shape(frames[0])), `${name} frames share commands`);
      assert.ok(!frames.join(" ").includes("NaN"), `${name} has finite numbers`);
    }
  }
});
test("routes use the organic shapes and unknown routes fall back", () => {
  for (const route of ["/", "/services", "/pages/clients", "/missing"]) assert.ok(transitionShapes[pageTransition(route)]);
});
