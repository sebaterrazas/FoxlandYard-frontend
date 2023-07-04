import React, { useContext, useEffect } from 'react';

import CustomButton from './CustomButton';
import { AuthContext } from '../contexts/AuthContext';
import { GameContext } from '../contexts/GameContext';
import { CharacterContext } from '../contexts/CharacterContext';
import "../styles/Navbar.css"
import Logo from "../assets/images/big-logo.png"
import FamilyMembers from './Game/FamilyMembers';
import AvailableMovements from './Game/AvailableMovements';
import CurrentTurn from './Game/CurrentTurn';

const Navbar = () => {
  const { user, signOut, setIsSignUp } = useContext(AuthContext);
  const { game, setGame } = useContext(GameContext);
  const { character } = useContext(CharacterContext);


  if (game) return (
    <nav>
        <div className="big-logo">
        <a href="/">
            <img src={Logo}></img>
        </a>
        </div>
        <div className="links">
          {character && <>  
            <FamilyMembers />
            <AvailableMovements />
          </>}
            <CurrentTurn />
            <CustomButton type='primary' mode='contained' href="/" onClick={() => setGame(null)}>Salirse del Juego</CustomButton>
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
          { user && <>
            <CustomButton type='secondary' mode='text' href="/games">Juegos</CustomButton>
          </>}
          <CustomButton type='secondary' mode='text' href="/rules">Reglas</CustomButton>
          <CustomButton type='secondary' mode='text' href="/about-us">Acerca de Nosotros</CustomButton>
          { user && <>
            <CustomButton type='secondary' mode='text' href="/user">Perfil</CustomButton>
          </>}
          <div className="near-links">
            { !user && <>
              <CustomButton type='primary' mode='outlined' href="/auth" onClick={() => setIsSignUp(false)}>Iniciar Sesión</CustomButton>
              <CustomButton type='primary' mode='contained' href="/auth" onClick={() => setIsSignUp(true)}>Registrarse</CustomButton>
            </>}
            { user && <>
              <CustomButton type='primary' mode='contained' href="/" onClick={signOut}>Cerrar Sesión</CustomButton>
            </>}
          </div>
        </div>
    </nav>
  );
};

export default Navbar;