import { useState } from "react";
import { Link } from "react-router-dom";
import { modules } from "../../data/content";
import { ProductMockup, type ProductView } from "../ui/ProductMockup";
import { SectionHeading } from "../ui/SectionHeading";

const views: ProductView[] = [
  "projects",
  "payments",
  "materials",
  "labour",
  "drawings",
  "reports",
];

export function ModuleStage() {
  const [active, setActive] = useState(0);
  const shown = modules.slice(0, 6);

  return (
    <section className="section module-stage">
      <SectionHeading
        eyebrow="THE ELVA CMS SOLUTION"
        title="One platform. Every project."
        text="A centralized workspace for managing the construction operations that matter."
      />
      <div className="stage">
        <div className="stage-list">
          {shown.map(({ title, text }, i) => (
            <button
              key={title}
              type="button"
              className={active === i ? "on" : ""}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
            >
              <span>0{i + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </button>
          ))}
          <Link to="/modules">View modules</Link>
        </div>
        <ProductMockup view={views[active]} />
      </div>
    </section>
  );
}
