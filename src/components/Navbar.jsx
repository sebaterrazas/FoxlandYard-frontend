import React, { useContext } from 'react';

import CustomButton from './CustomButton';
import { GameContext } from '../contexts/GameContext';
import "../styles/Navbar.css"
import Logo from "../assets/images/big-logo.png"
import FamilyMembers from './Game/FamilyMembers';
import AvailableMovements from './Game/AvailableMovements';
import CurrentTurn from './Game/CurrentTurn';

const Navbar = () => {
  const { game } = useContext(GameContext);

  if (game) return (
    <nav>
        <div className="big-logo">
        <a href="/">
            <img src={Logo}></img>
        </a>
        </div>
        <div className="links">
            <FamilyMembers />
            <AvailableMovements />
            <CurrentTurn />
            <CustomButton type='primary' mode='contained' href="/">Salirse del Juego</CustomButton>
        </div>
    </nav>
  );

  return (
    <nav>
        <div className="big-logo">
        <a href="/">
            <img src={Logo}></img>
        </a>
        </div>
        <div className="links">
            <CustomButton type='secondary' mode='text' href="/games/1">Juego</CustomButton>
            <CustomButton type='secondary' mode='text' href="/games">Juegos</CustomButton>
            <CustomButton type='secondary' mode='text' href="/auth">Reglas</CustomButton>
            <CustomButton type='secondary' mode='text' href="/about-us">Acerca de Nosotros</CustomButton>
            <div className="near-links">
              <CustomButton type='primary' mode='outlined' href="/about-us">Iniciar Sesión</CustomButton>
              <CustomButton type='primary' mode='contained' href="/about-us">Registrarse</CustomButton>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;