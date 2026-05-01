export function Footer() {
  return (
    <footer className="bg-veltor-black text-veltor-white border-t border-veltor-line-dark">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="veltor-display text-3xl">VELTOR</p>
            <p className="mt-3 text-sm text-veltor-white/50">Criação de Sites Premium</p>
          </div>
          <div>
            <p className="veltor-eyebrow text-veltor-white/40">Contato</p>
            <a
              href="https://wa.me/5522981484193"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-base text-veltor-white hover:text-veltor-white/70 transition-colors"
            >
              (22) 98148-4193
            </a>
            <a
              href="https://instagram.com/grativol.allison"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-base text-veltor-white hover:text-veltor-white/70 transition-colors"
            >
              @grativol.allison
            </a>
          </div>
          <div>
            <p className="veltor-eyebrow text-veltor-white/40">Atendimento</p>
            <p className="mt-4 text-sm text-veltor-white/60 leading-relaxed max-w-xs">
              Atendemos empresas em todo o Brasil que buscam autoridade,
              credibilidade e resultado real no digital.
            </p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-veltor-line-dark flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-veltor-white/40">
            © {new Date().getFullYear()} VELTOR. Todos os direitos reservados.
          </p>
          <p className="text-xs text-veltor-white/40">
            Designed in Brazil. Built for the world.
          </p>
        </div>
      </div>
    </footer>
  );
}
