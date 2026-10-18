import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState, type ElementType, type ReactNode, type CSSProperties } from "react";
import logo from "@/assets/elva-logo.svg";
import { cn } from "@/lib/utils";

export const btn = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-60 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-[0_6px_20px_-8px_var(--primary)]",
        outline: "border border-input bg-card text-foreground hover:border-primary hover:text-primary",
        ghost: "text-foreground hover:bg-secondary",
        inkOutline: "border border-ink-border text-ink-foreground hover:bg-ink-2",
        light: "bg-ink-foreground text-ink hover:bg-primary-soft",
      },
      size: { sm: "h-9 px-4 text-sm", md: "h-11 px-5 text-sm", lg: "h-12 px-6 text-[0.95rem]" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);
export type BtnProps = VariantProps<typeof btn>;

export function Logo({ className, tone = "dark", full = false }: { className?: string; tone?: "dark" | "light"; full?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <img src={logo} alt="" width={32} height={32} className="size-8" />
      <span className={cn("font-display text-[1.05rem] font-semibold tracking-tight", tone === "light" ? "text-ink-foreground" : "text-foreground")}>
        {full && "ELVA "}<span className="text-primary">LMS</span>
      </span>
      <span className="sr-only">ELVA LMS by ELVA Tech</span>
    </span>
  );
}

export const NAV = [
  { id: "features", label: "Features" },
  { id: "ai", label: "AI" },
  { id: "for-institutes", label: "For Institutes" },
  { id: "for-teachers", label: "For Teachers" },
  { id: "for-students", label: "For Students" },
  { id: "for-parents", label: "For Parents" },
  { id: "assessments", label: "Assessments" },
  { id: "analytics", label: "Analytics" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
] as const;

export function Header({ home = false }: { home?: boolean }) {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    if (!home) return () => window.removeEventListener("scroll", onScroll);
    const targets = NAV.map((n) => document.getElementById(n.id)).filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    targets.forEach((t) => io.observe(t));
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [home]);

  useEffect(() => {
    const el = railRef.current?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (el && railRef.current && window.innerWidth < 1024) {
      const rail = railRef.current;
      rail.scrollTo({ left: el.offsetLeft - rail.clientWidth / 2 + el.clientWidth / 2, behavior: "smooth" });
    }
  }, [active]);

  const href = (id: string) => (home ? `#${id}` : `/#${id}`);

  return (
    <header className={cn("sticky top-0 z-50 border-b transition-colors duration-300", scrolled ? "border-border bg-background/85 backdrop-blur-xl" : "border-transparent bg-background/60 backdrop-blur")}>
      <div className="container-x flex h-16 min-w-0 items-center justify-between gap-2 sm:gap-6">
        <a href={home ? "#home" : "/"} className="min-w-0 shrink" aria-label="ELVA LMS home">
          <Logo />
        </a>
        <nav aria-label="Primary" className="hidden lg:block">
          <NavList items={NAV} active={active} href={href} />
        </nav>
        <a href={href("demo")} className={cn(btn({ size: "sm" }), "shrink-0 max-sm:px-3 max-sm:text-xs")}>
          Book a Demo
        </a>
      </div>
      <nav aria-label="Sections" className="border-t border-border lg:hidden">
        <div className="w-full min-w-0 max-w-full">
        <div ref={railRef} className="no-scrollbar container-x w-full min-w-0 max-w-full overflow-x-auto overscroll-x-contain">
          <NavList items={NAV} active={active} href={href} rail />
        </div>
        </div>
      </nav>
    </header>
  );
}

function NavList({ items, active, href, rail }: { items: typeof NAV; active: string; href: (id: string) => string; rail?: boolean }) {
  return (
    <ul className={cn("flex items-center", rail ? "gap-1 py-2" : "gap-0.5")}>
      {items.map((n) => (
        <li key={n.id} className="shrink-0">
          <a
            data-id={n.id}
            href={href(n.id)}
            aria-current={active === n.id ? "true" : undefined}
            className={cn(
              "block whitespace-nowrap rounded-full text-[0.82rem] font-medium transition-colors",
              rail ? "px-3 py-2" : "px-2 py-1.5 xl:px-3",
              active === n.id ? "bg-primary-soft text-accent-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {n.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  const product = [
    ["Features", "features"],
    ["AI", "ai"],
    ["Assessments", "assessments"],
    ["Analytics", "analytics"],
    ["Student Experience", "for-students"],
    ["Teacher Experience", "for-teachers"],
    ["Parent Experience", "for-parents"],
    ["Pricing", "pricing"],
  ] as const;
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo tone="light" full />
          <p className="mt-5 font-display text-xl leading-snug">AI-powered learning management for modern coaching institutes.</p>
          <p className="mt-3 text-sm text-ink-muted">Manage learning. Empower teachers. Understand students.</p>
        </div>
        <FooterCol title="Product">
          {product.map(([l, id]) => (
            <li key={id}><a className="hover:text-ink-foreground" href={`/#${id}`}>{l}</a></li>
          ))}
        </FooterCol>
        <FooterCol title="Company">
          <li><a className="hover:text-ink-foreground" href="https://www.elvatech.in/" target="_blank" rel="noopener noreferrer">About ELVA</a></li>
          <li><a className="hover:text-ink-foreground" href="/#contact">Contact</a></li>
          <li><a className="hover:text-ink-foreground" href="https://www.elvatech.in/" target="_blank" rel="noopener noreferrer">ELVA Tech</a></li>
        </FooterCol>
        <FooterCol title="Legal">
          <li><Link className="hover:text-ink-foreground" to="/privacy">Privacy Policy</Link></li>
          <li><Link className="hover:text-ink-foreground" to="/terms">Terms of Service</Link></li>
          <li><a className="hover:text-ink-foreground" href="/#security">Data &amp; Security</a></li>
        </FooterCol>
      </div>
      <div className="border-t border-ink-border">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-ink-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} ELVA Tech. All rights reserved.</p>
          <p>Bangalore, India</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="eyebrow text-ink-muted">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">{children}</ul>
    </div>
  );
}

/** Reveals children once when scrolled into view. Content is visible without JS/with reduced motion. */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: { children: ReactNode; className?: string; delay?: number; as?: ElementType }) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(true);
  const [animate, setAnimate] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const inViewport = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < vh * 0.92 && rect.bottom > 0;
    };

    if (inViewport()) {
      setShown(true);
      return;
    }

    setAnimate(true);
    setShown(false);

    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "120px 0px 120px 0px", threshold: 0.01 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-shown={shown}
      data-animate={animate ? "true" : undefined}
      className={cn("reveal", className)}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

export function SectionHead({ eyebrow, title, intro, tone = "light", align = "left", className }: { eyebrow: string; title: ReactNode; intro?: ReactNode; tone?: "light" | "dark"; align?: "left" | "center"; className?: string }) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p className={cn("eyebrow", tone === "dark" ? "text-chart-2" : "text-primary")}>{eyebrow}</p>
      <h2 className={cn("mt-4 text-3xl font-semibold leading-[1.08] sm:text-4xl lg:text-[2.85rem]", tone === "dark" ? "text-ink-foreground" : "text-foreground")}>{title}</h2>
      {intro && <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", tone === "dark" ? "text-ink-muted" : "text-muted-foreground")}>{intro}</p>}
    </Reveal>
  );
}

export function Illustrative({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <span className={cn("eyebrow !text-[0.62rem]", tone === "dark" ? "text-ink-muted" : "text-muted-foreground", className)}>Illustrative preview · sample data</span>
  );
}

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary">
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}
