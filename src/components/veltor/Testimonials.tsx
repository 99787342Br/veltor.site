const items = [
  {
    quote:
      "Cada projeto recebe atenção exclusiva. Tratamos o seu site como se fosse o único da agenda.",
    name: "Atendimento personalizado",
    role: "Relação direta, sem intermediários",
  },
  {
    quote:
      "Design, código e estratégia construídos sob medida — nada de modelos prontos ou soluções genéricas.",
    name: "Projetos sob medida",
    role: "Cada detalhe pensado para a sua marca",
  },
  {
    quote:
      "Construímos resultados com excelência desde o primeiro projeto. Qualidade acima de quantidade, sempre.",
    name: "Foco total em qualidade",
    role: "Padrão premium em cada entrega",
  },
];

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="bg-veltor-white text-veltor-gray py-32 md:py-48"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl reveal">
          <p className="veltor-eyebrow">Compromisso</p>
          <h2 className="veltor-display mt-6 text-5xl md:text-7xl">
            O padrão VELTOR
            <br />
            <span className="text-veltor-muted">em cada projeto.</span>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <figure
              key={it.name}
              className="reveal veltor-card-hover bg-[oklch(0.985_0_0)] border border-veltor-line rounded-2xl p-8 md:p-10 flex flex-col"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-veltor-muted/40"
                aria-hidden
              >
                <path d="M7 7h4v4H8c0 2 1 3 3 3v3c-4 0-6-2-6-6V7zm9 0h4v4h-3c0 2 1 3 3 3v3c-4 0-6-2-6-6V7z" />
              </svg>
              <blockquote className="mt-6 text-lg leading-relaxed text-veltor-gray flex-1">
                {it.quote}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-veltor-line">
                <p className="text-sm font-semibold text-veltor-gray">{it.name}</p>
                <p className="text-sm text-veltor-muted">{it.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}