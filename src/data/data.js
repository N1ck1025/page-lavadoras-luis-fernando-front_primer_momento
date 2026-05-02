// ─── SERVICES DATA ───────────────────────────────────────────────────────────

export const services = [
  {
    id: 1,
    title: "Reparación",
    shortDescription: "reparación de lavadoras.",
    image: "https://servicioscr.com/wp-content/uploads/elementor/thumbs/Reparacion-de-lavadoras--scaled-qyllqtqu2zjcd5ra52qdugrjl7wslz6gnk9aiy2nds.jpg",
    includes: [
      "Diagnóstico inicial de la falla",
      "Reparación o reemplazo de piezas dañadas",
      "Ajuste y calibración",
      "Pruebas completas de funcionamiento",
    ],
    estimatedTime: "1-4 horas",
    benefits: [
      "Solución efectiva del problema",
      "Uso de repuestos de calidad",
      "Garantía en la reparación",
    ],
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
      "Detección de fugas o fallas mecánicas",
    ],
    estimatedTime: "1-2 horas",
    benefits: [
      "Identificación precisa de la falla",
      "Evita reparaciones innecesarias",
      "Presupuesto claro antes de reparar",
    ],
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
      "Lubricación de partes móviles",
    ],
    estimatedTime: "2-4 horas",
    benefits: [
      "Previene averías",
      "Mejora rendimiento",
      "Ahorra en reparaciones",
      "Ropa limpia y fresca",
    ],
  },
];

// ─── FAQS DATA ────────────────────────────────────────────────────────────────

export const faqs = [
  {
    q: "¿Cuánto tarda la reparación?",
    a: "La mayoría de las reparaciones se completan el mismo día de la visita. Dependiendo del tipo de avería, puede tomar entre 1 y 4 horas. Si se requieren repuestos especiales, te informaremos el tiempo estimado.",
  },
  {
    q: "¿Reparan todas las marcas?",
    a: "Sí, nuestros técnicos están capacitados para reparar lavadoras de todas las marcas: Samsung, LG, Whirlpool, Mabe, Haceb, Electrolux, Bosch, Centrales y muchas más.",
  },
  {
    q: "¿Ofrecen servicio a domicilio?",
    a: "Absolutamente. Todos nuestros servicios son a domicilio. El técnico visita tu casa con las herramientas necesarias y, en la mayoría de casos, los repuestos más comunes.",
  },
  {
    q: "¿Cuál es el costo del diagnóstico?",
    a: "El diagnóstico tiene un costo mínimo que se descuenta del valor total de la reparación si decides realizar el servicio con nosotros. Contáctanos para conocer el precio actual.",
  },
  {
    q: "¿Las reparaciones tienen garantía?",
    a: "Sí, todas nuestras reparaciones incluyen garantía de 6 meses. Los repuestos instalados también tienen garantía del fabricante.",
  },
  {
    q: "¿Cómo puedo pagar el servicio?",
    a: "Aceptamos efectivo y transferencias bancarias. El pago se realiza una vez completada la reparación.",
  },
];

// ─── SERVICE PRICES ───────────────────────────────────────────────────────────

export const servicePrices = {
  diagnostico: 40,
  reparacion: null,
  mantenimiento: 130,
};

// ─── TITLE → SELECT VALUE MAP ─────────────────────────────────────────────────

export const titleToValue = {
  Reparación: "reparacion",
  Diagnóstico: "diagnostico",
  "Mantenimiento Preventivo": "mantenimiento",
};
