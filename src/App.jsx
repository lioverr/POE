import { useState } from 'react';
import './App.css';
import './index.css';
import LoginSplit from './pages/Loginsplit';
import Usuario from './pages/Usuario'; 
import DashboardUsuario from "./pages/DashboardUsuario";
import DashboardAdmin from "./pages/DashboardAdmin";
// Importación corregida: Ahora sí llama al archivo correcto
import DashboardLegal from "./pages/DashboardLegal";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [rol, setRol] = useState(null); 
  const [vista, setVista] = useState("usuario"); 

  // 1. Estado para los datos del Usuario actual conectado
  const [datosUsuario, setDatosUsuario] = useState({
    nombre: "Juan Pérez", 
    codigoCliente: "EMP-0924",
    prestamoActivo: "$0",
    estado: "Aprobado",
    proximoPago: "Sin deudas",
    puedeSolicitar: true
  });

  // 2. Estado para las finanzas y el historial del usuario actual
  const [datosFinanzas, setDatosFinanzas] = useState({
    totalPrestamo: 0,
    totalAbonado: 0,
    cuotasPagadas: 0,
    totalCuotas: 0,
    proximoVencimiento: "N/A",
    historial: [] 
  });

  // ================= CONEXIÓN LEGAL =================
  // 3. Estado maestro que comparte la administración con la base de datos simulada
  const [historialEmpleados, setHistorialEmpleados] = useState([
    {
      id: "EMP-001",
      nombre: "Pedrito Gamer",
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
      nombre: "Gabriela Mendoza",
      objeto: "Reloj Inteligente Garmin",
      valorEstimado: 450,
      montoPrestado: 200,
      cuotasTotales: 6,
      cuotasPagadas: 6,
      estado: "Liquidado",
      fechaSolicitud: "05/11/2025",
      departamento: "Recursos Humanos",
      telefono: "+58 424-7654321",
      estadoContrato: "Cancelado"
    }
  ]);

  const handleCerrarSesion = () => {
    setIsLoggedIn(false);
    setRol(null);
    setVista("usuario");
  };

  // 4. Procesar Solicitud
  const handleProcesarSolicitud = (datosSolicitud) => {
    const monto = parseFloat(datosSolicitud.montoSolicitado);
    const cuotas = parseInt(datosSolicitud.cuotas);

    setDatosUsuario(prev => ({
      ...prev,
      prestamoActivo: `$${monto.toLocaleString()}`,
      estado: "En proceso de validación",
      puedeSolicitar: false, 
      proximoPago: "Por definir (Revisión Legal)"
    }));

    setDatosFinanzas(prev => ({
      ...prev,
      totalPrestamo: monto,
      totalAbonado: 0,
      cuotasPagadas: 0,
      totalCuotas: cuotas,
      proximoVencimiento: "Pendiente de aprobación",
      historial: [] 
    }));

    const nuevaSolicitudLegal = {
      id: datosUsuario.codigoCliente, 
      nombre: datosUsuario.nombre,     
      objeto: datosSolicitud.objetoEmpeño,
      valorEstimado: parseFloat(datosSolicitud.valorEstimado) || 0,
      montoPrestado: monto,
      cuotasTotales: cuotas,
      cuotasPagadas: 0,
      estado: "Pendiente",
      fechaSolicitud: new Date().toLocaleDateString('es-VE'),
      departamento: datosSolicitud.puesto || "Sistemas",
      telefono: "+58 412-5555555",
      estadoContrato: "En revisión legal" 
    };

    setHistorialEmpleados(prev => {
      const existe = prev.some(emp => emp.id === nuevaSolicitudLegal.id);
      if (existe) {
        return prev.map(emp => emp.id === nuevaSolicitudLegal.id ? nuevaSolicitudLegal : emp);
      }
      return [nuevaSolicitudLegal, ...prev];
    });
  };

  // 5. ACCIONES LEGALES
  const handleAprobarContrato = (idEmpleado) => {
    if (idEmpleado === datosUsuario.codigoCliente) {
      setDatosUsuario(prev => ({
        ...prev,
        estado: "Aprobado",
        proximoPago: "Al día"
      }));
      setDatosFinanzas(prev => ({
        ...prev,
        proximoVencimiento: "05/07/2026"
      }));
    }

    setHistorialEmpleados(prev =>
      prev.map(emp => emp.id === idEmpleado ? { ...emp, estadoContrato: "Vigente", estado: "Al día" } : emp)
    );
  };

  const handleRechazarContrato = (idEmpleado) => {
    if (idEmpleado === datosUsuario.codigoCliente) {
      setDatosUsuario(prev => ({
        ...prev,
        prestamoActivo: "$0",
        estado: "Rechazado por Dept. Legal",
        puedeSolicitar: true,
        proximoPago: "Sin deudas"
      }));
      setDatosFinanzas({
        totalPrestamo: 0,
        totalAbonado: 0,
        cuotasPagadas: 0,
        totalCuotas: 0,
        proximoVencimiento: "N/A",
        historial: []
      });
    }

    setHistorialEmpleados(prev =>
      prev.map(emp => emp.id === idEmpleado ? { ...emp, estadoContrato: "Rechazado", estado: "No aprobado" } : emp)
    );
  };

  return (
    <>
      {!isLoggedIn ? (
        <LoginSplit 
          onLoginSuccess={() => {
            setIsLoggedIn(true);
            setRol("usuario");
            setVista("usuario"); 
          }} 
          onAdminLoginSuccess={() => {
            setIsLoggedIn(true);
            setRol("admin"); 
          }}
          onLegalLoginSuccess={() => {
            setIsLoggedIn(true);
            setRol("legal");
          }}
        />
      ) : rol === "admin" ? (
        <DashboardAdmin 
          alCerrarSesion={handleCerrarSesion} 
          historialEmpleados={historialEmpleados}
          alAprobarContrato={handleAprobarContrato}
          alRechazarContrato={handleRechazarContrato}
        />
      ) : rol === "legal" ? (
        <DashboardLegal 
          alCerrarSesion={handleCerrarSesion} 
          historialEmpleados={historialEmpleados}
          alAprobarContrato={handleAprobarContrato}
          alRechazarContrato={handleRechazarContrato}
        />
      ) : (
        vista === "usuario" ? (
          <Usuario 
            alIrADashboard={() => setVista("dashboard")} 
            datosUsuario={datosUsuario}
            alProcesarSolicitud={handleProcesarSolicitud}
          />
        ) : (
          <DashboardUsuario 
            alRegresar={() => setVista("usuario")} 
            datosFinanzas={datosFinanzas}
          /> 
        )
      )}
    </>
  );
}

export default App;