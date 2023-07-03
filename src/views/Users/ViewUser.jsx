import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../contexts/GameContext';
import { CharacterContext } from '../../contexts/CharacterContext';
import { AuthContext } from '../../contexts/AuthContext';
import api from '../../api';

import '../../styles/List_styles.css';

const GamesList = () => {
  const { user } = useContext(AuthContext);
  const { games } = useContext(GameContext);
  const { getCharacter } = useContext(CharacterContext);

  const [userGames, setUserGames] = useState([]);

  const getUserCharacters = async () => {
    try {
      const response = await api.get(`/users/${user.id}/characters`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los personajes del usuario:', error);
      return [];
    }
  };

  useEffect(() => {
    const fetchUserGames = async () => {
      const userCharacters = await getUserCharacters();
      const gameIds = userCharacters.map((character) => character.gameId);

      if (games && games.length > 0) {
        const filteredGames = games.filter((game) => gameIds.includes(game.id));
        setUserGames(filteredGames);
      }
    };

    fetchUserGames();
  }, [games]);

  return (
    <div>
      <h1 className="titulo-listas">Lista de juegos</h1>
      {userGames.map((game) => (
        <div key={game.id} className="game-item">
          <div className="left-section">
            <p><span className="bold-text">N° de juego:</span> {game.id}</p>
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
    </div>
  );
};

export default GamesList;
