import { useState } from 'react'
import Login from '../components/Login';
import '../styles/LandingPage.css'

function LandingPage() {
  return (
    <div className="LandingPage">
        <h1> ¡Bienvenido a Foxland Yard! </h1>
        <img id="logo" src="../../src/assets/images/Logo1.png"></img>
        <p>Gracias por visitar nuestro sitio web. Aquí podrás encontrar información útil sobre nuestro proyecto.</p>
        <p>IMAGEN QUE TENGA RELACION CON ESTE</p>

        <Login />

        <p>Crea una cuenta!</p>
        <form>
            <input type="text" placeholder="Ingresa tu correo electrónico" />
            <input type="text" placeholder="Ingresa tu futura clave" />
            <button type="submit">Suscríbete</button>
        </form>
    </div>
  );
}

export default LandingPage;