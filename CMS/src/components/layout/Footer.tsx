import { Link } from "react-router-dom";
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="brand footer-brand">
            <img src="/elva.svg" alt="ELVA" />
            <span>
              <b>CMS</b>
              <small>Construction Management System</small>
            </span>
          </div>
          <p>Manage projects. Track operations. Stay in control.</p>
        </div>
        <div>
          <b>Product</b>
          <Link to="/features">Features</Link>
          <Link to="/modules">Modules</Link>
          <Link to="/roles">User Roles</Link>
          <Link to="/use-cases">Use Cases</Link>
        </div>
        <div>
          <b>Company</b>
          <Link to="/about">About ELVA</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/contact">Request Demo</Link>
        </div>
        <div>
          <b>ELVA CMS</b>
          <p>
            A centralized platform for construction companies managing multiple
            projects.
          </p>
        </div>
      </div>
      <div className="copyright">© 2026 ELVA Tech. All rights reserved.</div>
    </footer>
  );
}
