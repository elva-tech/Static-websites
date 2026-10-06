import { useState } from "react";
import { ArrowRight, CircleCheck, Mail, MapPin, ShieldCheck } from "lucide-react";
import type { PmsPlan } from "../../App";

export default function Contact({ plan }: { plan: PmsPlan | null }) {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submission, setSubmission] = useState<Record<string, string> | null>(
    null,
  );
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    let err: Record<string, string> = {};
    const req = [
      "name",
      "company",
      "email",
      "phone",
      "city",
      "projects",
      "inventory",
      "property",
      "system",
    ];
    req.forEach((k) => {
      if (!String(d.get(k) || "").trim()) err[k] = "Required";
    });
    if (
      d.get("email") &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(d.get("email")))
    )
      err.email = "Enter a valid work email";
    if (
      d.get("phone") &&
      !/^(?:\+91[\s-]?)?[6-9]\d{9}$/.test(
        String(d.get("phone")).replace(/\s/g, ""),
      )
    )
      err.phone = "Enter a valid Indian mobile number";
    setErrors(err);
    if (!Object.keys(err).length) {
      const data: Record<string, string> = {};
      d.forEach((value, key) => {
        data[key] = String(value);
      });
      if (plan) data.plan = plan;
      setSubmission(data);
      setSent(true);
    }
  };
  if (sent)
    return (
      <section
        id="contact"
        className="contact success"
        data-plan={submission?.plan}
      >
        <CircleCheck size={42} />
        <p className="eyebrow">DEMO REQUEST SAVED</p>
        <h2>Thank you for contacting ELVA.</h2>
        <p>Our team will get in touch with you shortly.</p>
        <small>
          This is a frontend demonstration; no information has been transmitted.
        </small>
        <button className="outline" onClick={() => setSent(false)}>
          Submit another request
        </button>
      </section>
    );
  const field = (
    name: string,
    label: string,
    type = "text",
    opts?: string[],
  ) => (
    <label>
      {label}
      {opts ? (
        <select name={name} defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          {opts.map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
      ) : (
        <input name={name} type={type} aria-invalid={!!errors[name]} />
      )}
      {errors[name] && <i>{errors[name]}</i>}
    </label>
  );
  return (
    <section id="contact" className="contact">
      <div className="contact-copy">
        <p className="eyebrow">BOOK A DEMO</p>
        <h2>Let’s digitize your property operations.</h2>
        <p>
          Tell us how you currently manage projects, inventory, buyers,
          documents and payments. We’ll show you how ELVA PMS can fit your
          workflow.
        </p>
        <div className="contact-points">
          <span>
            <ShieldCheck /> Built for real-estate developer operations
          </span>
          <span>
            <MapPin /> Bengaluru, India
          </span>
          <span>
            <Mail /> hello@elvatech.in
          </span>
        </div>
      </div>
      <form noValidate onSubmit={submit}>
        {plan && (
          <label>
            Selected plan
            <input name="plan" value={plan} readOnly />
          </label>
        )}
        <div className="form-grid">
          {field("name", "Name")}
          {field("company", "Company name")}
          {field("email", "Work email", "email")}
          {field("phone", "Phone number", "tel")}
          {field("city", "City")}
          {field("projects", "Number of projects", "text", [
            "1",
            "2–5",
            "6–10",
            "More than 10",
          ])}
          {field("inventory", "Approximate inventory size", "text", [
            "Under 100",
            "100–500",
            "500–1,000",
            "Over 1,000",
          ])}
          {field("property", "Property type", "text", [
            "Residential plots",
            "Apartments",
            "Villas",
            "Commercial",
            "Mixed",
          ])}
          {field("system", "Current system", "text", [
            "Spreadsheets",
            "WhatsApp + manual records",
            "Existing software",
            "Other",
          ])}
        </div>
        <label>
          Message <textarea name="message" rows={3} />
        </label>
        <button className="primary full">
          Request a demo <ArrowRight size={17} />
        </button>
        <small className="demo-note">
          Demo form only — submission is not transmitted.
        </small>
      </form>
    </section>
  );
}
