import Reveal from "./Reveal";
import draNatalia from "@/assets/dra-natalia.jpg";

const pillars = [
  { title: "Olhar estético apurado", desc: "Cada plano é desenhado com sensibilidade e precisão para realçar a sua beleza única." },
  { title: "Foco em naturalidade", desc: "Resultados que respeitam suas proporções e expressões — você, em sua melhor versão." },
  { title: "Excelência técnica", desc: "Protocolos atualizados e materiais de alta performance para entregas seguras e refinadas." },
  { title: "Cuidado individualizado", desc: "Uma escuta atenta antes de qualquer procedimento. Você é o centro de tudo." },
];

const Authority = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
                <img
                  src={draNatalia}
                  alt="Dra. Natália Silvestrin"
                  className="w-full h-full object-cover scale-105"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 border border-gold hidden md:block" />
              <div className="absolute -top-6 -left-6 bg-background px-6 py-5 shadow-soft hidden md:block">
                <div className="font-serif-display text-3xl text-gold leading-none">+2k</div>
                <div className="mt-1 text-[10px] tracking-luxe uppercase text-foreground/60">Atendimentos</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <span className="gold-divider text-[11px] tracking-luxe uppercase text-gold">
                Sobre a profissional
              </span>
              <h2 className="mt-5 font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-ink">
                Beleza que respeita
                <br />
                <span className="italic font-light">a sua essência.</span>
              </h2>
              <p className="mt-7 text-foreground/70 leading-relaxed">
                Há anos dedicada à harmonização facial e corporal, a Dra. Natália Silvestrin combina
                técnica refinada, olhar estético sensível e um cuidado verdadeiramente individualizado.
                Cada paciente é recebida em um ambiente acolhedor, com escuta atenta e planejamento
                exclusivo — porque excelência se constrói nos detalhes.
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                {pillars.map((p, i) => (
                  <Reveal key={p.title} delay={i * 80}>
                    <div className="border-t border-border pt-5">
                      <h3 className="font-serif-display text-xl text-ink">{p.title}</h3>
                      <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{p.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-10 inline-flex items-center gap-3 text-xs tracking-refined uppercase text-foreground/60">
                <span className="w-8 h-px bg-gold" />
                CRBM 5-13377 · Profissional registrada
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Authority;
