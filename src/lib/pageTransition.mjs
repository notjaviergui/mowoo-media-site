// Organic page reveals: a liquid lime layer and a dark layer peel away from the new page.
// Shapes are generated as SVG path keyframes (viewBox 0 0 100 100) with identical
// command structure, so Motion can morph between them.

export function pageTransition(pathname) {
  if (pathname === "/") return "tide";
  if (["/book-demo", "/WorkUs", "/contact"].includes(pathname)) return "bloom";
  if (pathname === "/services" || pathname.startsWith("/components/services/")) return "wave";
  if (pathname === "/pages/clients") return "melt";
  if (["/pages/us", "/about"].includes(pathname)) return "bubble";
  if (pathname === "/pages/newsletter") return "swell";
  if (pathname === "/pages/join-us") return "fizz";
  if (pathname === "/pages/clients-portal") return "pebble";
  return "fade";
}

export const transitionShapes = {
  tide: { kind: "edge", direction: "up", drips: .14, wobble: 10, seed: 1 },
  melt: { kind: "edge", direction: "down", drips: .34, wobble: 6, seed: 2 },
  wave: { kind: "edge", direction: "left", drips: .1, wobble: 13, seed: 3 },
  swell: { kind: "edge", direction: "right", drips: .2, wobble: 9, seed: 4 },
  fizz: { kind: "edge", direction: "up", drips: .42, wobble: 4, seed: 5 },
  bloom: { kind: "blob", cx: 88, cy: 92, seed: 6 },
  bubble: { kind: "blob", cx: 50, cy: 52, seed: 7 },
  pebble: { kind: "blob", cx: 8, cy: 10, seed: 8 },
  fade: { kind: "blob", cx: 50, cy: 50, seed: 9 },
};

const FRAMES = 14;
const easeInOut = t => (t < .5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const clamp = t => Math.min(1, Math.max(0, t));
const lerp = (a, b, t) => a + (b - a) * t;
const n = value => Number(value.toFixed(2));

function seeded(seed) {
  let t = seed * 9973;
  return () => {
    t = (t * 16807) % 2147483647;
    return (t % 10000) / 10000;
  };
}

// Catmull-Rom spline through points as cubic Bézier segments.
function spline(points, closed) {
  const at = index => closed ? points[(index + points.length) % points.length] : points[Math.max(0, Math.min(points.length - 1, index))];
  const segments = [];
  const count = closed ? points.length : points.length - 1;
  for (let i = 0; i < count; i += 1) {
    const p0 = at(i - 1), p1 = at(i), p2 = at(i + 1), p3 = at(i + 2);
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    segments.push(`C${n(c1[0])} ${n(c1[1])} ${n(c2[0])} ${n(c2[1])} ${n(p2[0])} ${n(p2[1])}`);
  }
  return segments.join(" ");
}

// A liquid edge sweeping across the screen; columns lag each other to form drips and swells.
function edgeFrames({ direction, drips, wobble, seed }, lag) {
  const random = seeded(seed);
  const columns = 9;
  const delays = Array.from({ length: columns }, () => random() * drips);
  const phases = Array.from({ length: columns }, () => random() * Math.PI * 2);
  const coversStart = direction === "up" || direction === "left";
  const frames = [];
  for (let f = 0; f < FRAMES; f += 1) {
    const t = clamp(f / (FRAMES - 1) * (1 + lag) - lag);
    const edge = delays.map((delay, i) => {
      const local = easeInOut(clamp((t - delay) / (1 - drips)));
      const base = coversStart ? lerp(118, -22, local) : lerp(-22, 118, local);
      const bulge = Math.sin(Math.PI * local) * wobble * Math.sin(phases[i] + t * 5);
      return [100 - (i / (columns - 1)) * 100, base + bulge];
    });
    const anchor = coversStart ? 0 : 100;
    let corners = [[0, anchor], [100, anchor]];
    let points = edge;
    if (direction === "left" || direction === "right") {
      corners = corners.map(([a, b]) => [b, a]);
      points = points.map(([a, b]) => [b, a]);
    }
    const start = points[0];
    frames.push(`M${n(corners[0][0])} ${n(corners[0][1])} L${n(corners[1][0])} ${n(corners[1][1])} L${n(start[0])} ${n(start[1])} ${spline(points, false)} Z`);
  }
  return frames;
}

// A wobbling blob that shrinks into a point on the screen.
function blobFrames({ cx, cy, seed }, lag) {
  const random = seeded(seed);
  const count = 10;
  const phases = Array.from({ length: 3 }, () => random() * Math.PI * 2);
  const frames = [];
  for (let f = 0; f < FRAMES; f += 1) {
    const t = clamp(f / (FRAMES - 1) * (1 + lag) - lag);
    const radius = lerp(170, 0, easeInOut(t));
    const points = Array.from({ length: count }, (_, k) => {
      const angle = (k / count) * Math.PI * 2;
      const wobble = 1 + .14 * Math.sin(3 * angle + phases[0] + t * 6) + .08 * Math.sin(5 * angle + phases[1] - t * 4) + .05 * Math.sin(2 * angle + phases[2]);
      return [cx + Math.cos(angle) * radius * wobble, cy + Math.sin(angle) * radius * wobble];
    });
    frames.push(`M${n(points[0][0])} ${n(points[0][1])} ${spline(points, true)} Z`);
  }
  return frames;
}

// `lag` (0..1) delays a trailing layer so the two colours separate into a ribbon.
export function transitionFrames(name, lag = 0) {
  const shape = transitionShapes[name] ?? transitionShapes.fade;
  return shape.kind === "edge" ? edgeFrames(shape, lag) : blobFrames(shape, lag);
}
