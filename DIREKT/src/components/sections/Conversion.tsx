import { FormEvent, useEffect, useState } from "react";
import { faqs } from "../../data/content";
import {
  Button,
  openEnrolment,
  readEnrolmentState,
  scrollToEnrolment,
  type PlanName,
} from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";

export function Audience() {
  const audiences = [
    "Traders",
    "Algorithmic traders",
    "Quant developers",
    "AI & trading enthusiasts",
  ];
  return (
    <section className="section audience">
      <SectionHeading
        eyebrow="11 / WHO IT’S FOR"
        title={
          <>
            Built for <i>systematic traders.</i>
          </>
        }
      >
        For people who want a systematic and automated approach to market
        monitoring.
      </SectionHeading>
      <div className="audience-grid">
        {audiences.map((audience, i) => (
          <article key={audience}>
            <span>0{i + 1}</span>
            <h3>{audience}</h3>
            <p>
              {i === 0
                ? "A structured approach to market monitoring."
                : i === 1
                  ? "Interested in automated trading strategies."
                  : i === 2
                    ? "Building and experimenting with quantitative strategies."
                    : "Exploring AI and financial-market technology."}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function DifferenceAndPerformance() {
  return (
    <section className="section difference">
      <div>
        <p className="eyebrow">12 / THE DIFFERENCE</p>
        <h2>
          More than a<br />
          <i>trading dashboard.</i>
        </h2>
        <p>
          Direkt is designed around the complete trading loop, bringing market
          intelligence, decision-making, execution and monitoring together in
          one workflow.
        </p>
      </div>
      <div className="loop">
        <span>OBSERVE</span>
        <i>↓</i>
        <span>ANALYZE</span>
        <i>↓</i>
        <span>DECIDE</span>
        <i>↓</i>
        <span>RISK CHECK</span>
        <i>↓</i>
        <span>EXECUTE</span>
        <i>↓</i>
        <span>MONITOR</span>
        <i>↓</i>
        <span>EXIT</span>
      </div>
      <div className="performance-note">
        <span>PERFORMANCE</span>
        <h3>
          Measure the strategy.
          <br />
          Don’t just watch it.
        </h3>
        <p>
          Performance analytics are published only when they are verified, fully
          contextualized and clearly labeled as simulated or live.
        </p>
      </div>
    </section>
  );
}

const plans = [
  [
    "Direkt Paper",
    "For users who want to explore Direkt through simulated trading.",
    "₹X / month",
    "Start paper trading",
  ],
  [
    "Direkt Pro",
    "For users who want advanced functionality.",
    "₹X / month",
    "Enrol in Direkt Pro",
  ],
  [
    "Enterprise",
    "For teams requiring custom integrations or infrastructure.",
    "Talk to us",
    "Contact Direkt",
  ],
] as const;

export function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <SectionHeading
        eyebrow="13 / PRICING"
        title={
          <>
            Choose your <i>starting point.</i>
          </>
        }
      >
        Pricing is finalized with the available product features and payment
        flow.
      </SectionHeading>
      <div className="pricing-grid">
        {plans.map(([name, description, price, action], i) => (
          <article className={i === 1 ? "featured" : ""} key={name}>
            {i === 1 && <span className="recommended">POPULAR PATH</span>}
            <h3>{name}</h3>
            <p>{description}</p>
            <strong>{price}</strong>
            <a
              href={`?plan=${encodeURIComponent(name)}${name === "Direkt Paper" ? "&paper=1" : ""}#enrol`}
              onClick={(event) => {
                event.preventDefault();
                openEnrolment({
                  plan: name,
                  paper: name === "Direkt Paper",
                });
              }}
            >
              {action} <span>↗</span>
            </a>
          </article>
        ))}
      </div>
      <p className="pricing-note">
        Payment integration is added when the commercial offering is finalized.
      </p>
    </section>
  );
}

export function Enrolment() {
  const initial = readEnrolmentState();
  const [submitted, setSubmitted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanName | null>(
    initial.selectedPlan,
  );
  const [paperInterest, setPaperInterest] = useState(initial.paperInterest);

  useEffect(() => {
    const syncPlan = () => {
      const next = readEnrolmentState();
      setSelectedPlan(next.selectedPlan);
      setPaperInterest(next.paperInterest);
      if (window.location.hash === "#enrol") {
        window.setTimeout(() => scrollToEnrolment(), 0);
      }
    };
    window.addEventListener("popstate", syncPlan);
    window.addEventListener("direkt-enrol", syncPlan);
    if (window.location.hash === "#enrol") {
      window.setTimeout(() => scrollToEnrolment(), 0);
    }
    return () => {
      window.removeEventListener("popstate", syncPlan);
      window.removeEventListener("direkt-enrol", syncPlan);
    };
  }, []);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section enrolment" id="enrol">
      <div>
        <p className="eyebrow">14 / ENROLMENT</p>
        <h2>
          Start with
          <br />
          <i>Direkt.</i>
        </h2>
        <p>
          Create your Direkt account and get access to the trading platform.
        </p>
        <ol>
          <li>Enrol</li>
          <li>Create account</li>
          <li>Complete profile</li>
          <li>Select plan</li>
          <li>Account activation</li>
        </ol>
      </div>
      <form id="enrol-form" onSubmit={submit}>
        <h3>Enrol in Direkt</h3>
        {selectedPlan && (
          <div className="selected-plan" id="selected-plan" aria-live="polite">
            <span>SELECTED PLAN</span>
            <strong>{selectedPlan}</strong>
          </div>
        )}
        <input type="hidden" name="plan" value={selectedPlan ?? ""} />
        <div className="form-grid">
          <label>
            Full name
            <input required name="name" autoComplete="name" />
          </label>
          <label>
            Email
            <input required type="email" name="email" autoComplete="email" />
          </label>
          <label>
            Mobile number
            <input required type="tel" name="phone" autoComplete="tel" />
          </label>
          <label>
            Country
            <select required name="country" defaultValue="">
              <option value="" disabled>
                Select country
              </option>
              <option>India</option>
              <option>United Kingdom</option>
              <option>United States</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            Trading experience
            <select required name="experience" defaultValue="">
              <option value="" disabled>
                Select experience
              </option>
              <option>New to trading</option>
              <option>Some experience</option>
              <option>Experienced</option>
            </select>
          </label>
          <label>
            Preferred market
            <select required name="market" defaultValue="">
              <option value="" disabled>
                Select market
              </option>
              <option>Silver futures</option>
              <option>Other futures</option>
            </select>
          </label>
        </div>
        <label className="checkbox">
          <input
            type="checkbox"
            name="paper"
            value="yes"
            checked={paperInterest}
            onChange={(event) => setPaperInterest(event.target.checked)}
          />{" "}
          I’m interested in paper trading
        </label>
        <button type="submit" className="form-submit">
          {submitted ? "Interest received — thank you" : "Enrol now"}{" "}
          <span>↗</span>
        </button>
        <small>
          By enrolling, you acknowledge the <a href="#risk">risk disclosure</a>.
          No payment is collected here.
        </small>
      </form>
    </section>
  );
}

export function Faq() {
  return (
    <section className="section faq" id="faq">
      <SectionHeading
        eyebrow="15 / FAQ"
        title={
          <>
            Clear answers,
            <br />
            <i>before you start.</i>
          </>
        }
      />
      <div className="faq-list">
        {faqs.map(([question, answer]) => (
          <details key={question}>
            <summary>
              {question}
              <span>+</span>
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function TrustAndRisk() {
  return (
    <>
      <section className="section trust">
        <div>
          <p className="eyebrow">16 / TRUST & SECURITY</p>
          <h2>
            Built with
            <br />
            <i>security in mind.</i>
          </h2>
        </div>
        <div className="trust-grid">
          {[
            "Secure authentication",
            "Encrypted communication",
            "Access controls",
            "Account protection",
          ].map((item) => (
            <p key={item}>
              <i>✓</i>
              {item}
            </p>
          ))}
          <small>
            Security measures are communicated as they are available. No
            certifications or regulatory approvals are implied.
          </small>
        </div>
      </section>
      <section className="section risk" id="risk">
        <p className="eyebrow">RISK DISCLOSURE</p>
        <h2>
          Trading involves
          <br />
          substantial <i>risk.</i>
        </h2>
        <div>
          <p>
            Trading futures and other financial instruments may not be suitable
            for all investors. You can lose money, potentially including a
            substantial portion of your trading capital.
          </p>
          <p>
            AI-generated analysis and trading decisions can be incorrect,
            including during unusual market conditions, data interruptions,
            technical failures or unexpected events.
          </p>
          <p>
            Past performance, backtested results, hypothetical results and
            simulated trading results do not guarantee future results. Users are
            responsible for understanding the risks and determining whether a
            product or strategy is appropriate.
          </p>
          <small>
            Final legal and regulatory language should be reviewed by qualified
            counsel before launch.
          </small>
        </div>
      </section>
      <section className="final-cta">
        <p className="eyebrow">DIREKT / READY WHEN YOU ARE</p>
        <h2>
          Ready to experience
          <br />
          <i>AI-powered trading?</i>
        </h2>
        <p>
          Explore a systematic approach to real-time market analysis, trading
          decisions and automated position management.
        </p>
        <div>
          <Button href="#enrol">Enrol in Direkt</Button>
          <Button href="#how-it-works" tone="quiet">
            See how it works
          </Button>
        </div>
      </section>
    </>
  );
}
