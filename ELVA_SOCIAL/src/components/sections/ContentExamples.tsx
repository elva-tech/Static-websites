import { ArrowRight } from 'lucide-react'
import { contentExamples } from '../../data/contentExamples'

export function ContentExamples() {
  return (
    <section className="examples">
      <div>
        <p className="section-kicker">WHAT ELVA TALKS ABOUT</p>
        <h2>Ideas worth stopping for.</h2>
        <p>
          Evergreen content educates and earns trust. Product stories arrive when the business has something real to
          share.
        </p>
      </div>
      <div className="example-list">
        {contentExamples.map(([tag, idea]) => (
          <article key={tag}>
            <small>{tag}</small>
            <p>{idea}</p>
            <ArrowRight size={16} />
          </article>
        ))}
      </div>
    </section>
  )
}
