import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="about">
      <div>
        <p className="eyebrow">BUILT BY ELVA TECH</p>
        <h2>Engineers are problem solvers.</h2>
      </div>
      <p>
        ELVA Tech builds business-management software and engineering solutions
        for real-world problems. We focus on practical digital systems that help
        organizations manage operations, automate processes and make better
        data-driven decisions.
      </p>
      <a href="https://elvatech.in" target="_blank">
        Visit ELVA Tech <ArrowRight size={16} />
      </a>
    </section>
  );
}
