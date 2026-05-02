const PinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const SmallPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const zones = [
  { name: 'Medellín', desc: 'Toda la ciudad y sus comunas', delay: 0 },
  { name: 'Bello', desc: 'Cobertura completa', delay: 0.05 },
  { name: 'Envigado', desc: 'Todos los barrios', delay: 0.1 },
  { name: 'Itagüí', desc: 'Servicio disponible', delay: 0.15 },
  { name: 'Sabaneta', desc: 'Atención garantizada', delay: 0.2 },
];

export default function Coverage() {
  return (
    <section id="cobertura" className="py-24" style={{ background: '#0D1117' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="badge mb-4">Zonas de servicio</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">Cobertura del servicio</h2>
          <p className="text-white/50 max-w-xl mx-auto">Servicio técnico de lavadoras a domicilio en Medellín y Área Metropolitana</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {zones.map((z) => (
            <div key={z.name} className="card p-6 text-center reveal group" style={{ transitionDelay: `${z.delay}s` }}>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors"
                style={{ background: 'rgba(0,200,150,0.15)' }}
              >
                <PinIcon />
              </div>
              <h3 className="font-display font-semibold text-white mb-1">{z.name}</h3>
              <p className="text-xs text-white/45">{z.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Zona */}
        <div className="card p-8 text-center reveal">
          <h3 className="font-display text-xl font-semibold text-white mb-2">¿No encuentras tu zona?</h3>
          <p className="text-white/50 mb-5 text-sm">Contáctanos por WhatsApp y verificaremos si podemos atenderte</p>
          <a
            href="https://wa.me/573148077138"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
            style={{ background: '#16a34a' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#22c55e')}
            onMouseLeave={e => (e.currentTarget.style.background = '#16a34a')}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Consultar disponibilidad
          </a>
        </div>
      </div>
    </section>
  );
}
