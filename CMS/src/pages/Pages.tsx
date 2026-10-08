import { modules, steps, useCases } from "../data/content";
import { Button } from "../components/ui/Button";
import {
  ProductMockup,
  type ProductView,
} from "../components/ui/ProductMockup";
import { useState } from "react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { FORMSUBMIT_ENDPOINT } from "../config/formsubmit";

function Intro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}
export function Features() {
  return (
    <>
      <Intro
        eyebrow="ELVA CMS FEATURES"
        title="Everything you need to manage construction operations."
        text="Project-based visibility for the financial and operational details that keep work moving."
      />
      <section className="section module-grid full">
        {modules.map(({ title, text, icon: Icon }, i) => (
          <article className="module-card" key={title}>
            <span className="module-number">0{i + 1}</span>
            <Icon />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>
      <CTA />
    </>
  );
}
export function ModulesPage() {
  return (
    <>
      <Intro
        eyebrow="ELVA CMS MODULES"
        title="Connected project operations, module by module."
        text="Maintain the records that help construction companies understand each project."
      />
      <section className="section module-list">
        {modules.map(({ title, text, icon: Icon }, i) => (
          <article key={title} className={i % 2 ? "flip" : ""}>
            <span>0{i + 1}</span>
            <Icon />
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
              <ul>
                <li>Project-level organization</li>
                <li>Structured operational records</li>
                <li>Clearer visibility when needed</li>
              </ul>
            </div>
            <ProductMockup compact view={moduleViews[i]} />
          </article>
        ))}
      </section>
      <CTA />
    </>
  );
}
export function HowItWorksPage() {
  return (
    <>
      <Intro
        eyebrow="HOW IT WORKS"
        title="A practical path to a clearer project workspace."
        text="Set up your company, add projects and manage day-to-day construction operations from one place."
      />
      <section className="section workflow">
        <div className="steps page-steps">
          {steps.map((x, i) => (
            <article key={x}>
              <span>0{i + 1}</span>
              <h3>{x}</h3>
              <p>
                {i === 3
                  ? "Add client, address, budget, contractor and rates."
                  : i === 4
                    ? "Track payments, materials, labour, drawings and daily reports."
                    : "Build the information structure your projects need."}
              </p>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
export function UseCases() {
  return (
    <>
      <Intro
        eyebrow="USE CASES"
        title="Designed around project-based construction operations."
        text="ELVA CMS helps companies organize multiple construction projects from a centralized system."
      />
      <section className="section usecase-cards">
        {useCases.map((x, i) => (
          <article key={x}>
            <span>0{i + 1}</span>
            <h2>{x}</h2>
            <p>
              Maintain project-level information, payments, materials, labour
              and drawings in a structured workspace.
            </p>
          </article>
        ))}
      </section>
      <CTA />
    </>
  );
}
export function Roles() {
  return (
    <>
      <Intro
        eyebrow="USER ROLES"
        title="The right information for every project role."
        text="Access is organized according to the user’s role and project assignment."
      />
      <section className="section role-pages">
        {(
          [
            [
              "Admin / Construction Company",
              "Full project and operational management",
              "Projects, project users, payments, materials, labour, drawings, reports and overall project monitoring.",
              "projects",
            ],
            [
              "Supervisor",
              "Site and project operations",
              "Daily reports, general information, materials, drawings, labour bills, labour payments and project communication.",
              "supervisor",
            ],
            [
              "Client",
              "Relevant project visibility",
              "Payment plans, payment status, installment details, drawings and drawing status.",
              "client",
            ],
          ] as [string, string, string, ProductView][]
        ).map(([h, sub, text, view], i) => (
          <article key={h}>
            <div>
              <span>0{i + 1}</span>
              <h2>{h}</h2>
              <h3>{sub}</h3>
              <p>{text}</p>
            </div>
            <ProductMockup compact view={view} />
          </article>
        ))}
      </section>
      <CTA />
    </>
  );
}
export function About() {
  return (
    <>
      <Intro
        eyebrow="ABOUT ELVA CMS"
        title="A centralized construction management system."
        text="ELVA CMS helps construction companies manage multiple projects and their day-to-day operations."
      />
      <section className="section about">
        <div>
          <h2>One platform to manage every construction project.</h2>
          <p>
            Construction teams handle clients, payments, materials, labour,
            drawings, expenses and site operations every day. ELVA CMS brings
            these workflows into a structured project-based platform.
          </p>
          <Button to="/contact">Request a Demo</Button>
        </div>
        <ProductMockup compact />
      </section>
      <CTA />
    </>
  );
}
export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    projects: "1–5",
    city: "",
    message: "",
  });

  const [honey, setHoney] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "success" | "error" | "cooldown" | null
  >(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honey.trim()) return;

    const sentAt = Number(localStorage.getItem("elva-cms-demo-sent-at") || 0);
    const cooldownLeft = 30000 - (Date.now() - sentAt);
    if (sentAt && cooldownLeft > 0) {
      setSubmitStatus("cooldown");
      return;
    }

    setSubmitStatus(null);
    setSubmitting(true);

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${FORMSUBMIT_ENDPOINT}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            company: formData.company.trim(),
            phone: formData.phone.trim(),
            email: formData.email.trim(),
            projects: formData.projects,
            city: formData.city.trim(),
            message: formData.message.trim(),
            _subject: "New ELVA CMS Demo Request",
            _template: "table",
            _url: window.location.href,
            _honey: honey,
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem("elva-cms-demo-sent-at", String(Date.now()));
        setSubmitStatus("success");
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          projects: "1–5",
          city: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Intro
        eyebrow="REQUEST A DEMO"
        title="See ELVA CMS in action."
        text="Tell us about your construction business and our team will help you understand how ELVA CMS can fit into your project operations."
      />

      <section className="section contact">
        <form onSubmit={handleSubmit} noValidate>
          {submitStatus === "success" && (
            <p className="form-status form-status--success" role="status">
              Thank you! Your demo request has been sent. Our team will get
              back to you shortly.
            </p>
          )}

          {submitStatus === "error" && (
            <p className="form-status form-status--error" role="alert">
              Something went wrong. Please try again or contact ELVA directly.
            </p>
          )}

          {submitStatus === "cooldown" && (
            <p className="form-status form-status--error" role="status">
              Please wait 30 seconds before sending another demo request.
            </p>
          )}

          <label className="form-honey" aria-hidden="true">
            Leave this field empty
            <input
              tabIndex={-1}
              autoComplete="off"
              name="_honey"
              value={honey}
              onChange={(event) => setHoney(event.target.value)}
            />
          </label>

          <div className="form-grid">
            <label>
              Name
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
              />
            </label>

            <label>
              Company Name
              <input
                required
                name="company"
                value={formData.company}
                onChange={handleChange}
                autoComplete="organization"
              />
            </label>

            <label>
              Phone Number
              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
                inputMode="numeric"
              />
            </label>

            <label>
              Email
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </label>

            <label>
              Number of Projects
              <select
                name="projects"
                value={formData.projects}
                onChange={handleChange}
              >
                <option>1–5</option>
                <option>6–15</option>
                <option>16–30</option>
                <option>30+</option>
              </select>
            </label>

            <label>
              City
              <input
                required
                name="city"
                value={formData.city}
                onChange={handleChange}
                autoComplete="address-level2"
              />
            </label>
          </div>

          <label>
            Message
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
            />
          </label>

          <button
            className="form-submit"
            type="submit"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Request Demo"}
          </button>
        </form>

        <aside>
          <p className="eyebrow">TALK TO ELVA</p>
          <h2>A better view of every project starts here.</h2>
          <p>
            We&apos;ll help you understand how ELVA CMS fits into your
            construction operations.
          </p>
        </aside>
      </section>
    </>
  );
}


const moduleViews: ProductView[] = [
  "projects",
  "payments",
  "materials",
  "labour",
  "drawings",
  "reports",
  "access",
  "analytics",
];

function CTA() {
  return (
    <section className="final-cta compact-cta">
      <div>
        <p className="eyebrow">ELVA CMS</p>
        <h2>Bring your construction operations into one platform.</h2>
        <Button to="/contact">Request a Demo</Button>
      </div>
    </section>
  );
}
