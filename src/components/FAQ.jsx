import { useState } from 'react';
import { faqs } from '../data/data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 bg-surface-elevated">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="badge mb-4">FAQ</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">Preguntas frecuentes</h2>
          <p className="text-white/50">Encuentra respuestas a las dudas más comunes sobre nuestro servicio</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`faq-item card px-6 py-4 cursor-pointer reveal${isOpen ? ' open' : ''}`}
                style={{ transitionDelay: `${i * 0.06}s` }}
                onClick={() => toggle(i)}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display font-semibold text-white text-sm sm:text-base">{faq.q}</span>
                  <svg
                    className="faq-icon w-5 h-5 flex-shrink-0"
                    style={{ color: '#00C896' }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
                <div className="faq-answer">
                  <p className="text-white/55 text-sm leading-relaxed pt-3">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
