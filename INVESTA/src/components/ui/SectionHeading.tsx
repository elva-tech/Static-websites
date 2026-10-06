import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  children,
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  light?: boolean;
}) {
  return (
    <Reveal className={`section-heading ${light ? "light" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="lede">{children}</p>}
    </Reveal>
  );
}
