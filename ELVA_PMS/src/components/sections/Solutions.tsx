import { ArrowRight } from "lucide-react";

export default function Solutions() {
  return (
    <section id="solutions" className="solutions section">
      <div className="section-intro">
        <p className="eyebrow">BUILT FOR YOUR MODEL</p>
        <h2>One platform. Multiple real-estate models.</h2>
      </div>
      <div className="solution-cards">
        {[
          [
            "Residential plots",
            "Manage layouts, plot inventory, pricing, buyers and payments.",
          ],
          [
            "Apartments",
            "Coordinate unit inventory, pricing, buyers and collections.",
          ],
          [
            "Villas",
            "Keep villa records, customer information and sales operations connected.",
          ],
          [
            "Commercial properties",
            "Manage commercial units and property-specific sales information.",
          ],
        ].map((x, i) => (
          <article key={x[0]}>
            <b>0{i + 1}</b>
            <h3>{x[0]}</h3>
            <p>{x[1]}</p>
            <ArrowRight size={19} />
          </article>
        ))}
      </div>
    </section>
  );
}
