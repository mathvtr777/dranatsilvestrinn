import { useState } from "react";
import Reveal from "./Reveal";
import { X } from "lucide-react";
import draNatalia from "@/assets/dra-natalia.jpg";
import clinicExperience from "@/assets/clinic-experience.jpg";

type Category = "todos" | "facial" | "corporal";

const gradients = [
  "linear-gradient(135deg, #c9a96e 0%, #f5e6c8 50%, #e8c9b0 100%)",
  "linear-gradient(135deg, #d4a5a5 0%, #f5dede 50%, #e8c0c0 100%)",
  "linear-gradient(135deg, #a5c4d4 0%, #def0f5 50%, #c0dce8 100%)",
  "linear-gradient(135deg, #b5a5d4 0%, #e8def5 50%, #d4c0e8 100%)",
];

const results = [
  { id: 1, img: draNatalia, category: "facial" as const, title: "Skinbooster + Hidratação", caption: "Pele luminosa e hidratada" },
  { id: 2, img: clinicExperience, category: "facial" as const, title: "Harmonização Global", caption: "Contorno e proporções refinados" },
  { id: 3, img: draNatalia, category: "facial" as const, title: "Preenchimento Labial", caption: "Volume natural e delicado" },
  { id: 4, img: clinicExperience, category: "corporal" as const, title: "Bioestimulador Corporal", caption: "Firmeza e qualidade de pele" },
  { id: 5, img: draNatalia, category: "corporal" as const, title: "Lipo Enzimática", caption: "Contorno corporal refinado" },
  { id: 6, img: clinicExperience, category: "corporal" as const, title: "Tratamento Postural", caption: "Silhueta harmônica e elegante" },
];

const filters: { key: Category; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "facial", label: "Facial" },
  { key: "corporal", label: "Corporal" },
];

const Results = () => {
  const [active, setActive] = useState<Category>("todos");
  const [open, setOpen] = useState<number | null>(null);

  const filtered = active === "todos" ? results : results.filter((r) => r.category === active);
  const current = results.find((r) => r.id === open);

  return (
    <section id="resultados" className="py-24 md:py-32 gradient-luxe relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-champagne/30 blur-3xl" />
      <div className="container mx-auto relative">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="gold-divider text-[11px] tracking-luxe uppercase text-gold">
              Galeria de resultados
            </span>
            <h2 className="mt-5 font-serif-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
              Resultados que
              <br />
              <span className="italic font-light">valorizam a beleza natural.</span>
            </h2>
            <p className="mt-6 text-foreground/65 leading-relaxed">
              Uma seleção cuidadosa de transformações reais, sempre com foco em naturalidade,
              equilíbrio e identidade.
            </p>
          </div>
        </Reveal>

        {/* Filtros */}
        <Reveal delay={120}>
          <div className="mt-12 flex justify-center gap-2 md:gap-3 flex-wrap">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`px-6 py-3 text-[11px] tracking-refined uppercase border transition-all duration-500 ${
                  active === f.key
                    ? "bg-ink text-background border-ink"
                    : "border-foreground/30 text-foreground/70 hover:border-gold hover:text-gold"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Galeria */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((r, i) => (
            <Reveal key={r.id} delay={i * 80}>
              <button
                onClick={() => setOpen(r.id)}
                className="group block w-full text-left"
              >
                <div className="relative overflow-hidden aspect-[4/5] bg-muted shadow-soft hover-lift">
                  <img
                    src={r.img}
                    alt={r.title}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    style={{
                      transitionDuration: "1200ms",
                      transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-[10px] tracking-luxe uppercase text-background/70">
                      {r.category}
                    </div>
                    <div className="mt-1 font-serif-display text-2xl text-background">{r.title}</div>
                    <div className="mt-1 text-xs text-background/80 font-light">{r.caption}</div>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 text-[10px] tracking-luxe uppercase text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Ampliar
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="mt-16 text-center">
            <p className="font-serif-display italic text-2xl text-foreground/80 max-w-xl mx-auto">
              "Sua melhor versão merece o cuidado de quem entende cada detalhe."
            </p>
            <a
              href="#contato"
              className="mt-8 inline-flex items-center justify-center px-10 py-4 bg-ink text-background text-xs tracking-refined uppercase hover:bg-foreground transition-all duration-500"
            >
              Quero o meu resultado
              <span className="ml-3">→</span>
            </a>
          </div>
        </Reveal>
      </div>

      {/* Modal */}
      {current && (
        <div
          className="fixed inset-0 z-[100] bg-ink/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setOpen(null)}
        >
          <button
            onClick={() => setOpen(null)}
            className="absolute top-6 right-6 text-background/80 hover:text-background"
            aria-label="Fechar"
          >
            <X size={28} />
          </button>
          <div
            className="relative max-w-2xl w-full bg-background overflow-hidden shadow-elegant"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img src={current.img} alt={current.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 md:p-8">
              <div className="text-[10px] tracking-luxe uppercase text-gold">{current.category}</div>
              <h3 className="mt-2 font-serif-display text-3xl text-ink">{current.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{current.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Results;
