import { ArrowRight } from 'lucide-react'
import { analyticsBarHeights } from '../../data/analyticsBars'

export function Analytics() {
  return (
    <section className="analytics">
      <div>
        <p className="section-kicker">ANALYTICS & LEARNING</p>
        <h2>Every post makes the next one smarter.</h2>
        <p>
          ELVA connects performance with the topics, formats, hooks and timing behind it — so your content strategy
          keeps improving.
        </p>
        <button className="textbtn">
          Explore the learning loop <ArrowRight size={15} />
        </button>
      </div>
      <div className="chart">
        <div className="chart-top">
          <span>Engagement rate</span>
          <b>
            +18.4% <em>this month</em>
          </b>
        </div>
        <div className="bars">
          {analyticsBarHeights.map((x, i) => (
            <i key={i} style={{ height: `${x}%` }} />
          ))}
        </div>
        <div className="chart-labels">
          <span>Topics</span>
          <span>Formats</span>
          <span>Hooks</span>
          <span>Timing</span>
        </div>
      </div>
    </section>
  )
}
