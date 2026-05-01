const services = [
  {
    title: "Sites institucionais premium",
    description: "Presença digital sólida e profissional para empresas que querem ser referência.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18" />
      </svg>
    ),
  },
  {
    title: "Landing pages de alta conversão",
    description: "Páginas estratégicas projetadas para transformar visitantes em clientes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18" /><path d="M5 10l7-7 7 7" />
      </svg>
    ),
  },
  {
    title: "Lojas virtuais modernas",
    description: "E-commerces rápidos, elegantes e focados em performance e vendas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h18l-2 12H5L3 6z" /><circle cx="9" cy="21" r="1" /><circle cx="17" cy="21" r="1" />
      </svg>
    ),
  },
  {
    title: "Sites para negócios locais",
    description: "Visibilidade e credibilidade para conquistar clientes na sua região.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-7-7-7-12a7 7 0 1114 0c0 5-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Presença digital profissional",
    description: "Identidade coesa e estratégica em todos os pontos de contato online.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-veltor-white text-veltor-gray py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl reveal">
          <p className="veltor-eyebrow">Serviços</p>
          <h2 className="veltor-display mt-6 text-5xl md:text-7xl">
            O que entregamos.
          </h2>
          <p className="mt-6 text-lg text-veltor-muted max-w-xl">
            Soluções digitais sob medida para marcas que valorizam design, performance e resultado.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-veltor-line">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal group bg-veltor-white p-10 md:p-14 transition-colors duration-300 hover:bg-[oklch(0.985_0_0)]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-10 h-10 text-veltor-gray transition-transform duration-500 group-hover:-translate-y-1">
                {s.icon}
              </div>
              <h3 className="mt-8 text-2xl md:text-3xl font-semibold tracking-veltor-tight text-veltor-gray">
                {s.title}
              </h3>
              <p className="mt-3 text-base text-veltor-muted leading-relaxed max-w-md">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
