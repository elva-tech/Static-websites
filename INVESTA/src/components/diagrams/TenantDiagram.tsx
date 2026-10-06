import { motion } from "framer-motion";
import { Building2, ShieldCheck, UsersRound } from "lucide-react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
const tenants = ["Organization A", "Organization B", "Organization C"];
export function TenantDiagram() {
  const reduced = useReducedMotion();
  return (
    <div className="tenant-diagram">
      <motion.div
        className="tenant-root"
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img src="/brand/elva.svg" alt="" />
        <span>ELVA Investa</span>
        <ShieldCheck size={17} />
      </motion.div>
      <div className="tenant-branches">
        {tenants.map((tenant, i) => (
          <motion.div
            className="tenant-branch"
            key={tenant}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: reduced ? 0 : i * 0.15 }}
          >
            <span className="connector" />
            <div className="tenant-card">
              <Building2 size={19} />
              <b>{tenant}</b>
              <small>Logically isolated workspace</small>
              <div>
                <span>
                  <UsersRound size={13} /> Admins
                </span>
                <span>
                  <UsersRound size={13} /> Customers
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
