import { useState } from "react";
import { Brand } from "./Brand";
import { Button } from "../ui/Button";

const links = [
  ["Product", "#product"],
  ["How it works", "#how-it-works"],
  ["Features", "#features"],
  ["Paper trading", "#paper-trading"],
  ["Pricing", "#pricing"],
  ["FAQ", "#faq"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="header">
      <nav className="nav" aria-label="Main navigation">
        <Brand />
        <button
          className="menu-button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <i></i>
          <i></i>
        </button>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([label, href]) => (
            <a href={href} key={label} onClick={close}>
              {label}
            </a>
          ))}
          <Button href="#enrol" onClick={close}>
            Enrol
          </Button>
        </div>
      </nav>
    </header>
  );
}
