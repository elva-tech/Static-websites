import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

export const PLAN_NAMES = ["Direkt Paper", "Direkt Pro", "Enterprise"] as const;
export type PlanName = (typeof PLAN_NAMES)[number];

export function readEnrolmentState() {
  const params = new URLSearchParams(window.location.search);
  const plan = params.get("plan");
  const selectedPlan = PLAN_NAMES.find((name) => name === plan) ?? null;
  return { selectedPlan, paperInterest: params.get("paper") === "1" };
}

export function scrollToEnrolment() {
  const target =
    document.getElementById("selected-plan") ??
    document.getElementById("enrol-form");
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function openEnrolment(options?: {
  plan?: PlanName | null;
  paper?: boolean;
}) {
  const params = new URLSearchParams();
  if (options?.plan) params.set("plan", options.plan);
  if (options?.paper) params.set("paper", "1");
  const query = params.toString();
  window.history.pushState(
    null,
    "",
    `${window.location.pathname}${query ? `?${query}` : ""}#enrol`,
  );
  window.dispatchEvent(new Event("direkt-enrol"));
  requestAnimationFrame(() => scrollToEnrolment());
}

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  tone?: "solid" | "quiet";
};

export function Button({
  children,
  tone = "solid",
  className = "",
  href,
  onClick,
  ...props
}: ButtonProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (href === "#enrol") {
      event.preventDefault();
      openEnrolment();
    }
    onClick?.(event);
  };

  return (
    <a
      className={`button button--${tone} ${className}`}
      href={href}
      onClick={handleClick}
      {...props}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
