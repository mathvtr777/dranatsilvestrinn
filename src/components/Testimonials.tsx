import Reveal from "./Reveal";
import { Quote } from "lucide-react";

const items = [
  {
    name: "Mariana A.",
    role: "Paciente desde 2023",
    text: "Saí da Dra. Natália me sentindo eu mesma — só que mais leve e confiante. O olhar dela para a naturalidade é incrível.",
  },
  {
    name: "Camila R.",
    role: "Harmonização Facial",
    text: "Cada detalhe foi cuidado. Desde a recepção até o pós, é uma experiência de outro nível. Resultado discreto e elegante, exatamente como eu queria.",
  },
  {
    name: "Júlia M.",
    role: "Bioestimulador Corporal",
    text: "Profissional impecável. Senti segurança em cada etapa e o resultado superou expectativas. Indico de olhos fechados.",
  },
  {
    name: "Luísa P.",
    role: "Preenchimento Labial",
    text: "Volume sutil, contorno perfeito. Ninguém percebe que fiz — só notam que estou mais bonita. É exatamente isso que eu buscava.",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="gold-divider text-[11px] tracking-luxe uppercase text-gold">
              Depoimentos
            </span>
            <h2 className="mt-5 font-serif-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
              Histórias que
              <br />
              <span className="italic font-light">inspiram autoestima.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6 md:gap-8">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="relative bg-muted/40 border border-border p-8 md:p-10 hover-lift transition-all duration-500">
                <Quote className="text-gold/60 absolute top-6 right-6" size={32} strokeWidth={1} />
                <blockquote className="font-serif-display text-xl md:text-2xl text-ink leading-relaxed italic">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-border/70">
                  <div className="font-medium text-sm text-ink">{t.name}</div>
                  <div className="text-xs text-foreground/55 tracking-refined uppercase mt-1">
                    {t.role}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
