import { Check } from 'lucide-react'
import { trustItems } from '../../data/trustItems'

export function Trust() {
  return (
    <section className="trust">
      <p className="section-kicker">TRUST & CONTROL</p>
      <h2>Automation you can trust.</h2>
      <div>
        {trustItems.map((x) => (
          <span key={x}>
            <Check />
            {x}
          </span>
        ))}
      </div>
    </section>
  )
}
