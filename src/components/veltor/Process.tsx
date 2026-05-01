const steps = [
  {
    n: "01",
    t: "Imersão estratégica",
    d: "Mergulhamos no seu negócio, mercado e público para entender o que realmente posiciona sua marca.",
  },
  {
    n: "02",
    t: "Direção criativa",
    d: "Definimos a identidade visual, hierarquia de conteúdo e narrativa que vai gerar desejo de compra.",
  },
  {
    n: "03",
    t: "Engenharia premium",
    d: "Construímos o produto digital com performance, SEO e arquitetura escalável de classe mundial.",
  },
  {
    n: "04",
    t: "Lançamento e evolução",
    d: "Acompanhamento dedicado para garantir que sua presença digital continue gerando autoridade.",
  },
];

export function Process() {
  return (
    <section className="bg-veltor-black text-veltor-white py-32 md:py-48 border-t border-veltor-line-dark">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl reveal">
          <p className="veltor-eyebrow text-veltor-white/50">Metodologia</p>
          <h2 className="veltor-display mt-6 text-5xl md:text-7xl">
            Um processo<br />
            <span className="text-veltor-white/50">obsessivo por detalhe.</span>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-veltor-line-dark">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal bg-veltor-black p-10 group veltor-card-hover"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="veltor-display text-5xl text-veltor-white/30 group-hover:text-veltor-white/80 transition-colors duration-500">
                {s.n}
              </p>
              <h3 className="mt-8 text-xl font-semibold tracking-veltor-tight">
                {s.t}
              </h3>
              <p className="mt-3 text-sm text-veltor-white/55 leading-relaxed">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}