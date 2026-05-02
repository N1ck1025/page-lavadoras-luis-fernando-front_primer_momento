const features = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Garantía',
    desc: 'En todas nuestras reparaciones.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    title: 'Servicio rápido',
    desc: 'Atención en menos de 24 horas.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
    title: 'Técnicos certificados',
    desc: 'Personal capacitado, todas las marcas.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: 'Atención personalizada',
    desc: 'Soluciones a medida para cada cliente.',
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-surface-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div className="reveal">
            <span className="badge mb-4">Sobre nosotros</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">
              Más de 10 años reparando lavadoras en Medellín
            </h2>
            <p className="text-white/55 mb-5 leading-relaxed">
              Somos un equipo de técnicos especializados en la reparación de lavadoras de todas las marcas. Con más de una
              década de experiencia, hemos ayudado a miles de familias en Medellín y el área metropolitana.
            </p>
            <p className="text-white/55 mb-10 leading-relaxed">
              Nuestro compromiso es brindar un servicio de calidad, con diagnósticos precisos, reparaciones eficientes y
              precios justos. Visitamos tu domicilio para que no tengas que preocuparte por nada.
            </p>
            <div className="grid grid-cols-2 gap-5">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(0,200,150,0.15)' }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white text-sm">{f.title}</h4>
                    <p className="text-white/45 text-xs mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=600&fit=crop"
                alt="Técnico reparando lavadora"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-5 -left-5 p-6 rounded-2xl shadow-xl"
              style={{ background: '#00C896', color: '#0D1117' }}
            >
              <p className="font-display text-4xl font-bold">10+</p>
              <p className="text-sm font-medium mt-1">Años de experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
