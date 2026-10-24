import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { installMomentumScroll } from "../lib/momentumScroll.mjs";

export default function MomentumScroll() {
  const { pathname, hash } = useLocation();
  useEffect(() => installMomentumScroll(), [pathname, hash]);
  return null;
}
