
import { useEffect } from "react";

/**
 * Elegant scroll reveals with a visible-content fallback.
 * Content remains visible unless the animation system initializes successfully.
 */
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (
      reducedMotion.matches ||
      !("IntersectionObserver" in window)
    ) {
      root.classList.remove("reveal-ready");
      return;
    }

    const selector =
      "main section:not(:first-child) :is(h2, h3, .eyebrow, p, ol > li, ul > li, .grid > *, form, details)";

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(selector),
    ).filter(
      (element) =>
        !element.parentElement?.closest("[data-reveal]"),
    );

    if (!elements.length) return;

    // Prepare elements before enabling reveal styles.
    elements.forEach((element) => {
      const siblings = element.parentElement
        ? Array.from(element.parentElement.children)
        : [];

      const index = Math.max(siblings.indexOf(element), 0);

      element.setAttribute("data-reveal", "");
      element.style.setProperty(
        "--reveal-delay",
        `${Math.min(index, 4) * 85}ms`,
      );

      if (
        element.parentElement?.classList.contains("grid") &&
        !element.querySelector("form")
      ) {
        element.classList.add("reveal-card");
      }

      // Never hide content that is already in the viewport.
      const rect = element.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        element.classList.add("is-in");
      }
    });

    let observer: IntersectionObserver;

    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add("is-in");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -35px 0px",
        },
      );

      elements.forEach((element) => {
        if (!element.classList.contains("is-in")) {
          observer.observe(element);
        }
      });
    } catch {
      elements.forEach((element) =>
        element.classList.add("is-in"),
      );
      return;
    }

    // Enable hiding/revealing only after successful initialization.
    root.classList.add("reveal-ready");

    let frame = 0;

    const revealVisible = () => {
      if (frame) return;

      frame = requestAnimationFrame(() => {
        frame = 0;

        elements.forEach((element) => {
          if (element.classList.contains("is-in")) return;

          const rect = element.getBoundingClientRect();

          if (
            rect.top < window.innerHeight - 20 &&
            rect.bottom > 0
          ) {
            element.classList.add("is-in");
            observer.unobserve(element);
          }
        });
      });
    };

    window.addEventListener("scroll", revealVisible, {
      passive: true,
    });
    window.addEventListener("resize", revealVisible);

    revealVisible();

    const handleMotionChange = () => {
      if (reducedMotion.matches) {
        root.classList.remove("reveal-ready");
        elements.forEach((element) =>
          element.classList.add("is-in"),
        );
        observer.disconnect();
      }
    };

    reducedMotion.addEventListener("change", handleMotionChange);

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
      window.removeEventListener("scroll", revealVisible);
      window.removeEventListener("resize", revealVisible);
      reducedMotion.removeEventListener(
        "change",
        handleMotionChange,
      );

      if (frame) cancelAnimationFrame(frame);

      elements.forEach((element) => {
        element.removeAttribute("data-reveal");
        element.classList.remove("is-in", "reveal-card");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, []);
}
