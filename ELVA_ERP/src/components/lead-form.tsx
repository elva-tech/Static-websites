import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { FORMSUBMIT_ENDPOINT } from "@/config/formsubmit";
import { businessTypes, moduleOptions, projectCounts, employeeCounts, userCounts, timelines } from "@/content";
import { btn } from "@/components/site";
import { cn } from "@/lib/utils";

export type FormType = "contact" | "demo" | "proposal";

type Field =
  | { name: string; label: string; type: "text" | "email" | "tel"; required?: boolean; autoComplete?: string; half?: boolean }
  | { name: string; label: string; type: "select"; options: string[]; required?: boolean; half?: boolean }
  | { name: string; label: string; type: "checks"; options: string[]; required?: boolean }
  | { name: string; label: string; type: "textarea"; required?: boolean };

const common: Field[] = [
  { name: "name", label: "Full name", type: "text", required: true, autoComplete: "name", half: true },
  { name: "company", label: "Company", type: "text", required: true, autoComplete: "organization", half: true },
  { name: "email", label: "Work email", type: "email", required: true, autoComplete: "email", half: true },
];

const subjects: Record<FormType, string> = {
  contact: "New ELVA ERP Contact Enquiry",
  demo: "New ELVA ERP Demo Request",
  proposal: "New ELVA ERP Proposal Request",
};

export const formConfigs: Record<FormType, { fields: Field[]; submit: string; success: string }> = {
  contact: {
    fields: [
      ...common,
      { name: "phone", label: "Phone", type: "tel", autoComplete: "tel", half: true },
      { name: "business_type", label: "Business type", type: "select", options: businessTypes, half: true },
      { name: "subject", label: "Subject", type: "select", options: ["General enquiry", "Product question", "Partnership", "Implementation", "Other"], half: true },
      { name: "message", label: "How can we help?", type: "textarea", required: true },
    ],
    submit: "Send Message",
    success: "Thank you. Our team will review your message and get back to you.",
  },
  demo: {
    fields: [
      ...common,
      { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel", half: true },
      { name: "city", label: "City", type: "text", autoComplete: "address-level2", half: true },
      { name: "business_type", label: "Business type", type: "select", options: businessTypes, required: true, half: true },
      { name: "projects", label: "Number of projects", type: "select", options: projectCounts, half: true },
      { name: "employees", label: "Number of employees", type: "select", options: employeeCounts, half: true },
      { name: "current_software", label: "Current ERP / accounting software", type: "text" },
      { name: "modules", label: "Modules interested in", type: "checks", options: moduleOptions },
      { name: "message", label: "Anything we should know?", type: "textarea" },
    ],
    submit: "Request Demo",
    success: "Thank you. Our team will review your requirements and get in touch to schedule your ELVA ERP demo.",
  },
  proposal: {
    fields: [
      ...common,
      { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel", half: true },
      { name: "industry", label: "Industry", type: "select", options: businessTypes, required: true, half: true },
      { name: "users", label: "Number of users", type: "select", options: userCounts, half: true },
      { name: "projects", label: "Number of projects", type: "select", options: projectCounts, half: true },
      { name: "timeline", label: "Implementation timeline", type: "select", options: timelines, half: true },
      { name: "current_software", label: "Current software", type: "text" },
      { name: "modules", label: "Required modules", type: "checks", options: moduleOptions, required: true },
      { name: "message", label: "Describe your requirements", type: "textarea" },
    ],
    submit: "Request Proposal",
    success: "Thank you. Our team will review your requirements and get in touch to discuss a proposal.",
  },
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[0-9\s\-()]{7,20}$/;

export function validateLead(type: FormType, values: Record<string, string | string[]>) {
  const errors: Record<string, string> = {};
  for (const f of formConfigs[type].fields) {
    const v = values[f.name];
    const empty = Array.isArray(v) ? v.length === 0 : !v || !String(v).trim();
    if (f.required && empty) {
      errors[f.name] = f.type === "checks" ? "Select at least one option." : `${f.label} is required.`;
      continue;
    }
    if (!empty && f.type === "email" && !EMAIL_RE.test(String(v).trim())) errors[f.name] = "Enter a valid email address.";
    if (!empty && f.type === "tel" && !PHONE_RE.test(String(v).trim())) errors[f.name] = "Enter a valid phone number.";
  }
  return errors;
}

function captureSource() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const src: Record<string, string> = { page: window.location.pathname };
  ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((k) => {
    const v = params.get(k) ?? sessionStorage.getItem(k);
    if (v) src[k] = v.slice(0, 200);
  });
  const landing = sessionStorage.getItem("elva_landing");
  if (landing) src["landing"] = landing;
  if (document.referrer) src["referrer"] = document.referrer.slice(0, 300);
  return src;
}

export function LeadForm({ type }: { type: FormType }) {
  const cfg = formConfigs[type];
  const [values, setValues] = useState<Record<string, string | string[]>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const sending = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((k) => {
      const v = p.get(k);
      if (v) sessionStorage.setItem(k, v);
    });
  }, []);

  const set = (name: string, v: string | string[]) => {
    setValues((s) => ({ ...s, [name]: v }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: "" }));
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (sending.current) return;
    const errs = validateLead(type, values);
    setErrors(errs);
    const first = Object.keys(errs).find((k) => errs[k]);
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    sending.current = true;
    setStatus("sending");
    const honey = formRef.current?.querySelector<HTMLInputElement>('[name="_honey"]')?.value ?? "";
    const payload: Record<string, string> = {};
    for (const f of cfg.fields) {
      const v = values[f.name];
      const text = Array.isArray(v) ? v.join(", ") : (v ?? "").trim();
      if (text) payload[f.label] = text;
    }
    for (const [k, v] of Object.entries(captureSource())) payload[`Source: ${k}`] = v;
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...payload,
          _subject: subjects[type],
          _replyto: String(values["email"]).trim(),
          _template: "table",
          _honey: honey,
        }),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok || result.success === false || result.success === "false") throw new Error(result.message);
      setStatus("done");
    } catch {
      setStatus("error");
    } finally {
      sending.current = false;
    }
  }

  if (status === "done") {
    return (
      <div className="animate-rise rounded-2xl border border-border bg-card p-8 text-center shadow-card md:p-12" role="status">
        <CheckCircle2 className="mx-auto size-12 text-success" />
        <h2 className="mt-4 text-2xl font-semibold">Request received</h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">{cfg.success}</p>
        <Link to="/" className={cn(btn("outline", "md"), "mt-6")}>Back to home</Link>
      </div>
    );
  }

  const input = "mt-1.5 block w-full rounded-xl border border-input bg-card px-3.5 py-3 text-[0.95rem] transition-colors placeholder:text-muted-foreground focus:border-insight focus:outline-none focus:ring-2 focus:ring-ring/30";

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="rounded-2xl border border-border bg-card p-5 shadow-card sm:p-8">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="grid gap-5 sm:grid-cols-2">
        {cfg.fields.map((f) => {
          const id = `${type}-${f.name}`;
          const err = errors[f.name];
          const label = (
            <span className="text-sm font-semibold">
              {f.label} {f.required ? <span className="text-destructive" aria-hidden>*</span> : <span className="font-normal text-muted-foreground">(optional)</span>}
            </span>
          );
          const errEl = err ? <p id={`${id}-err`} className="mt-1.5 text-xs font-medium text-destructive">{err}</p> : null;
          const aria = { "aria-invalid": !!err, "aria-describedby": err ? `${id}-err` : undefined, "aria-required": f.required };
          if (f.type === "checks") {
            const arr = (values[f.name] as string[]) ?? [];
            return (
              <fieldset key={f.name} className="sm:col-span-2" aria-describedby={err ? `${id}-err` : undefined}>
                <legend>{label}</legend>
                <div className="mt-2 flex flex-wrap gap-2">
                  {f.options.map((o) => {
                    const on = arr.includes(o);
                    return (
                      <label key={o} className={cn("cursor-pointer rounded-full border px-3.5 py-2 text-sm font-medium transition-colors", on ? "border-brand bg-brand text-on-brand" : "border-input bg-card hover:border-brand")}>
                        <input type="checkbox" name={f.name} className="sr-only" checked={on} onChange={() => set(f.name, on ? arr.filter((x) => x !== o) : [...arr, o])} />
                        {o}
                      </label>
                    );
                  })}
                </div>
                {errEl}
              </fieldset>
            );
          }
          const wide = !("half" in f && f.half);
          return (
            <label key={f.name} htmlFor={id} className={cn("block", wide && "sm:col-span-2")}>
              {label}
              {f.type === "select" ? (
                <select id={id} name={f.name} className={input} value={(values[f.name] as string) ?? ""} onChange={(e) => set(f.name, e.target.value)} {...aria}>
                  <option value="">Select…</option>
                  {f.options.map((o) => <option key={o}>{o}</option>)}
                </select>
              ) : f.type === "textarea" ? (
                <textarea id={id} name={f.name} rows={4} maxLength={4000} className={input} value={(values[f.name] as string) ?? ""} onChange={(e) => set(f.name, e.target.value)} {...aria} />
              ) : (
                <input id={id} name={f.name} type={f.type} autoComplete={f.autoComplete} maxLength={f.type === "tel" ? 20 : 160} className={input} value={(values[f.name] as string) ?? ""} onChange={(e) => set(f.name, e.target.value)} {...aria} />
              )}
              {errEl}
            </label>
          );
        })}
      </div>

      {status === "error" && (
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm" role="alert">
          <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" />
          <p>We couldn't send your request. Please check your connection and try again.</p>
        </div>
      )}

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-muted-foreground">
          By submitting, you agree to our <Link to="/terms-of-service" className="font-semibold text-brand underline">Terms</Link> and acknowledge our{" "}
          <Link to="/privacy-policy" className="font-semibold text-brand underline">Privacy Policy</Link>.
        </p>
        <button type="submit" disabled={status === "sending"} className={btn("accent", "lg")}>
          {status === "sending" ? <><Loader2 className="size-4 animate-spin" /> Sending…</> : status === "error" ? "Try again" : cfg.submit}
        </button>
      </div>
    </form>
  );
}
