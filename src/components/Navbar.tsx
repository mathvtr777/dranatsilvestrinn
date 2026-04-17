import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#procedimentos", label: "Procedimentos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#resultados", label: "Resultados" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-serif-display text-xl md:text-2xl tracking-tight text-ink">
            Natália Silvestrin
          </span>
          <span className="text-[10px] tracking-luxe uppercase text-gold mt-0.5">
            Harmonização Facial & Corporal
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-refined uppercase text-foreground/70 hover:text-gold transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden lg:inline-flex items-center justify-center text-xs tracking-refined uppercase border border-foreground/80 px-5 py-3 text-foreground hover:bg-foreground hover:text-background transition-all duration-500"
        >
          Agendar avaliação
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-refined uppercase text-foreground/80 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 text-center text-xs tracking-refined uppercase border border-foreground/80 px-5 py-3 text-foreground"
            >
              Agendar avaliação
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
