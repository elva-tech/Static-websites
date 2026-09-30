import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, FileUp, Sparkles } from 'lucide-react'

export function EventToContent() {
  const [generated, setGenerated] = useState(false)

  return (
    <section id="events" className="event">
      <div className="event-copy">
        <p className="section-kicker">EVENT-TO-CONTENT</p>
        <h2>
          Something happened?
          <br />
          <em>Tell ELVA.</em>
        </h2>
        <p>
          Great content often starts with something that happened inside your business. Add the story or upload the
          material. ELVA turns it into platform-ready content.
        </p>
        <div className="upload-list">
          <span>
            <FileUp size={16} /> Photos & videos
          </span>
          <span>
            <FileUp size={16} /> PDFs & documents
          </span>
        </div>
      </div>
      <div className="event-ui">
        <div className="event-form">
          <small>NEW EVENT</small>
          <label>What happened?</label>
          <textarea
            readOnly
            value="We attended the Bengaluru startup meetup today and met several founders building interesting products."
          />
          <div className="file-buttons">
            <button>+ Upload photos</button>
            <button>+ Upload files</button>
          </div>
          <div className="platform-checks">
            <span>
              <Check /> LinkedIn
            </span>
            <span>
              <Check /> Instagram
            </span>
            <span>
              <Check /> Facebook
            </span>
          </div>
          <button className="generate" onClick={() => setGenerated(true)}>
            {generated ? 'Content generated' : 'Generate content'} <Sparkles size={15} />
          </button>
        </div>
        <AnimatePresence>
          {generated && (
            <motion.div className="generated" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <small>ONE EVENT · 3 VERSIONS</small>
              <div>
                <b>in</b>
                <span>LinkedIn</span>
                <Check size={15} />
              </div>
              <div>
                <b>◎</b>
                <span>Instagram</span>
                <Check size={15} />
              </div>
              <div>
                <b>f</b>
                <span>Facebook</span>
                <Check size={15} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
