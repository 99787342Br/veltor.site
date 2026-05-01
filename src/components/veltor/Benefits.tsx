const benefits = [
  "Credibilidade imediata",
  "Autoridade digital",
  "Mais clientes qualificados",
  "Mais vendas",
  "Posicionamento forte no mercado",
];

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="bg-veltor-black text-veltor-white py-32 md:py-48 border-t border-veltor-line-dark"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl reveal">
          <p className="veltor-eyebrow text-veltor-white/50">Benefícios</p>
          <h2 className="veltor-display mt-6 text-5xl md:text-7xl">
            Resultados que se sentem.
          </h2>
        </div>

        <ul className="mt-20 border-t border-veltor-line-dark">
          {benefits.map((b, i) => (
            <li
              key={b}
              className="reveal border-b border-veltor-line-dark"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="group flex items-baseline gap-6 md:gap-12 py-8 md:py-12 transition-colors duration-500 hover:text-veltor-white">
                <span className="text-sm md:text-base font-medium text-veltor-white/40 tabular-nums w-10">
                  0{i + 1}
                </span>
                <span className="veltor-display text-3xl md:text-6xl lg:text-7xl flex-1">
                  {b}
                </span>
                <span className="hidden md:inline-block text-veltor-white/30 group-hover:text-veltor-white/80 transition-colors">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
