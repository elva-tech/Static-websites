import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Check, Loader2 } from "lucide-react";
import { leadSchema, ROLES } from "@/lib/lead-schema";
import { FORMSUBMIT_ENDPOINT } from "@/config/formsubmit";

type Status = "idle" | "loading" | "success" | "error";
const fieldCls =
  "w-full border-0 border-b border-ink-line bg-transparent px-0 py-3 text-ink-foreground placeholder:text-ink-muted/60 focus:border-gold focus:outline-none focus:ring-0";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    const fd = new FormData(e.currentTarget);
    const raw = {
      fullName: String(fd.get("fullName") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      role: String(fd.get("role") ?? ""),
      city: String(fd.get("city") ?? ""),
      consent: fd.get("consent") === "on",
      website: String(fd.get("website") ?? ""),
    };
    const parsed = leadSchema.safeParse(raw);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[String(issue.path[0])] ??= issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");
    const v = parsed.data;
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          "Full name": v.fullName,
          Email: v.email,
          Mobile: v.phone,
          City: v.city,
          "I am a": v.role,
          Consent: "Agreed to be contacted about Aasthi updates",
          _subject: "New Aasthi Early Access Request",
          _replyto: v.email,
          _template: "table",
          _honey: v.website ?? "",
        }),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok || result.success === false || result.success === "false") throw new Error(result.message);
      setMessage("Thank you. You're on the early-access list.");
      setStatus("success");
    } catch {
      setMessage("Something went wrong. Please try again in a moment.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="flex items-start gap-4 border border-ink-line p-8">
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gold text-ink">
          <Check className="size-5" />
        </span>
        <div>
          <p className="display text-3xl text-ink-foreground">{message}</p>
          <p className="mt-2 text-sm text-ink-muted">We'll share product updates and early-access opportunities by email.</p>
        </div>
      </div>
    );
  }

  const err = (k: string) =>
    errors[k] ? <p className="mt-1 text-xs text-gold" role="alert">{errors[k]}</p> : null;

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <label className="block">
        <span className="eyebrow text-ink-muted">Full name</span>
        <input name="fullName" autoComplete="name" className={fieldCls} placeholder="Your name" />
        {err("fullName")}
      </label>
      <label className="block">
        <span className="eyebrow text-ink-muted">Email</span>
        <input name="email" type="email" autoComplete="email" className={fieldCls} placeholder="you@example.com" />
        {err("email")}
      </label>
      <label className="block">
        <span className="eyebrow text-ink-muted">Mobile</span>
        <input name="phone" type="tel" autoComplete="tel" defaultValue="+91 " className={fieldCls} />
        {err("phone")}
      </label>
      <label className="block">
        <span className="eyebrow text-ink-muted">City</span>
        <input name="city" autoComplete="address-level2" className={fieldCls} placeholder="Bengaluru" />
        {err("city")}
      </label>
      <label className="block sm:col-span-2">
        <span className="eyebrow text-ink-muted">I am a</span>
        <select name="role" defaultValue="" className={`${fieldCls} [&>option]:bg-ink`}>
          <option value="" disabled>Select one</option>
          {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
        {err("role")}
      </label>
      <label className="flex items-start gap-3 text-sm text-ink-muted sm:col-span-2">
        <input name="consent" type="checkbox" className="mt-1 size-4 accent-gold" />
        <span>
          I agree that ELVA Technologies may use this information to contact me about Aasthi updates and early access, as described in the{" "}
          <Link to="/privacy" className="text-ink-foreground underline underline-offset-4">Privacy Policy</Link>.
          {err("consent")}
        </span>
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 bg-gold px-8 py-4 text-sm font-semibold text-ink transition hover:bg-ink-foreground disabled:opacity-60"
        >
          {status === "loading" && <Loader2 className="size-4 animate-spin" />}
          {status === "loading" ? "Submitting…" : "Request early access"}
        </button>
        {status === "error" && <p role="alert" className="text-sm text-gold">{message}</p>}
      </div>
    </form>
  );
}
