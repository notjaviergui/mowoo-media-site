// Move the real window so sticky elements, anchors and Motion stay synchronized.
export function installMomentumScroll(view = window) {
  const finePointer = view.matchMedia("(hover: hover) and (pointer: fine)");
  const reduced = view.matchMedia("(prefers-reduced-motion: reduce)");
  let frame = 0;
  let target = view.scrollY;
  let expected = target;
  let previousTime = 0;
  const stop = () => {
    view.cancelAnimationFrame(frame);
    frame = 0;
    target = expected = view.scrollY;
    previousTime = 0;
  };
  const maxScroll = () => Math.max(0, view.document.documentElement.scrollHeight - view.innerHeight);
  const tick = (time) => {
    const dt = previousTime ? Math.min(time - previousTime, 64) : 16.67;
    previousTime = time;
    target = Math.max(0, Math.min(target, maxScroll()));
    const distance = target - view.scrollY;
    expected = Math.abs(distance) < 0.75
      ? target
      : view.scrollY + distance * (1 - Math.exp(-dt / 110));
    view.scrollTo({ top: expected, behavior: "instant" });
    expected = view.scrollY;
    if (Math.abs(target - expected) > 0.75) frame = view.requestAnimationFrame(tick);
    else {
      view.scrollTo({ top: target, behavior: "instant" });
      expected = view.scrollY;
      frame = 0;
      previousTime = 0;
    }
  };
  const wheel = (event) => {
    if (!finePointer.matches || reduced.matches || event.defaultPrevented ||
      event.ctrlKey || event.metaKey || event.shiftKey ||
      Math.abs(event.deltaX) > Math.abs(event.deltaY) || !event.deltaY ||
      view.document.body.dataset.intro === "active") return;
    // Nested controls keep native scrolling, including an overscroll at their edges.
    for (const node of event.composedPath()) {
      if (!(node instanceof view.HTMLElement) || node === view.document.body) continue;
      if (node.matches("input, textarea, select, [contenteditable=true], [data-native-scroll]")) return;
      if (/(auto|scroll)/.test(view.getComputedStyle(node).overflowY) && node.scrollHeight > node.clientHeight) return;
    }
    event.preventDefault();
    const unit = event.deltaMode === 1 ? 32 : event.deltaMode === 2 ? view.innerHeight : 1;
    if (!frame) target = view.scrollY;
    target = Math.max(0, Math.min(maxScroll(), target + event.deltaY * unit));
    if (!frame) frame = view.requestAnimationFrame(tick);
  };
  const externalScroll = () => {
    if (frame && Math.abs(view.scrollY - expected) > 2) stop();
  };
  const key = (event) => {
    if (["Tab", "ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) stop();
  };
  view.addEventListener("wheel", wheel, { passive: false });
  view.addEventListener("scroll", externalScroll, { passive: true });
  view.addEventListener("keydown", key);
  view.addEventListener("pointerdown", stop, { passive: true });
  view.addEventListener("touchstart", stop, { passive: true });
  view.addEventListener("resize", stop);
  finePointer.addEventListener("change", stop);
  reduced.addEventListener("change", stop);
  return () => {
    stop();
    view.removeEventListener("wheel", wheel);
    view.removeEventListener("scroll", externalScroll);
    view.removeEventListener("keydown", key);
    view.removeEventListener("pointerdown", stop);
    view.removeEventListener("touchstart", stop);
    view.removeEventListener("resize", stop);
    finePointer.removeEventListener("change", stop);
    reduced.removeEventListener("change", stop);
  };
}
