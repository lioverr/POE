import { useState } from "react";
import Login from "./pages/Loginsplit"; 
import Usuario from "./pages/Usuario";
import DashboardUsuario from "./pages/DashboardUsuario";

const App = () => {
  // 1. Ahora el estado inicial es el Login
  const [vistaActiva, setVistaActiva] = useState("login");

  const [userData, setUserData] = useState({
    nombre: "Pedrito Gamer",
    codigoCliente: "256128",
    prestamoActivo: "$0.00",
    proximoPago: "Sin pagos pendientes",
    estado: "Disponible para solicitar",
    puedeSolicitar: true,
  });

  const [finanzas, setFinanzas] = useState({
    totalPrestamo: 0,
    totalAbonado: 0,
    cuotasPagadas: 0,
    totalCuotas: 0,
    ultimoAbono: "-",
    proximoVencimiento: "-",
    historial: [],
  });

  // Función para simular el inicio de sesión
  const handleLogin = (credenciales) => {
    // Aquí a futuro se validará con la base de datos
    // Por ahora, al darle "Entrar", pasamos a la vista de usuario
    setVistaActiva("usuario");
  };

  const procesarNuevaSolicitud = (datosSolicitud) => {
    setUserData((prev) => ({
      ...prev,
      prestamoActivo: `$${datosSolicitud.montoSolicitado}`,
      proximoPago: "Pendiente de aprobación",
      estado: "Crédito en Revisión",
      puedeSolicitar: false, 
    }));

    setFinanzas({
      totalPrestamo: parseFloat(datosSolicitud.montoSolicitado),
      totalAbonado: 0,
      cuotasPagadas: 0,
      totalCuotas: parseInt(datosSolicitud.cuotas),
      ultimoAbono: "N/A",
      proximoVencimiento: "Por definir",
      historial: [],
    });
  };

  return (
    <div className="bg-slate-900 min-h-screen w-full">
      {/* Control de Vistas usando renderizado condicional */}
      {vistaActiva === "login" && (
        <Login alIngresar={handleLogin} />
      )}

      {vistaActiva === "usuario" && (
        <Usuario
          alIrADashboard={() => setVistaActiva("dashboard")}
          datosUsuario={userData}
          alProcesarSolicitud={procesarNuevaSolicitud}
        />
      )}

      {vistaActiva === "dashboard" && (
        <DashboardUsuario
          alRegresar={() => setVistaActiva("usuario")}
          datosFinanzas={finanzas}
        />
      )}
    </div>
  );
};

export default App;