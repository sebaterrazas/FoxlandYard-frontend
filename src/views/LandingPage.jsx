import React, { useState } from 'react'
import '../styles/LandingPage.css'

function LandingPage() {
  return (
    <div className="LandingPage">
      <div className='divo1'>
        <h1> ¡Bienvenido a Foxland Yard! </h1>
        <img id="logo" src="../../public/assets/images/Logo1.png"></img>
        <p id="gracias">¡Gracias por visitar nuestro sitio web! Aquí podrás encontrar información útil sobre nuestro proyecto.</p>
      </div>

      <div className='divo2'>
        <section className="flex_como_jugar">
          <h2 id="como_jugar"> Resumen del juego y tablero: </h2>
          <p id="explicacion_juego">Este es un emocionante juego de estrategia, astucia y cooperación entre los jugadores. Conviértete en Mr Fox y evita ser capturado por los granjeros, o trabaja en equipo con otros granjeros para atrapar a Mr Fox.</p>
          <img id="imagen2" src="../../public/assets/images/mockup_final.jpg"></img>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;