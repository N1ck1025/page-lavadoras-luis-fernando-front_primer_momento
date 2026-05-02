import { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { servicePrices } from '../data/data';
import { getBookings, saveBooking } from '../services/bookingService';

const tomorrow = () => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
};

const formatDate = (dateStr) =>
  new Date(dateStr + 'T12:00:00').toLocaleDateString('es-CO', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export default function BookingForm({ preselectedService, onPreselectedConsumed }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [servicio, setServicio] = useState('');
  const [fecha, setFecha] = useState('');
  const [jornada, setJornada] = useState('manana');
  const [jornadaOptions, setJornadaOptions] = useState([
    { value: 'manana', label: 'Mañana (8am - 12pm)', disabled: false },
    { value: 'tarde', label: 'Tarde (2pm - 6pm)', disabled: false },
  ]);
  const [availabilityMsg, setAvailabilityMsg] = useState('');
  const [showPrice, setShowPrice] = useState(false);
  const [price, setPrice] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [reservationDetails, setReservationDetails] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (preselectedService) {
      setServicio(preselectedService);
      updatePriceDisplay(preselectedService);
      onPreselectedConsumed();
    }
  }, [preselectedService]);

  const validateField = (name, value) => {
    let error = null;
    if (!value) {
      const messages = {
        nombre: 'El nombre es obligatorio',
        telefono: 'El teléfono es obligatorio',
        direccion: 'La dirección es obligatoria',
        servicio: 'Selecciona un servicio',
        fecha: 'Selecciona una fecha'
      };
      error = messages[name];
    }
    setErrors(prev => ({ ...prev, [name]: error }));
    return error;
  };

  const updatePriceDisplay = (val) => {
    if (val === 'diagnostico' || val === 'mantenimiento') {
      const p = servicePrices[val];
      setPrice(`$${p.toLocaleString('es-CO')}`);
      setShowPrice(true);
    } else {
      setShowPrice(false);
    }
  };

  const handleServicioChange = (e) => {
    setServicio(e.target.value);
    updatePriceDisplay(e.target.value);
  };

  const verificarDisponibilidad = (fechaVal) => {
    setAvailabilityMsg('');
    if (!fechaVal) {
      setJornadaOptions([
        { value: 'manana', label: 'Mañana (8am - 12pm)', disabled: false },
        { value: 'tarde', label: 'Tarde (2pm - 6pm)', disabled: false },
      ]);
      return;
    }

    const reservas = getBookings();
    const fechaFormateada = formatDate(fechaVal);
    const reservasDelDia = reservas.filter((r) => r.fecha === fechaFormateada);

    if (reservasDelDia.length === 0) {
      setJornadaOptions([
        { value: 'manana', label: 'Mañana (8am - 12pm)', disabled: false },
        { value: 'tarde', label: 'Tarde (2pm - 6pm)', disabled: false },
      ]);
      setJornada('manana');
    } else {
      const jornadasReservadas = reservasDelDia.map((r) => r.jornada);
      const opts = [
        {
          value: 'manana',
          label: jornadasReservadas.some((j) => j.includes('Mañana'))
            ? 'Mañana (8am - 12pm) - RESERVADA'
            : 'Mañana (8am - 12pm) - Disponible',
          disabled: jornadasReservadas.some((j) => j.includes('Mañana')),
        },
        {
          value: 'tarde',
          label: jornadasReservadas.some((j) => j.includes('Tarde'))
            ? 'Tarde (2pm - 6pm) - RESERVADA'
            : 'Tarde (2pm - 6pm) - Disponible',
          disabled: jornadasReservadas.some((j) => j.includes('Tarde')),
        },
      ];
      setJornadaOptions(opts);

      const disponibles = opts.filter((o) => !o.disabled);
      if (disponibles.length === 1) setJornada(disponibles[0].value);

      setAvailabilityMsg('Este día tiene reserva(s). Solo está disponible la jornada que aparece sin "RESERVADA".');
    }
  };

  const handleFechaChange = (e) => {
    setFecha(e.target.value);
    verificarDisponibilidad(e.target.value);
  };

  const submitForm = () => {
    if (!user) {
      alert('Debes iniciar sesión para agendar un servicio.');
      navigate('/login');
      return;
    }

    const errorNombre = validateField('nombre', nombre);
    const errorTelefono = validateField('telefono', telefono);
    const errorDireccion = validateField('direccion', direccion);
    const errorServicio = validateField('servicio', servicio);
    const errorFecha = validateField('fecha', fecha);

    if (errorNombre || errorTelefono || errorDireccion || errorServicio || errorFecha) {
      return;
    }

    const selectedOpt = jornadaOptions.find((o) => o.value === jornada);
    if (selectedOpt?.disabled) {
      alert('La jornada seleccionada no está disponible para esta fecha. Por favor selecciona otra jornada.');
      return;
    }

    setProcessing(true);

    setTimeout(() => {
      const fechaFormatted = formatDate(fecha);
      const jornadaText = jornada === 'manana' ? 'Mañana (8am - 12pm)' : 'Tarde (2pm - 6pm)';
      const servicioText = servicio.charAt(0).toUpperCase() + servicio.slice(1);
      const precioText = servicePrices[servicio] ? `$${servicePrices[servicio].toLocaleString('es-CO')}` : 'Cotizar';

      const reserva = {
        id: Date.now(),
        email: user.email,
        nombre,
        telefono,
        direccion,
        servicio: servicioText,
        precio: precioText,
        fecha: fechaFormatted,
        jornada: jornadaText,
        fechaRegistro: new Date().toLocaleString('es-CO'),
      };

      saveBooking(reserva);

      console.log('✓ Reserva guardada', reserva);

      setReservationDetails(reserva);
      setSubmitted(true);
      setProcessing(false);
    }, 900);
  };

  const resetForm = () => {
    setNombre('');
    setTelefono('');
    setDireccion('');
    setServicio('');
    setFecha('');
    setJornada('manana');
    setJornadaOptions([
      { value: 'manana', label: 'Mañana (8am - 12pm)', disabled: false },
      { value: 'tarde', label: 'Tarde (2pm - 6pm)', disabled: false },
    ]);
    setShowPrice(false);
    setAvailabilityMsg('');
    setSubmitted(false);
    setReservationDetails(null);
    setErrors({});
  };

  return (
    <section id="reservar" className="py-24" style={{ background: '#0D1117' }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <span className="badge mb-4">Reservar servicio</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">Agenda tu reparación</h2>
          <p className="text-white/50">Completa el formulario y nos pondremos en contacto contigo</p>
        </div>

        <div id="form-wrapper" className="card p-8 reveal">
          {!submitted ? (
            <div id="form-area">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Nombre completo</label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className={`form-input ${errors.nombre ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    value={nombre}
                    onChange={(e) => {
                      setNombre(e.target.value);
                      if (errors.nombre) setErrors(prev => ({ ...prev, nombre: null }));
                    }}
                    onBlur={() => validateField('nombre', nombre)}
                    required
                  />
                  {errors.nombre && <p className="text-red-400 text-xs mt-1">{errors.nombre}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Teléfono</label>
                  <input
                    type="tel"
                    placeholder="300 123 4567"
                    className={`form-input ${errors.telefono ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    value={telefono}
                    onChange={(e) => {
                      setTelefono(e.target.value);
                      if (errors.telefono) setErrors(prev => ({ ...prev, telefono: null }));
                    }}
                    onBlur={() => validateField('telefono', telefono)}
                    required
                  />
                  {errors.telefono && <p className="text-red-400 text-xs mt-1">{errors.telefono}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Dirección</label>
                  <input
                    type="text"
                    placeholder="Calle, número, barrio"
                    className={`form-input ${errors.direccion ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    value={direccion}
                    onChange={(e) => {
                      setDireccion(e.target.value);
                      if (errors.direccion) setErrors(prev => ({ ...prev, direccion: null }));
                    }}
                    onBlur={() => validateField('direccion', direccion)}
                    required
                  />
                  {errors.direccion && <p className="text-red-400 text-xs mt-1">{errors.direccion}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Tipo de Servicio</label>
                  <select
                    id="f-servicio"
                    className={`form-input ${errors.servicio ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    value={servicio}
                    onChange={(e) => {
                      handleServicioChange(e);
                      if (errors.servicio) setErrors(prev => ({ ...prev, servicio: null }));
                    }}
                    onBlur={() => validateField('servicio', servicio)}
                    required
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="diagnostico">Diagnóstico</option>
                    <option value="reparacion">Reparación</option>
                    <option value="mantenimiento">Mantenimiento</option>
                  </select>
                  {errors.servicio && <p className="text-red-400 text-xs mt-1">{errors.servicio}</p>}
                </div>

                {showPrice && (
                  <div
                    id="price-container"
                    className="rounded-xl px-4 py-3 flex items-center justify-between"
                    style={{
                      background: 'rgba(0,200,150,0.08)',
                      border: '1px solid rgba(0,200,150,0.25)',
                    }}
                  >
                    <span className="text-sm text-white/70">Valor del servicio:</span>
                    <span className="text-lg font-display font-bold" style={{ color: '#00C896' }}>{price}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Fecha</label>
                    <input
                      id="f-fecha"
                      type="date"
                      className={`form-input ${errors.fecha ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                      min={tomorrow()}
                      value={fecha}
                      onChange={(e) => {
                        handleFechaChange(e);
                        if (errors.fecha) setErrors(prev => ({ ...prev, fecha: null }));
                      }}
                      onBlur={() => validateField('fecha', fecha)}
                      required
                    />
                    {errors.fecha && <p className="text-red-400 text-xs mt-1">{errors.fecha}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Jornada</label>
                    <select
                      id="f-jornada"
                      className="form-input"
                      value={jornada}
                      onChange={(e) => setJornada(e.target.value)}
                    >
                      {jornadaOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {availabilityMsg && (
                      <div
                        id="availability-info"
                        className="mt-3 rounded-lg px-4 py-3 text-sm"
                        style={{
                          background: 'rgba(59,130,246,0.15)',
                          border: '1px solid #60a5fa',
                          color: '#93c5fd',
                        }}
                      >
                        <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2z" clipRule="evenodd"/>
                        </svg>
                        {availabilityMsg}
                      </div>
                    )}
                  </div>
                </div>

                <button
                  id="submit-btn"
                  onClick={submitForm}
                  disabled={processing && !!user}
                  className="btn-primary w-full justify-center text-base py-4 mt-2"
                >
                  {processing ? 'Procesando...' : (
                    <>
                      {user ? 'Confirmar reserva' : 'Inicia sesión para reservar'}
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          ) : (
            <div id="success-area" className="text-center py-4">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: 'rgba(34,197,94,0.15)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">¡Reserva confirmada!</h3>
              <p className="text-white/55 mb-6">Nos comunicaremos contigo pronto para confirmar los detalles de tu servicio.</p>

              {reservationDetails && (
                <div
                  id="reservation-details"
                  className="rounded-xl p-5 text-left mb-6 text-sm space-y-2"
                  style={{ background: '#0D1117' }}
                >
                  {[
                    ['Nombre', reservationDetails.nombre],
                    ['Teléfono', reservationDetails.telefono],
                    ['Dirección', reservationDetails.direccion],
                    ['Servicio', reservationDetails.servicio],
                    ['Valor', reservationDetails.precio],
                    ['Fecha', reservationDetails.fecha],
                    ['Jornada', reservationDetails.jornada],
                  ].map(([label, val]) => (
                    <p key={label} className="text-white/60">
                      <span className="text-white font-medium">{label}:</span> {val}
                    </p>
                  ))}
                </div>
              )}

              <button onClick={resetForm} className="btn-outline">Hacer otra reserva</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
