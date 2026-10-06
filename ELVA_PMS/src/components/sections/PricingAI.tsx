import { useState } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { scrollTo } from "../../lib/scroll";

export default function PricingAI() {
  const [reviewed, setReviewed] = useState(false);
  return (
    <section id="ai-pricing" className="ai section">
      <div className="ai-copy">
        <p className="eyebrow">AI-ASSISTED PRICING</p>
        <h2>Intelligence for better property pricing.</h2>
        <p className="lead">
          Use AI to inform an internal pricing decision — while keeping the
          administrator fully in control.
        </p>
        <div className="ai-rule">
          <Sparkles size={19} />
          <span>
            <b>AI suggests.</b> The administrator decides.
          </span>
        </div>
        <button className="text-button" onClick={() => scrollTo("contact")}>
          Explore AI pricing <ArrowRight size={17} />
        </button>
      </div>
      <div className="ai-card">
        <div className="ai-card-head">
          <span>
            <Sparkles size={16} /> ELVA Pricing assistant
          </span>
          <i>DEMO DATA</i>
        </div>
        <div className="ai-property">
          <b>Plot 51</b>
          <span>Green Valley Layout</span>
          <p>30 × 50 · 1,500 sq.ft</p>
          <div>
            <em>East facing</em>
            <em>Corner site</em>
          </div>
        </div>
        <div className="predict">
          <span>AI suggested range</span>
          <strong>₹ 41.8L — ₹ 43.5L</strong>
          <small>Based on property and project inputs</small>
        </div>
        <div className={"review " + (reviewed ? "reviewed" : "")}>
          <div>
            <span>Administrator review</span>
            <b>{reviewed ? "₹ 43.2L" : "Awaiting approval"}</b>
          </div>
          <button onClick={() => setReviewed(true)}>
            {reviewed ? (
              <>
                <Check size={14} /> Final price confirmed
              </>
            ) : (
              "Approve ₹ 43.2L"
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
