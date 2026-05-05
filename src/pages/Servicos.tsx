import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { servicos } from "@/data/servicos";
import { MapPin, Phone, Clock, MessageCircle, Building2 } from "lucide-react";

const Servicos = () => (
  <Layout>
    <PageHeader
      eyebrow="Mapa"
      title="Mapa de Serviços"
      description="Instituições públicas em Teresina-PI que oferecem atendimento, diagnóstico e suporte para pessoas com TEA e suas famílias."
      icon={<MapPin size={28} />}
    />
    <section className="container py-12 grid gap-6 md:grid-cols-2">
      {servicos.map((s) => (
        <article
          key={s.nome}
          className="rounded-3xl bg-card border border-border shadow-soft p-6 flex flex-col"
        >
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-2xl bg-primary-soft text-primary flex items-center justify-center shrink-0">
              <Building2 size={24} />
            </div>
            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">{s.tipo}</span>
              <h2 className="mt-1 text-xl font-extrabold leading-tight">{s.nome}</h2>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground">{s.descricao}</p>
          <div className="mt-5 space-y-3 text-sm">
            <p className="flex items-start gap-3">
              <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
              <span>{s.endereco}</span>
            </p>
            <p className="flex items-center gap-3">
              <Phone size={18} className="text-primary shrink-0" />
              <a href={`tel:${s.telefone.replace(/\D/g, "")}`} className="font-semibold hover:text-primary">
                {s.telefone}
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Clock size={18} className="text-primary shrink-0" />
              <span>{s.horario}</span>
            </p>
          </div>
          {s.whatsapp && (
            <a
              href={`https://wa.me/${s.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-5 py-3 font-bold hover:opacity-95 transition"
            >
              <MessageCircle size={18} /> Falar no WhatsApp
            </a>
          )}
        </article>
      ))}
    </section>
  </Layout>
);

export default Servicos;