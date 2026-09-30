import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { platformContent } from '../../data/platformContent'

export function PlatformAdaptation() {
  const [platform, setPlatform] = useState('LinkedIn')

  return (
    <section id="platforms" className="platforms">
      <div className="section-intro">
        <p className="section-kicker">PLATFORM ADAPTATION</p>
        <h2>
          One idea. Three platforms.
          <br />
          <em>Three versions.</em>
        </h2>
      </div>
      <div className="platform-demo">
        <div className="platform-tabs">
          {Object.keys(platformContent).map((p) => (
            <button className={platform === p ? 'selected' : ''} key={p} onClick={() => setPlatform(p)}>
              {p}
            </button>
          ))}
        </div>
        <motion.div className="platform-post" key={platform} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="network">{platform === 'LinkedIn' ? 'in' : platform === 'Instagram' ? '◎' : 'f'}</div>
          <div>
            <small>{platformContent[platform][0]}</small>
            <h3>{platformContent[platform][1]}</h3>
            <p>{platformContent[platform][2]}</p>
          </div>
          <div className="format">{platform === 'Instagram' ? '01 / 08' : 'Aa'}</div>
        </motion.div>
        <div className="master-idea">
          MASTER IDEA <ArrowRight /> <span>Built for every conversation.</span>
        </div>
      </div>
    </section>
  )
}
