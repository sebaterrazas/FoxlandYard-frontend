import React from 'react';
import Login from '../components/Login';

function LandingPage() {
  return (
    <div className="flex-box">
      <h1>Bienvenido Foxland Yard</h1>
      <p>Gracias por visitar nuestro sitio web. Aquí podrás encontrar información útil sobre mi proyecto.</p>
      <Login />
    </div>
  );
}

export default LandingPage;