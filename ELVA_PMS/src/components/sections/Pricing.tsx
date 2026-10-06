import { ArrowRight, Check } from "lucide-react";
import type { PmsPlan } from "../../App";
import { scrollTo } from "../../lib/scroll";

export default function Pricing({
  onSelectPlan,
}: {
  onSelectPlan: (plan: PmsPlan) => void;
}) {
  return (
    <section id="pricing" className="pricing section">
      <div className="section-intro center">
        <p className="eyebrow">FLEXIBLE SETUPS</p>
        <h2>Plans that fit your business.</h2>
        <p>
          Every real-estate company works differently. Tell us about your
          projects, inventory and team, and we’ll recommend the right ELVA PMS
          setup.
        </p>
      </div>
      <div className="price-grid">
        {[
          [
            "Starter",
            "For developers managing a smaller property portfolio.",
            ["Project management", "Inventory management", "Buyer operations"],
          ],
          [
            "Business",
            "For multiple projects and larger inventories.",
            [
              "Everything in Starter",
              "Documents & payments",
              "Management analytics",
            ],
          ],
          [
            "Enterprise",
            "For organizations needing customized workflows and deployment requirements.",
            [
              "Everything in Business",
              "Custom workflows",
              "Dedicated consultation",
            ],
          ],
        ].map((x, i) => (
          <article className={i === 1 ? "recommended" : ""} key={x[0] as string}>
            {i === 1 && <em>Most popular</em>}
            <h3>{x[0]}</h3>
            <p>{x[1]}</p>
            <b>{i === 2 ? "Contact sales" : "Talk to us for pricing"}</b>
            <ul>
              {(x[2] as string[]).map((v) => (
                <li key={v}>
                  <Check size={15} />
                  {v}
                </li>
              ))}
            </ul>
            <button
              className={i === 1 ? "primary" : "secondary"}
              onClick={() => {
                onSelectPlan(x[0] as PmsPlan);
                scrollTo("contact");
              }}
            >
              {i === 2 ? "Contact sales" : "Get custom pricing"}{" "}
              <ArrowRight size={15} />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
