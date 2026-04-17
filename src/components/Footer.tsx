import { Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-10 md:gap-12">
          <div className="md:col-span-2">
            <div className="font-serif-display text-2xl text-ink">Dra. Natália Silvestrin</div>
            <div className="mt-1 text-[11px] tracking-luxe uppercase text-gold">
              Harmonização Facial & Corporal
            </div>
            <p className="mt-5 text-sm text-foreground/60 leading-relaxed max-w-md">
              Exclusividade e excelência em cada detalhe. Uma experiência premium em estética avançada,
              dedicada a realçar sua beleza natural.
            </p>
            <div className="mt-6 text-[11px] tracking-refined uppercase text-foreground/50">
              CRBM 5-13377
            </div>
          </div>

          <div>
            <h4 className="text-[11px] tracking-luxe uppercase text-foreground/50 mb-5">Contato</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-gold mt-1" />
                <a href="tel:+5500000000000" className="hover:text-gold transition-colors">
                  (00) 00000-0000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-gold mt-1" />
                <a href="mailto:contato@dranatalia.com" className="hover:text-gold transition-colors">
                  contato@dranatalia.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold mt-1" />
                <span>Endereço da clínica<br />Cidade — Estado</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-luxe uppercase text-foreground/50 mb-5">Redes</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 hover:text-gold transition-colors"
                >
                  <Instagram size={14} className="text-gold" />
                  @dranataliasilvestrin
                </a>
              </li>
            </ul>
            <a
              href="#contato"
              className="mt-8 inline-flex text-[11px] tracking-refined uppercase border border-foreground/40 px-5 py-3 hover:bg-foreground hover:text-background transition-all duration-500"
            >
              Agendar avaliação
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] tracking-refined uppercase text-foreground/45">
            © {new Date().getFullYear()} Dra. Natália Silvestrin. Todos os direitos reservados.
          </p>
          <p className="text-[11px] tracking-refined uppercase text-foreground/45">
            Estética de excelência · Resultados naturais
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
