import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import elvaLogo from "../../assets/Elva.svg";
import { scrollTo } from "../../lib/scroll";

const nav = [
  "Product",
  "Features",
  "AI Pricing",
  "How it works",
  "Pricing",
  "Contact",
];
const links = [
  "product",
  "features",
  "ai-pricing",
  "how",
  "pricing",
  "contact",
];

export default function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <header id="top">
      <a className="logo" href="#top" aria-label="ELVA PMS home">
        <img src={elvaLogo} alt="ELVA" />
        <b>PMS</b>
      </a>
      <nav className={menu ? "shown" : ""}>
        {nav.map((x, i) => (
          <button
            key={x}
            onClick={() => {
              scrollTo(links[i]);
              setMenu(false);
            }}
          >
            {x}
          </button>
        ))}
      </nav>
      <button className="nav-cta" onClick={() => scrollTo("contact")}>
        Book a demo <ArrowRight size={15} />
      </button>
      <button
        className="menu"
        aria-label="Open menu"
        onClick={() => setMenu(!menu)}
      >
        {menu ? <X /> : <Menu />}
      </button>
    </header>
  );
}
