import { workflow } from "../../data/content";
import { SectionHeading } from "../ui/SectionHeading";

export function Workflow() {
  return (
    <section className="section workflow" id="how-it-works">
      <SectionHeading
        eyebrow="03 / THE WORKFLOW"
        title={
          <>
            From market data
            <br />
            to <i>trade.</i>
          </>
        }
      >
        A connected workflow from opportunity detection to position exit.
      </SectionHeading>
      <div className="workflow-grid">
        {workflow.map(([number, title, text], index) => (
          <article key={title}>
            <span>{number}</span>
            <div className="workflow-dot"></div>
            <h3>{title}</h3>
            <p>{text}</p>
            {index < workflow.length - 1 && <em>→</em>}
          </article>
        ))}
      </div>
    </section>
  );
}
