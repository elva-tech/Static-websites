import { ArrowUpRight } from "lucide-react";
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="brand brand-footer" href="#top">
            <img src="/brand/elva.svg" alt="ELVA" />
            <span>INVESTA</span>
          </a>
          <p>A unified platform for investment and lending management.</p>
          <a
            className="footer-link"
            href="https://www.elvatech.in"
            target="_blank"
            rel="noreferrer"
          >
            ELVA Technologies <ArrowUpRight size={14} />
          </a>
        </div>
        <div>
          <h3>Platform</h3>
          <a href="#invest">Invest</a>
          <a href="#borrow">Borrow</a>
          <a href="#customer-app">Customer App</a>
          <a href="#admin">Admin Platform</a>
          <a href="#tenants">Multi-Tenant</a>
        </div>
        <div>
          <h3>Company</h3>
          <a href="#demo">Contact</a>
          <a href="#platform">About ELVA</a>
          <span>Bangalore, India</span>
        </div>
        <div>
          <h3>Legal</h3>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/financial-disclaimer">Financial Disclaimer</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} ELVA Technologies. All rights reserved.
        </span>
        <span>Built for structured operations.</span>
      </div>
    </footer>
  );
}
