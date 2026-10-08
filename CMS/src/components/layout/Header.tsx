import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "../ui/Button";
import { scrollToTop } from "./ScrollToTop";

const nav = [
  ["Home", "/"],
  ["Features", "/features"],
  ["Modules", "/modules"],
  ["How It Works", "/how-it-works"],
  ["User Roles", "/roles"],
  ["Use Cases", "/use-cases"],
  ["About ELVA", "/about"],
  ["Contact", "/contact"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const closeAndScroll = (href: string) => {
    setOpen(false);
    if (pathname === href) scrollToTop();
  };
  return (
    <header className="header">
      <div className="nav-wrap">
        <Link
          className="brand"
          to="/"
          aria-label="ELVA CMS home"
          onClick={() => closeAndScroll("/")}
        >
          <img src="/elva.svg" alt="ELVA" />
          <span>
            <b>CMS</b>
            <small>Construction Management System</small>
          </span>
        </Link>
        <nav
          className={open ? "nav open" : "nav"}
          aria-label="Primary navigation"
        >
          {nav.map(([label, href]) => (
            <NavLink key={href} to={href} onClick={() => closeAndScroll(href)}>
              {label}
            </NavLink>
          ))}
          <Button to="/contact" className="mobile-cta">
            Request a Demo
          </Button>
        </nav>
        <Button to="/contact" className="header-demo">
          Request a Demo
        </Button>
        <Button to="/contact" className="desktop-cta">
          Request a Demo
        </Button>
        <button
          className="menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
