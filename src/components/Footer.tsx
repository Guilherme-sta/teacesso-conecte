import { Logo } from "./Logo";
import { Mail, GraduationCap } from "lucide-react";

export const Footer = () => (
  <footer className="mt-20 border-t border-border bg-card">
    <div className="container py-10 grid gap-6 md:grid-cols-3 items-start">
      <div>
        <Logo size="sm" />
        <p className="mt-3 text-sm text-muted-foreground max-w-xs">
          Conectando famílias de pessoas com TEA aos seus direitos e serviços públicos em Teresina-PI.
        </p>
      </div>
      <div className="flex items-start gap-3 text-sm text-muted-foreground">
        <GraduationCap className="text-primary shrink-0 mt-0.5" size={20} />
        <div>
          <p className="font-semibold text-foreground">Projeto de Extensão IFPI</p>
          <p>Curso de Análise e Desenvolvimento de Sistemas</p>
        </div>
      </div>
      <a
        href="mailto:teacesso@gmail.com"
        className="flex items-center gap-3 text-sm font-semibold text-foreground hover:text-primary transition-colors"
      >
        <Mail size={20} className="text-primary" />
        teacesso@gmail.com
      </a>
    </div>
    <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} TEAcesso · Informação pública e gratuita
    </div>
  </footer>
);