const stats = [
  { v: "1:1", l: "Atendimento personalizado" },
  { v: "100%", l: "Projetos sob medida" },
  { v: "24h", l: "Resposta consultiva" },
  { v: "∞", l: "Foco em qualidade" },
];

export function TrustBar() {
  return (
    <section className="bg-veltor-black text-veltor-white border-t border-veltor-line-dark py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="veltor-eyebrow text-veltor-white/40 text-center reveal">
          Qualidade acima de quantidade
        </p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-veltor-line-dark">
          {stats.map((s, i) => (
            <div
              key={s.l}
              className="reveal bg-veltor-black px-6 py-10 text-center"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="veltor-display text-4xl md:text-6xl">{s.v}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-veltor-white/50">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}