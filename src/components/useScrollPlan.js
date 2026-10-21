import { useEffect, useRef } from "react";
const clamp = (value) => Math.max(0, Math.min(1, value));
const smoothstep = (value) => value * value * (3 - 2 * value);

/** Measure on scroll; ease compositor-friendly progress in a short, finite RAF loop. */
export default function useScrollPlan() {
  const ref = useRef(null);
  useEffect(() => {
    const list = ref.current;
    if (!list) return;
    const plan = list.closest(".growth-plan");
    const rows = [...list.querySelectorAll("[data-plan-step]")];
    const layers = [...plan.querySelectorAll("[data-cake-layer]")];
    const bullets = [...list.querySelectorAll("[data-plan-reveal]")];
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let dirty = true;
    let previousTime = 0;
    let progress = 0;
    let targetProgress = 0;
    let opacity = rows.map(() => 0.46);
    let targets = [...opacity];
    let bulletOpacity = bullets.map(() => 0);
    let bulletTargets = [...bulletOpacity];
    let disposed = false;
    const bodies = layers.map(() => ({
      y: -130,
      velocity: 0,
      active: false,
      landed: false,
      wanted: false,
      squash: 0,
    }));
    function measure() {
      const listRect = list.getBoundingClientRect();
      const rowRects = rows.map((row) => row.getBoundingClientRect());
      const markers = rows.map((row) =>
        row.querySelector(".plan-marker").getBoundingClientRect(),
      );
      const first = markers[0].top + markers[0].height / 2;
      const last = markers.at(-1).top + markers.at(-1).height / 2;
      const readingLine = window.innerHeight * (layers.length ? 0.84 : 0.7);
      bulletTargets = bullets.map((bullet) =>
        motion.matches
          ? 1
          : smoothstep(
              clamp((readingLine - bullet.getBoundingClientRect().top) / 100),
            ),
      );
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
      bodies.forEach((body, index) => {
        body.wanted = motion.matches || readingLine >= markers[index].top + 35;
      });
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
      bulletOpacity = bulletOpacity.map(
        (value, index) => value + (bulletTargets[index] - value) * blend,
      );
      let physicsMoving = false;
      const dt = Math.min(elapsed / 1000, 0.032);
      bodies.forEach((body, index) => {
        if (!body.wanted) {
          Object.assign(body, {
            y: -130,
            velocity: 0,
            active: false,
            landed: false,
            squash: 0,
          });
        } else if (motion.matches) {
          Object.assign(body, {
            y: 0,
            velocity: 0,
            active: true,
            landed: true,
            squash: 0,
          });
        } else {
          if (!body.active && (index === 0 || bodies[index - 1].landed))
            body.active = true;
          if (body.active && !body.landed) {
            body.velocity += 1900 * dt;
            body.y += body.velocity * dt;
            if (body.y >= 0) {
              body.y = 0;
              body.squash = Math.min(body.velocity / 7500, 0.065);
              if (body.velocity < 70) {
                body.velocity = 0;
                body.landed = true;
              } else body.velocity *= -0.22;
            }
          }
          body.squash *= Math.exp(-dt * 18);
          if (!body.landed || body.squash > 0.0005) physicsMoving = true;
        }
        layers[index].style.setProperty("--drop-y", `${body.y}px`);
        layers[index].style.setProperty("--drop-visible", body.active ? 1 : 0);
        layers[index].style.setProperty("--drop-squash", 1 - body.squash);
      });
      const unsettled =
        physicsMoving ||
        bulletOpacity.some(
          (value, index) => Math.abs(value - bulletTargets[index]) > 0.0005,
        ) ||
        Math.abs(progress - targetProgress) > 0.0005 ||
        opacity.some(
          (value, index) => Math.abs(value - targets[index]) > 0.0005,
        );
      if (!unsettled) {
        progress = targetProgress;
        opacity = [...targets];
        bulletOpacity = [...bulletTargets];
      }
      list.style.setProperty("--plan-progress", progress);
      plan.style.setProperty("--plan-progress", progress);
      rows.forEach((row, index) =>
        row.style.setProperty("--step-opacity", opacity[index]),
      );
      bullets.forEach((bullet, index) =>
        bullet.style.setProperty("--bullet-reveal", bulletOpacity[index]),
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
