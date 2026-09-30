import { ArrowRight } from 'lucide-react'

export function InspirationEngine() {
  return (
    <section className="inspiration">
      <div className="inspiration-card">
        <small>REFERENCE MATERIAL</small>
        <div className="inspo-lines">
          <i />
          <i />
          <i />
        </div>
        <span>Original content</span>
        <ArrowRight />
      </div>
      <div>
        <p className="section-kicker">INSPIRATION ENGINE</p>
        <h2>
          Have something you like?
          <br />
          <em>Give it to ELVA.</em>
        </h2>
        <p>
          Upload a reference post, image, document or idea. ELVA learns the structure, idea and tone — then creates
          original content that fits your brand.
        </p>
        <p className="fine">Reference → analyze → combine with business knowledge → original content. Never copying.</p>
      </div>
    </section>
  )
}
