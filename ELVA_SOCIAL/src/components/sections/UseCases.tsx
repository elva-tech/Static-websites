import { ArrowRight } from 'lucide-react'
import { useCases } from '../../data/useCases'

export function UseCases() {
  return (
    <section className="usecases">
      <p className="section-kicker">FROM MOMENT TO MESSAGE</p>
      <h2>
        Your business events become
        <br />
        content automatically.
      </h2>
      <div>
        {useCases.map(([a, b]) => (
          <article key={a}>
            <span>{a}</span>
            <ArrowRight size={16} />
            <b>{b}</b>
          </article>
        ))}
      </div>
    </section>
  )
}
