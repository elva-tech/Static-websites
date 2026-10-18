import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "@tanstack/react-router";
import { ArrowLeft, Play } from "lucide-react";
import demoSrc from "@/assets/aasthi-demo.mp4";
import demoPoster from "@/assets/aasthi-demo-poster.jpg";

const HISTORY_FLAG = "aasthiDemo";

export function WatchDemoButton({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const scrollYRef = useRef(0);
  const router = useRouter();

  const show = () => {
    scrollYRef.current = window.scrollY;
    // A history entry lets the phone/browser back gesture close the video instead of leaving the page.
    window.history.pushState({ ...(window.history.state ?? {}), [HISTORY_FLAG]: true }, "");
    setOpen(true);
  };

  const close = useCallback(() => {
    if (window.history.state?.[HISTORY_FLAG]) window.history.back();
    else setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPop = () => {
      // The router treats this popstate as a navigation and restores a scroll position cached
      // earlier in the session, so put the page back where the visitor opened the demo.
      const restore = () => window.scrollTo({ top: scrollYRef.current, behavior: "instant" });
      const unsubscribe = router.subscribe("onRendered", () => {
        unsubscribe();
        restore();
      });
      window.setTimeout(unsubscribe, 1500);
      setOpen(false);
      requestAnimationFrame(restore);
    };
    window.addEventListener("popstate", onPop);
    return () => {
      window.removeEventListener("popstate", onPop);
      triggerRef.current?.focus({ preventScroll: true });
    };
  }, [open, router]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={show}
        className={`inline-flex items-center gap-2 border border-primary/25 px-7 py-4 text-sm font-semibold text-primary transition hover:border-primary ${className}`}
      >
        <Play className="size-4 fill-current" /> Watch the Demo
      </button>
      {open && <DemoOverlay onClose={close} />}
    </>
  );
}

function DemoOverlay({ onClose }: { onClose: () => void }) {
  const backRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    backRef.current?.focus({ preventScroll: true });
    videoRef.current?.play().catch(() => {});

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Aasthi demo video"
      className="fixed inset-0 z-[100] flex flex-col bg-ink animate-in fade-in duration-300"
    >
      <div className="flex shrink-0 items-center justify-between gap-4 px-4 pb-3 pt-[max(env(safe-area-inset-top),0.75rem)] sm:px-8 sm:pb-4 sm:pt-5">
        <button
          ref={backRef}
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 border border-ink-line px-4 py-2.5 text-sm font-semibold text-ink-foreground transition hover:border-gold hover:text-gold"
        >
          <ArrowLeft className="size-4" /> Back
        </button>
        <span className="eyebrow truncate text-gold">Aasthi · Demo</span>
      </div>
      <div className="flex min-h-0 flex-1 items-center justify-center pb-[env(safe-area-inset-bottom)] [container-type:size] sm:px-8 sm:pb-8">
        <video
          ref={videoRef}
          src={demoSrc}
          poster={demoPoster}
          controls
          playsInline
          preload="auto"
          className="aspect-video h-auto w-[min(100cqw,177.78cqh,72rem)] bg-black object-contain shadow-2xl shadow-black/40 animate-in zoom-in-95 duration-300"
        >
          Your browser does not support embedded video.
        </video>
      </div>
    </div>,
    document.body,
  );
}
