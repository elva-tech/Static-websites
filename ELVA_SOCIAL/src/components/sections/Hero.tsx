import { motion } from 'framer-motion'
import { ArrowRight, Check, CircleCheck, Sparkles } from 'lucide-react'
import { scrollTo } from '../../utils/scrollTo'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">
          <span />
          AI-POWERED SOCIAL MEDIA MANAGEMENT
        </p>
        <h1>
          Your AI
          <br />
          <em>Social Media</em>
          <br />
          Team.
        </h1>
        <p className="lede">
          ELVA understands your business, creates content, gets your approval, and publishes it across LinkedIn,
          Instagram, and Facebook — automatically.
        </p>
        <div className="actions">
          <button className="cta" onClick={() => scrollTo('start')}>
            Get started <ArrowRight size={17} />
          </button>
          <button className="textbtn" onClick={() => scrollTo('how')}>
            See how it works <span>↓</span>
          </button>
        </div>
        <p className="control">
          <CircleCheck size={17} /> AI does the work. You stay in control.
        </p>
      </div>
      <motion.div
        className="hero-ui"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="ui-top">
          <span>ELVA workspace</span>
          <span className="online">● Live planning</span>
        </div>
        <div className="ui-body">
          <aside>
            <b>Overview</b>
            <span>Calendar</span>
            <span>Content</span>
            <span>
              Approvals <i>3</i>
            </span>
            <span>Events</span>
            <span>Analytics</span>
          </aside>
          <div className="workspace">
            <div className="workspace-head">
              <div>
                <small>TODAY'S CONTENT PIPELINE</small>
                <h3>From knowledge to conversation.</h3>
              </div>
              <button>+ Create</button>
            </div>
            <div className="pipeline">
              <div>
                <small>BUSINESS KNOWLEDGE</small>
                <strong>Brand, events & strategy</strong>
                <span className="line" />
              </div>
              <div className="ai">
                <Sparkles size={19} />
                <b>ELVA AI</b>
                <small>creating</small>
              </div>
              <div>
                <small>READY TO REVIEW</small>
                <strong>3 platform versions</strong>
                <span className="line" />
              </div>
            </div>
            <div className="content-card">
              <div className="post-visual">
                <div className="sun" />
                <p>
                  BUILD BETTER
                  <br />
                  SYSTEMS.
                </p>
              </div>
              <div>
                <small>LINKEDIN · DRAFT</small>
                <h4>Why efficient teams don't chase more tools</h4>
                <p>Good systems turn everyday work into momentum.</p>
                <div className="checks">
                  <span>
                    <Check /> Brand voice
                  </span>
                  <span>
                    <Check /> Original topic
                  </span>
                </div>
              </div>
              <button className="approve">
                Review <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
