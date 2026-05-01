import { useEffect, useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/5522981484193?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20an%C3%A1lise%20estrat%C3%A9gica%20para%20minha%20empresa.";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-veltor-black/60 border-b border-veltor-line-dark"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-14 flex items-center justify-between">
        <a
          href="#top"
          className="text-veltor-white text-[15px] font-semibold tracking-veltor-tight"
        >
          VELTOR
        </a>
        <nav className="hidden md:flex items-center gap-9 text-[13px] text-veltor-white/80">
          <a href="#servicos" className="hover:text-veltor-white transition-colors">Serviços</a>
          <a href="#beneficios" className="hover:text-veltor-white transition-colors">Benefícios</a>
          <a href="#investimento" className="hover:text-veltor-white transition-colors">Projetos</a>
          <a href="#portfolio" className="hover:text-veltor-white transition-colors">Portfólio</a>
          <a href="#depoimentos" className="hover:text-veltor-white transition-colors">Compromisso</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="veltor-btn-premium text-[13px] font-medium px-4 py-1.5 rounded-full bg-veltor-white text-veltor-black"
        >
          Falar com Especialista
        </a>
      </div>
    </header>
  );
}
