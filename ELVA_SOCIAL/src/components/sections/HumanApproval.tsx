import { useState } from 'react'
import { Check } from 'lucide-react'

export function HumanApproval() {
  const [approved, setApproved] = useState(false)
  const [editing, setEditing] = useState(false)

  return (
    <section className="approval">
      <div>
        <p className="section-kicker">HUMAN APPROVAL</p>
        <h2>
          AI does the work.
          <br />
          <em>You make the final call.</em>
        </h2>
        <p>Automation does not have to mean losing control. Manual approval is ELVA's default workflow.</p>
        <div className="modes">
          <b>
            Manual approval <span>DEFAULT</span>
          </b>
          <p>AI creates everything. You approve every post.</p>
          <b>AI review + auto publish</b>
          <b>Fully automated</b>
        </div>
      </div>
      <div className={'approval-ui ' + (approved ? 'is-approved' : '')}>
        <div className="approval-head">
          <span>POST PREVIEW</span>
          <b>LinkedIn</b>
        </div>
        <div className="approval-image">
          <span>
            LESS BUSYWORK.
            <br />
            MORE BUILDING.
          </span>
        </div>
        <div className="approval-content">
          <small>GENERATED CONTENT</small>
          {editing ? (
            <textarea defaultValue="A healthy business doesn't depend on people remembering every tiny process. It builds systems that make the right next step clear." />
          ) : (
            <p>
              A healthy business doesn't depend on people remembering every tiny process. It builds systems that make
              the right next step clear.
            </p>
          )}
          <div className="review">
            <b>AI review</b>
            <span>
              <Check /> Brand voice
            </span>
            <span>
              <Check /> No duplicate topic
            </span>
            <span>
              <Check /> Factual checks
            </span>
            <span>
              <Check /> Platform optimized
            </span>
          </div>
          <div className="approval-actions">
            <button onClick={() => setEditing(!editing)}>{editing ? 'Save' : 'Edit'}</button>
            <button onClick={() => setApproved(false)}>Regenerate</button>
            <button className="approve" onClick={() => setApproved(true)}>
              {approved ? 'Approved' : 'Approve & schedule'} <Check size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
