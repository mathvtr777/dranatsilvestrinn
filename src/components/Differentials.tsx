import Reveal from "./Reveal";
import { Crown, Gem, Users, ScanFace, Leaf, Heart, Sparkle } from "lucide-react";

const items = [
  { icon: Crown, title: "Atendimento exclusivo", desc: "Agenda restrita para garantir tempo, presença e cuidado em cada consulta." },
  { icon: Gem, title: "Excelência em cada detalhe", desc: "Materiais premium e protocolos atualizados para entregas impecáveis." },
  { icon: Users, title: "+2.000 atendimentos", desc: "Experiência consolidada com pacientes que retornam pelo resultado e pela experiência." },
  { icon: ScanFace, title: "Análise personalizada", desc: "Leitura facial e corporal individual antes de qualquer recomendação." },
  { icon: Leaf, title: "Resultados naturais", desc: "Estética que valoriza sua identidade — discreta, elegante e duradoura." },
  { icon: Heart, title: "Experiência acolhedora", desc: "Ambiente sereno, refinado e pensado em cada detalhe sensorial." },
  { icon: Sparkle, title: "Cuidado do início ao fim", desc: "Acompanhamento completo, da avaliação ao pós-procedimento." },
];

const Differentials = () => {
  return (
    <section id="diferenciais" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="gold-divider text-[11px] tracking-luxe uppercase text-gold">
              Diferenciais
            </span>
            <h2 className="mt-5 font-serif-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
              Uma experiência
              <br />
              <span className="italic font-light">verdadeiramente exclusiva.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60">
          {items.slice(0, 4).map((it, i) => (
            <Reveal key={it.title} delay={i * 90} variant="up">
              <div className="bg-background p-8 md:p-10 h-full hover:bg-muted/40 transition-all duration-700 group relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <it.icon className="text-gold transition-all duration-700 group-hover:scale-125 group-hover:rotate-6" size={28} strokeWidth={1} />
                <h3 className="mt-6 font-serif-display text-2xl text-ink transition-transform duration-500 group-hover:translate-x-1">{it.title}</h3>
                <p className="mt-3 text-sm text-foreground/65 leading-relaxed">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 mt-px">
          {items.slice(4).map((it, i) => (
            <Reveal key={it.title} delay={i * 90} variant="up">
              <div className="bg-background p-8 md:p-10 h-full hover:bg-muted/40 transition-all duration-700 group relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <it.icon className="text-gold transition-all duration-700 group-hover:scale-125 group-hover:rotate-6" size={28} strokeWidth={1} />
                <h3 className="mt-6 font-serif-display text-2xl text-ink transition-transform duration-500 group-hover:translate-x-1">{it.title}</h3>
                <p className="mt-3 text-sm text-foreground/65 leading-relaxed">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
