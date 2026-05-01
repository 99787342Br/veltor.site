import heroMacbook from "@/assets/veltor-hero-laptop.jpg";

const WHATSAPP_URL =
  "https://wa.me/5522981484193?text=Ol%C3%A1!%20Tenho%20interesse%20em%20um%20site%20profissional%20para%20minha%20empresa.";

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
          Criação de Sites Premium
        </p>

        <h1
          className="veltor-display mt-6 text-[18vw] md:text-[12rem] lg:text-[14rem] leading-[0.85] reveal"
          style={{ letterSpacing: "-0.06em" }}
        >
          VELTOR
        </h1>

        <p className="veltor-display mt-10 text-3xl md:text-5xl lg:text-6xl text-veltor-white max-w-4xl mx-auto reveal">
          Sites premium que redefinem a presença digital.
        </p>

        <p className="mt-6 text-base md:text-lg text-veltor-white/60 max-w-2xl mx-auto leading-relaxed reveal">
          Criamos experiências digitais modernas, rápidas e estratégicas com foco
          absoluto em autoridade, design e conversão.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4 reveal">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-veltor-white text-veltor-black text-[15px] font-medium hover:scale-[1.02] transition-transform duration-300"
          >
            Falar com um especialista
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
      <div className="relative mx-auto max-w-6xl px-6 md:px-10 mt-20 md:mt-28 reveal">
        <img
          src={heroMacbook}
          alt="MacBook exibindo um site premium criado pela VELTOR"
          width={1536}
          height={1024}
          className="w-full h-auto select-none pointer-events-none"
        />
      </div>
    </section>
  );
}
