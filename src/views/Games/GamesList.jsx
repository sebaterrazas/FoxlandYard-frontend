import React, { useContext, useEffect } from 'react';
import { GameContext } from '../../contexts/GameContext';

import '../../styles/List_styles.css';

const GamesList = () => {
  const { games, listGames, createGame } = useContext(GameContext);

  useEffect(() => {
    listGames();
  }, []);

  const handleCreateGame = async (userId, characterName) => {
    try {
      const response = await createGame(userId, characterName);
      // Realiza alguna acción adicional con la respuesta, si es necesario
    } catch (error) {
      console.error('Error al crear un juego:', error);
    }
  };

  return (
    <div>
      <h1 className="titulo-listas">Lista de juegos</h1>
      {games.map((game) => (
        <div key={game.id} className="game-item">
          <div className="left-section">
            <p><span className="bold-text">N° de juego:</span> {game.id}</p> {/* Básicamente el GameId */}
            <p><span className="bold-text">Ganador:</span> {game.winner ? game.winner : 'Aún no hay ganador'}</p>
            <p><span className="bold-text">Jugadas restantes:</span> {game.plays_left}</p>
          </div>
          <div className="right-section">
            <br></br>
            <button className="button" onClick={() => window.location.href = `/games/${game.id}`}>Ir al juego</button>
            <br></br>
            <button className="button" onClick={() => window.location.href = `/games/${game.id}/characters`}>Ver personajes</button>
          </div>
        </div>
      ))}
      <div className="button-container">
        <button className="button2" onClick={() => handleCreateGame(userId, characterName)}>Crear un nuevo juego</button> {/* Aún no funciona */}
      </div>
  </div>
  );
};

export default GamesList;