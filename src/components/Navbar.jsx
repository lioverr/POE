import { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="bg-white/95 border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm relative w-full">
        {/* Lado Izquierdo: LOGO DE POE */}
        <div className="flex items-center z-10">
          <div className="w-10 h-10 bg-emerald-700 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white text-xl font-bold">✳</span>
          </div>
        </div>

        {/* Centro: Título de la Empresa */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-16">
          <span className="text-base md:text-lg font-black text-slate-900 pointer-events-auto text-center leading-tight tracking-wide">
            P.O.E. Préstamos Orientados al Éxito
          </span>
        </div>

        {/* Lado Derecho: Botón de Menú */}
        <div className="flex items-center gap-4 z-10">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-lg text-slate-800 hover:bg-emerald-50 transition-colors focus:outline-none"
            aria-label="Abrir menú"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* --- SIDEBAR COMPONENTS --- */}
      {/* Fondo oscuro traslúcido */}
      <div
        className={`fixed inset-0 bg-slate-950/40 z-40 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Panel de la Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out p-6 flex flex-col justify-between ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between border-b pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-emerald-700 text-lg font-bold">✳</span>
              <h3 className="text-lg font-black text-slate-800">Menú Financiero</h3>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-slate-400 hover:text-slate-600 text-3xl leading-none"
            >
              &times;
            </button>
          </div>

          {/* Módulo en desarrollo adaptado a POE */}
          <div className="flex flex-col items-center justify-center py-10 text-center bg-emerald-50/50 rounded-2xl border border-emerald-100 p-6">
            <div className="text-4xl mb-3 animate-pulse">⚙️</div>
            <h4 className="text-sm font-bold text-emerald-900 uppercase tracking-widest">
              Historial Avanzado
            </h4>
            <p className="text-xs text-emerald-800 mt-2 leading-relaxed">
              Estamos preparando las herramientas de analíticas y proyecciones de amortización para tu cuenta.
            </p>
          </div>
        </div>

        <div className="text-center text-[10px] text-slate-400 border-t pt-4 uppercase font-bold tracking-widest">
          Plataforma Corporativa POE &copy; 2026
        </div>
      </div>
    </>
  );
};

export default Navbar;