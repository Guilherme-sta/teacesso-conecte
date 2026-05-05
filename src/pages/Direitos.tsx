import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { direitos } from "@/data/direitos";
import { ScrollText, FileText, MapPin, CheckCircle2 } from "lucide-react";

const Direitos = () => (
  <Layout>
    <PageHeader
      eyebrow="Diretório"
      title="Diretório de Direitos"
      description="Guias passo a passo, em linguagem simples, para acessar os principais direitos garantidos por lei às pessoas com TEA."
      icon={<ScrollText size={28} />}
    />
    <section className="container py-12 grid gap-8 lg:grid-cols-2">
      {direitos.map((d) => {
        const isPrimary = d.cor === "primary";
        return (
          <article
            key={d.slug}
            className="rounded-3xl bg-card border border-border shadow-soft overflow-hidden flex flex-col"
          >
            <header
              className={`p-6 ${
                isPrimary ? "bg-primary-soft" : "bg-secondary-soft"
              }`}
            >
              <span
                className={`text-xs font-bold uppercase tracking-widest ${
                  isPrimary ? "text-primary" : "text-secondary"
                }`}
              >
                Direito garantido
              </span>
              <h2 className="mt-2 text-2xl font-extrabold">{d.titulo}</h2>
              <p className="mt-2 text-muted-foreground">{d.resumo}</p>
            </header>
            <div className="p-6 flex-1">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-primary" size={20} /> Passo a passo
              </h3>
              <ol className="space-y-3">
                {d.passos.map((p, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className={`shrink-0 h-8 w-8 rounded-full flex items-center justify-center font-extrabold text-sm ${
                        isPrimary
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-bold">{p.titulo.replace(/^\d+\.\s*/, "")}</p>
                      <p className="text-sm text-muted-foreground">{p.descricao}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <footer className="px-6 pb-6 grid sm:grid-cols-2 gap-3">
              {d.documentos && (
                <div className="rounded-2xl bg-muted/60 p-4">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    <FileText size={14} /> Documentos
                  </p>
                  <ul className="mt-2 text-sm space-y-1">
                    {d.documentos.map((doc) => (
                      <li key={doc}>• {doc}</li>
                    ))}
                  </ul>
                </div>
              )}
              {d.onde && (
                <div className="rounded-2xl bg-muted/60 p-4">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    <MapPin size={14} /> Onde solicitar
                  </p>
                  <p className="mt-2 text-sm font-semibold">{d.onde}</p>
                </div>
              )}
            </footer>
          </article>
        );
      })}
    </section>
  </Layout>
);

export default Direitos;