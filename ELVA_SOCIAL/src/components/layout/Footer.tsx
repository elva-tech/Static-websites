import { BrandMark } from '../ui/BrandMark'

export function Footer() {
  return (
    <footer>
      <div className="brand">
        <BrandMark />
        <span>ELVA SOCIAL AI</span>
      </div>
      <p>
        AI-powered social media management for modern businesses.
        <br />
        Create. Review. Schedule. Publish.
      </p>
      <p>
        A product by <b>ELVA Tech</b>
      </p>
    </footer>
  )
}
