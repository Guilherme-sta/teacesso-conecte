import { Puzzle } from "lucide-react";

export const Logo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizes = {
    sm: { box: "h-9 w-9", icon: 20, text: "text-lg" },
    md: { box: "h-12 w-12", icon: 26, text: "text-2xl" },
    lg: { box: "h-20 w-20", icon: 44, text: "text-5xl" },
  }[size];
  return (
    <div className="flex items-center gap-3">
      <div className={`${sizes.box} rounded-2xl bg-gradient-hero flex items-center justify-center shadow-card shrink-0`}>
        <Puzzle size={sizes.icon} className="text-primary-foreground" strokeWidth={2.5} />
      </div>
      <span className={`${sizes.text} font-extrabold tracking-tight text-foreground`}>
        TE<span className="text-primary">Acesso</span>
      </span>
    </div>
  );
};