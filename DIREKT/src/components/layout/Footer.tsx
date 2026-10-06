import { Brand } from "./Brand";

const groups = [
  [
    "Product",
    ["Overview", "#product"],
    ["How it works", "#how-it-works"],
    ["Features", "#features"],
    ["Paper trading", "#paper-trading"],
    ["Dashboard", "#dashboard"],
    ["Pricing", "#pricing"],
  ],
  [
    "Company",
    ["About", "#product"],
    ["Contact", "#enrol"],
    ["Terms & Conditions", "#risk"],
    ["Privacy Policy", "#risk"],
    ["Risk Disclosure", "#risk"],
  ],
  ["Support", ["Help", "#faq"], ["Contact support", "#enrol"]],
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <Brand />
          <p>
            AI-powered trading technology for systematic market participation.
          </p>
          <a className="text-link" href="#enrol">
            Enrol in Direkt <span>↗</span>
          </a>
        </div>
        {groups.map(([heading, ...items]) => (
          <div className="footer-group" key={heading as string}>
            <h3>{heading}</h3>
            {items.map(([label, href]) => (
              <a href={href as string} key={label as string}>
                {label as string}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Direkt. All rights reserved.</span>
        <span>
          Trading involves risk. See our <a href="#risk">risk disclosure</a>.
        </span>
      </div>
    </footer>
  );
}
