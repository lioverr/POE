import { useState } from 'react';

const LoginSplit = ({ onLoginSuccess, onAdminLoginSuccess, onLegalLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const ADMIN_CREDENTIALS = {
    email: 'admin@poe.com',
    password: 'admin1234'
  };

  const LEGAL_CREDENTIALS = {
    email: 'legal@poe.com',
    password: 'legal1234'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { email: '', password: '' };
    let valid = true;

    if (!email.includes('@')) {
      newErrors.email = 'Introduce un correo válido, mano.';
      valid = false;
    }
    if (password.length < 6) {
      newErrors.password = 'La contraseña es muy corta.';
      valid = false;
    }

    setErrors(newErrors);
  
    if (valid) {
      if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
        console.log('Login de Administrador exitoso');
        if (onAdminLoginSuccess) onAdminLoginSuccess();
      } else if (email === LEGAL_CREDENTIALS.email && password === LEGAL_CREDENTIALS.password) {
        console.log('Login de Legal exitoso');
        if (onLegalLoginSuccess) onLegalLoginSuccess();
      } else {
        console.log('Login de Usuario exitoso');
        if (onLoginSuccess) onLoginSuccess();
      }
    }
  };

  return (
    <div className="flex min-h-screen w-full font-sans antialiased">
      <div className="hidden w-1/2 bg-gradient-to-br from-emerald-700 to-slate-950 p-16 md:flex flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0, 50 0, 100 100" stroke="white" fill="transparent" strokeWidth="0.1" />
            <path d="M0 80 C 30 20, 60 20, 100 80" stroke="white" fill="transparent" strokeWidth="0.1" />
          </svg>
        </div>

        <div className="relative z-10">
          <div className="mb-12">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl">✳</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Bienvenido <br /> a Préstamos Orientados al Éxito
          </h1>
        </div>

        <div className="relative z-10 text-blue-200 text-sm">
          Copyright © 2026 POE S.A.
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 md:p-20">
        <div className="w-full max-w-sm">
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-slate-900 mb-2">¡Bienvenido de vuelta!</h3>
            <p className="text-sm text-slate-500">
              <a href="#" className="text-slate-900 font-semibold underline decoration-2 underline-offset-4">¿Problemas técnicos? ¡Contáctanos!</a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="correo@empresa.com"
                className="w-full border-b-2 border-slate-300 py-3 text-slate-900 outline-none transition-colors focus:border-emerald-600 placeholder:text-slate-500"
              />
              {errors.email && <p className="text-xs text-red-500 mt-1 absolute">{errors.email}</p>}
            </div>

            <div className="relative pt-4">
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                className="w-full border-b-2 border-slate-300 py-3 text-slate-900 outline-none transition-colors focus:border-emerald-600 placeholder:text-slate-500"
              />
              {errors.password && <p className="text-xs text-red-500 mt-1 absolute">{errors.password}</p>}
            </div>

            <div className="pt-4 space-y-4">
              <button type="submit" className="w-full bg-emerald-700 text-white font-bold py-4 rounded-xl hover:bg-emerald-800 transition-all active:scale-[0.98]">
                Iniciar Sesión
              </button>
            </div>

            <div className="text-center pt-1">
              <p className="text-sm text-slate-400">
                <a href="#" className="text-emerald-700 font-bold underline underline-offset-4">¿Olvidaste tu contraseña?</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSplit;