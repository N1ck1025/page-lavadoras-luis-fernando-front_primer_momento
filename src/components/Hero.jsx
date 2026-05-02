import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Hero() {
  const { user } = useContext(AuthContext);
  return (
    <section id="inicio" className="hero-bg relative min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="max-w-3xl mx-auto">
          <span className="badge mb-6 inline-flex gap-2 items-center">
            <span className="glow-dot"></span>
            Servicio técnico profesional
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Servicio técnico de lavadoras<br className="hidden sm:block" />
            <span style={{ color: '#00C896' }}>en Medellín</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Reparamos tu lavadora en casa. Técnicos certificados, servicio rápido y garantía en todas las reparaciones. Todas las marcas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <a href="#reservar" className="btn-primary text-base px-8 py-4">
                Reservar ahora
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </a>
            ) : (
              <Link to="/login" className="btn-primary text-base px-8 py-4">
                Inicia sesión para reservar
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </Link>
            )}
            <a href="#servicios" className="btn-outline text-base px-8 py-4">Ver servicios</a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-sm mx-auto sm:max-w-md">
            <div>
              <p className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#00C896' }}>10+</p>
              <p className="text-xs sm:text-sm text-white/50 mt-1">Años de experiencia</p>
            </div>
            <div>
              <p className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#00C896' }}>5K+</p>
              <p className="text-xs sm:text-sm text-white/50 mt-1">Reparaciones</p>
            </div>
            <div>
              <p className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#00C896' }}>98%</p>
              <p className="text-xs sm:text-sm text-white/50 mt-1">Clientes satisfechos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-white/60 tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-8" style={{ background: 'linear-gradient(to bottom, #00C896, transparent)' }}></div>
      </div>
    </section>
  );
}
