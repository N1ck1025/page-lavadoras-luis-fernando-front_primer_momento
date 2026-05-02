export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: 'Reserva tu servicio online',
      desc: 'Completa el formulario con tus datos y elige el horario que mejor te convenga.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="m9 16 2 2 4-4"/>
        </svg>
      ),
    },
    {
      num: 2,
      title: 'El técnico visita tu domicilio',
      desc: 'Nuestro técnico certificado llega a tu casa en el horario acordado con todas las herramientas.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
    },
    {
      num: 3,
      title: 'Diagnóstico y reparación',
      desc: 'Realizamos el diagnóstico y reparamos tu lavadora con garantía de 6 meses incluida.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="como-funciona" className="py-24 bg-surface-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="badge mb-4">Proceso simple</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">¿Cómo funciona?</h2>
          <p className="text-white/50 max-w-xl mx-auto">En solo 3 pasos tu lavadora estará funcionando como nueva</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="card p-8 relative reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="absolute -top-3.5 -left-3.5 w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm"
                style={{ background: '#00C896', color: '#0D1117' }}
              >
                {step.num}
              </div>
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(0,200,150,0.15)' }}
              >
                {step.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
