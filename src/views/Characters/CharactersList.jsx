import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GameContext } from '../../contexts/GameContext';

import '../../styles/List_styles.css'

const CharactersGameList = () => {
  const { gameId } = useParams(); // Obtener el ID del juego desde la URL
  const {characters, getGameCharacters } = useContext(GameContext);

  useEffect(() => {
    getGameCharacters(gameId); // Pasar el ID del juego a la función
  }, [gameId, getGameCharacters]); // Ejecutar efecto cada vez que gameId cambie

  return (
    <div>
      <h1 className="titulo-listas">Lista de Personajes del juego N° {gameId}</h1>
      {characters.map((character) => (
        <div key={character.id} className="game-item">
          <div className="left-section">
            <p><span className="bold-text">Personaje:</span> {character.name}</p>
            <p><span className="bold-text">N° del usuario que lo ocupa:</span> {character.userId}</p>
            <p><span className="bold-text">Comida que le queda:</span> {character.food}</p>
          </div>
          <div className="right-section">
            <p><span className="bold-text">Cartas de caminata que le quedan:</span> {character.walkCards}</p>
            <p><span className="bold-text">Cartas de bicicleta que le quedan:</span> {character.bikeCards}</p>
            <p><span className="bold-text">Cartas de auto que le quedan:</span> {character.carCards}</p>
          </div>
      </div>
        ))}
        <div class="button-container">
          <button className="button2" onClick={() => window.location.href = `/games`}>Volver a Juegos</button>
        </div>
    </div>
  );
};

export default CharactersGameList;