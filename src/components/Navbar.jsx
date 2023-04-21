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
            <CustomButton type='primary' href="/auth">Página Principal</CustomButton>
            <CustomButton type='primary' href="/about-us">Acerca de Nosotros</CustomButton>
        </div>
    </nav>
  );
};

export default Navbar;