import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
export function Button({
  children,
  to,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  to: string;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <Link to={to} className={`button ${variant} ${className}`}>
      {children}
      <ArrowUpRight size={16} />
    </Link>
  );
}
