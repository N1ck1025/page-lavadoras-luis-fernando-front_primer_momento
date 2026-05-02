const QuoteIcon = () => (
  <svg className="w-7 h-7 mb-4" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'rgba(0,200,150,0.3)' }}>
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const Stars = () => (
  <div className="flex gap-1 mb-3">
    {[...Array(5)].map((_, i) => <span key={i} className="star">★</span>)}
  </div>
);

const reviews = [
  { text: '"Excelente servicio, el técnico llegó puntual y solucionó el problema rápidamente. Mi lavadora quedó como nueva."', author: 'María García', delay: 0 },
  { text: '"Muy recomendado, reparación rápida y buen precio. El técnico fue muy profesional y explicó todo el proceso."', author: 'Carlos Rodríguez', delay: 0.08 },
  { text: '"Servicio confiable y de calidad. Ya he usado sus servicios dos veces y siempre han cumplido con las expectativas."', author: 'Ana Martínez', delay: 0.16 },
  { text: '"Increíble atención al cliente. Respondieron rápido y el técnico llegó el mismo día. 100% recomendado."', author: 'Jorge Hernández', delay: 0.24 },
];

export default function Reviews() {
  return (
    <section className="py-24" style={{ background: '#0D1117' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="badge mb-4">Testimonios</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-white/50 max-w-xl mx-auto">Miles de clientes satisfechos confían en nuestro servicio</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="card p-6 reveal" style={{ transitionDelay: `${r.delay}s` }}>
              <QuoteIcon />
              <Stars />
              <p className="text-white/55 text-sm leading-relaxed mb-4">{r.text}</p>
              <p className="font-display font-semibold text-white text-sm">{r.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
