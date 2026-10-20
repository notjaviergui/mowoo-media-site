import { useEffect, useRef } from "react";

const clamp = (value) => Math.max(0, Math.min(1, value));

/** Update only local CSS properties, once per animation frame. */
export default function useScrollPlan() {
  const ref = useRef(null);
  useEffect(() => {
    const list = ref.current;
    if (!list) return;
    const rows = [...list.querySelectorAll("[data-plan-step]")];
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const listRect = list.getBoundingClientRect();
      const rowRects = rows.map((row) => row.getBoundingClientRect());
      const markerRects = rows.map((row) =>
        row.querySelector(".plan-marker").getBoundingClientRect(),
      );
      const first = markerRects[0].top + markerRects[0].height / 2;
      const last = markerRects.at(-1).top + markerRects.at(-1).height / 2;
      const readingLine = window.innerHeight * 0.7;
      const fill = motion.matches
        ? 1
        : clamp((readingLine - first) / Math.max(last - first, 1));
      const reveals = rowRects.map((rect) =>
        motion.matches
          ? 1
          : clamp((readingLine - rect.top) / Math.min(rect.height * 0.65, 180)),
      );
      list.style.setProperty("--rail-top", `${first - listRect.top}px`);
      list.style.setProperty("--rail-height", `${last - first}px`);
      list.style.setProperty("--plan-progress", fill);
      rows.forEach((row, index) => {
        row.style.setProperty("--step-opacity", 0.38 + reveals[index] * 0.62);
        row.dataset.reached = String(
          readingLine >= markerRects[index].top || motion.matches,
        );
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(list);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    motion.addEventListener("change", schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", schedule);
    };
  }, []);
  return ref;
}
