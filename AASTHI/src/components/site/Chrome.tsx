import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How It Works" },
  { href: "#who", label: "Who It's For" },
  { href: "#about", label: "About" },
];

export function Wordmark() {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <img src="/Elva.svg" alt="" aria-hidden width={32} height={32} className="size-7 shrink-0 object-contain sm:size-8" />
      <span className="display text-xl text-primary sm:text-2xl">Aasthi</span>
    </span>
  );
}

export function Header({ home = true }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" aria-label="Aasthi home"><Wordmark /></Link>
        {home && (
          <>
            <nav className="hidden items-center gap-9 text-sm text-muted-foreground md:flex" aria-label="Main">
              {NAV.map((n) => <a key={n.href} href={n.href} className="transition hover:text-foreground">{n.label}</a>)}
            </nav>
            <div className="flex items-center gap-3">
              <a href="#early-access" className="hidden bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-accent hover:text-accent-foreground sm:inline-block">
                Get Early Access
              </a>
              <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
                {open ? <X /> : <Menu />}
              </button>
            </div>
          </>
        )}
      </div>
      {home && open && (
        <nav className="border-t border-border px-6 py-4 md:hidden" aria-label="Mobile">
          {[...NAV, { href: "#early-access", label: "Get Early Access" }].map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-3 text-lg">{n.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-muted">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <span className="flex items-center gap-3">
            <img src="/Elva.svg" alt="" aria-hidden width={40} height={40} className="size-9 shrink-0 object-contain sm:size-10" />
            <span className="display text-3xl text-ink-foreground">Aasthi</span>
          </span>
          <p className="mt-2 text-sm">Know Before You Buy.</p>
        </div>
        <div className="flex items-center gap-3">
          <img src="/Elva.svg" alt="ELVA Technologies logo" width={40} height={40} className="size-9 shrink-0 object-contain sm:size-10" />
          <a href="https://www.elvatech.in" target="_blank" rel="noopener noreferrer" className="text-sm text-ink-foreground hover:text-gold">
            A product by ELVA Technologies ↗
          </a>
        </div>
        <div className="flex gap-6 text-sm md:justify-end">
          <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-gold">Terms of Use</Link>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-ink-line px-6 py-6 text-xs leading-relaxed">
        <p>
          Aasthi is under development. Information on this site describes planned capabilities and is not legal, financial or investment advice.
          Always verify property records independently and consult qualified professionals.
        </p>
        <p className="mt-3">© {new Date().getFullYear()} ELVA Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
}
