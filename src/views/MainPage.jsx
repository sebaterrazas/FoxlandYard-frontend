import React, { useState } from 'react';
import CustomButton from '../components/CustomButton';
import Rules from '../components/Rules';

const MainPage = () => {
  const [showRules, setShowRules] = useState(false);

  const handleShowRules = () => {
    setShowRules(!showRules);
  };

  const gameSummary = `
    En Foxland Yard, los jugadores asumen el papel de los granjeros y Mr Fox en una emocionante aventura en el campo. 
    El objetivo del juego para Mr Fox es evadir a los granjeros durante todo el juego, mientras que los granjeros deben 
    trabajar en equipo para atraparlo.
  `;

  const provisionalElement = `
    Aquí podrías mostrar la sección de estadísticas, redireccionamiento a distintos tipos de partidas, mostrar las partidas en 
    juego, o una opción para crear una partida rápida.
  `;

  return (
    <div className='flex-box'>
      <h1>Foxland Yard</h1>
      <p>{gameSummary}</p>
      <p>{provisionalElement}</p>
      <CustomButton href='/rules'>Ver Reglas del Juego</CustomButton>
    </div>
  );
};

export default MainPage;