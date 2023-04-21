import { useState } from 'react'
import '../styles/AboutUs.css'

function AboutUs() {

  return (
    <>
    <h1 className="titulo" > ¡Acerca del equipo! </h1>

    <section className="flex-box-seba">
        <p className="nombre"> Sebastián Terrazas </p>
        <div className="contenedor-flexible">
            <img className="avatar" src="../../src/assets/images/MrFox.jpg"></img>
            <p className="descripcion"> Major Computación, Minor Eléctrica. <br/><br/>De vez en cuando adicto a Fantastic Mr Fox.</p>
        </div>
    </section>

    <section className="flex-box-nacho">
        <p className="nombre"> Ignacio Lillo </p>
        <div className="contenedor-flexible">
            <img className="avatar" src="../../src/assets/images/Ash1.jpg"></img>
            <p className="descripcion"> Estudiante de la Universidad Católica de Chile. Major en Investigación Operativa con Minor en Tecnologías de la Información. <br/><br/>Le gusta ver películas y jugar tenis. </p>
        </div>
    </section>

    </>
  )
}

export default AboutUs