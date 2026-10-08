import { ChevronDown } from "lucide-react";
import { useState } from "react";
export function FAQAccordion({ items }: { items: string[][] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="faq-list">
      {items.map(([q, a], i) => (
        <article key={q} className={active === i ? "active" : ""}>
          <button
            onClick={() => setActive(active === i ? -1 : i)}
            aria-expanded={active === i}
          >
            {q}
            <ChevronDown />
          </button>
          <div className="faq-panel">
            <div>
              <p>{a}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
