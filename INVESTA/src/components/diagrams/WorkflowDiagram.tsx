import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileText,
  KeyRound,
  UserRound,
} from "lucide-react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const icons = [Building2, KeyRound, UserRound, FileText, CheckCircle2];
export function WorkflowDiagram({
  type,
}: {
  type: "organization" | "customer";
}) {
  const reduced = useReducedMotion();
  const steps =
    type === "organization"
      ? [
          "Organization",
          "Onboard",
          "Configure",
          "Add admins",
          "Manage operations",
        ]
      : [
          "ELVA App",
          "Mobile number",
          "OTP verification",
          "Client code",
          "Invest / Borrow",
        ];
  return (
    <div
      className="workflow-diagram"
      aria-label={`${type} onboarding workflow`}
    >
      {steps.map((step, index) => {
        const Icon = icons[index];
        return (
          <div className="workflow-piece" key={step}>
            <motion.div
              className="workflow-node"
              initial={false}
              whileInView={reduced ? {} : { scale: [1, 1.06, 1] }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.13, duration: 0.5 }}
            >
              <Icon size={19} />
              <span>{step}</span>
            </motion.div>
            {index < steps.length - 1 && (
              <motion.div
                className="workflow-line"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + index * 0.13 }}
              >
                <ArrowRight size={15} />
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}
