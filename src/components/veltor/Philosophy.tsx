export function Philosophy() {
  return (
    <section className="bg-veltor-black text-veltor-white py-32 md:py-48 border-t border-veltor-line-dark">
      <div className="mx-auto max-w-5xl px-6 md:px-10 text-center">
        <p className="veltor-eyebrow text-veltor-white/50 reveal">Filosofia de design</p>
        <blockquote className="mt-10 reveal">
          <p
            className="text-3xl md:text-5xl lg:text-6xl font-light leading-[1.15] tracking-veltor-tight"
            style={{ letterSpacing: "-0.025em" }}
          >
            “Simplicidade é o mais alto<br className="hidden md:block" /> nível de sofisticação.”
          </p>
        </blockquote>
        <p className="mt-12 text-base md:text-lg text-veltor-white/60 max-w-xl mx-auto reveal">
          Cada detalhe é pensado para gerar impacto visual, clareza e conversão.
        </p>
      </div>
    </section>
  );
}
