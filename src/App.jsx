import { useState } from 'react';
import './App.css';
import './index.css';
import LoginSplit from './pages/Loginsplit';
import Usuario from './pages/Usuario'; 
import DashboardUsuario from "./pages/DashboardUsuario";
import DashboardAdmin from "./pages/DashboardAdmin"; // IMPORTANTE: Agrega la importación del nuevo archivo

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Nuevo estado para definir el tipo de cuenta ("usuario" o "admin")
  const [rol, setRol] = useState(null); 
  // Estado para controlar qué pantalla ver el empleado normal: "usuario" o "dashboard"
  const [vista, setVista] = useState("usuario"); 

  // Función limpia para cerrar sesión y devolver los estados a cero
  const handleCerrarSesion = () => {
    setIsLoggedIn(false);
    setRol(null);
    setVista("usuario");
  };

  return (
    <>
      {!isLoggedIn ? (
        // Pantalla de Login (Si no hay sesión iniciada)
        <LoginSplit 
          onLoginSuccess={() => {
            setIsLoggedIn(true);
            setRol("usuario");
            setVista("usuario"); // Por defecto, el usuario entra al formulario
          }} 
          onAdminLoginSuccess={() => {
            setIsLoggedIn(true);
            setRol("admin"); // El admin entra directo a su rol
          }}
        />
      ) : rol === "admin" ? (
        // Pantalla Única de Administrador (Si el rol es admin)
        <DashboardAdmin alCerrarSesion={handleCerrarSesion} />
      ) : (
        // Pantallas de Empleado Normal (Si el rol es usuario)
        vista === "usuario" ? (
          <Usuario alIrADashboard={() => setVista("dashboard")} />
        ) : (
          <DashboardUsuario alRegresar={() => setVista("usuario")} /> 
        )
      )}
    </>
  );
}

export default App;