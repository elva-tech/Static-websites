import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { BrandMark } from '../ui/BrandMark'
import { navLinks } from '../../data/nav'
import { scrollTo } from '../../utils/scrollTo'

export function Navbar() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <nav className="nav">
      <button className="brand" onClick={() => scrollTo('top')}>
        <BrandMark />
        <span>ELVA SOCIAL AI</span>
      </button>
      <div className="navlinks">
        {navLinks.map(([x, id]) => (
          <button key={id} onClick={() => scrollTo(id)}>
            {x}
          </button>
        ))}
      </div>
      <button className="cta small" onClick={() => scrollTo('start')}>
        Get started <ArrowRight size={15} />
      </button>
      <button className="menu" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle navigation">
        {navOpen ? <X /> : <Menu />}
      </button>
      {navOpen && (
        <div className="mobile-nav">
          {navLinks.map(([x, id]) => (
            <button
              key={id}
              onClick={() => {
                scrollTo(id)
                setNavOpen(false)
              }}
            >
              {x}
            </button>
          ))}
          <button onClick={() => scrollTo('start')}>Get started</button>
        </div>
      )}
    </nav>
  )
}
