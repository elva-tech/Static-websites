import { ChevronDown } from 'lucide-react'
import { faqItems } from '../../data/faq'

export function FAQ() {
  return (
    <section id="faq" className="faq">
      <div>
        <p className="section-kicker">FAQ</p>
        <h2>Questions, answered.</h2>
      </div>
      <div>
        {faqItems.map(([q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <ChevronDown size={18} />
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
