import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    "Add your projects",
    "Add inventory",
    "Configure property details",
    "Determine pricing",
    "Set final price",
    "Capture interested buyers",
    "Share quote",
    "Manage documents",
    "Record payments",
    "Monitor business",
  ];
  const [active, setActive] = useState(0);
  return (
    <section id="how" className="how section">
      <div className="how-copy">
        <p className="eyebrow">HOW IT WORKS</p>
        <h2>Simple to understand. Powerful to operate.</h2>
        <p>
          ELVA PMS fits the natural rhythm of your property business — from
          creating a project to monitoring the result.
        </p>
      </div>
      <div className="steps">
        {steps.map((s, i) => (
          <button
            key={s}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            className={active === i ? "current" : ""}
          >
            <span>0{i + 1}</span>
            <b>{s}</b>
            <ChevronRight size={16} />
          </button>
        ))}
      </div>
      <div className="step-display">
        <p>STEP {String(active + 1).padStart(2, "0")}</p>
        <h3>{steps[active]}</h3>
        <span>
          {
            [
              "Create and organize every venture in a central workspace.",
              "Build a dependable view of every plot, unit or apartment.",
              "Store the facts your commercial team needs in one place.",
              "Use your own strategy supported by AI-informed suggestions.",
              "Keep the final selling price under administrator control.",
              "Capture the people interested in specific properties.",
              "Send a clear, property-specific commercial quote.",
              "Keep supporting documents with the right property and buyer.",
              "Maintain payment records, receipts and collection status.",
              "See inventory, sales and collections with management clarity.",
            ][active]
          }
        </span>
        <div className="step-progress">
          <i style={{ width: `${(active + 1) * 10}%` }} />
        </div>
      </div>
    </section>
  );
}
