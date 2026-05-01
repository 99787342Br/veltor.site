import techImage from "@/assets/veltor-tech-authority.jpg";

export function TechAuthority() {
  return (
    <section className="bg-veltor-black text-veltor-white py-32 md:py-48 border-t border-veltor-line-dark overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 reveal">
            <p className="veltor-eyebrow text-veltor-white/50">Tecnologia</p>
            <h2 className="veltor-display mt-6 text-5xl md:text-6xl lg:text-7xl">
              Engenharia<br /> por trás do design.
            </h2>
            <p className="mt-8 text-lg text-veltor-white/60 leading-relaxed max-w-md">
              Performance de classe mundial, código limpo e arquitetura escalável.
              Cada projeto VELTOR é construído sobre fundamentos técnicos sólidos
              para entregar velocidade, segurança e resultados mensuráveis.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <p className="veltor-display text-4xl md:text-5xl">99</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-veltor-white/40">
                  PageSpeed
                </p>
              </div>
              <div>
                <p className="veltor-display text-4xl md:text-5xl">&lt;1s</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-veltor-white/40">
                  Carregamento
                </p>
              </div>
              <div>
                <p className="veltor-display text-4xl md:text-5xl">100%</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-veltor-white/40">
                  Responsivo
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <div className="relative rounded-3xl overflow-hidden bg-[oklch(0.04_0_0)]">
              <img
                src={techImage}
                alt="Painéis 3D futuristas exibindo dashboards e métricas"
                width={1536}
                height={1024}
                loading="lazy"
                className="w-full h-auto select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
