import { useState } from "react";
import Navbar from "../components/Navbar"; 

const DashboardAdmin = ({ alCerrarSesion }) => {
  const [historialEmpleados] = useState([
    {
      id: "EMP-001",
      nombre: "Manuel Perez",
      puesto: "Desarrollador Backend",
      antiguedad: 2,
      salario: 950,
      objeto: "Laptop ASUS ROG Strix",
      valorEstimado: 1800,
      montoPrestado: 1200,
      cuotasTotales: 12,
      cuotasPagadas: 8,
      estado: "Al día",
      fechaSolicitud: "10/01/2026",
      departamento: "Desarrollo",
      telefono: "+58 412-1234567",
      estadoContrato: "Vigente"
    },
    {
      id: "EMP-002",
      nombre: "Luiber Alvarado",
      puesto: "Desarrollador Frontend",
      antiguedad: 3,
      salario: 950,
      objeto: "Monitor Ultrawide LG",
      valorEstimado: 450,
      montoPrestado: 200,
      cuotasTotales: 6,
      cuotasPagadas: 6,
      estado: "Liquidado",
      fechaSolicitud: "05/11/2025",
      departamento: "Desarrollo UI",
      telefono: "+58 424-7654321",
      estadoContrato: "Cancelado"
    }
  ]);

  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);

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

      <div className="flex-1 flex flex-col items-center p-6 md:p-10 w-full relative z-10">
        <div className="w-full max-w-7xl space-y-6">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-800 pb-5 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-mono">Panel de Control</span>
              </div>
              <h1 className="text-3xl font-black tracking-tight text-white mt-1">Directorio Administrativo</h1>
            </div>
            <button 
              onClick={alCerrarSesion} 
              className="bg-slate-900 text-white hover:bg-slate-800 border border-slate-700 px-4 py-2.5 rounded-xl font-bold transition-all text-sm shadow-lg active:scale-[0.98]"
            >
              Cerrar Sesión Admin
            </button>
          </div>

          {/* Tarjetas de Resumen en Formato Corporativo Limpio */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xl">
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider font-mono">Capital Activo</p>
              <h3 className="text-2xl font-black text-slate-800 mt-1">$1,400</h3>
            </div>
            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xl">
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider font-mono">Contratos Vigentes</p>
              <h3 className="text-2xl font-black text-emerald-600 mt-1">1</h3>
            </div>
            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xl">
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider font-mono">Préstamos Liquidados</p>
              <h3 className="text-2xl font-black text-slate-600 mt-1">1</h3>
            </div>
          </div>

          {/* Tabla Corporativa Blanca */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <div className="bg-gradient-to-r from-emerald-700 to-slate-900 p-5 text-white">
              <h2 className="text-lg font-bold">Listado General de Cuentas</h2>
              <p className="text-xs text-emerald-300 font-medium font-mono">Estatus financiero corporativo en tiempo real</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-xs uppercase text-slate-500 font-bold border-b border-slate-200">
                    <th className="p-4 font-mono">ID Empleado</th>
                    <th className="p-4">Nombre / Puesto</th>
                    <th className="p-4">Objeto en Garantía</th>
                    <th className="p-4">Monto Prestado</th>
                    <th className="p-4">Estatus Contrato</th>
                    <th className="p-4 text-right">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {historialEmpleados.map(emp => (
                    <tr key={emp.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-mono text-xs text-slate-400 font-semibold">{emp.id}</td>
                      <td className="p-4">
                        <p className="font-bold text-slate-800 text-sm">{emp.nombre}</p>
                        <p className="text-xs text-slate-500">{emp.puesto}</p>
                      </td>
                      <td className="p-4 text-sm text-slate-600">{emp.objeto}</td>
                      <td className="p-4 font-bold text-emerald-600">${emp.montoPrestado.toLocaleString()}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                          emp.estadoContrato === 'Vigente' 
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-200' 
                            : 'bg-slate-50 text-slate-600 border-slate-200'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${emp.estadoContrato === 'Vigente' ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                          {emp.estadoContrato}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button 
                          onClick={() => setEmpleadoSeleccionado(emp)} 
                          className="text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 px-4 py-2 rounded-lg transition-all"
                        >
                          Ver Detalles
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Admin en Estética Limpia */}
      {empleadoSeleccionado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Detail del Empleado</h3>
              
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4">
                <p className="text-xs text-slate-400 uppercase font-bold font-mono mb-3">Información Corporativa</p>
                <div className="space-y-2">
                  <div className="flex justify-between"><span className="text-slate-500 text-sm">Nombre:</span><span className="text-slate-800 text-sm font-bold">{empleadoSeleccionado.nombre}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500 text-sm">Puesto:</span><span className="text-slate-800 text-sm font-bold">{empleadoSeleccionado.puesto}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500 text-sm">Salario Base:</span><span className="text-slate-800 text-sm font-bold">${empleadoSeleccionado.salario}</span></div>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
                <p className="text-xs text-slate-400 uppercase font-bold font-mono mb-3">Detalles de la Garantía</p>
                <div className="space-y-2">
                  <div className="flex justify-between"><span className="text-slate-500 text-sm">Objeto:</span><span className="text-slate-800 text-sm font-bold">{empleadoSeleccionado.objeto}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500 text-sm">Monto Prestado:</span><span className="text-emerald-600 text-sm font-bold">${empleadoSeleccionado.montoPrestado}</span></div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-500 font-medium">Progreso de Pago</span>
                    <span className="font-bold text-slate-800">{empleadoSeleccionado.cuotasPagadas} / {empleadoSeleccionado.cuotasTotales}</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden border border-slate-300">
                    <div 
                      className={`h-full transition-all duration-500 ${empleadoSeleccionado.estadoContrato === "Cancelado" ? "bg-slate-400" : "bg-emerald-600"}`}
                      style={{ width: `${(empleadoSeleccionado.cuotasPagadas / empleadoSeleccionado.cuotasTotales) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button 
                  onClick={() => setEmpleadoSeleccionado(null)} 
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-xl transition-all"
                >
                  Cerrar Detalles
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardAdmin;