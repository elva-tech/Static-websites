export default function Metric({
  label,
  value,
  change,
}: {
  label: string;
  value: string;
  change: string;
}) {
  return (
    <div className="metric">
      <small>{label}</small>
      <strong>{value}</strong>
      <span>{change}</span>
    </div>
  );
}
