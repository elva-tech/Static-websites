import {
  ArrowDown,
  ArrowUpRight,
  ChartNoAxesCombined,
  CircleDollarSign,
  FileCheck2,
  Landmark,
} from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "../ui/Reveal";
import { InvestmentBoard } from "../product-ui/InvestmentBoard";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" />
      <div className="container hero-content">
        <Reveal className="hero-copy">
          <p className="eyebrow on-dark">
            <span /> ELVA INVESTA
          </p>
          <h1>
            One platform for
            <br />
            <em>investments</em> &amp; lending.
          </h1>
          <p>
            ELVA Investa helps organizations manage investors, borrowers,
            investments, loans, interest, repayments, transactions and customer
            relationships through one unified platform.
          </p>
          <div className="hero-actions">
            <a className="button" href="#demo">
              Request a demo <ArrowUpRight size={17} />
            </a>
            <a className="text-link" href="#platform">
              Explore the platform <ArrowDown size={16} />
            </a>
          </div>
          <div className="hero-proof">
            <span>
              <Landmark size={17} /> Invest
            </span>
            <span>
              <CircleDollarSign size={17} /> Borrow
            </span>
            <span>
              <FileCheck2 size={17} /> Organized records
            </span>
          </div>
        </Reveal>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <InvestmentBoard />
          <div className="hero-float float-top">
            <ChartNoAxesCombined size={18} />
            <div>
              <small>Operations</small>
              <b>Structured visibility</b>
            </div>
          </div>
          <div className="hero-float float-bottom">
            <i />
            <div>
              <small>Workflow status</small>
              <b>Records organized</b>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
