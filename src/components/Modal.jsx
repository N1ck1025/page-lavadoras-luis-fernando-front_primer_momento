import { useEffect } from 'react';
import { services } from '../data/data';

export default function Modal({ serviceId, onClose, onBook }) {
  const s = services.find((svc) => svc.id === serviceId);
  const isOpen = !!s;

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleBookClick = () => {
    onBook(s);  // pass service to parent so form can preselect it
    onClose();
    // Scroll to booking form
    document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      id="modal-overlay"
      className={isOpen ? 'open' : ''}
      onClick={handleOverlayClick}
    >
      {s && (
        <div id="modal-box">
          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-5">
              <h3 className="font-display text-2xl font-bold text-white">{s.title}</h3>
              <button
                onClick={onClose}
                className="transition-colors ml-4 flex-shrink-0"
                style={{ color: 'rgba(230,237,243,0.4)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#E6EDF3')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(230,237,243,0.4)')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Image */}
            <img src={s.image} alt={s.title} className="w-full h-48 object-cover rounded-xl mb-5" />

            {/* Includes + Benefits */}
            <div className="grid grid-cols-2 gap-5 mb-5">
              <div>
                <p className="badge text-xs mb-3">Incluye</p>
                <ul className="space-y-2 text-sm text-white/60">
                  {s.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span style={{ color: '#00C896' }} className="mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="badge text-xs mb-3">Beneficios</p>
                <ul className="space-y-2 text-sm text-white/60">
                  {s.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span style={{ color: '#00C896' }} className="mt-0.5">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tiempo estimado */}
            <div
              className="flex items-center gap-2 mb-5 rounded-xl px-4 py-3"
              style={{ background: 'rgba(0,200,150,0.08)', border: '1px solid rgba(0,200,150,0.25)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <span className="text-sm font-medium" style={{ color: '#00C896' }}>
                Tiempo estimado: {s.estimatedTime}
              </span>
            </div>

            {/* CTA */}
            <button onClick={handleBookClick} className="btn-primary w-full justify-center">
              Reservar este servicio
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
