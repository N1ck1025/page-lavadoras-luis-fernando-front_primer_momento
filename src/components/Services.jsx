export default function Services({ onOpenModal, services }) {
  return (
    <section id="servicios" className="py-24" style={{ background: '#0D1117' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="badge mb-4">Nuestros servicios</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">Soluciones para tu lavadora</h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Ofrecemos reparación profesional para todo tipo de averías. Haz clic en cualquier servicio para más información.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const delay = (i % 3) * 0.08;
            return (
              <button
                key={s.id}
                onClick={() => onOpenModal(s.id)}
                className="card text-left group cursor-pointer reveal"
                style={{ transitionDelay: `${delay}s` }}
              >
                <div className="service-img-wrap aspect-video">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="font-display text-xl font-semibold text-white mb-2 transition-colors"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-4">{s.shortDescription}</p>
                  <span className="inline-flex items-center font-medium text-sm gap-1" style={{ color: '#00C896' }}>
                    Ver detalles
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
