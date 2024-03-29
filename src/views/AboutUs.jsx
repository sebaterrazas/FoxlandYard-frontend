import React, { useState } from 'react'
import '../styles/AboutUs.css'

import MrFox from "../../public/assets/images/characters/MrFox.jpg"
import Ash from "../../public/assets/images/characters/Ash1.jpg"

function AboutUs() {

  return (
    <>
    <h1 className="titulo"> ¡Acerca del equipo! </h1>

    <section className="flex-box-seba">
        <p className="nombre"> Sebastián Terrazas </p>
        <div className="contenedor-flexible">
            <img className="avatar" src={MrFox}></img>
            <p className="descripcion"> Major Computación, Minor Eléctrica. <br/><br/>De vez en cuando adicto a Fantastic Mr Fox.</p>
        </div>
    </section>

    <section className="flex-box-nacho">
        <p className="nombre"> Ignacio Lillo </p>
        <div className="contenedor-flexible">
            <img className="avatar" src={Ash}></img>
            <p className="descripcion"> Major Investigación Operativa, Minor Tecnologías de la Información. <br/><br/>De vez en cuando adicto al crack.</p>
        </div>
    </section>

    </>
  )
}

export default AboutUs