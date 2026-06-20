import { useState } from "react";
import Navbar from "../components/Navbar";

const DashboardLegal = ({ alCerrarSesion }) => {
  // Se agregaron los datos de la prenda y plazos para que el contrato pueda mostrarlos
  const [contratos] = useState([
    {
      idDoc: "DOC-9921",
      empleado: "Manuel Perez",
      fechaFirmaUsuario: "10/01/2026",
      monto: 1200,
      estatusLegal: "Aprobado",
      firmaUsuario: "M. Perez",
      firmaLegal: "Lic. R. Gomez",
      objeto: "Laptop ASUS ROG Strix",
      estadoObjeto: "excelente",
      valorEstimado: 1800,
      cuotas: 12,
      salarioMensual: 950
    },
    {
      idDoc: "DOC-9922",
      empleado: "Pedro sanches",
      fechaFirmaUsuario: "14/04/2026",
      monto: 450,
      estatusLegal: "Pendiente Revisión",
      firmaUsuario: "P. Sanchez",
      firmaLegal: null,
      objeto: "Monitor Ultrawide LG",
      estadoObjeto: "bueno",
      valorEstimado: 450,
      cuotas: 6,
      salarioMensual: 850
    }
  ]);

  const [contratoActivo, setContratoActivo] = useState(null);

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
          <path d="M-200,300 C200,100 400,600 800,250 C1200,-50 1300,400 1800,150 L1800,1200 L-200,1200 Z" fill="url(#emerald-glow-1)" />
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
        <div className="w-full max-w-6xl space-y-6">
          
          {/* Encabezado Principal */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-800 pb-5 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-mono">P.O.E Departamento Legal</span>
              </div>
              <h1 className="text-3xl font-black tracking-tight text-white mt-1">Auditoría de Contratos</h1>
            </div>
            
            <button 
              onClick={alCerrarSesion} 
              className="bg-slate-900 text-white hover:bg-slate-800 border border-slate-700 px-4 py-2.5 rounded-xl font-bold transition-all text-sm shadow-lg active:scale-[0.98]"
            >
              Cerrar Sesión Legal
            </button>
          </div>

          {/* Tabla de Documentos */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <div className="bg-gradient-to-r from-emerald-700 to-slate-900 p-5 text-white">
              <h2 className="text-lg font-bold">Listado de Documentos Digitales</h2>
              <p className="text-xs text-emerald-300 font-medium font-mono">Registro unificado bajo cifrado corporativo v2.5</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-xs uppercase text-slate-500 font-bold border-b border-slate-200">
                    <th className="p-4 font-mono">ID Documento</th>
                    <th className="p-4">Solicitante</th>
                    <th className="p-4">Fecha Firma</th>
                    <th className="p-4">Monto ($)</th>
                    <th className="p-4">Estatus Legal</th>
                    <th className="p-4 text-right">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {contratos.map(c => (
                    <tr key={c.idDoc} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-mono text-xs text-slate-400 font-semibold">{c.idDoc}</td>
                      <td className="p-4 font-bold text-slate-800 text-sm">{c.empleado}</td>
                      <td className="p-4 text-sm text-slate-600">{c.fechaFirmaUsuario}</td>
                      <td className="p-4 font-bold text-emerald-600">${c.monto.toLocaleString()}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                          c.estatusLegal === 'Aprobado' 
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-200' 
                            : 'bg-amber-50 text-amber-800 border-amber-200'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${c.estatusLegal === 'Aprobado' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                          {c.estatusLegal}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button 
                          onClick={() => setContratoActivo(c)} 
                          className="text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 px-4 py-2 rounded-lg transition-all"
                        >
                          Revisar Documento
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

      {/* Modal de Lectura de Contrato (Idéntico a la VISTA 3 de Usuario.jsx) */}
      {contratoActivo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden font-sans relative">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-600 to-slate-900"></div>
            
            <div className="p-8">
              {/* Contenedor del Contrato con Estilo Premium */}
              <div className="bg-amber-50/60 p-6 border border-amber-200 rounded-xl font-serif text-sm text-slate-800 shadow-inner max-h-[55vh] overflow-y-auto custom-scrollbar">
                <div className="text-center mb-6 border-b border-amber-900/20 pb-4">
                  <h3 className="text-lg font-bold uppercase tracking-widest text-amber-900">Contrato de Mutuo con Garantía Prendaria</h3>
                  <p className="text-[10px] text-slate-500 font-sans font-semibold mt-1">Ref Documental: {contratoActivo.idDoc}</p>
                </div>
                
                <p className="mb-4 text-justify leading-relaxed">
                  Conste por medio del presente documento vinculante, que por una parte la empresa <b>P.O.E Fintech S.A.</b> (en adelante, "El Acreedor") y por la otra el empleado contratado de forma activa, <b>{contratoActivo.empleado}</b>, celebran este contrato bajo los siguientes términos:
                </p>
                <p className="mb-4 text-justify leading-relaxed">
                  <b>PRIMERA (Monto y Retención):</b> El Acreedor desembolsará la suma exacta de <b>${contratoActivo.monto} USD</b>. El deudor acepta de forma explícita que las cuotas mensuales proporcionales al esquema de <b>{contratoActivo.cuotas} meses</b> seleccionadas sean deducidas de manera automatizada de su esquema de compensación base (calculado bajo la tasa estándar corporativa sobre un estimado mensual de <b>${contratoActivo.salarioMensual} USD</b>).
                </p>
                <p className="mb-4 text-justify leading-relaxed">
                  <b>SEGUNDA (Garantía Ejecutable):</b> En señal de conformidad, el solicitante cede en garantía prendaria mobiliaria el objeto verificado como <b>"{contratoActivo.objeto}"</b> en estado <b>{contratoActivo.estadoObjeto}</b>, con un valor estimado de mercado de <b>${contratoActivo.valorEstimado} USD</b>. En caso de morosidad prolongada, el bien pasará a disposición de la junta administrativa legal.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Firma del Solicitante</label>
                    <div className="w-full border-b-2 border-slate-400 bg-transparent py-2 font-mono text-base text-slate-900">
                      {contratoActivo.firmaUsuario}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Sello y Firma Legal P.O.E.</label>
                    <div className={`w-full border-b-2 border-slate-400 bg-transparent py-2 font-mono text-base ${contratoActivo.firmaLegal ? 'text-emerald-700' : 'text-slate-400 italic'}`}>
                      {contratoActivo.firmaLegal || "[PENDIENTE DE FIRMA]"}
                    </div>
                  </div>
                </div>

                <div className="mt-6 opacity-60 text-[11px] font-mono text-slate-500 flex justify-between">
                  <p>● ENDOSO: {contratoActivo.firmaLegal ? "APROBADO" : "PENDIENTE ADMINISTRADOR"}</p>
                  <p>● AUDITORÍA: POE SECURE SSL v2.5</p>
                </div>
              </div>

              {/* Botones de acción del Modal Legal */}
              <div className="mt-6 flex justify-end gap-3">
                <button 
                  onClick={() => setContratoActivo(null)} 
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 text-sm font-bold rounded-xl transition-all"
                >
                  Cerrar Visor
                </button>
                
                {!contratoActivo.firmaLegal && (
                  <button className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-xl transition-all shadow-md shadow-emerald-600/20">
                    Aprobar y Firmar
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLegal;