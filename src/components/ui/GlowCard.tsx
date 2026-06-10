interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlowCard({ children, className = "", hover = true }: GlowCardProps) {
  return (
    <div
      className={`glass-card rounded-2xl p-6 ${hover ? "glow-border" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
