import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const links = [
  ["Platform", "#platform"],
  ["Invest", "#invest"],
  ["Borrow", "#borrow"],
  ["Security", "#security"],
  ["FAQ", "#faq"],
];
export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-wrap">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="ELVA Investa home">
          <img src="/brand/elva.svg" alt="ELVA" />
          <span>INVESTA</span>
        </a>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="button nav-cta"
            href="#demo"
            onClick={() => setOpen(false)}
          >
            Request a demo <ArrowUpRight size={15} />
          </a>
        </div>
        <button
          className="menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}
