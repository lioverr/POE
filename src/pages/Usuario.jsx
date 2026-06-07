import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const Usuario = ({ alIrADashboard, datosUsuario, alProcesarSolicitud }) => {
  // Estado para alternar entre la vista del panel o el formulario de solicitud
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Estados para capturar los datos detallados del nuevo préstamo
  const [montoSolicitado, setMontoSolicitado] = useState("");
  const [cuotas, setCuotas] = useState("12");
  const [motivo, setMotivo] = useState("");
  const [objetoEmpeño, setObjetoEmpeño] = useState("");
  const [estadoObjeto, setEstadoObjeto] = useState("excelente");
  const [valorEstimado, setValorEstimado] = useState("");
  const [imagenes, setImagenes] = useState([]);

  // Limpieza de URLs creadas para evitar fugas de memoria
  const limpiarFormulario = () => {
    imagenes.forEach((url) => URL.revokeObjectURL(url));
    setImagenes([]);
    setMontoSolicitado("");
    setMotivo("");
    setObjetoEmpeño("");
    setValorEstimado("");
    setMostrarFormulario(false);
  };

  // Revocar URLs si el componente se desmonta inesperadamente
  useEffect(() => {
    return () => {
      imagenes.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [imagenes]);

  // Manejador para previsualizar las fotos cargadas
  const handleCambioImagenes = (e) => {
    const archivos = Array.from(e.target.files);
    const urlsPrevisualizacion = archivos.map((archivo) =>
      URL.createObjectURL(archivo),
    );
    setImagenes((prev) => [...prev, ...urlsPrevisualizacion]);
  };

  const handleEnviarSolicitud = (e) => {
    e.preventDefault();
    
    // Enviamos los datos al componente padre (App.jsx)
    alProcesarSolicitud({
      montoSolicitado,
      cuotas,
      motivo,
      objetoEmpeño,
      estadoObjeto,
      valorEstimado,
    });

    alert(
      `¡Solicitud por $${montoSolicitado} bajo garantía de "${objetoEmpeño}" registrada con éxito en el sistema corporativo!`
    );

    limpiarFormulario();
  };

  const handleIrDashboardSecundario = () => {
    if (alIrADashboard) {
      alIrADashboard();
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-slate-900 font-sans antialiased relative overflow-hidden">
      {/* ================= DIBUJO VECTORIAL (SVG) CON MATICES ESMERALDA Y LÍNEAS ================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="opacity-70"
        >
          <defs>
            <pattern
              id="technical-grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="#1e293b"
                strokeWidth="0.8"
              />
              <circle cx="50" cy="0" r="1" fill="#334155" />
            </pattern>

            <linearGradient
              id="emerald-glow-1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.18" />
              <stop offset="50%" stopColor="#047857" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
            </linearGradient>

            <linearGradient
              id="emerald-glow-2"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#059669" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#064e3b" stopOpacity="0" />
            </linearGradient>
          </defs>

          <rect width="100%" height="100%" fill="url(#technical-grid)" />

          <path
            d="M-200,300 C200,100 400,600 800,250 C1200,-50 1300,400 1800,150 L1800,1200 L-200,1200 Z"
            fill="url(#emerald-glow-1)"
          />
          <path
            d="M100,800 C500,550 700,900 1100,600 C1500,300 1600,800 2000,700 L2000,1200 L100,1200 Z"
            fill="url(#emerald-glow-2)"
          />

          <g stroke="#10b981" strokeWidth="1" opacity="0.25" fill="none">
            <polyline points="50,120 250,180 400,100 650,220 900,140 1200,300" />
            <circle cx="250" cy="180" r="3" fill="#10b981" />
            <circle cx="650" cy="220" r="3" fill="#10b981" />
            <circle cx="900" cy="140" r="3" fill="#10b981" />

            <polyline
              points="-50,700 300,600 550,750 850,580 1200,800 1500,650"
              stroke="#059669"
              strokeWidth="1.5"
              strokeDasharray="6 4"
            />
            <circle cx="550" cy="750" r="4" fill="#059669" />
            <circle cx="850" cy="580" r="4" fill="#059669" />
          </g>

          <circle
            cx="85%"
            cy="20%"
            r="150"
            fill="none"
            stroke="#047857"
            strokeWidth="0.75"
            strokeDasharray="5 5"
            opacity="0.3"
          />
          <circle
            cx="85%"
            cy="20%"
            r="100"
            fill="none"
            stroke="#10b981"
            strokeWidth="0.5"
            opacity="0.2"
          />
        </svg>
      </div>

      <Navbar />

      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-10 z-10">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transition-all duration-300">
          <div className="bg-gradient-to-r from-emerald-700 to-slate-900 p-6 text-white relative">
            <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">✳</span>
            </div>
            <p className="text-xs font-semibold tracking-wider text-emerald-300 uppercase">
              Garantía Prendaria y Corporativa
            </p>
            <h2 className="text-2xl font-bold mt-1">
              Préstamos Orientados al Éxito
            </h2>
          </div>

          {!mostrarFormulario ? (
            <div className="p-8 space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">
                  Empleado / Cliente
                </p>
                <h3 className="text-2xl font-bold text-slate-800 mt-1">
                  {datosUsuario.nombre}
                </h3>
                <span className="text-xs text-slate-500 font-mono">
                  ID de Cuenta: {datosUsuario.codigoCliente}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                    Deuda Activa
                  </p>
                  <p className="text-2xl font-black text-slate-900 mt-1">
                    {datosUsuario.prestamoActivo}
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 flex flex-col justify-between">
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                    Línea de Crédito
                  </p>
                  <span className={`self-start inline-flex items-center px-3 py-1 rounded-full text-xs font-bold mt-2 ${datosUsuario.puedeSolicitar ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                    ● {datosUsuario.estado}
                  </span>
                </div>
              </div>

              <div className="bg-emerald-50/60 border border-emerald-100 p-4 rounded-xl flex justify-between items-center">
                <div>
                  <p className="text-xs text-emerald-900 font-bold uppercase tracking-wider">
                    Estatus de Pagos
                  </p>
                  <p className="text-base font-semibold text-slate-800 mt-0.5">
                    {datosUsuario.proximoPago}
                  </p>
                </div>
                <span className="text-xs text-emerald-600 font-bold font-mono tracking-widest">
                  P.O.E FINTECH
                </span>
              </div>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {datosUsuario.puedeSolicitar ? (
                  <button
                    onClick={() => setMostrarFormulario(true)}
                    className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-700 transition-all active:scale-[0.99] shadow-lg shadow-emerald-600/20 text-center"
                  >
                    Solicitar Crédito con Empeño
                  </button>
                ) : (
                  <div className="w-full bg-slate-100 text-slate-400 font-bold py-4 rounded-xl flex items-center justify-center border border-slate-200 text-center cursor-not-allowed">
                    Solicitud en Proceso 🔒
                  </div>
                )}

                <button
                  onClick={handleIrDashboardSecundario}
                  className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all active:scale-[0.99] text-center"
                >
                  Historial e Informes Financieros
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleEnviarSolicitud} className="p-8 space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-2xl font-bold text-slate-900">
                  Nueva Solicitud Especial
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Declare los detalles financieros y el artículo físico que respaldará el préstamo.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Cantidad a Solicitar ($)
                  </label>
                  <input
                    type="number"
                    required
                    value={montoSolicitado}
                    onChange={(e) => setMontoSolicitado(e.target.value)}
                    placeholder="Ej. 2500"
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 outline-none transition-colors focus:border-emerald-600 font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Plazo de Devolución
                  </label>
                  <select
                    value={cuotas}
                    onChange={(e) => setCuotas(e.target.value)}
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 outline-none transition-colors focus:border-emerald-600 font-medium"
                  >
                    <option value="6">6 Meses (Corto Plazo)</option>
                    <option value="12">12 Meses (Estándar)</option>
                    <option value="24">24 Meses (Plazo Extendido)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Motivo del Préstamo
                </label>
                <textarea
                  required
                  rows="2"
                  value={motivo}
                  onChange={(e) => setMotivo(e.target.value)}
                  placeholder="Explique brevemente el destino de los fondos solicitados..."
                  className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 outline-none transition-colors focus:border-emerald-600 resize-none font-medium"
                />
              </div>

              <div className="bg-slate-50/80 p-5 rounded-xl border border-slate-200/60 space-y-4">
                <h4 className="text-sm font-bold text-emerald-800 uppercase tracking-wider border-b border-slate-200/60 pb-1.5">
                  🛡️ Registro de Garantía Física (Prenda)
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-600">
                      Objeto / Artículo a Empeñar
                    </label>
                    <input
                      type="text"
                      required
                      value={objetoEmpeño}
                      onChange={(e) => setObjetoEmpeño(e.target.value)}
                      placeholder="Ej. Laptop ASUS ROG Strix, Reloj, Título"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-800 outline-none focus:border-emerald-600 text-sm font-medium"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-600">
                      Valor Comercial Estimado ($)
                    </label>
                    <input
                      type="number"
                      required
                      value={valorEstimado}
                      onChange={(e) => setValorEstimado(e.target.value)}
                      placeholder="Ej. 1800"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-800 outline-none focus:border-emerald-600 text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600">
                    Estado de Conservación
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["excelente", "bueno", "regular"].map((estado) => (
                      <button
                        key={estado}
                        type="button"
                        onClick={() => setEstadoObjeto(estado)}
                        className={`py-2 px-3 text-xs font-bold capitalize rounded-lg border transition-all ${
                          estadoObjeto === estado
                            ? "bg-emerald-600 text-white border-emerald-600"
                            : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {estado}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600 block">
                    Fotos de la Garantía (Mínimo una vista frontal/detallada)
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-slate-300 border-dashed rounded-xl cursor-pointer bg-white hover:bg-slate-100/70 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-4 pb-4">
                        <span className="text-2xl">📷</span>
                        <p className="text-xs text-slate-500 mt-1 font-medium">
                          Haga clic para subir archivos o imágenes
                        </p>
                        <p className="text-[10px] text-slate-400 font-mono">
                          PNG, JPG hasta 5MB
                        </p>
                      </div>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        className="hidden"
                        onChange={handleCambioImagenes}
                      />
                    </label>
                  </div>

                  {imagenes.length > 0 && (
                    <div className="grid grid-cols-4 gap-2 pt-2">
                      {imagenes.map((src, index) => (
                        <div
                          key={index}
                          className="relative aspect-square rounded-lg overflow-hidden border border-slate-200 shadow-sm group"
                        >
                          <img
                            src={src}
                            alt={`Garantía ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                            <span className="text-white text-xs font-bold">
                              Cargada
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-700 transition-all active:scale-[0.99] shadow-lg shadow-emerald-600/20 text-center"
                >
                  Registrar Solicitud Completa
                </button>

                <button
                  type="button"
                  onClick={limpiarFormulario}
                  className="w-full bg-slate-200 text-slate-700 font-bold py-4 rounded-xl hover:bg-slate-300 transition-all active:scale-[0.99] text-center"
                >
                  Regresar al Panel
                </button>
              </div>
            </form>
          )}

          <div className="bg-slate-50 px-8 py-4 text-center border-t border-slate-100">
            <p className="text-xs text-slate-400 font-medium">
              Copyright © 2026 POE S.A. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usuario;