import Navbar from "../components/Navbar";

const DashboardUsuario = ({ alRegresar, datosFinanzas }) => {

  const pendiente = datosFinanzas.totalPrestamo - datosFinanzas.totalAbonado;
  
  // Evitamos división por cero si el usuario no tiene préstamo activo aún
  const porcentajePagado = datosFinanzas.totalPrestamo > 0 
    ? (datosFinanzas.totalAbonado / datosFinanzas.totalPrestamo) * 100 
    : 0;

  return (
    <div className="flex flex-col min-h-screen w-full bg-slate-900 font-sans antialiased relative overflow-hidden">
      {/* Fondo técnico SVG */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Navbar />

      <div className="flex-1 flex flex-col items-center p-4 md:p-10 z-10">
        <div className="w-full max-w-4xl space-y-6">
          
          {/* Encabezado de Navegación */}
          <div className="flex items-center justify-between text-white mb-2">
            <button 
              onClick={alRegresar}
              className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
            >
              ← Regresar al Panel
            </button>
            <h1 className="text-xl font-bold tracking-tight">ESTADO DE CUENTA CORPORATIVO</h1>
          </div>

          {/* Tarjeta Principal de Resumen */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
            <div className="bg-slate-800 p-8 text-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase">Total del Crédito</p>
                  <p className="text-3xl font-black">${datosFinanzas.totalPrestamo.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-emerald-400 text-xs font-bold uppercase">Total Abonado</p>
                  <p className="text-3xl font-black text-emerald-400">${datosFinanzas.totalAbonado.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-rose-400 text-xs font-bold uppercase">Saldo Pendiente</p>
                  <p className="text-3xl font-black text-rose-400">${pendiente.toLocaleString()}</p>
                </div>
              </div>

              {/* LÍNEA DE ABONOS BICOLOR */}
              <div className="mt-10 space-y-3">
                <div className="flex justify-between text-sm font-bold">
                  <span>Progreso de Pago</span>
                  <span className="text-emerald-400">{porcentajePagado.toFixed(1)}% Completado</span>
                </div>
                <div className="relative w-full h-5 bg-slate-700 rounded-full overflow-hidden border border-slate-600">
                  <div 
                    style={{ width: `${porcentajePagado}%` }}
                    className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-1000 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                  ></div>
                </div>
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-slate-400 font-bold">
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
                  <p className="text-slate-400 text-[10px] font-bold uppercase">Cuotas Pagadas</p>
                  <p className="text-xl font-bold text-slate-800">{datosFinanzas.cuotasPagadas} / {datosFinanzas.totalCuotas}</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                  <p className="text-emerald-700 text-[10px] font-bold uppercase">Próximo Pago</p>
                  <p className="text-xl font-bold text-slate-800">{datosFinanzas.proximoVencimiento}</p>
                </div>
              </div>

              {/* Columna Derecha: Tabla de Historial */}
              <div className="lg:col-span-2">
                <h3 className="text-sm font-bold text-slate-800 uppercase mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Registro de Transacciones
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-slate-400 text-xs uppercase border-b border-slate-100">
                        <th className="pb-3 font-bold">Fecha</th>
                        <th className="pb-3 font-bold">Monto</th>
                        <th className="pb-3 font-bold">Método</th>
                        <th className="pb-3 font-bold text-right">Estatus</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {datosFinanzas.historial.length > 0 ? (
                        datosFinanzas.historial.map((pago) => (
                          <tr key={pago.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                            <td className="py-4 font-medium text-slate-600">{pago.fecha}</td>
                            <td className="py-4 font-bold text-slate-900">${pago.monto}</td>
                            <td className="py-4 text-slate-500 text-xs">{pago.metodo}</td>
                            <td className="py-4 text-right">
                              <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-[10px] font-bold">EXITOSO</span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4" className="py-8 text-center text-slate-400 font-medium">
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
            <p className="text-slate-500 text-[10px] font-mono uppercase tracking-tighter">
              Sistema de Auditoría P.O.E FinTech v2.4 - Conexión Segura SSL
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default DashboardUsuario;