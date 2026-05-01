import imac from "@/assets/portfolio-imac.jpg";
import macbook from "@/assets/portfolio-macbook.jpg";
import iphone from "@/assets/portfolio-iphone.jpg";

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-veltor-black text-veltor-white py-32 md:py-48 border-t border-veltor-line-dark"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl reveal">
          <p className="veltor-eyebrow text-veltor-white/50">Portfólio</p>
          <h2 className="veltor-display mt-6 text-5xl md:text-7xl">
            Projetos com presença.
          </h2>
          <p className="mt-6 text-lg text-veltor-white/60 max-w-xl">
            Desenvolvidos para empresas que desejam elevar sua presença digital
            e posicionamento de marca.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* iMac large left */}
          <div className="md:col-span-7 reveal">
            <div className="aspect-[4/3] bg-[oklch(0.97_0_0)] rounded-2xl overflow-hidden">
              <img
                src={imac}
                alt="Site institucional premium em iMac"
                width={1536}
                height={1024}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between">
              <p className="text-xs uppercase tracking-[0.18em] text-veltor-white/40">Institucional</p>
              <p className="text-sm text-veltor-white/70">Marca corporativa premium</p>
            </div>
          </div>

          {/* iPhone tall right */}
          <div className="md:col-span-5 reveal">
            <div className="aspect-[4/3] bg-[oklch(0.97_0_0)] rounded-2xl overflow-hidden flex items-center justify-center p-6">
              <img
                src={iphone}
                alt="Loja virtual em iPhone"
                width={1024}
                height={1536}
                loading="lazy"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between">
              <p className="text-xs uppercase tracking-[0.18em] text-veltor-white/40">E-commerce</p>
              <p className="text-sm text-veltor-white/70">Experiência mobile-first</p>
            </div>
          </div>

          {/* MacBook full bottom */}
          <div className="md:col-span-12 reveal">
            <div className="aspect-[16/9] bg-[oklch(0.12_0_0)] rounded-2xl overflow-hidden">
              <img
                src={macbook}
                alt="Landing page em MacBook"
                width={1536}
                height={1024}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between">
              <p className="text-xs uppercase tracking-[0.18em] text-veltor-white/40">Landing page</p>
              <p className="text-sm text-veltor-white/70">Alta conversão</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
