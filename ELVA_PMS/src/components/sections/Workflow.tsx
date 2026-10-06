import React from "react";
import { CircleCheck } from "lucide-react";

export default function Workflow() {
  const nodes = [
    "Projects",
    "Inventory",
    "Pricing",
    "Buyers",
    "Quotes",
    "Documents",
    "Payments",
    "Analytics",
  ];
  return (
    <section className="workflow section">
      <div className="section-intro">
        <p className="eyebrow">ONE CONNECTED OPERATION</p>
        <h2>
          From project launch to payment — nothing gets lost between teams.
        </h2>
      </div>
      <div className="workflow-rail">
        {nodes.map((n, i) => (
          <React.Fragment key={n}>
            <div className={"flow-node " + (i === 2 ? "active" : "")}>
              <span>0{i + 1}</span>
              <b>{n}</b>
            </div>
            {i < nodes.length - 1 && (
              <div className="flow-line">
                <i />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="workflow-note">
        <CircleCheck size={19} />
        <span>
          One property record carries its pricing, buyer interest, quote,
          documents and payment history forward.
        </span>
      </div>
    </section>
  );
}
