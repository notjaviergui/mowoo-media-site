import { useEffect, useRef } from "react";
const clamp = (value) => Math.max(0, Math.min(1, value));
const smoothstep = (value) => value * value * (3 - 2 * value);

/** Measure on scroll; ease compositor-friendly progress in a short, finite RAF loop. */
export default function useScrollPlan() {
  const ref = useRef(null);
  useEffect(() => {
    const list = ref.current;
    if (!list) return;
    const rows = [...list.querySelectorAll("[data-plan-step]")];
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let dirty = true;
    let previousTime = 0;
    let progress = 0;
    let targetProgress = 0;
    let opacity = rows.map(() => 1);
    let targets = [...opacity];
    let disposed = false;
    function measure() {
      const listRect = list.getBoundingClientRect();
      const rowRects = rows.map((row) => row.getBoundingClientRect());
      const markers = rows.map((row) =>
        row.querySelector(".plan-marker").getBoundingClientRect(),
      );
      const first = markers[0].top + markers[0].height / 2;
      const last = markers.at(-1).top + markers.at(-1).height / 2;
      const readingLine = window.innerHeight * 0.7;
      targetProgress = motion.matches
        ? 1
        : clamp((readingLine - first) / Math.max(last - first, 1));
      targets = rowRects.map((rect) =>
        motion.matches
          ? 1
          : 0.46 +
            0.54 *
              smoothstep(
                clamp(
                  (readingLine - rect.top) / Math.min(rect.height * 0.8, 230),
                ),
              ),
      );
      list.style.setProperty("--rail-top", `${first - listRect.top}px`);
      list.style.setProperty("--rail-height", `${last - first}px`);
      rows.forEach((row, index) => {
        row.dataset.reached = String(
          readingLine >= markers[index].top || motion.matches,
        );
      });
    }
    function tick(time) {
      frame = 0;
      if (disposed) return;
      if (dirty) {
        measure();
        dirty = false;
      }
      const elapsed = previousTime ? Math.min(time - previousTime, 64) : 16;
      previousTime = time;
      const blend = motion.matches ? 1 : 1 - Math.exp(-elapsed / 95);
      progress += (targetProgress - progress) * blend;
      opacity = opacity.map(
        (value, index) => value + (targets[index] - value) * blend,
      );
      const unsettled =
        Math.abs(progress - targetProgress) > 0.0005 ||
        opacity.some(
          (value, index) => Math.abs(value - targets[index]) > 0.0005,
        );
      if (!unsettled) {
        progress = targetProgress;
        opacity = [...targets];
      }
      list.style.setProperty("--plan-progress", progress);
      rows.forEach((row, index) =>
        row.style.setProperty("--step-opacity", opacity[index]),
      );
      if (unsettled) frame = requestAnimationFrame(tick);
      else previousTime = 0;
    }
    function schedule() {
      dirty = true;
      if (!frame) frame = requestAnimationFrame(tick);
    }
    const observer = new ResizeObserver(schedule);
    observer.observe(list);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    motion.addEventListener("change", schedule);
    schedule();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", schedule);
    };
  }, []);
  return ref;
}
