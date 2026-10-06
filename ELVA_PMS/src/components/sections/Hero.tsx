import { ArrowRight, Check, CircleCheck, Sparkles } from "lucide-react";
import Dashboard from "../product/Dashboard";
import { scrollTo } from "../../lib/scroll";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <i /> PROPERTY MANAGEMENT SOFTWARE
          </p>
          <h1>
            Run your entire <em>real-estate business</em> from one platform.
          </h1>
          <p className="hero-lead">
            ELVA PMS helps real-estate developers manage projects, plots,
            apartments, pricing, buyers, documents, payments and analytics from
            one centralized system.
          </p>
          <div className="hero-actions">
            <button className="primary" onClick={() => scrollTo("contact")}>
              Book a demo <ArrowRight size={17} />
            </button>
            <button className="secondary" onClick={() => scrollTo("pricing")}>
              Get pricing
            </button>
          </div>
          <p className="hero-trust">
            <CircleCheck size={15} /> Built for developers managing multiple
            projects and growing portfolios.
          </p>
        </div>
        <div className="hero-visual">
          <div className="grid-glow" />
          <Dashboard />
          <div className="float-card float-inv">
            <span>INVENTORY</span>
            <b>
              426 <i>units</i>
            </b>
            <small>
              <i /> 238 available
            </small>
          </div>
          <div className="float-card float-price">
            <Sparkles size={15} />
            <span>AI price insight ready</span>
            <b>Plot 51</b>
          </div>
        </div>
      </section>
      <div className="value-strip">
        {[
          "Multi-project management",
          "Structured inventory",
          "AI-assisted pricing",
          "Buyer operations",
          "Documents & payments",
          "Management analytics",
        ].map((x) => (
          <span key={x}>
            <Check size={15} />
            {x}
          </span>
        ))}
      </div>
    </>
  );
}
