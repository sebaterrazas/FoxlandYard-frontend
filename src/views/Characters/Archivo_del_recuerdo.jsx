import React, { useContext, useEffect } from 'react';
import { GameContext } from '../../contexts/GameContext';

const GamesList = () => {
  const { games, listGames } = useContext(GameContext);

  useEffect(() => {
    listGames();
  }, []);

  return (
    <div>
      <h1>Lista de juegos</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.winner}</li>
        ))}
      </ul>
    </div>
  );
};

export default GamesList;