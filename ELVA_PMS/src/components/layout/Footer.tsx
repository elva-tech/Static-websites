import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
      <div>
        <Logo />
        <p>Property Management Software for Real-Estate Developers.</p>
      </div>
      <div>
        <b>Product</b>
        <a href="#features">Project management</a>
        <a href="#ai-pricing">AI pricing</a>
        <a href="#product">Product experience</a>
      </div>
      <div>
        <b>Company</b>
        <a href="#solutions">Solutions</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </div>
      <div>
        <b>Legal</b>
        <a href="#top">Privacy policy</a>
        <a href="#top">Terms of service</a>
      </div>
      <small>© {new Date().getFullYear()} ELVA Tech. All rights reserved.</small>
    </footer>
  );
}
