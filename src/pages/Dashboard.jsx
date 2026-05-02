import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getBookings } from '../services/bookingService';

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [misReservas, setMisReservas] = useState([]);

  useEffect(() => {
    if (!user) return;
    const todas = getBookings();
    // Filtrar por el email del usuario logueado
    const propias = todas.filter(r => r.email === user.email);
    setMisReservas(propias);
  }, [user]);

  if (!user) return null;

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen" style={{ background: '#0D1117' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h1 className="text-3xl font-bold text-white font-display">Mi Panel</h1>
            <button onClick={() => { logout(); navigate('/'); }} className="btn-outline text-sm py-2 px-4">
              Cerrar sesión
            </button>
          </div>
          
          <div className="card p-6 mb-8">
            <h2 className="text-xl font-semibold text-white mb-2">Hola, {user.nombre}</h2>
            <p className="text-white/60">Aquí puedes ver el historial de tus servicios y agendar uno nuevo.</p>
            <div className="mt-4">
              <Link to="/#reservar" className="btn-primary inline-flex">Agendar nuevo servicio</Link>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white font-display mb-4">Mis Reservas</h3>
          
          {misReservas.length === 0 ? (
            <div className="card p-8 text-center">
              <p className="text-white/60 mb-4">Aún no tienes reservas programadas.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {misReservas.map(reserva => (
                <div key={reserva.id} className="card p-5 border border-white/10">
                  <div className="flex justify-between items-start mb-4">
                    <span className="badge">{reserva.servicio}</span>
                    <span className="text-sm font-medium" style={{ color: '#00C896' }}>{reserva.precio}</span>
                  </div>
                  <div className="space-y-2 text-sm text-white/70">
                    <p><strong className="text-white">Fecha:</strong> {reserva.fecha}</p>
                    <p><strong className="text-white">Jornada:</strong> {reserva.jornada}</p>
                    <p><strong className="text-white">Dirección:</strong> {reserva.direccion}</p>
                    <p><strong className="text-white">Estado:</strong> Programado</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
