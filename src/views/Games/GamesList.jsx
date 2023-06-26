import React, { useContext, useEffect } from 'react';
import { GameContext } from '../../contexts/GameContext';

import '../../styles/List_styles.css'

const GamesList = () => {
  const { games, listGames } = useContext(GameContext);

  useEffect(() => {
    listGames();
  }, []);

  return (
    <div>
      <h1 className="titulo-listas">Lista de juegos</h1>
      {games.map((game) => (
        <div key={game.id} className="game-item">
          <div className="left-section">
            <p><span className="bold-text">N° de juego:</span> {game.id}</p> {/* Básicamente el GameId */}
            <p><span className="bold-text">Ganador:</span> {game.winner ? game.winner : 'No hay ganador aún'}</p>
            <p><span className="bold-text">Jugadas restantes:</span> {game.plays_left}</p>
          </div>
          <div className="right-section">
            <br></br>
            <button className="button" onClick={() => window.location.href = `/games/${game.id}`}>Ir al juego</button>
            <br></br>
            <button className="button" onClick={() => window.location.href = `/games`}>Ver tablero</button> {/* Aún no funciona */} {/* Necesario???? */}
            <br></br>
            <button className="button" onClick={() => window.location.href = `/games/${game.id}/characters`}>Ver personajes</button>
          </div>
        </div>
      ))}
      <div class="button-container">
        <button className="button2" onClick={() => window.location.href = `/games`}>Crear un nuevo juego</button> {/* Aún no funciona */}
      </div>
  </div>
  );
};

export default GamesList;