const items = [
  {
    quote:
      "A entrega da VELTOR mudou completamente a percepção da nossa marca. Hoje somos vistos como referência no nosso segmento.",
    name: "Rafael Monteiro",
    role: "CEO · Studio Arquitetura",
  },
  {
    quote:
      "Profissionalismo absoluto do briefing à entrega. O site ficou em outro nível — exatamente o posicionamento que buscávamos.",
    name: "Carolina Vieira",
    role: "Diretora · Vieira Advocacia",
  },
  {
    quote:
      "Em 30 dias triplicamos os contatos qualificados. O design transmite a autoridade que a nossa empresa precisava.",
    name: "Lucas Andrade",
    role: "Fundador · Andrade Consultoria",
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
          <p className="veltor-eyebrow">Clientes</p>
          <h2 className="veltor-display mt-6 text-5xl md:text-7xl">
            A palavra de quem
            <br />
            <span className="text-veltor-muted">já evoluiu com a VELTOR.</span>
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