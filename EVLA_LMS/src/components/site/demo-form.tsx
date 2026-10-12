
import { useState, type FormEvent, type ReactNode } from "react";
import { FORMSUBMIT_ENDPOINT } from "@/config/formsubmit";
import { CheckCircle2, Loader2, MessageCircle, Phone } from "lucide-react";
import { z } from "zod";
import { btn } from "./site";
import { cn } from "@/lib/utils";

const PHONE_NUMBER = "919611149957";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  institute: z
    .string()
    .trim()
    .min(2, "Please enter your institute name")
    .max(150),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address")
    .max(200),
  city: z.string().trim().min(2, "Please enter your city").max(80),
  students: z.string().min(1, "Select a range"),
  branches: z.string().min(1, "Select a range"),
  coachingType: z.string().min(1, "Select a type"),
  requirements: z.string().trim().max(1500).optional(),
  contactTime: z.string().optional(),
});

type FormData = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormData, string>>;

const fieldCls =
  "mt-1.5 h-11 w-full rounded-lg border border-input bg-card px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20 aria-[invalid=true]:border-destructive";

export function DemoForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (state === "sending") return;

    const form = e.currentTarget;
    const raw = Object.fromEntries(
      new FormData(form),
    ) as Record<string, string>;

    const parsed = schema.safeParse(raw);

    if (!parsed.success) {
      const next: Errors = {};

      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormData;
        next[key] ??= issue.message;
      });

      setErrors(next);

      const first = form.querySelector<HTMLElement>(
        `[name="${Object.keys(next)[0]}"]`,
      );

      first?.focus();
      return;
    }

    setErrors({});
    setState("sending");

    const v = parsed.data;

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...v,
          _subject: "New ELVA LMS Enquiry",
          _template: "table",
        }),
      });

      const result = await response.json();

      if (
        !response.ok ||
        result.success === false ||
        result.success === "false"
      ) {
        throw new Error(
          result.message || "Unable to submit your enquiry.",
        );
      }

      setState("success");
    } catch (error) {
      console.error("ELVA LMS form submission failed:", error);
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-border bg-card p-8 shadow-card animate-fade"
      >
        <CheckCircle2 className="size-8 text-primary" />

        <h3 className="mt-4 text-2xl font-semibold">
          Your enquiry has been submitted!
        </h3>

        <p className="mt-2 text-muted-foreground">
          Thank you for your interest in ELVA LMS. Our team will contact you
          using the details you provided.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className={btn({ variant: "outline" })}
            href={`tel:+${PHONE_NUMBER}`}
          >
            <Phone className="size-4" />
            +91-96111 49957
          </a>

          <button
            type="button"
            className={btn({ variant: "ghost" })}
            onClick={() => setState("idle")}
          >
            Submit another enquiry
          </button>
        </div>
      </div>
    );
  }

  const a = (name: keyof FormData) => ({
    id: `f-${name}`,
    name,
    "aria-invalid": !!errors[name],
    "aria-describedby": errors[name] ? `e-${name}` : undefined,
  });

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-card sm:grid-cols-2 sm:p-8"
    >
      <Field errors={errors} name="name" label="Name">
        <input
          {...a("name")}
          autoComplete="name"
          className={fieldCls}
        />
      </Field>

      <Field errors={errors} name="institute" label="Institute name">
        <input
          {...a("institute")}
          autoComplete="organization"
          className={fieldCls}
        />
      </Field>

      <Field errors={errors} name="phone" label="Phone number">
        <input
          {...a("phone")}
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          maxLength={10}
          placeholder="10-digit mobile number"
          className={fieldCls}
        />
      </Field>

      <Field errors={errors} name="email" label="Email">
        <input
          {...a("email")}
          type="email"
          autoComplete="email"
          placeholder="you@gmail.com"
          className={fieldCls}
        />
      </Field>

      <Field errors={errors} name="city" label="City">
        <input
          {...a("city")}
          autoComplete="address-level2"
          className={fieldCls}
        />
      </Field>

      <Field errors={errors} name="coachingType" label="Type of coaching">
        <select
          {...a("coachingType")}
          defaultValue=""
          className={fieldCls}
        >
          <option value="" disabled>
            Select
          </option>
          {[
            "JEE / NEET",
            "School tuition (K-12)",
            "Competitive exams",
            "Language / skills",
            "Online coaching",
            "Other",
          ].map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </Field>

      <Field errors={errors} name="students" label="Number of students">
        <select {...a("students")} defaultValue="" className={fieldCls}>
          <option value="" disabled>
            Select
          </option>
          {["Under 100", "100–500", "500–2,000", "2,000+"].map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </Field>

      <Field errors={errors} name="branches" label="Number of branches">
        <select {...a("branches")} defaultValue="" className={fieldCls}>
          <option value="" disabled>
            Select
          </option>
          {["1", "2–5", "6–20", "20+"].map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </Field>

      <Field
        errors={errors}
        name="requirements"
        label="Requirements"
        className="sm:col-span-2"
      >
        <textarea
          {...a("requirements")}
          rows={4}
          placeholder="Batches, courses, workflows you want to manage…"
          className={cn(fieldCls, "h-auto py-2.5")}
        />
      </Field>

      <Field
        errors={errors}
        name="contactTime"
        label="Preferred contact time"
        className="sm:col-span-2"
      >
        <select
          {...a("contactTime")}
          defaultValue=""
          className={fieldCls}
        >
          <option value="">Any time</option>
          {["Morning (9–12)", "Afternoon (12–4)", "Evening (4–7)"].map(
            (o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ),
          )}
        </select>
      </Field>

      {state === "error" && (
        <p
          role="alert"
          className="text-sm text-destructive sm:col-span-2"
        >
          We couldn't submit your enquiry. Please try again or contact us by
          phone.
        </p>
      )}

      <div className="flex flex-col gap-3 pt-2 sm:col-span-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={state === "sending"}
          className={btn({ size: "lg" })}
        >
          {state === "sending" ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <MessageCircle className="size-4" />
          )}
          {state === "sending" ? "Submitting..." : "Request ELVA LMS"}
        </button>

        <a
          href={`tel:+${PHONE_NUMBER}`}
          className={btn({ variant: "outline", size: "lg" })}
        >
          <Phone className="size-4" />
          Book a Demo by phone
        </a>
      </div>

      <p className="text-xs text-muted-foreground sm:col-span-2">
        Submitting sends your enquiry to the ELVA team by email. See our{" "}
        <a className="underline" href="/privacy">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}

type FieldProps = {
  name: keyof FormData;
  label: string;
  children: ReactNode;
  className?: string;
  errors: Errors;
};

function Field({
  name,
  label,
  children,
  className,
  errors,
}: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={`f-${name}`} className="text-sm font-medium">
        {label}
      </label>

      {children}

      {errors[name] && (
        <p id={`e-${name}`} className="mt-1 text-xs text-destructive">
          {errors[name]}
        </p>
      )}
    </div>
  );
}
