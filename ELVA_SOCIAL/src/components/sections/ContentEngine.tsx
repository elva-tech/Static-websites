import { Check, Sparkles } from 'lucide-react'
import { contentEngineNodes } from '../../data/contentEngineNodes'

export function ContentEngine() {
  return (
    <section id="features" className="engine">
      <div className="engine-visual">
        <div className="engine-center">
          <Sparkles />
          <b>ELVA</b>
          <small>content engine</small>
        </div>
        {contentEngineNodes.map((x, i) => (
          <span className={'node n' + i} key={x}>
            {x}
          </span>
        ))}
      </div>
      <div>
        <p className="section-kicker">AI CONTENT ENGINE</p>
        <h2>Content that knows your business.</h2>
        <p>
          ELVA does not start from a blank prompt. It uses your business information, strategy, history, material and
          events to create relevant, original content.
        </p>
        <ul>
          <li>
            <Check /> Build and maintain content pillars
          </li>
          <li>
            <Check /> Remember what has already been posted
          </li>
          <li>
            <Check /> Review tone, facts, quality and repetition
          </li>
          <li>
            <Check /> Create images and carousel concepts
          </li>
        </ul>
      </div>
    </section>
  )
}
