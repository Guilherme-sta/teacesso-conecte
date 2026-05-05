import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { servicos } from "@/data/servicos";
import { MessageCircle, Phone, Share2, Mail } from "lucide-react";

const Contatos = () => {
  const compartilhar = (s: typeof servicos[number]) => {
    const text = `*${s.nome}*\n${s.tipo}\n📍 ${s.endereco}\n📞 ${s.telefone}\n🕐 ${s.horario}\n\nCompartilhado via TEAcesso`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener");
  };

  return (
    <Layout>
      <PageHeader
        eyebrow="Canal Direto"
        title="Fale com as instituições"
        description="Contatos verificados das principais instituições. Toque para ligar, abrir WhatsApp ou compartilhar com outra família."
        icon={<MessageCircle size={28} />}
      />
      <section className="container py-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {servicos.map((s) => (
          <article
            key={s.nome}
            className="rounded-3xl bg-card border border-border shadow-soft p-6 flex flex-col"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary">{s.tipo}</span>
            <h2 className="mt-2 text-lg font-extrabold leading-tight">{s.nome}</h2>
            <p className="mt-3 text-sm text-muted-foreground flex-1">{s.endereco}</p>
            <div className="mt-5 flex flex-col gap-2">
              {s.whatsapp && (
                <a
                  href={`https://wa.me/${s.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-4 py-2.5 font-bold hover:opacity-95 transition"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              )}
              <a
                href={`tel:${s.telefone.replace(/\D/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2.5 font-bold hover:opacity-95 transition"
              >
                <Phone size={16} /> {s.telefone}
              </a>
              <button
                onClick={() => compartilhar(s)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-card border border-border px-4 py-2.5 font-bold hover:bg-muted transition"
              >
                <Share2 size={16} /> Compartilhar
              </button>
            </div>
          </article>
        ))}
      </section>
      <section className="container pb-16">
        <div className="rounded-3xl bg-gradient-hero p-8 md:p-12 text-primary-foreground text-center max-w-3xl mx-auto shadow-card">
          <Mail size={36} className="mx-auto opacity-90" />
          <h2 className="mt-4 text-2xl md:text-3xl font-extrabold">Sentiu falta de algum serviço?</h2>
          <p className="mt-3 opacity-90">
            Envie sua sugestão para que possamos incluir mais instituições no diretório.
          </p>
          <a
            href="mailto:teacesso@gmail.com"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-card text-foreground px-6 py-3 font-bold hover:opacity-95 transition"
          >
            <Mail size={18} /> teacesso@gmail.com
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Contatos;