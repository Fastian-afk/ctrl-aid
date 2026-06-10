interface StatusPulseProps {
  color?: "teal" | "red" | "amber" | "emerald";
  label?: string;
}

const colorMap = {
  teal: "bg-teal-400",
  red: "bg-red-400",
  amber: "bg-amber-400",
  emerald: "bg-emerald-400",
};

export default function StatusPulse({ color = "teal", label }: StatusPulseProps) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="relative flex h-2.5 w-2.5">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colorMap[color]} opacity-75`}
        />
        <span
          className={`relative inline-flex rounded-full h-2.5 w-2.5 ${colorMap[color]}`}
        />
      </span>
      {label && <span className="text-sm text-slate-400">{label}</span>}
    </span>
  );
}
