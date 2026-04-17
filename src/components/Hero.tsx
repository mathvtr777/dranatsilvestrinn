import draNatalia from "@/assets/dra-natalia.jpg";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden gradient-luxe"
    >
      {/* Subtle decorative blobs */}
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-rose/40 blur-3xl opacity-60" />
      <div className="absolute -bottom-40 -left-32 w-[520px] h-[520px] rounded-full bg-champagne/40 blur-3xl opacity-50" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Texto */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="animate-fade-up">
              <span className="gold-divider text-[11px] tracking-luxe uppercase text-gold">
                Estética Avançada
              </span>
            </div>

            <h1 className="mt-6 font-serif-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] text-ink animate-fade-up" style={{ animationDelay: "120ms" }}>
              Dra. Natália
              <br />
              <span className="italic font-light text-foreground/90">Silvestrin</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-foreground/70 max-w-xl font-light leading-relaxed animate-fade-up" style={{ animationDelay: "240ms" }}>
              Harmonização Facial & Corporal — realçando sua beleza com naturalidade, técnica e sofisticação.
            </p>

            <p className="mt-5 font-serif-display italic text-xl md:text-2xl text-foreground/80 animate-fade-up" style={{ animationDelay: "320ms" }}>
              "Exclusividade e excelência em cada detalhe."
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "440ms" }}>
              <a
                href="#contato"
                className="group inline-flex items-center justify-center px-8 py-4 bg-ink text-background text-xs tracking-refined uppercase hover:bg-foreground transition-all duration-500 shadow-soft"
              >
                Agendar avaliação
                <span className="ml-3 transition-transform duration-500 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#resultados"
                className="inline-flex items-center justify-center px-8 py-4 border border-foreground/70 text-foreground text-xs tracking-refined uppercase hover:bg-foreground hover:text-background transition-all duration-500"
              >
                Ver resultados
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 max-w-md animate-fade-up" style={{ animationDelay: "560ms" }}>
              <div>
                <div className="font-serif-display text-4xl text-gold">+2.000</div>
                <div className="mt-1 text-[11px] tracking-refined uppercase text-foreground/60">
                  Atendimentos realizados
                </div>
              </div>
              <div>
                <div className="font-serif-display text-4xl text-gold">CRBM</div>
                <div className="mt-1 text-[11px] tracking-refined uppercase text-foreground/60">
                  Reg. 5-13377
                </div>
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div className="lg:col-span-5 order-1 lg:order-2 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-champagne/50 to-rose/40 blur-2xl opacity-70" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
                <img
                  src={draNatalia}
                  alt="Dra. Natália Silvestrin — Harmonização Facial e Corporal"
                  className="w-full h-full object-cover"
                  width={800}
                  height={1000}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
              </div>
              {/* badge */}
              <div className="absolute -bottom-6 -left-6 bg-background/95 backdrop-blur-sm border border-border px-6 py-4 shadow-soft hidden md:block">
                <div className="text-[10px] tracking-luxe uppercase text-foreground/50">CRBM</div>
                <div className="font-serif-display text-lg text-ink">5-13377</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-gold text-background px-5 py-3 hidden md:block">
                <div className="text-[9px] tracking-luxe uppercase opacity-80">Excelência</div>
                <div className="font-serif-display text-sm">Premium</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-float">
        <span className="text-[10px] tracking-luxe uppercase text-foreground/50">Descubra</span>
        <div className="w-px h-10 bg-foreground/30" />
      </div>
    </section>
  );
};

export default Hero;
