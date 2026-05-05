import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Logo } from "@/components/Logo";
import { ScrollText, MapPin, MessageCircle, ArrowRight, Info, Heart, Sparkles } from "lucide-react";

const cards = [
  {
    to: "/direitos",
    title: "Diretório de Direitos",
    desc: "Passo a passo simples para Passe Livre, BPC, vaga de estacionamento e laudo.",
    icon: ScrollText,
    tone: "primary" as const,
  },
  {
    to: "/servicos",
    title: "Mapa de Serviços",
    desc: "Endereços, telefones e horários do CeTEA, CRAS, Hospital e NAPNE/IFPI.",
    icon: MapPin,
    tone: "secondary" as const,
  },
  {
    to: "/contatos",
    title: "Canal Direto",
    desc: "Fale por WhatsApp com as instituições públicas com um toque.",
    icon: MessageCircle,
    tone: "primary" as const,
  },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-soft" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="container relative py-16 md:py-24">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Logo size="lg" />
          <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary shadow-soft">
            <Sparkles size={14} /> Teresina-PI
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-foreground leading-tight">
            Conectando <span className="text-primary">Direito</span> e{" "}
            <span className="text-secondary">Oportunidades</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
            Um diretório público e gratuito para famílias de pessoas com Transtorno do Espectro Autista (TEA) acessarem direitos, serviços e contatos em um só lugar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link
              to="/direitos"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-hero px-6 py-3 font-bold text-primary-foreground shadow-card hover:opacity-95 transition"
            >
              Conhecer direitos <ArrowRight size={18} />
            </Link>
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 rounded-full bg-card px-6 py-3 font-bold text-foreground border border-border hover:bg-muted transition"
            >
              Ver serviços
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Problema */}
    <section className="container py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
        <div className="rounded-3xl bg-card p-8 shadow-soft border border-border">
          <div className="h-12 w-12 rounded-2xl bg-secondary-soft flex items-center justify-center text-secondary">
            <Info size={24} />
          </div>
          <h2 className="mt-4 text-2xl font-extrabold">O problema</h2>
          <p className="mt-3 text-muted-foreground">
            Informações sobre os direitos das pessoas com TEA estão <strong className="text-foreground">espalhadas</strong> entre sites, repartições e linguagem técnica difícil. Famílias perdem tempo, oportunidades e benefícios essenciais.
          </p>
        </div>
        <div className="rounded-3xl bg-card p-8 shadow-soft border border-border">
          <div className="h-12 w-12 rounded-2xl bg-primary-soft flex items-center justify-center text-primary">
            <Heart size={24} />
          </div>
          <h2 className="mt-4 text-2xl font-extrabold">Nossa proposta</h2>
          <p className="mt-3 text-muted-foreground">
            Reunir, em linguagem simples, <strong className="text-foreground">tudo o que importa</strong>: passo a passo dos direitos, mapa de serviços públicos e contato direto com as instituições de Teresina-PI.
          </p>
        </div>
      </div>
    </section>

    {/* Cards */}
    <section className="container pb-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Como podemos ajudar</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">Tudo em um só lugar</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((c) => {
          const Icon = c.icon;
          const isPrimary = c.tone === "primary";
          return (
            <Link
              key={c.to}
              to={c.to}
              className="group relative rounded-3xl bg-card p-8 shadow-soft border border-border hover:shadow-card hover:-translate-y-1 transition-all"
            >
              <div
                className={`h-14 w-14 rounded-2xl flex items-center justify-center ${
                  isPrimary ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                }`}
              >
                <Icon size={26} />
              </div>
              <h3 className="mt-5 text-xl font-extrabold">{c.title}</h3>
              <p className="mt-2 text-muted-foreground">{c.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1 font-bold text-primary group-hover:gap-2 transition-all">
                Acessar <ArrowRight size={16} />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  </Layout>
);

export default Index;
