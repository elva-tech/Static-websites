import { Check, KeyRound, ShieldCheck, UserRound } from "lucide-react";
const steps = [
  ["Identity", UserRound],
  ["Role", KeyRound],
  ["Membership", ShieldCheck],
  ["Authorized operation", Check],
] as const;
export function SecurityDiagram() {
  return (
    <div className="security-diagram">
      {steps.map(([label, Icon], i) => (
        <div className="security-step" key={label}>
          <span>
            <Icon size={18} />
          </span>
          <b>{label}</b>
          {i < steps.length - 1 && <i />}
        </div>
      ))}
      <div className="isolation">
        <div>
          <b>Organization A</b>
          <span>Authorized records</span>
        </div>
        <strong>≠</strong>
        <div>
          <b>Organization B</b>
          <span>Separate records</span>
        </div>
      </div>
    </div>
  );
}
