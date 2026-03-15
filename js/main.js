// ═══════════════════════════════════════════════════════════════════════════
// LAVADORAS MEDELLÍN - MAIN JAVASCRIPT
// ═══════════════════════════════════════════════════════════════════════════

// ────────────────────────────────────────────────────────────────────────
// DATA
// ────────────────────────────────────────────────────────────────────────

let selectedServiceId = null; // Almacenar servicio seleccionado del modal

const services = [
  {
    id: 1,
    title: "Reparación",
    shortDescription: "reparación de lavadoras.",
    image: "https://servicioscr.com/wp-content/uploads/elementor/thumbs/Reparacion-de-lavadoras--scaled-qyllqtqu2zjcd5ra52qdugrjl7wslz6gnk9aiy2nds.jpg",
    includes: [
        "Diagnóstico inicial de la falla",
        "Reparación o reemplazo de piezas dañadas",
        "Ajuste y calibración",
        "Pruebas completas de funcionamiento"
    ],
    estimatedTime: "1-4 horas",
    benefits: [
        "Solución efectiva del problema",
        "Uso de repuestos de calidad",
        "Garantía en la reparación"
    ]
  },
  {
    id: 2,
    title: "Diagnóstico",
    shortDescription: "Revisaremos fallas de tu lavadora.",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=300&fit=crop",
    includes: [
        "Inspección general de la lavadora",
        "Revisión del motor y sistema eléctrico",
        "Verificación del panel de control",
        "Detección de fugas o fallas mecánicas"
    ],
    estimatedTime: "1-2 horas",
    benefits: [
      "Identificación precisa de la falla",
    "Evita reparaciones innecesarias",
    "Presupuesto claro antes de reparar"
    ]
  },
  
  {
    id: 3,
    title: "Mantenimiento Preventivo",
    shortDescription: "Prolonga la vida útil de tu lavadora.",
    image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=400&h=300&fit=crop",
    includes: [
      "Limpieza profunda",
      "Revisión de mangueras",
      "Limpieza de filtros",
      "Restauración de piezas oxidadas o desgastadas",
      "Lubricación de partes móviles"
    ],
    estimatedTime: "2-4 horas",
    benefits: [
      "Previene averías",
      "Mejora rendimiento",
      "Ahorra en reparaciones",
      "Ropa limpia y fresca"
    ]
  },
];

const faqs = [
  {
    q: "¿Cuánto tarda la reparación?",
    a: "La mayoría de las reparaciones se completan el mismo día de la visita. Dependiendo del tipo de avería, puede tomar entre 1 y 4 horas. Si se requieren repuestos especiales, te informaremos el tiempo estimado."
  },
  {
    q: "¿Reparan todas las marcas?",
    a: "Sí, nuestros técnicos están capacitados para reparar lavadoras de todas las marcas: Samsung, LG, Whirlpool, Mabe, Haceb, Electrolux, Bosch, Centrales y muchas más."
  },
  {
    q: "¿Ofrecen servicio a domicilio?",
    a: "Absolutamente. Todos nuestros servicios son a domicilio. El técnico visita tu casa con las herramientas necesarias y, en la mayoría de casos, los repuestos más comunes."
  },
  {
    q: "¿Cuál es el costo del diagnóstico?",
    a: "El diagnóstico tiene un costo mínimo que se descuenta del valor total de la reparación si decides realizar el servicio con nosotros. Contáctanos para conocer el precio actual."
  },
  {
    q: "¿Las reparaciones tienen garantía?",
    a: "Sí, todas nuestras reparaciones incluyen garantía de 6 meses. Los repuestos instalados también tienen garantía del fabricante."
  },
  {
    q: "¿Cómo puedo pagar el servicio?",
    a: "Aceptamos efectivo y transferencias bancarias. El pago se realiza una vez completada la reparación."
  }
];

// ────────────────────────────────────────────────────────────────────────
// RENDER SERVICES
// ────────────────────────────────────────────────────────────────────────

const grid = document.getElementById('services-grid');
services.forEach((s, i) => {
  const delay = (i % 3) * 0.08;
  grid.innerHTML += `
    <button onclick="openModal(${s.id})" class="card text-left group cursor-pointer" style="transition-delay:${delay}s">
      <div class="service-img-wrap aspect-video">
        <img src="${s.image}" alt="${s.title}" class="w-full h-full object-cover" loading="lazy" />
      </div>
      <div class="p-6">
        <h3 class="font-display text-xl font-semibold text-white mb-2 group-hover:text-brand transition-colors">${s.title}</h3>
        <p class="text-white/50 text-sm mb-4">${s.shortDescription}</p>
        <span class="inline-flex items-center text-brand font-medium text-sm gap-1">
          Ver detalles
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </span>
      </div>
    </button>`;
});

// ────────────────────────────────────────────────────────────────────────
// RENDER FAQ
// ────────────────────────────────────────────────────────────────────────

const faqContainer = document.getElementById('faq-container');
faqs.forEach((faq, i) => {
  faqContainer.innerHTML += `
    <div class="faq-item card px-6 py-4 cursor-pointer reveal" onclick="toggleFaq(this)" style="transition-delay:${i*0.06}s">
      <div class="flex items-center justify-between gap-4">
        <span class="font-display font-semibold text-white text-sm sm:text-base">${faq.q}</span>
        <svg class="faq-icon w-5 h-5 text-brand flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </div>
      <div class="faq-answer">
        <p class="text-white/55 text-sm leading-relaxed pt-3">${faq.a}</p>
      </div>
    </div>`;
});

// ────────────────────────────────────────────────────────────────────────
// FAQ TOGGLE
// ────────────────────────────────────────────────────────────────────────

function toggleFaq(el) {
  const isOpen = el.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) el.classList.add('open');
}

// ────────────────────────────────────────────────────────────────────────
// MODAL
// ────────────────────────────────────────────────────────────────────────

function openModal(id) {
  const s = services.find(s => s.id === id);
  if (!s) return;
  
  // Guardar ID del servicio seleccionado
  selectedServiceId = id;
  
  document.getElementById('modal-title').textContent = s.title;
  document.getElementById('modal-img').src = s.image;
  document.getElementById('modal-img').alt = s.title;
  document.getElementById('modal-time').textContent = s.estimatedTime;
  document.getElementById('modal-includes').innerHTML = s.includes.map(i =>
    `<li class="flex items-start gap-2"><span class="text-brand mt-0.5">✓</span>${i}</li>`).join('');
  document.getElementById('modal-benefits').innerHTML = s.benefits.map(b =>
    `<li class="flex items-start gap-2"><span class="text-brand mt-0.5">✓</span>${b}</li>`).join('');
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ────────────────────────────────────────────────────────────────────────
// PRESELECCIONAR SERVICIO DESDE MODAL
// ────────────────────────────────────────────────────────────────────────

function preseleccionarServicio() {
  if (!selectedServiceId) return;
  
  const service = services.find(s => s.id === selectedServiceId);
  if (!service) return;
  
  // Mapear título del servicio al valor del select del formulario
  const titleToValue = {
    'Reparación': 'reparacion',
    'Diagnóstico': 'diagnostico',
    'Mantenimiento Preventivo': 'mantenimiento'
  };
  
  const selectValue = titleToValue[service.title];
  if (selectValue) {
    document.getElementById('f-servicio').value = selectValue;
    updateServicePrice(); // Actualizar precio si aplica
    selectedServiceId = null; // Limpiar
  }
}

// ────────────────────────────────────────────────────────────────────────
// SERVICE PRICES
// ────────────────────────────────────────────────────────────────────────

const servicePrices = {
  diagnostico: 40,
  reparacion: null,  // Sin precio fijo
  mantenimiento: 130
};

// ────────────────────────────────────────────────────────────────────────
// FORM
// ────────────────────────────────────────────────────────────────────────

// Set min date to tomorrow
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
document.getElementById('f-fecha').min = tomorrow.toISOString().split('T')[0];

// Update service price display
function updateServicePrice() {
  const servicio = document.getElementById('f-servicio').value;
  const priceContainer = document.getElementById('price-container');
  const servicePriceElement = document.getElementById('service-price');

  if (servicio === 'diagnostico' || servicio === 'mantenimiento') {
    const price = servicePrices[servicio];
    servicePriceElement.textContent = `$${price.toLocaleString('es-CO')}`;
    priceContainer.classList.remove('hidden');
  } else {
    priceContainer.classList.add('hidden');
  }
}

// ────────────────────────────────────────────────────────────────────────
// VALIDACIÓN DE DISPONIBILIDAD DE JORNADAS
// ────────────────────────────────────────────────────────────────────────

function verificarDisponibilidadJornada() {
  const fechaInput = document.getElementById('f-fecha').value;
  const jornadaSelect = document.getElementById('f-jornada');
  const jornadaContainer = jornadaSelect.parentElement;
  let availabilityInfo = document.getElementById('availability-info');

  // Remover información anterior si existe
  if (availabilityInfo) {
    availabilityInfo.remove();
  }

  if (!fechaInput) {
    // Restaurar opciones por defecto
    jornadaSelect.innerHTML = `
      <option value="manana">Mañana (8am - 12pm)</option>
      <option value="tarde">Tarde (2pm - 6pm)</option>
    `;
    return;
  }

  // Obtener reservas del localStorage
  const reservas = JSON.parse(localStorage.getItem('reservasLavadoras')) || [];

  // Convertir fecha input a formato que coincida con las reservas
  const fechaSeleccionada = new Date(fechaInput + 'T12:00:00');
  const fechaFormateada = fechaSeleccionada.toLocaleDateString('es-CO', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Buscar reservas para esta fecha
  const reservasDelDia = reservas.filter(r => r.fecha === fechaFormateada);

  if (reservasDelDia.length === 0) {
    // No hay reservas en este día - ambas jornadas disponibles
    jornadaSelect.innerHTML = `
      <option value="manana">Mañana (8am - 12pm)</option>
      <option value="tarde">Tarde (2pm - 6pm)</option>
    `;
    jornadaSelect.disabled = false;
  } else {
    // Hay reservas para este día
    const jornadasReservadas = reservasDelDia.map(r => r.jornada);

    // Crear opción "deshabilitada" para las jornadas reservadas
    let htmlOptions = '';

    // Opción Mañana
    if (jornadasReservadas.some(j => j.includes('Mañana'))) {
      htmlOptions += `<option value="manana" disabled style="color: #999;">Mañana (8am - 12pm) - RESERVADA</option>`;
    } else {
      htmlOptions += `<option value="manana">Mañana (8am - 12pm) - Disponible</option>`;
    }

    // Opción Tarde
    if (jornadasReservadas.some(j => j.includes('Tarde'))) {
      htmlOptions += `<option value="tarde" disabled style="color: #999;">Tarde (2pm - 6pm) - RESERVADA</option>`;
    } else {
      htmlOptions += `<option value="tarde">Tarde (2pm - 6pm) - Disponible</option>`;
    }

    jornadaSelect.innerHTML = htmlOptions;

    // Seleccionar automáticamente la jornada disponible si hay solo una
    const opcionesDisponibles = Array.from(jornadaSelect.options).filter(opt => !opt.disabled);
    if (opcionesDisponibles.length === 1) {
      jornadaSelect.value = opcionesDisponibles[0].value;
    }

    // Mostrar información de disponibilidad
    availabilityInfo = document.createElement('div');
    availabilityInfo.id = 'availability-info';
    availabilityInfo.className = 'mt-3 bg-blue-500/15 border border-blue-400 rounded-lg px-4 py-3 text-sm text-blue-300';
    availabilityInfo.innerHTML = `
      <svg class="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2z" clip-rule="evenodd"/></svg>
      Este día tiene reserva(s). Solo está disponible la jornada que aparece sin "RESERVADA".
    `;
    jornadaContainer.appendChild(availabilityInfo);
  }
}

// Agregar evento al cambiar la fecha
document.getElementById('f-fecha').addEventListener('change', verificarDisponibilidadJornada);

function submitForm() {
  const nombre = document.getElementById('f-nombre').value.trim();
  const telefono = document.getElementById('f-telefono').value.trim();
  const direccion = document.getElementById('f-direccion').value.trim();
  const servicio = document.getElementById('f-servicio').value;
  const fecha = document.getElementById('f-fecha').value;
  const jornada = document.getElementById('f-jornada').value;

  if (!nombre || !telefono || !direccion || !servicio || !fecha) {
    alert('Por favor completa todos los campos.');
    return;
  }

  // Validar que la jornada seleccionada esté disponible
  const jornadaSelect = document.getElementById('f-jornada');
  const opcionSeleccionada = jornadaSelect.querySelector(`option[value="${jornada}"]`);
  
  if (opcionSeleccionada && opcionSeleccionada.disabled) {
    alert('La jornada seleccionada no está disponible para esta fecha. Por favor selecciona otra jornada.');
    return;
  }

  const btn = document.getElementById('submit-btn');
  btn.textContent = 'Procesando...';
  btn.disabled = true;

  setTimeout(() => {
    const fechaFormatted = new Date(fecha + 'T12:00:00').toLocaleDateString('es-CO', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const jornadaText = jornada === 'manana' ? 'Mañana (8am - 12pm)' : 'Tarde (2pm - 6pm)';
    const servicioText = servicio.charAt(0).toUpperCase() + servicio.slice(1);
    const precio = servicePrices[servicio] ? `$${servicePrices[servicio].toLocaleString('es-CO')}` : 'Cotizar';

    // Crear objeto de reserva
    const reserva = {
      id: Date.now(),
      nombre,
      telefono,
      direccion,
      servicio: servicioText,
      precio,
      fecha: fechaFormatted,
      jornada: jornadaText,
      fechaRegistro: new Date().toLocaleString('es-CO')
    };

    // Obtener reservas previas del localStorage
    let reservas = JSON.parse(localStorage.getItem('reservasLavadoras')) || [];

    // Agregar nueva reserva
    reservas.push(reserva);

    // Guardar en localStorage
    localStorage.setItem('reservasLavadoras', JSON.stringify(reservas));

    // Log en consola para verificar
    console.log('✓ Reserva guardada en localStorage', reserva);
    console.log('Total de reservas:', reservas.length);

    // Mostrar los detalles de la reserva
    document.getElementById('reservation-details').innerHTML = `
      <div class="space-y-2">
        <p class="text-white/60"><span class="text-white font-medium">Nombre:</span> ${nombre}</p>
        <p class="text-white/60"><span class="text-white font-medium">Teléfono:</span> ${telefono}</p>
        <p class="text-white/60"><span class="text-white font-medium">Dirección:</span> ${direccion}</p>
        <p class="text-white/60"><span class="text-white font-medium">Servicio:</span> ${servicioText}</p>
        <p class="text-white/60"><span class="text-white font-medium">Valor:</span> ${precio}</p>
        <p class="text-white/60"><span class="text-white font-medium">Fecha:</span> ${fechaFormatted}</p>
        <p class="text-white/60"><span class="text-white font-medium">Jornada:</span> ${jornadaText}</p>
      </div>`;

    document.getElementById('form-area').classList.add('hidden');
    document.getElementById('success-area').classList.remove('hidden');
  }, 900);
}

function resetForm() {
  ['f-nombre', 'f-telefono', 'f-direccion', 'f-fecha'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('f-servicio').value = '';
  document.getElementById('f-jornada').value = 'manana';

  const btn = document.getElementById('submit-btn');
  btn.innerHTML = 'Confirmar reserva <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
  btn.disabled = false;

  // Ocultar el contenedor de precio
  document.getElementById('price-container').classList.add('hidden');

  document.getElementById('form-area').classList.remove('hidden');
  document.getElementById('success-area').classList.add('hidden');
}

// ────────────────────────────────────────────────────────────────────────
// NAVBAR
// ────────────────────────────────────────────────────────────────────────

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
    navbar.style.backdropFilter = 'blur(12px)';
  } else {
    navbar.classList.remove('scrolled');
    navbar.style.backdropFilter = 'blur(0px)';
  }
});

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const iconMenu = document.getElementById('icon-menu');
const iconClose = document.getElementById('icon-close');

menuToggle.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  iconMenu.classList.toggle('hidden', open);
  iconClose.classList.toggle('hidden', !open);
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    iconMenu.classList.remove('hidden');
    iconClose.classList.add('hidden');
  });
});

// ────────────────────────────────────────────────────────────────────────
// SCROLL REVEAL
// ────────────────────────────────────────────────────────────────────────

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ────────────────────────────────────────────────────────────────────────
// FOOTER YEAR
// ────────────────────────────────────────────────────────────────────────

document.getElementById('current-year').textContent = new Date().getFullYear();
