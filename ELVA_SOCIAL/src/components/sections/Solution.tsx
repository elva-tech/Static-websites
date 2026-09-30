import { useState } from 'react'
import { Check, Sparkles } from 'lucide-react'
import { stageDescriptions, stages } from '../../data/workflow'

export function Solution() {
  const [stage, setStage] = useState(3)

  return (
    <section id="how" className="solution">
      <div className="section-intro">
        <p className="section-kicker">THE ELVA SYSTEM</p>
        <h2>
          From business information to published content. <em>Automatically.</em>
        </h2>
        <p>One continuous, human-guided pipeline that works in the background of your business.</p>
      </div>
      <div className="workflow">
        <div className="stage-list">
          {stages.map((s, i) => (
            <button
              className={i === stage ? 'active' : i < stage ? 'done' : ''}
              key={s}
              onMouseEnter={() => setStage(i)}
              onClick={() => setStage(i)}
            >
              <span>{String(i + 1).padStart(2, '0')}</span>
              {s}
              <i>{i < stage ? <Check size={14} /> : ''}</i>
            </button>
          ))}
        </div>
        <div className="workflow-panel">
          <p>STEP {String(stage + 1).padStart(2, '0')}</p>
          <h3>{stages[stage]}</h3>
          <div className="workflow-orb">
            <Sparkles />
            <span>{stageDescriptions[stage]}</span>
          </div>
          <div className="progress">
            <i style={{ width: `${(stage + 1) * 10}%` }} />
          </div>
        </div>
      </div>
    </section>
  )
}
