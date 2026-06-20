import Navbar from "../components/Navbar";

const DashboardUsuario = ({ alRegresar, datosFinanzas }) => {

  const pendiente = datosFinanzas.totalPrestamo - datosFinanzas.totalAbonado;
  
  // Evitamos división por cero si el usuario no tiene préstamo activo aún
  const porcentajePagado = datosFinanzas.totalPrestamo > 0 
    ? (datosFinanzas.totalAbonado / datosFinanzas.totalPrestamo) * 100 
    : 0;

  return (
    <div className="flex flex-col min-h-screen w-full bg-slate-900 font-sans antialiased relative overflow-hidden">
      {/* ================= VECTOR DE FONDO EXTRAÍDO DE USUARIO.JSX ================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="opacity-70">
          <defs>
            <pattern id="technical-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#1e293b" strokeWidth="0.8" />
              <circle cx="50" cy="0" r="1" fill="#334155" />
            </pattern>
            <linearGradient id="emerald-glow-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.18" />
              <stop offset="50%" stopColor="#047857" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="emerald-glow-2" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#059669" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#064e3b" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#technical-grid)" />
          <path d="M-200,300 C200,100 400,600 800,250 C1200,-50 1300,400 1800,150 L1800,1200 L-200,1200 Z" fill="url(#technical-grid)" />
          <path d="M100,800 C500,550 700,900 1100,600 C1500,300 1600,800 2000,700 L2000,1200 L100,1200 Z" fill="url(#emerald-glow-2)" />
          <g stroke="#10b981" strokeWidth="1" opacity="0.25" fill="none">
            <polyline points="50,120 250,180 400,100 650,220 900,140 1200,300" />
            <circle cx="250" cy="180" r="3" fill="#10b981" />
            <circle cx="650" cy="220" r="3" fill="#10b981" />
            <circle cx="900" cy="140" r="3" fill="#10b981" />
            <polyline points="-50,700 300,600 550,750 850,580 1200,800 1500,650" stroke="#059669" strokeWidth="1.5" strokeDasharray="6 4" />
            <circle cx="550" cy="750" r="4" fill="#059669" />
            <circle cx="850" cy="580" r="4" fill="#059669" />
          </g>
          <circle cx="85%" cy="20%" r="150" fill="none" stroke="#047857" strokeWidth="0.75" strokeDasharray="5 5" opacity="0.3" />
          <circle cx="85%" cy="20%" r="100" fill="none" stroke="#10b981" strokeWidth="0.5" opacity="0.2" />
        </svg>
      </div>

      <div className="relative z-10 w-full">
        <Navbar />
      </div>

      <div className="flex-1 flex flex-col items-center p-4 md:p-10 z-10 relative w-full">
        <div className="w-full max-w-4xl space-y-6">
          
          {/* Encabezado de Navegación */}
          <div className="flex items-center justify-between text-white mb-2">
            <button 
              onClick={alRegresar}
              className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-bold font-mono text-sm"
            >
              ← Regresar al Panel
            </button>
            <h1 className="text-xs font-bold tracking-widest text-slate-400 font-mono">ESTADO DE CUENTA CORPORATIVO</h1>
          </div>

          {/* Tarjeta Principal de Resumen */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
            {/* Cabecera unificada con el gradiente exacto de Usuario.jsx */}
            <div className="bg-gradient-to-r from-emerald-700 to-slate-900 p-8 text-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <p className="text-emerald-300 text-xs font-bold uppercase font-mono">Total del Crédito</p>
                  <p className="text-3xl font-black">${datosFinanzas.totalPrestamo.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-emerald-400 text-xs font-bold uppercase font-mono">Total Abonado</p>
                  <p className="text-3xl font-black text-emerald-400">${datosFinanzas.totalAbonado.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-rose-400 text-xs font-bold uppercase font-mono">Saldo Pendiente</p>
                  <p className="text-3xl font-black text-rose-400">${pendiente.toLocaleString()}</p>
                </div>
              </div>

              {/* LÍNEA DE ABONOS ADAPTADA A LÍNEA TÉCNICA PREMIUM */}
              <div className="mt-10 space-y-3">
                <div className="flex justify-between text-sm font-bold font-mono">
                  <span>Progreso de Pago</span>
                  <span className="text-emerald-400">{porcentajePagado.toFixed(1)}% Completado</span>
                </div>
                <div className="relative w-full h-4 bg-slate-900/60 rounded-full overflow-hidden border border-slate-700">
                  <div 
                    style={{ width: `${porcentajePagado}%` }}
                    className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-1000 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                  ></div>
                </div>
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-emerald-300/60 font-bold font-mono">
                  <span>Iniciado</span>
                  <span>En Proceso</span>
                  <span>Liquidado</span>
                </div>
              </div>
            </div>

            {/* Detalles Adicionales e Historial */}
            <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Columna Izquierda: Info Cuotas */}
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-slate-400 text-[10px] font-bold uppercase font-mono">Cuotas Pagadas</p>
                  <p className="text-xl font-bold text-slate-800">{datosFinanzas.cuotasPagadas} / {datosFinanzas.totalCuotas}</p>
                </div>
                <div className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100">
                  <p className="text-emerald-700 text-[10px] font-bold uppercase font-mono">Próximo Pago</p>
                  <p className="text-xl font-bold text-slate-800">{datosFinanzas.proximoVencimiento}</p>
                </div>
              </div>

              {/* Columna Derecha: Tabla de Historial */}
              <div className="lg:col-span-2">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest font-mono mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Registro de Transacciones
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-slate-400 text-xs uppercase border-b border-slate-100 font-bold font-mono">
                        <th className="pb-3">Fecha</th>
                        <th className="pb-3">Monto</th>
                        <th className="pb-3">Método</th>
                        <th className="pb-3 text-right">Estatus</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {datosFinanzas.historial.length > 0 ? (
                        datosFinanzas.historial.map((pago) => (
                          <tr key={pago.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                            <td className="py-4 font-medium text-slate-600 font-mono text-xs">{pago.fecha}</td>
                            <td className="py-4 font-bold text-slate-900">${pago.monto}</td>
                            <td className="py-4 text-slate-500 text-xs font-mono">{pago.metodo}</td>
                            <td className="py-4 text-right">
                              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                                EXITOSO
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4" className="py-8 text-center text-slate-400 font-medium font-mono text-xs">
                            Aún no hay transacciones registradas.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>

          <footer className="text-center">
            <p className="text-slate-500 text-[10px] font-mono uppercase tracking-widest">
              Sistema de Auditoría P.O.E FinTech v2.4 - Conexión Segura SSL
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default DashboardUsuario;