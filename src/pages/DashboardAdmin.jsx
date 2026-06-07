import { useState } from "react";
import Navbar from "../components/Navbar"; // Asegúrate de que la ruta sea correcta

const DashboardAdmin = ({ alCerrarSesion }) => {
  // Historial simulado de todos los empleados y sus objetos hipotecados
  const [historialEmpleados] = useState([
    {
      id: "EMP-001",
      nombre: "Pedrito Gamer",
      objeto: "Laptop ASUS ROG Strix",
      valorEstimado: 1800,
      montoPrestado: 1200,
      cuotasTotales: 12,
      cuotasPagadas: 8,
      estado: "Al día",
      fechaSolicitud: "10/01/2026"
    },
    {
      id: "EMP-002",
      nombre: "Gabriela Mendoza",
      objeto: "Reloj Inteligente Garmin",
      valorEstimado: 450,
      montoPrestado: 200,
      cuotasTotales: 6,
      cuotasPagadas: 6,
      estado: "Liquidado",
      fechaSolicitud: "05/11/2025"
    },
    {
      id: "EMP-003",
      nombre: "Carlos Ruiz",
      objeto: "Consola PS5 Edición Disco",
      valorEstimado: 600,
      montoPrestado: 450,
      cuotasTotales: 12,
      cuotasPagadas: 2,
      estado: "Atrasado",
      fechaSolicitud: "14/04/2026"
    }
  ]);

  // Función para asignar colores al estado del préstamo
  const getColorEstado = (estado) => {
    switch (estado) {
      case "Al día": return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "Liquidado": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Atrasado": return "bg-rose-100 text-rose-800 border-rose-200";
      default: return "bg-slate-100 text-slate-800 border-slate-200";
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-slate-900 font-sans antialiased relative overflow-hidden">
      {/* Fondo técnico SVG (Misma estética de los otros componentes) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
        <svg width="100%" height="100%">
          <pattern id="grid-admin" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-admin)" />
        </svg>
      </div>

      <Navbar />

      <div className="flex-1 flex flex-col items-center p-4 md:p-10 z-10 w-full">
        <div className="w-full max-w-6xl space-y-6">
          
          {/* Encabezado */}
          <div className="flex items-center justify-between text-white mb-4">
            <div>
              <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-1">P.O.E Fintech</p>
              <h1 className="text-3xl font-bold tracking-tight">Panel de Control Administrativo</h1>
            </div>
            <button 
              onClick={alCerrarSesion}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold rounded-lg border border-slate-700 transition-colors"
            >
              Cerrar Sesión Admin
            </button>
          </div>

          {/* Tarjeta de Historial General */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
            <div className="bg-slate-800 p-6 border-b border-slate-700">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="text-emerald-400">🛡️</span> Registro Global de Garantías Hipotecadas
              </h2>
              <p className="text-slate-400 text-sm mt-1">Supervisión de préstamos activos, cuotas y objetos en custodia.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-bold">
                    <th className="p-4">ID Empleado</th>
                    <th className="p-4">Objeto en Garantía</th>
                    <th className="p-4 text-right">Valor Est.</th>
                    <th className="p-4 text-right">Monto Prestado</th>
                    <th className="p-4 text-center">Cuotas (Pagadas/Total)</th>
                    <th className="p-4">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {historialEmpleados.map((empleado, index) => (
                    <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4">
                        <p className="text-sm font-bold text-slate-900">{empleado.nombre}</p>
                        <p className="text-xs text-slate-500 font-mono">{empleado.id}</p>
                      </td>
                      <td className="p-4">
                        <p className="text-sm font-semibold text-slate-800">{empleado.objeto}</p>
                        <p className="text-xs text-slate-400">Solicitado: {empleado.fechaSolicitud}</p>
                      </td>
                      <td className="p-4 text-right text-sm font-medium text-slate-600">
                        ${empleado.valorEstimado}
                      </td>
                      <td className="p-4 text-right text-sm font-bold text-slate-900">
                        ${empleado.montoPrestado}
                      </td>
                      <td className="p-4">
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-sm font-bold text-slate-700">
                            {empleado.cuotasPagadas} <span className="text-slate-400 font-normal">/ {empleado.cuotasTotales}</span>
                          </span>
                          {/* Pequeña barra de progreso */}
                          <div className="w-full max-w-[80px] h-1.5 bg-slate-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-emerald-500" 
                              style={{ width: `${(empleado.cuotasPagadas / empleado.cuotasTotales) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border ${getColorEstado(empleado.estado)}`}>
                          {empleado.estado}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer de la tarjeta */}
            <div className="bg-slate-50 p-4 border-t border-slate-200 text-center flex justify-between items-center px-6">
              <span className="text-xs text-slate-500 font-medium">Mostrando {historialEmpleados.length} registros</span>
              <button className="text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                Descargar Reporte Completo ↓
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;