import React from 'react';
import "../styles/Navbar.css"
import logo from "../assets/images/big-logo.png"
import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <nav>
        <div className="big-logo">
        <a href="/">
            <img src={logo}></img>
        </a>
        </div>
        <div className="links">
            <CustomButton type='secondary' mode='text' href="/games">Juegos</CustomButton>
            <CustomButton type='secondary' mode='text' href="/auth">Reglas</CustomButton>
            <CustomButton type='secondary' mode='text' href="/about-us">Acerca de Nosotros</CustomButton>
            <CustomButton type='primary' mode='outlined' href="/about-us">Iniciar Sesión</CustomButton>
            <CustomButton type='primary' mode='contained' href="/about-us">Regitrarse</CustomButton>
        </div>
    </nav>
  );
};

export default Navbar;