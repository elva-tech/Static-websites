import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { faqs, steps, useCases } from "../data/content";
import { Showcases } from "../components/sections/Showcases";
import { Button } from "../components/ui/Button";
import { FAQAccordion } from "../components/ui/FAQAccordion";
import { ProductMockup } from "../components/ui/ProductMockup";

const stepNotes = [
  "Create a structured foundation for your project operations.",
  "Create a structured foundation for your project operations.",
  "Create a structured foundation for your project operations.",
  "Create a structured foundation for your project operations.",
  "Track payments, materials, labour, drawings and daily reports.",
  "Use dashboards and reports to understand project information.",
];

export function Home() {
  const [step, setStep] = useState(0);

  return (
    <>
      <section className="hero">
        <div className="hero-headline">
          <p className="eyebrow">
            ELVA CMS <span></span> Construction Management System
          </p>
          <h1>
            Construction
            <br />
            Management,
            <br />
            <em>Simplified.</em>
          </h1>
        </div>
        <div className="hero-stage">
          <div className="hero-side">
            <p className="hero-text">
              Manage projects, payments, materials, labour, drawings and daily
              construction operations from one centralized platform.
            </p>
            <div className="hero-actions">
              <Button to="/contact">Request a Demo</Button>
              <Button to="/features" variant="secondary">
                Explore ELVA CMS
              </Button>
            </div>
            <p className="hero-note">
              <Check size={16} /> Built around project-level operations
            </p>
          </div>
          <div className="hero-stack">
            <ProductMockup view="projects" compact className="screen-back" />
            <ProductMockup className="screen-front" />
          </div>
        </div>
        <div className="hero-rail" aria-label="Operations covered">
          {[
            "Projects",
            "Payments",
            "Materials",
            "Labour",
            "Drawings",
            "Daily reports",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="ops">
        <div className="ops-mark">01 — Project operations</div>
        <div className="ops-copy">
          <h2>Construction projects have too many moving parts.</h2>
          <p>
            When project records live across spreadsheets, WhatsApp messages,
            paper notes and disconnected files, it is difficult to understand
            the actual status of a project.
          </p>
        </div>
        <div className="ops-index">
          {[
            "Client payments",
            "Budgets",
            "Materials",
            "Labour",
            "Drawings",
            "Daily expenses",
            "Site activities",
            "Project records",
          ].map((item, i) => (
            <span key={item}>
              <small>0{i + 1}</small>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="board">
        <div className="board-copy">
          <p className="eyebrow">Project visibility</p>
          <h2>Know what is happening across your projects.</h2>
          <p>
            Turn project data into a clear operational view for faster
            decision-making.
          </p>
          <ul>
            {[
              "Project budgets and spending",
              "Payments received and expected",
              "Current balance and balance to be paid",
              "Payment activity at a glance",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="board-frame">
          <ProductMockup />
        </div>
      </section>

      <Showcases />

      <section className="roles-band">
        <div className="roles-head">
          <p className="eyebrow">Role-based experience</p>
          <h2>Give every person the right view.</h2>
          <p>
            Company teams, supervisors and clients see project information
            appropriate to their role.
          </p>
          <Button to="/roles" variant="secondary">
            Explore user roles
          </Button>
        </div>
        <div className="role-panels">
          <article>
            <ProductMockup view="access" compact />
            <div>
              <small>01</small>
              <h3>Construction company</h3>
              <p>
                Manage projects, payments, materials, labour, drawings and
                overall monitoring.
              </p>
            </div>
          </article>
          <article>
            <ProductMockup view="supervisor" compact />
            <div>
              <small>02</small>
              <h3>Supervisor</h3>
              <p>
                Focus on day-to-day reports, materials, drawings and labour
                records.
              </p>
            </div>
          </article>
          <article>
            <ProductMockup view="client" compact />
            <div>
              <small>03</small>
              <h3>Client</h3>
              <p>View payment plans, status and project drawings.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="sites">
        <div className="sites-line">
          <b>Company workspace</b>
          {["Project 01", "Project 02", "Project 03", "Project 04", "Project 05"].map(
            (name) => (
              <span key={name}>
                {name}
                <small>Project operations</small>
              </span>
            ),
          )}
        </div>
        <div className="sites-copy">
          <h2>Built for construction companies managing multiple projects.</h2>
          <p>
            Whether you are managing a few houses or multiple construction
            sites, each project keeps its own operational information.
          </p>
          <Button to="/how-it-works" variant="secondary">
            See how it works
          </Button>
        </div>
      </section>

      <section className="spec">
        <p className="eyebrow">Why ELVA CMS</p>
        <h2>A clearer way to run project operations.</h2>
        <div>
          {[
            ["Manage more projects", "Keep multiple projects organized in one platform."],
            ["Reduce manual tracking", "Bring project records into a structured digital system."],
            ["Improve visibility", "Know the financial and operational status of each project."],
            ["Keep teams connected", "Provide role-specific access for your team and clients."],
          ].map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="track">
        <div className="track-copy">
          <p className="eyebrow">How ELVA CMS works</p>
          <h2>From company workspace to project visibility.</h2>
          <p key={step}>{stepNotes[step]}</p>
        </div>
        <div className="track-line">
          {steps.map((label, i) => (
            <button
              key={label}
              type="button"
              className={step === i ? "on" : ""}
              onClick={() => setStep(i)}
            >
              <span>0{i + 1}</span>
              {label}
            </button>
          ))}
        </div>
      </section>

      <section className="usecases">
        <h2>For the ways construction teams operate.</h2>
        <div>
          {useCases.map((item, i) => (
            <Link to="/use-cases" key={item}>
              <span>0{i + 1}</span>
              {item}
              <ArrowUpRight />
            </Link>
          ))}
        </div>
      </section>

      <section className="faq">
        <h2>Questions, answered.</h2>
        <FAQAccordion items={faqs} />
      </section>

      <section className="final-cta">
        <div>
          <p className="eyebrow">ELVA CMS</p>
          <h2>Bring your construction operations into one platform.</h2>
          <p>
            Stop managing critical project information across disconnected
            systems.
          </p>
        </div>
        <div className="final-actions">
          <Button to="/contact">Request a Demo</Button>
          <Button to="/contact" variant="secondary">
            Talk to ELVA
          </Button>
        </div>
      </section>
    </>
  );
}
