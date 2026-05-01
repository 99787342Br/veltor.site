const WHATSAPP_URL =
  "https://wa.me/5522981484193?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20an%C3%A1lise%20estrat%C3%A9gica%20para%20minha%20empresa.";

export function Pricing() {
  return (
    <section
      id="investimento"
      className="relative bg-veltor-white text-veltor-gray py-32 md:py-48 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, oklch(0.96 0 0), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 md:px-10 text-center">
        <p className="veltor-eyebrow reveal">Projetos sob medida</p>
        <h2
          className="veltor-display mt-8 text-5xl md:text-7xl lg:text-8xl reveal"
        >
          Cada projeto é único.<br className="hidden md:block" />
          <span className="text-veltor-muted">Cada marca, irrepetível.</span>
        </h2>
        <p className="mt-10 text-lg md:text-xl text-veltor-muted max-w-2xl mx-auto leading-relaxed reveal">
          Não vendemos apenas sites. Construímos posicionamento, autoridade e
          resultado para empresas que querem crescer de verdade.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-veltor-line max-w-4xl mx-auto reveal">
          {[
            { t: "Análise estratégica", d: "Entendemos o seu mercado, marca e público antes de qualquer pixel." },
            { t: "Design exclusivo", d: "Identidade visual única, criada do zero para sua autoridade." },
            { t: "Resultado mensurável", d: "Performance, SEO e conversão como métricas centrais." },
          ].map((b) => (
            <div key={b.t} className="bg-veltor-white p-8 text-left">
              <p className="text-sm font-semibold text-veltor-gray">{b.t}</p>
              <p className="mt-2 text-sm text-veltor-muted leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 reveal">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="veltor-btn-premium inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-veltor-black text-veltor-white text-[15px] font-medium"
          >
            Receber Análise Estratégica
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-veltor-muted">
            Atendimento exclusivo · Vagas limitadas por mês
          </p>
        </div>
      </div>
    </section>
  );
}
