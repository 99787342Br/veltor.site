const WHATSAPP_URL =
  "https://wa.me/5522981484193?text=Ol%C3%A1!%20Tenho%20interesse%20em%20um%20site%20profissional%20para%20minha%20empresa.";

export function Pricing() {
  return (
    <section id="investimento" className="bg-veltor-white text-veltor-gray py-32 md:py-48">
      <div className="mx-auto max-w-5xl px-6 md:px-10 text-center">
        <p className="veltor-eyebrow reveal">Investimento</p>
        <p className="mt-10 text-base md:text-lg text-veltor-muted reveal">
          A partir de
        </p>
        <h2
          className="veltor-display mt-3 text-7xl md:text-[10rem] lg:text-[12rem] reveal"
          style={{ letterSpacing: "-0.06em" }}
        >
          R$ 400
        </h2>
        <p className="mt-8 text-lg md:text-xl text-veltor-muted max-w-2xl mx-auto leading-relaxed reveal">
          Projetos exclusivos com foco em performance, design e resultado real.
        </p>
        <div className="mt-12 reveal">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-veltor-black text-veltor-white text-[15px] font-medium hover:scale-[1.02] transition-transform duration-300"
          >
            Solicitar proposta
          </a>
        </div>
      </div>
    </section>
  );
}
