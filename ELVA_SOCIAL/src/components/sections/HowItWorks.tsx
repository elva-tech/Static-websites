import { howItWorksSteps } from '../../data/howItWorksSteps'

export function HowItWorks() {
  return (
    <section className="how-grid">
      <div className="how-copy">
        <p className="section-kicker">HOW IT WORKS</p>
        <h2>A social team that starts by learning.</h2>
        <p>
          Give ELVA the context a good team member would need — then set a strategy and schedule that fit your
          business.
        </p>
      </div>
      <div className="steps">
        {howItWorksSteps.map(([n, t, d]) => (
          <article key={n}>
            <span>{n}</span>
            <h3>{t}</h3>
            <p>{d}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
