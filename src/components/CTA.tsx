import Reveal from "./Reveal";

const CTA = () => {
  return (
    <section id="contato" className="py-24 md:py-32 bg-ink text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-rose/20 blur-3xl" />
      </div>

      <div className="container mx-auto relative">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <span className="gold-divider text-[11px] tracking-luxe uppercase text-gold-soft">
              Sua avaliação exclusiva
            </span>
            <h2 className="mt-6 font-serif-display text-4xl md:text-6xl lg:text-7xl text-background leading-[1.05]">
              Viva uma experiência
              <br />
              <span className="italic font-light text-gold-soft">premium em harmonização.</span>
            </h2>
            <p className="mt-7 text-background/70 leading-relaxed max-w-xl mx-auto">
              Agende sua avaliação personalizada com a Dra. Natália Silvestrin e descubra o que torna
              cada atendimento único — naturalidade, técnica e exclusividade em cada detalhe.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-10 py-5 bg-gold text-ink text-xs tracking-refined uppercase hover:bg-background transition-all duration-500 shadow-gold"
              >
                Agendar minha avaliação
                <span className="ml-3 transition-transform duration-500 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#resultados"
                className="inline-flex items-center justify-center px-10 py-5 border border-background/40 text-background text-xs tracking-refined uppercase hover:bg-background hover:text-ink transition-all duration-500"
              >
                Conhecer resultados
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[11px] tracking-refined uppercase text-background/50">
              <span>CRBM 5-13377</span>
              <span className="w-1 h-1 rounded-full bg-background/30" />
              <span>+2.000 atendimentos</span>
              <span className="w-1 h-1 rounded-full bg-background/30" />
              <span>Atendimento exclusivo</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTA;
