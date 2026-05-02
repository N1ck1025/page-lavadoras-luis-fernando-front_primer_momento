# Lavadoras Spa - Sistema de Agendamiento Técnico

Aplicación de página única (SPA) desarrollada con React y Vite diseñada para gestionar reservas de servicio técnico de lavadoras de manera eficiente, integrando persistencia de datos y protección de rutas.

## Descripción del Proyecto

Lavadoras Spa permite a los usuarios navegar por los servicios de reparación ofrecidos, registrarse de forma segura y agendar visitas técnicas directamente en línea. El sistema provee un panel privado donde los usuarios pueden consultar el historial de sus reservas. Está estructurado de forma modular utilizando estándares modernos de desarrollo de interfaces en React.

## Tecnologías Utilizadas

- **React (v18+)**: Construcción de componentes funcionales e interfaces de usuario declarativas.
- **Vite**: Herramienta de compilación rápida y servidor de desarrollo.
- **Tailwind CSS**: Estilización mediante utilidades y diseño responsivo.
- **React Router DOM**: Gestión de navegación y enrutamiento del lado del cliente.
- **Context API**: Manejo de estado global sin librerías externas.

## Instalación y Ejecución

Para iniciar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio a tu máquina local:
   ```bash
   git clone <url-del-repositorio>
   cd lavadoras-react
   ```

2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   La aplicación se abrirá en `http://localhost:5173`.

## Estructura del Proyecto

El código fuente está organizado de forma modular dentro del directorio `src/`:

- `components/`: Componentes presentacionales aislados e independientes (Navbar, Hero, BookingForm).
- `context/`: Implementación de la capa de datos global, como `AuthContext`.
- `pages/`: Vistas completas utilizadas por el enrutador (`LandingPage`, `LoginPage`, `Dashboard`).
- `services/`: Funciones aisladas encargadas del manejo de datos y lógica de negocio.
- `data/`: Datos estáticos y configuraciones globales de la UI.

## Rutas del Sistema

- `/` : Página principal (Landing Page).
- `/login` : Inicio de sesión de usuarios.
- `/register` : Registro de nuevas cuentas.
- `/dashboard` : Panel privado (Ruta protegida).

## Explicación de Arquitectura

El sistema implementa patrones de diseño clave para mantener la calidad y escabilidad del código:

### AuthContext
El componente `AuthContext` gestiona el estado global de la autenticación. Se encarga de verificar el `localStorage` durante la inicialización para persistir la sesión. Además, provee las funciones de inicio y cierre de sesión (`login`, `logout`), haciéndolas disponibles en toda la aplicación para actualizar la interfaz (como mostrar botones distintos en la barra de navegación).

### ProtectedRoute
Es un Componente de Orden Superior (HOC) que verifica de manera síncrona si existe una sesión activa mediante el `AuthContext`. Se implementa para envolver rutas privadas (como `/dashboard`). Si detecta que no hay usuario logueado, interrumpe el acceso y redirige automáticamente hacia `/login`.

### Services (bookingService)
La capa de servicios aísla la comunicación con la base de datos de los componentes visuales. `bookingService` gestiona toda la lectura y escritura de reservas sobre `localStorage`. De esta manera, si la aplicación migra a una API REST en el futuro, los cambios solo afectarán este archivo, cumpliendo con el Principio de Responsabilidad Única.
