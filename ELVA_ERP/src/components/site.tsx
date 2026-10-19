import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, ChevronDown, Menu, X, Check, Plus, Minus, AlertTriangle, TrendingUp, Search } from "lucide-react";
import logo from "@/assets/elva-logo.svg";
import { products, solutions, nav, site, type Faq, type Product } from "@/content";
import { cn } from "@/lib/utils";

/* ------------------------------ Buttons ------------------------------ */
const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-200 focus-visible:outline-2 disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap";
const btnVariants = {
  accent: "bg-brand-deep text-on-brand hover:bg-brand shadow-card",
  warm: "bg-accent text-accent-foreground hover:brightness-105",
  brand: "bg-brand text-on-brand hover:bg-brand-deep hover:-translate-y-0.5",
  outline: "border border-input bg-card text-foreground hover:border-brand hover:text-brand",
  ghostLight: "border border-on-brand/25 text-on-brand hover:bg-on-brand/10",
};
const btnSizes = { md: "h-11 px-5 text-sm", lg: "h-12 px-6 text-[0.95rem]", sm: "h-9 px-4 text-sm" };
export function btn(variant: keyof typeof btnVariants = "accent", size: keyof typeof btnSizes = "md") {
  return cn(btnBase, btnVariants[variant], btnSizes[size]);
}

/* ------------------------------ Logo -------------------------------- */
export function Logo({ size = 40 }: { size?: number }) {
  return (
    <img
      src={logo}
      alt="ELVA"
      width={size}
      height={size}
      className="shrink-0 rounded-lg"
      style={{ width: size, height: size }}
    />
  );
}

/* ------------------------------ Reveal ------------------------------ */
export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", visible && "is-visible", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ------------------------------ Header ------------------------------ */
type MenuKey = "product" | "solutions" | "resources" | null;

export function Header() {
  const [open, setOpen] = useState<MenuKey>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(null);
    setMobile(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobile(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const trigger = (key: Exclude<MenuKey, null>, label: string) => (
    <button
      type="button"
      aria-expanded={open === key}
      aria-haspopup="true"
      onClick={() => setOpen(open === key ? null : key)}
      onMouseEnter={() => setOpen(key)}
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition-colors",
        open === key ? "bg-secondary text-brand" : "text-foreground/80 hover:text-brand",
      )}
    >
      {label}
      <ChevronDown className={cn("size-4 transition-transform", open === key && "rotate-180")} aria-hidden />
    </button>
  );

  const groups: Product["group"][] = ["Core ERP", "Industry", "Insight"];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-card/95 backdrop-blur-md transition-shadow",
        scrolled ? "border-border shadow-card" : "border-transparent",
      )}
    >
      <div ref={wrapRef} className="container-x relative flex h-16 items-center gap-6 md:h-[72px]" onMouseLeave={() => setOpen(null)}>
        <Link to="/" className="flex items-center gap-2.5" aria-label="ELVA ERP home">
          <Logo size={38} />
          <span className="font-display text-lg font-bold tracking-tight text-brand">
            ELVA <span className="font-medium text-muted-foreground">ERP</span>
          </span>
        </Link>

        <nav className="hidden flex-1 items-center gap-1 lg:flex" aria-label="Main">
          {trigger("product", "Product")}
          {trigger("solutions", "Solutions")}
          {nav.simple.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onMouseEnter={() => setOpen(null)}
              className="rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-brand"
              activeProps={{ className: "text-brand" }}
            >
              {n.label}
            </Link>
          ))}
          {trigger("resources", "Resources")}
        </nav>

        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <Link to="/contact" className="px-3 text-sm font-semibold text-foreground/80 hover:text-brand">
            Talk to ELVA
          </Link>
          <Link to="/book-demo" className={btn("accent", "md")}>
            Book a Demo
          </Link>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex size-11 items-center justify-center rounded-full border border-input lg:hidden"
          aria-label="Open menu"
          aria-expanded={mobile}
          onClick={() => setMobile(true)}
        >
          <Menu className="size-5" />
        </button>

        {/* Mega menus */}
        {open && (
          <div className="absolute inset-x-5 top-full z-50 pt-2 md:inset-x-8">
            <div className="animate-rise overflow-hidden rounded-2xl border border-border bg-popover shadow-lift">
              {open === "product" && (
                <div className="grid gap-0 lg:grid-cols-[1fr_1fr_1fr_17rem]">
                  {groups.map((g) => (
                    <div key={g} className="p-6">
                      <p className="eyebrow mb-3">{g}</p>
                      <ul className="space-y-1">
                        {products.filter((p) => p.group === g).map((p) => (
                          <li key={p.slug}>
                            <Link to="/product/$slug" params={{ slug: p.slug }} className="group flex gap-3 rounded-xl p-2.5 transition-colors hover:bg-secondary">
                              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand group-hover:bg-brand group-hover:text-on-brand">
                                <p.icon className="size-[18px]" aria-hidden />
                              </span>
                              <span>
                                <span className="block text-sm font-semibold text-foreground">{p.name}</span>
                                <span className="block text-xs leading-snug text-muted-foreground">{p.short}</span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="bg-brand-gradient p-6 text-on-brand">
                    <p className="font-display text-lg font-semibold leading-snug">One connected platform for your entire business.</p>
                    <p className="mt-2 text-sm text-on-brand-muted">See how every module shares the same data.</p>
                    <Link to="/product" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Product overview <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              )}
              {open === "solutions" && (
                <div className="grid lg:grid-cols-[1fr_17rem]">
                  <ul className="grid gap-1 p-6 sm:grid-cols-2">
                    {solutions.map((s) => (
                      <li key={s.slug}>
                        <Link to="/solutions/$slug" params={{ slug: s.slug }} className="block rounded-xl p-3 transition-colors hover:bg-secondary">
                          <span className="block text-sm font-semibold">{s.name}</span>
                          <span className="block text-xs text-muted-foreground">{s.short}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-surface p-6">
                    <p className="eyebrow">Primary solution</p>
                    <p className="mt-2 font-display font-semibold">From Land to Handover. One System.</p>
                    <Link to="/solutions/$slug" params={{ slug: "real-estate" }} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                      Explore Real Estate ERP <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              )}
              {open === "resources" && (
                <ul className="grid gap-1 p-6 sm:grid-cols-2 lg:grid-cols-4">
                  {nav.resources.map((r) => (
                    <li key={r.to}>
                      <Link to={r.to} className="block rounded-xl p-3 transition-colors hover:bg-secondary">
                        <span className="block text-sm font-semibold">{r.label}</span>
                        <span className="block text-xs text-muted-foreground">{r.d}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile drawer — portalled to body: the header's backdrop-filter would otherwise trap this fixed overlay inside the header bar */}
      {mobile && createPortal(
        <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <button type="button" className="absolute inset-0 bg-brand-deep/50" aria-label="Close menu" onClick={() => setMobile(false)} />
          <div
            className="animate-rise absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-background shadow-lift"
            onClick={(e) => {
              if ((e.target as HTMLElement).closest("a")) setMobile(false);
            }}
          >
            <div className="flex h-16 items-center justify-between border-b border-border px-5">
              <Link to="/" className="flex items-center gap-2.5">
                <Logo size={34} />
                <span className="font-display font-bold text-brand">ELVA ERP</span>
              </Link>
              <button type="button" className="inline-flex size-11 items-center justify-center rounded-full border border-input" aria-label="Close menu" onClick={() => setMobile(false)}>
                <X className="size-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <MobileGroup title="Product">
                <MobileLink to="/product">Product overview</MobileLink>
                {products.map((p) => (
                  <Link key={p.slug} to="/product/$slug" params={{ slug: p.slug }} className="flex min-h-11 items-center rounded-lg px-3 text-[0.95rem] hover:bg-secondary">
                    {p.name}
                  </Link>
                ))}
              </MobileGroup>
              <MobileGroup title="Solutions">
                <MobileLink to="/solutions">All solutions</MobileLink>
                {solutions.map((s) => (
                  <Link key={s.slug} to="/solutions/$slug" params={{ slug: s.slug }} className="flex min-h-11 items-center rounded-lg px-3 text-[0.95rem] hover:bg-secondary">
                    {s.name}
                  </Link>
                ))}
              </MobileGroup>
              <div className="border-b border-border py-2">
                {nav.simple.map((n) => (
                  <MobileLink key={n.to} to={n.to}>{n.label}</MobileLink>
                ))}
              </div>
              <MobileGroup title="Resources">
                {nav.resources.map((r) => (
                  <MobileLink key={r.to} to={r.to}>{r.label}</MobileLink>
                ))}
              </MobileGroup>
            </div>
            <div className="grid gap-2 border-t border-border p-5">
              <Link to="/book-demo" className={btn("accent", "lg")}>Book a Demo</Link>
              <Link to="/request-proposal" className={btn("outline", "lg")}>Request a Proposal</Link>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </header>
  );
}

function MobileGroup({ title, children }: { title: string; children: ReactNode }) {
  const [o, setO] = useState(false);
  return (
    <div className="border-b border-border py-2">
      <button type="button" aria-expanded={o} onClick={() => setO(!o)} className="flex min-h-12 w-full items-center justify-between px-3 font-display font-semibold">
        {title}
        <ChevronDown className={cn("size-5 transition-transform", o && "rotate-180")} />
      </button>
      {o && <div className="pb-2">{children}</div>}
    </div>
  );
}
function MobileLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="flex min-h-12 items-center rounded-lg px-3 font-semibold hover:bg-secondary">
      {children}
    </Link>
  );
}

/* ------------------------------ Footer ------------------------------ */
export function Footer() {
  const cols: { title: string; links: { label: string; to: string; params?: { slug: string } }[] }[] = [
    { title: "Product", links: [{ label: "Overview", to: "/product" }, ...products.slice(0, 9).map((p) => ({ label: p.name, to: "/product/$slug", params: { slug: p.slug } }))] },
    { title: "Solutions", links: [{ label: "All solutions", to: "/solutions" }, ...solutions.map((s) => ({ label: s.name, to: "/solutions/$slug", params: { slug: s.slug } })), { label: "Analytics", to: "/product/$slug", params: { slug: "analytics" } }, { label: "ELVA Intelligence", to: "/product/$slug", params: { slug: "intelligence" } }] },
    { title: "Company", links: [{ label: "About ELVA", to: "/company" }, { label: "Why ELVA", to: "/why-elva" }, { label: "How It Works", to: "/how-it-works" }, { label: "Pricing", to: "/pricing" }, { label: "Contact", to: "/contact" }] },
    { title: "Resources", links: [{ label: "FAQs", to: "/faq" }, { label: "Insights", to: "/resources" }, { label: "Book a Demo", to: "/book-demo" }, { label: "Request a Proposal", to: "/request-proposal" }] },
  ];
  return (
    <footer className="bg-brand-deep text-on-brand">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2.8fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <Logo size={48} />
              <span className="font-display text-xl font-bold">ELVA ERP</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-on-brand-muted">{site.tagline}</p>
            <Link to="/book-demo" className={cn(btn("warm", "md"), "mt-6")}>
              Book a Demo <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-on-brand-muted">{c.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} params={l.params as never} className="text-sm text-on-brand/85 transition-colors hover:text-accent">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-on-brand/15 pt-6 text-xs text-on-brand-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.company}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-accent">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-accent">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------ Sections ------------------------------ */
export function SectionHeading({ eyebrow, title, text, center, light }: { eyebrow?: string; title: ReactNode; text?: ReactNode; center?: boolean; light?: boolean }) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      {eyebrow && <p className={cn("eyebrow", light && "text-accent")}>{eyebrow}</p>}
      <h2 className={cn("mt-3 text-3xl font-semibold leading-[1.12] md:text-[2.6rem]", light ? "text-on-brand" : "text-foreground")}>{title}</h2>
      {text && <p className={cn("mt-4 text-base leading-relaxed md:text-lg", light ? "text-on-brand-muted" : "text-muted-foreground")}>{text}</p>}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-xs font-semibold text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li><Link to="/" className="hover:text-brand">Home</Link></li>
        {items.map((i) => (
          <li key={i.label} className="flex items-center gap-1.5">
            <span aria-hidden>/</span>
            {i.to ? <Link to={i.to} className="hover:text-brand">{i.label}</Link> : <span className="text-foreground">{i.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({ eyebrow, title, text, crumbs, children, actions = true }: { eyebrow?: string; title: ReactNode; text?: ReactNode; crumbs?: { label: string; to?: string }[]; children?: ReactNode; actions?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className={cn("container-x relative grid gap-12 py-16 md:py-24", children && "lg:grid-cols-[1.05fr_1fr] lg:items-center")}>
        <div className="animate-rise min-w-0">
          {crumbs && <Breadcrumbs items={crumbs} />}
          {eyebrow && <p className="eyebrow font-mono">— {eyebrow} —</p>}
          <h1 className="mt-3 text-4xl font-semibold leading-[1.08] text-foreground md:text-[3.3rem]">{title}</h1>
          {text && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{text}</p>}
          {actions && (
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/book-demo" className={btn("accent", "lg")}>Book a Demo <ArrowRight className="size-4" /></Link>
              <Link to="/request-proposal" className={btn("outline", "lg")}>Request a Proposal</Link>
            </div>
          )}
        </div>
        {children && <div className="min-w-0">{children}</div>}
      </div>
    </section>
  );
}

export function CtaBand({ title = "See ELVA ERP With Your Business in Mind.", text = "A generic software demo can only show so much. Tell us how your business works, and we can demonstrate how ELVA ERP can fit your projects, teams and workflows." }: { title?: string; text?: string }) {
  return (
    <section className="section-y">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-6 py-14 text-on-brand md:px-14 md:py-16">
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden />
            <div className="relative grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
                <p className="mt-4 max-w-2xl text-on-brand-muted">{text}</p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link to="/book-demo" className={btn("warm", "lg")}>Book a Demo <ArrowRight className="size-4" /></Link>
                <Link to="/request-proposal" className={btn("ghostLight", "lg")}>Request a Proposal</Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FlowStrip({ steps, light }: { steps: string[]; light?: boolean }) {
  return (
    <ol className="flex flex-wrap items-center gap-2">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-semibold",
              light ? "border-on-brand/20 bg-on-brand/5 text-on-brand" : "border-border bg-card text-foreground shadow-card",
            )}
          >
            <span className={cn("flex size-5 items-center justify-center rounded-full text-[0.65rem] font-bold", light ? "bg-accent text-accent-foreground" : "bg-brand text-on-brand")}>
              {i + 1}
            </span>
            {s}
          </span>
          {i < steps.length - 1 && <ArrowRight className={cn("size-4 shrink-0", light ? "text-accent" : "text-insight")} aria-hidden />}
        </li>
      ))}
    </ol>
  );
}

export function CheckList({ items, cols = 2 }: { items: string[]; cols?: 1 | 2 | 3 }) {
  return (
    <ul className={cn("grid gap-x-6 gap-y-3", cols === 2 && "sm:grid-cols-2", cols === 3 && "sm:grid-cols-2 lg:grid-cols-3")}>
      {items.map((i) => (
        <li key={i} className="flex items-start gap-2.5 text-[0.95rem]">
          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-insight-soft text-insight">
            <Check className="size-3.5" strokeWidth={3} />
          </span>
          {i}
        </li>
      ))}
    </ul>
  );
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-card">
      {faqs.map((f, i) => (
        <div key={f.q}>
          <h3 className="font-sans text-base tracking-normal">
            <button
              type="button"
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-semibold md:px-6"
            >
              {f.q}
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-brand">
                {open === i ? <Minus className="size-4" /> : <Plus className="size-4" />}
              </span>
            </button>
          </h3>
          {open === i && <p className="animate-rise px-5 pb-5 leading-relaxed text-muted-foreground md:px-6">{f.a}</p>}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------ Product UI mockups ------------------------------ */
const bars = [42, 58, 51, 66, 72, 61, 78, 84, 70, 88, 92, 86];

export function DashboardMock({ title = "Portfolio command centre", metrics, compact }: { title?: string; metrics?: { label: string; value: string }[]; compact?: boolean }) {
  const kpis = metrics ?? [
    { label: "Revenue (YTD)", value: "₹62.4 Cr" },
    { label: "Collections", value: "₹48.1 Cr" },
    { label: "Receivables", value: "₹14.3 Cr" },
    { label: "Cash position", value: "₹6.40 Cr" },
  ];
  const projects = [
    { n: "Skyline Residences", p: 72, m: "18.4%", s: "On track" },
    { n: "Green Valley Plots", p: 48, m: "22.1%", s: "On track" },
    { n: "Riverside Towers", p: 61, m: "11.6%", s: "Over budget" },
  ];
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-on-brand/15 bg-card text-card-foreground shadow-lift" role="img" aria-label={`Illustrative ELVA ERP screen: ${title}`}>
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-destructive/70" />
        <span className="size-2.5 rounded-full bg-warning/80" />
        <span className="size-2.5 rounded-full bg-success/80" />
        <span className="ml-3 flex min-w-0 flex-1 items-center gap-2 rounded-md bg-card px-2.5 py-1 text-[0.7rem] text-muted-foreground">
          <Search className="size-3" /> <span className="truncate">Ask ELVA: Which projects are exceeding budget?</span>
        </span>
      </div>
      <div className="grid grid-cols-[3.25rem_1fr] sm:grid-cols-[9rem_1fr]">
        <aside className="border-r border-border bg-brand p-2 text-on-brand sm:p-3">
          <Logo size={28} />
          <ul className="mt-4 space-y-1.5 text-[0.7rem]">
            {["Dashboard", "Projects", "Sales", "Procurement", "Inventory", "Finance", "Analytics"].map((x, i) => (
              <li key={x} className={cn("flex items-center gap-2 rounded-md px-1.5 py-1.5", i === 0 ? "bg-on-brand/15" : "text-on-brand-muted")}>
                <span className={cn("size-1.5 shrink-0 rounded-full", i === 0 ? "bg-accent" : "bg-on-brand/40")} />
                <span className="hidden sm:inline">{x}</span>
              </li>
            ))}
          </ul>
        </aside>
        <div className="min-w-0 space-y-3 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <p className="truncate font-display text-sm font-semibold">{title}</p>
            <span className="hidden rounded-full bg-insight-soft px-2 py-0.5 text-[0.65rem] font-semibold text-insight sm:inline">FY 2026–27</span>
          </div>
          <div className={cn("grid gap-2", kpis.length >= 4 ? "grid-cols-2 xl:grid-cols-4" : "grid-cols-3")}>
            {kpis.map((k) => (
              <div key={k.label} className="min-w-0 rounded-lg border border-border p-2.5">
                <p className="truncate text-[0.65rem] text-muted-foreground">{k.label}</p>
                <p className="mt-0.5 truncate font-display text-sm font-semibold sm:text-base">{k.value}</p>
              </div>
            ))}
          </div>
          {!compact && (
            <div className="grid gap-3 sm:grid-cols-[1.4fr_1fr]">
              <div className="rounded-lg border border-border p-3">
                <div className="flex items-center justify-between text-[0.7rem]">
                  <span className="font-semibold">Collections vs demand</span>
                  <span className="flex items-center gap-1 text-success"><TrendingUp className="size-3" /> 12%</span>
                </div>
                <div className="mt-3 flex h-24 items-end gap-1">
                  {bars.map((b, i) => (
                    <span key={i} className={cn("animate-bar flex-1 rounded-t-sm", i % 3 === 2 ? "bg-accent" : "bg-brand/80")} style={{ height: `${b}%`, animationDelay: `${i * 50}ms` }} />
                  ))}
                </div>
              </div>
              <div className="space-y-2 rounded-lg border border-border p-3 text-[0.7rem]">
                <p className="font-semibold">Alerts</p>
                <p className="flex items-start gap-1.5"><AlertTriangle className="mt-px size-3 shrink-0 text-warning" /> Riverside Towers cost 6% over budget</p>
                <p className="flex items-start gap-1.5"><span className="animate-pulse-dot mt-1 size-1.5 shrink-0 rounded-full bg-insight" /> 14 POs awaiting approval</p>
                <p className="flex items-start gap-1.5"><span className="mt-1 size-1.5 shrink-0 rounded-full bg-destructive" /> ₹2.1 Cr overdue &gt; 60 days</p>
              </div>
            </div>
          )}
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full text-left text-[0.7rem]">
              <thead className="bg-surface text-muted-foreground">
                <tr><th className="w-full px-2.5 py-1.5 font-semibold">Project</th><th className="px-1.5 py-1.5 font-semibold sm:px-2.5">Progress</th><th className="hidden px-2.5 py-1.5 font-semibold sm:table-cell">Margin</th><th className="whitespace-nowrap py-1.5 pl-1.5 pr-2 font-semibold sm:px-2.5">Status</th></tr>
              </thead>
              <tbody>
                {projects.map((p) => (
                  <tr key={p.n} className="border-t border-border">
                    <td className="max-w-0 truncate px-2.5 py-1.5 font-medium">{p.n}</td>
                    <td className="px-1.5 py-1.5 sm:px-2.5"><span className="block h-1.5 w-8 rounded-full bg-secondary sm:w-16"><span className="block h-full rounded-full bg-insight" style={{ width: `${p.p}%` }} /></span></td>
                    <td className="hidden px-2.5 py-1.5 sm:table-cell">{p.m}</td>
                    <td className="whitespace-nowrap py-1.5 pl-1.5 pr-2 sm:px-2.5"><span className={cn("rounded-full px-1.5 py-0.5 font-semibold", p.s === "On track" ? "bg-success/15 text-success" : "bg-warning/15 text-warning")}>{p.s}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export function IllustrativeNote() {
  return <p className="mt-3 text-xs text-muted-foreground">Illustrative interface with sample data.</p>;
}
