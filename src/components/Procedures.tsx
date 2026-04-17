import Reveal from "./Reveal";
import { Sparkles, Heart } from "lucide-react";

const facial = [
  { name: "Botox", desc: "Suavização de linhas de expressão preservando a naturalidade do olhar.", benefit: "Aparência rejuvenescida" },
  { name: "Preenchimento Labial", desc: "Volume e contorno em harmonia com sua face, com acabamento delicado.", benefit: "Lábios definidos e naturais" },
  { name: "Bioestimulador de Colágeno", desc: "Estímulo gradual à produção de colágeno para uma pele firme e luminosa.", benefit: "Firmeza e viço progressivos" },
  { name: "Harmonização Global", desc: "Planejamento completo da face com leitura de proporções e identidade.", benefit: "Equilíbrio facial refinado" },
  { name: "Skinbooster", desc: "Hidratação profunda e qualidade de pele com aspecto saudável e sedoso.", benefit: "Pele iluminada e hidratada" },
  { name: "Fios de Sustentação", desc: "Lifting suave com reposicionamento delicado dos tecidos.", benefit: "Contorno facial elevado" },
];

const corporal = [
  { name: "Lipo Enzimática", desc: "Redução de medidas localizadas com protocolo personalizado.", benefit: "Contorno corporal refinado" },
  { name: "Hidrolipoclasia", desc: "Tratamento avançado para gordura localizada com segurança.", benefit: "Resultado expressivo e natural" },
  { name: "Bioestimulador Corporal", desc: "Firmeza e qualidade de pele em áreas como glúteos e abdômen.", benefit: "Pele firme e tonificada" },
  { name: "Intradermoterapia", desc: "Aplicações precisas para celulite, gordura e flacidez.", benefit: "Tratamento direcionado" },
];

const Card = ({ name, desc, benefit }: { name: string; desc: string; benefit: string }) => (
  <div className="group relative bg-card border border-border p-7 md:p-8 hover-lift transition-all duration-700 overflow-hidden">
    <div className="absolute top-0 left-0 w-12 h-px bg-gold transition-all duration-700 group-hover:w-full" />
    <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    <h4 className="font-serif-display text-2xl text-ink mt-3 relative transition-transform duration-500 group-hover:translate-x-1">{name}</h4>
    <p className="mt-3 text-sm text-foreground/65 leading-relaxed relative">{desc}</p>
    <div className="mt-6 pt-5 border-t border-border/70 relative">
      <div className="text-[10px] tracking-luxe uppercase text-foreground/50">Principal benefício</div>
      <div className="mt-1 text-sm text-gold font-medium">{benefit}</div>
    </div>
  </div>
);

const Procedures = () => {
  return (
    <section id="procedimentos" className="py-24 md:py-32 gradient-rose">
      <div className="container mx-auto">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="gold-divider text-[11px] tracking-luxe uppercase text-gold">
              Procedimentos
            </span>
            <h2 className="mt-5 font-serif-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
              Protocolos exclusivos,
              <br />
              <span className="italic font-light">resultados naturais.</span>
            </h2>
            <p className="mt-6 text-foreground/65 leading-relaxed">
              Cada técnica é cuidadosamente escolhida para realçar o que há de mais bonito em você,
              respeitando sua identidade e suas expressões.
            </p>
          </div>
        </Reveal>

        {/* Facial */}
        <div className="mt-20">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-4">
                <Sparkles className="text-gold" size={20} strokeWidth={1.2} />
                <h3 className="font-serif-display text-3xl md:text-4xl text-ink">
                  Harmonização Facial
                </h3>
              </div>
              <span className="text-xs tracking-refined uppercase text-foreground/50">
                Estética avançada
              </span>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facial.map((p, i) => (
              <Reveal key={p.name} delay={i * 90} variant="up">
                <Card {...p} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Corporal */}
        <div className="mt-24">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-4">
                <Heart className="text-gold" size={20} strokeWidth={1.2} />
                <h3 className="font-serif-display text-3xl md:text-4xl text-ink">
                  Harmonização Corporal
                </h3>
              </div>
              <span className="text-xs tracking-refined uppercase text-foreground/50">
                Cuidado refinado
              </span>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporal.map((p, i) => (
              <Reveal key={p.name} delay={i * 90} variant="scale">
                <Card {...p} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Procedures;
