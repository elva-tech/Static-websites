import { useState } from "react";
import { ArrowRight, CircleCheck, Mail, MapPin, ShieldCheck } from "lucide-react";
import type { PmsPlan } from "../../App";
import { FORMSUBMIT_ENDPOINT, PMS_FORM_URL } from "../../config/formsubmit";

export default function Contact({ plan }: { plan: PmsPlan | null }) {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submission, setSubmission] = useState<Record<string, string> | null>(
    null,
  );
 const submit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const d = new FormData(form);
  const err: Record<string, string> = {};

  const required = [
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

  required.forEach((key) => {
    if (!String(d.get(key) || "").trim()) {
      err[key] = "Required";
    }
  });

  const name = String(d.get("name") || "").trim();

  if (name && (name.length < 2 || !/[a-zA-Z]/.test(name))) {
    err.name = "Enter a valid name";
  }

  const email = String(d.get("email") || "").trim();

  if (
    email &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
  ) {
    err.email = "Enter a valid work email";
  }

  const phone = String(d.get("phone") || "").trim();
  const phoneDigits = phone.replace(/\D/g, "");

  if (phone && !/^\d{10}$/.test(phoneDigits)) {
    err.phone = "Enter a valid 10-digit mobile number";
  } else if (phone && !/^[6-9]\d{9}$/.test(phoneDigits)) {
    err.phone = "Enter a valid Indian mobile number";
  }

  setErrors(err);

  if (Object.keys(err).length) {
    return;
  }

  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${FORMSUBMIT_ENDPOINT}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: d.get("name"),
          company: d.get("company"),
          email: d.get("email"),
          phone: phoneDigits,
          city: d.get("city"),
          projects: d.get("projects"),
          inventory: d.get("inventory"),
          property: d.get("property"),
          system: d.get("system"),
          message: d.get("message"),
          plan: plan ?? "General enquiry",

          _subject: `New ELVA PMS Demo Request${plan ? ` - ${plan}` : ""}`,
          _replyto: email,
          _template: "table",
          _captcha: "true",
          _url: PMS_FORM_URL,
        }),
      },
    );

    if (!response.ok) {
      throw new Error("Submission failed");
    }

    const data: Record<string, string> = {};

    d.forEach((value, key) => {
      data[key] = String(value);
    });

    if (plan) {
      data.plan = plan;
    }

    setSubmission(data);
    setErrors({});
    setSent(true);
    form.reset();
  } catch {
    setErrors({
      form: "Unable to submit your request right now. Please try again.",
    });
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
  Your request has been sent successfully. Our team will get in touch with you shortly.
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
        {errors.form && (
  <p className="form-error" role="alert">
    {errors.form}
  </p>
)}
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
  Your details are securely sent to the ELVA team.
</small>
      </form>
    </section>
  );
}
