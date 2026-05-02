import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { loginUser } from '../services/authService';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Por favor ingresa correo y contraseña.');
      return;
    }

    try {
      const user = loginUser(email, password);
      login(user);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen hero-bg flex flex-col justify-center py-12 sm:px-6 lg:px-8" style={{ background: '#0D1117' }}>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white font-display">
          Iniciar sesión
        </h2>
        <p className="mt-2 text-center text-sm text-white/60">
          ¿No tienes cuenta?{' '}
          <Link to="/register" className="font-medium hover:text-white transition-colors" style={{ color: '#00C896' }}>
            Regístrate aquí
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="card py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="text-sm text-red-700">{error}</div>
              </div>
            )}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/70 mb-2">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link to="/" className="font-medium text-white/60 hover:text-white">
                  Volver al inicio
                </Link>
              </div>
            </div>

            <div>
              <button type="submit" className="btn-primary w-full justify-center">
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
