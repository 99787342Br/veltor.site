import heroMacbook from "@/assets/veltor-floating-macbook.png";

const WHATSAPP_URL =
  "https://wa.me/5522981484193?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20an%C3%A1lise%20estrat%C3%A9gica%20para%20minha%20empresa.";

export function Hero() {
  return (
    <section
      id="top"
      className="relative bg-veltor-black text-veltor-white overflow-hidden pt-32 md:pt-40 pb-0"
    >
      {/* Subtle radial highlight */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.08), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 text-center">
        <p className="veltor-eyebrow text-veltor-white/60 reveal">
          Estúdio digital de alto padrão
        </p>

        <h1
          className="veltor-display mt-6 text-[18vw] md:text-[12rem] lg:text-[14rem] leading-[0.85] reveal"
          style={{ letterSpacing: "-0.06em" }}
        >
          <span className="veltor-shimmer-text">VELTOR</span>
        </h1>

        <p className="veltor-display mt-10 text-3xl md:text-5xl lg:text-6xl text-veltor-white max-w-4xl mx-auto reveal">
          Presença digital que posiciona, encanta e converte.
        </p>

        <p className="mt-6 text-base md:text-lg text-veltor-white/60 max-w-2xl mx-auto leading-relaxed reveal">
          Criamos sites sob medida para empresas que recusam o comum. Design global,
          engenharia de performance e estratégia de marca em uma única entrega.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4 reveal">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="veltor-btn-premium inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-veltor-white text-veltor-black text-[15px] font-medium"
          >
            Falar com Especialista
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-veltor-line-dark text-veltor-white text-[15px] font-medium hover:bg-veltor-white/5 transition-colors"
          >
            Ver serviços
          </a>
        </div>
      </div>

      {/* Hero device mockup */}
      <div className="relative mx-auto max-w-6xl px-6 md:px-10 mt-16 md:mt-24 reveal">
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] rounded-full blur-3xl veltor-glow"
          style={{
            background:
              "radial-gradient(ellipse, rgba(120,160,255,0.18), rgba(255,255,255,0.04) 50%, transparent 70%)",
          }}
        />
        <div className="relative">
          <img
            src={heroMacbook}
            alt="MacBook premium exibindo um site VELTOR"
            width={1536}
            height={1024}
            className="veltor-float-3d w-full h-auto select-none pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}
