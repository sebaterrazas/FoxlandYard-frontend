import { useState } from 'react'
import Login from '../components/Login';
import '../styles/LandingPage.css'

function LandingPage() {
  return (
    <div className="LandingPage">
        <h1> ¡Bienvenido a Foxland Yard! </h1>
        <img id="logo" src="../../src/assets/images/Logo1.png"></img>
<<<<<<< HEAD
        
        <p>Gracias por visitar nuestro sitio web. Aquí podrás encontrar información útil sobre nuestro proyecto.</p>
=======
        <p id="gracias">¡Gracias por visitar nuestro sitio web! Aquí podrás encontrar información útil sobre nuestro proyecto.</p>

        <section className="flex_como_jugar">
          <h2 id="como_jugar"> Cómo se juega: </h2>
          <p id="explicacion_juego">Este es un emocionante juego de estrategia, astucia y cooperación entre los jugadores. Conviértete en Mr Fox y evita ser capturado por los granjeros, o trabaja en equipo con otros granjeros para atrapar a Mr Fox.</p>
          <img id="imagen2" src="../../src/assets/images/mockup_antiguo.jpg"></img>
        </section>
>>>>>>> Nacho

        <Login />

        {/* <p>Crea una cuenta!</p>
        <form>
            <input type="text" placeholder="Ingresa tu correo electrónico" />
            <input type="text" placeholder="Ingresa tu futura clave" />
            <button type="submit">Suscríbete</button>
        </form> */}
    </div>
  );
}

export default LandingPage;