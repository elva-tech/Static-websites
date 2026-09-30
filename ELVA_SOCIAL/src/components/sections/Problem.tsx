import { ArrowRight } from 'lucide-react'

export function Problem() {
  return (
    <section className="problem">
      <div>
        <p className="section-kicker">THE OLD WAY</p>
        <h2>Posting consistently shouldn't feel like another full-time job.</h2>
      </div>
      <div className="fragment">
        <span>
          No ideas <b>What should we post today?</b>
        </span>
        <span>
          No time <b>Write, design, schedule, repeat.</b>
        </span>
        <span>
          Missed events <b>Great moments disappear.</b>
        </span>
        <span>
          Brand drift <b>Does this sound like us?</b>
        </span>
        <span>
          Manual work <b>Three platforms, three rewrites.</b>
        </span>
        <span>
          Unclear approvals <b>Who says it's ready?</b>
        </span>
      </div>
      <div className="problem-close">
        ELVA brings the entire workflow into one intelligent system. <ArrowRight />
      </div>
    </section>
  )
}
