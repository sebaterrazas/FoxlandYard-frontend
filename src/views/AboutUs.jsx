import { useState } from 'react'
import '../styles/AboutUs.css'

function AboutUs() {

  return (
    // <div className="AboutUs">
    //     <h1>Bienvenido a About Us</h1>
    // </div>
    <>
    <h1 class="titulo" > ¡Acerca del equipo!</h1>

    <section class="flex-box-seba">
        <p class="nombre"> Sebastián Terrazas </p>
        <div class="contenedor-flexible">
            <img class="avatar" src="../../src/assets/images/MrFox.jpg"></img>
            <p class="descripcion"> Es una persona graciosa que le gusta patinar en hielo. </p>
        </div>
    </section>

    <section class="flex-box-nacho">
        <p class="nombre"> Ignacio Lillo </p>
        <div class="contenedor-flexible">
            <img class="avatar" src="../../src/assets/images/Ash1.jpg"></img>
            <p class="descripcion"> Estudiante de la Universidad Católica de Chile. Major en Investigación Operativa con Minor en Tecnologías de la Información. Le gusta ver películas y jugar tenis. </p>
        </div>
    </section>

    <section class="flex-box-botones">
        <p> Aca van los botones para cambiar de páginas </p>
    </section>

    </>
  )
}

export default AboutUs