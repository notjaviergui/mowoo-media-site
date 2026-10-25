export function pageTransition(pathname) {
  if (pathname === "/") return "rise";
  if (["/book-demo", "/WorkUs", "/contact"].includes(pathname)) return "round";
  if (pathname === "/services" || pathname.startsWith("/components/services/")) return "diagonal";
  if (pathname === "/pages/clients") return "curtain";
  if (["/pages/us", "/about"].includes(pathname)) return "circle";
  if (pathname === "/pages/newsletter") return "page";
  if (pathname === "/pages/join-us") return "steps";
  if (pathname === "/pages/clients-portal") return "shutter";
  return "fade";
}
