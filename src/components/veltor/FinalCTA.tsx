const WHATSAPP_URL =
  "https://wa.me/5522981484193?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20an%C3%A1lise%20estrat%C3%A9gica%20para%20minha%20empresa.";

import floatingMac from "@/assets/veltor-floating-macbook.png";

export function FinalCTA() {
  return (
    <section className="relative bg-veltor-black text-veltor-white py-32 md:py-48 overflow-hidden border-t border-veltor-line-dark">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(120,160,255,0.15), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 md:px-10 text-center">
        <p className="veltor-eyebrow text-veltor-white/50 reveal">Próximo passo</p>
        <h2 className="veltor-display mt-6 text-5xl md:text-7xl lg:text-8xl reveal">
          Seu negócio merece uma<br className="hidden md:block" />
          <span className="veltor-shimmer-text">presença digital de alto padrão.</span>
        </h2>
        <p className="mt-10 text-lg md:text-xl text-veltor-white/60 max-w-2xl mx-auto leading-relaxed reveal">
          Solicite uma análise personalizada com um especialista VELTOR e descubra
          como elevar sua marca ao próximo nível.
        </p>
        <div className="mt-12 reveal">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="veltor-btn-premium inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-veltor-white text-veltor-black text-[15px] font-medium"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M20.52 3.48A11.93 11.93 0 0012.04 0C5.5 0 .2 5.3.2 11.84a11.8 11.8 0 001.59 5.93L0 24l6.4-1.68a11.83 11.83 0 005.64 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.43zM12.05 21.3h-.01a9.45 9.45 0 01-4.81-1.32l-.34-.2-3.79 1 1.01-3.69-.22-.38a9.5 9.5 0 1117.6-5.06c0 5.24-4.27 9.65-9.44 9.65zm5.43-7.14c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.16c-.17.2-.35.22-.65.07a8.07 8.07 0 01-2.39-1.47 8.94 8.94 0 01-1.65-2.05c-.17-.3 0-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.1 4.5.71.3 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.18-1.41-.07-.13-.27-.2-.57-.35z" />
            </svg>
            Solicitar Projeto Premium
          </a>
          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-veltor-white/40">
            Resposta em até 24 horas · Atendimento consultivo
          </p>
        </div>

        <div className="relative mt-20 max-w-3xl mx-auto reveal">
          <img
            src={floatingMac}
            alt="MacBook premium VELTOR"
            width={1536}
            height={1024}
            loading="lazy"
            className="veltor-float-3d w-full h-auto opacity-90"
          />
        </div>
      </div>
    </section>
  );
}
