import Reveal from "./Reveal";
import clinic from "@/assets/clinic-experience.jpg";

const steps = [
  { n: "01", title: "Avaliação personalizada", desc: "Conversa cuidadosa, escuta atenta e leitura estética individualizada." },
  { n: "02", title: "Planejamento individual", desc: "Plano exclusivo desenhado para realçar sua identidade com naturalidade." },
  { n: "03", title: "Procedimento com técnica", desc: "Execução precisa, com materiais premium e foco total em segurança." },
  { n: "04", title: "Acompanhamento contínuo", desc: "Cuidado dedicado no pós, garantindo evolução e tranquilidade." },
];

const Experience = () => {
  return (
    <section className="py-24 md:py-32 gradient-rose">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal variant="left">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden shadow-elegant img-zoom-hover">
                <img
                  src={clinic}
                  alt="Ambiente premium da clínica"
                  className="w-full h-full object-cover animate-ken-burns"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 px-6 py-4 bg-background border border-gold/40 shadow-soft hidden md:block animate-float-slow">
                <div className="text-[10px] tracking-luxe uppercase text-foreground/50">Ambiente</div>
                <div className="font-serif-display text-lg text-ink">Boutique & sereno</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} variant="right">
            <div>
              <span className="gold-divider text-[11px] tracking-luxe uppercase text-gold">
                A experiência
              </span>
              <h2 className="mt-5 font-serif-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
                Uma jornada
                <br />
                <span className="italic font-light">do início ao cuidado contínuo.</span>
              </h2>

              <div className="mt-10 space-y-6">
                {steps.map((s, i) => (
                  <Reveal key={s.n} delay={i * 100} variant="up">
                    <div className="flex gap-6 group cursor-default">
                      <div className="font-serif-display text-3xl text-gold/80 group-hover:text-gold group-hover:scale-110 transition-all duration-500">
                        {s.n}
                      </div>
                      <div className="flex-1 pb-6 border-b border-border/70 transition-all duration-500 group-hover:border-gold/60">
                        <h3 className="font-serif-display text-2xl text-ink transition-transform duration-500 group-hover:translate-x-1">{s.title}</h3>
                        <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Experience;
