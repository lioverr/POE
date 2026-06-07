import { useState } from 'react';
import './App.css';
import './index.css';
import LoginSplit from './pages/Loginsplit';
import Usuario from './pages/Usuario'; 
import DashboardUsuario from "./pages/DashboardUsuario"; // Tu componente del dashboard

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Estado para controlar qué pantalla ver una vez logueado: "usuario" o "dashboard"
  const [vista, setVista] = useState("usuario"); 

  
  return (
    <>
      {isLoggedIn ? (
        vista === "usuario" ? (
          <Usuario alIrADashboard={() => setVista("dashboard")} />
        ) : (
          // AGREGA ESTA PROP AQUÍ:
          <DashboardUsuario alRegresar={() => setVista("usuario")} /> 
        )
      ) : (
        <LoginSplit onLoginSuccess={() => setIsLoggedIn(true)} />
      )}
    </>
  );

  
}


export default App;