import { ReactNode } from "react";

export const PageHeader = ({
  eyebrow,
  title,
  description,
  icon,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  icon?: ReactNode;
}) => (
  <section className="bg-gradient-soft border-b border-border">
    <div className="container py-12 md:py-16">
      {eyebrow && (
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3">
          {eyebrow}
        </span>
      )}
      <div className="flex items-start gap-4">
        {icon && (
          <div className="hidden sm:flex h-14 w-14 rounded-2xl bg-gradient-hero items-center justify-center shadow-card text-primary-foreground shrink-0">
            {icon}
          </div>
        )}
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground">{title}</h1>
          {description && (
            <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-2xl">{description}</p>
          )}
        </div>
      </div>
    </div>
  </section>
);