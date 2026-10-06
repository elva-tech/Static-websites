import { CircleCheck } from "lucide-react";

export default function WhyPMS() {
  return (
    <section className="why section">
      <div className="why-title">
        <p className="eyebrow">WHY ELVA PMS</p>
        <h2>One control center for your property business.</h2>
        <p>
          ELVA PMS gives your team an operational foundation that remains clear
          as projects, inventory and sales activity grow.
        </p>
      </div>
      <div className="why-list">
        {[
          "Centralized across business functions",
          "Designed for multiple projects",
          "Data-driven management visibility",
          "AI-assisted pricing control",
          "Organized property records",
          "Ready to scale with your portfolio",
        ].map((x, i) => (
          <div key={x}>
            <span>0{i + 1}</span>
            <b>{x}</b>
            <CircleCheck />
          </div>
        ))}
      </div>
    </section>
  );
}
