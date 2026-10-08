import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function scrollToTop() {
  const reduce = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const y = window.scrollY;
  if (y < 2) return;
  if (reduce) {
    window.scrollTo(0, 0);
    return;
  }

  const previous = document.body.style.minHeight;
  document.body.style.minHeight = `${y + window.innerHeight}px`;
  const clear = () => {
    document.body.style.minHeight = previous;
  };
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  window.addEventListener("scrollend", clear, { once: true });
  window.setTimeout(clear, 700);
}

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return null;
}
