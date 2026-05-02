import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import logoSvg from '../assets/logo.svg';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent${scrolled ? ' scrolled' : ''}`}
      style={{ backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <img src={logoSvg} alt="Logo Lavadoras Medellín" className="w-10 h-10 flex-shrink-0" />
              <span className="font-display font-bold text-lg text-white hidden sm:block">Lavadoras Medellín</span>
            </Link>
          </div>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {[
              ['#inicio', 'Inicio'],
              ['#servicios', 'Servicios'],
              ['#como-funciona', 'Cómo funciona'],
              ['#nosotros', 'Nosotros'],
              ['#cobertura', 'Cobertura'],
              ['#faq', 'Preguntas'],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-white/60 hover:text-brand transition-colors font-medium"
                style={{ '--tw-text-opacity': 1, color: 'rgba(230,237,243,0.6)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#00C896')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(230,237,243,0.6)')}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              <>
                <span className="text-white/80 text-sm">Hola, {user.nombre.split(' ')[0]}</span>
                <Link to="/dashboard" className="btn-primary text-sm py-2.5 px-5">Mi Panel</Link>
              </>
            ) : (
              <Link to="/login" className="btn-primary text-sm py-2.5 px-5">Iniciar Sesión</Link>
            )}
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden text-white/70 hover:text-white transition-colors"
            aria-label="Menú"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" className={menuOpen ? 'open relative' : 'relative'}>
        <div className="space-y-1">
          {[
            ['#inicio', 'Inicio'],
            ['#servicios', 'Servicios'],
            ['#como-funciona', 'Cómo funciona'],
            ['#nosotros', 'Nosotros'],
            ['#cobertura', 'Cobertura'],
            ['#faq', 'FAQ'],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="mobile-link block py-2.5 px-3 rounded-lg text-white/70 hover:text-brand hover:bg-brand-50 transition-colors text-sm font-medium"
            >
              {label}
            </a>
          ))}
          {user ? (
            <Link to="/dashboard" onClick={closeMenu} className="mobile-link btn-primary w-full justify-center mt-3 text-sm">
              Mi Panel
            </Link>
          ) : (
            <Link to="/login" onClick={closeMenu} className="mobile-link btn-primary w-full justify-center mt-3 text-sm">
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
