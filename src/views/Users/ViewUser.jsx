import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../contexts/GameContext';
import { CharacterContext } from '../../contexts/CharacterContext';
import { AuthContext } from '../../contexts/AuthContext';

import '../../styles/List_styles.css';

const UserGameList = () => {
  // const userId = 1; // CAMBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAR (O SACAR)

  const { user, token } = useContext(AuthContext);
  const { listGames, getGame } = useContext(GameContext);
  const { characters, setCharacters, createCharacter, listCharacters } = useContext(CharacterContext);

  useEffect(() => {
    listCharacters();

    const fetchCharacters = async () => {
      const personajes = await characters;
      setCharacters(personajes);
    };

    fetchCharacters();
  }, [user.id]);

  const getGameDetails = async (gameId) => {
    try {
      const game = await getGame(gameId);
      console.log("JUEGO:", game);
      return game;
    } catch (error) {
      console.log("Error al obtener los detalles del juego:", error);
      return null;
    }
  };

  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const gamePromises = characters.map((character) => getGameDetails(character.gameId));
      const games = await Promise.all(gamePromises);
      setGames(games);
    };

    fetchGames();
  }, [characters]);

  return (
    <div>
      <h1 className="titulo-listas">¡Tu lista de juegos {user.username}!</h1>
      {characters.map((character, index) => {
        // if (character.userId === userId) {
        if (character.userId === user.id) {
          const juego = games[index];
          
          return (
            <div key={character.id} className="game-item">
              <div className="left-section">
              {juego && (
                <div className="inception">
                  <p><span className="bold-text">N° de juego:</span> {juego.game.id}</p>
                  <p><span className="bold-text">Personaje que ocupas:</span> {character.name}</p>
                  <p><span className="bold-text">Comida que te queda:</span> {character.food}</p>
                  <p><span className="bold-text">Ganador:</span> {juego.game.winner ? juego.game.winner : 'Aún no hay ganador'}</p>
                  <p><span className="bold-text">Jugadas restantes:</span> {juego.game.plays_left}</p>
                </div>
              )}
              </div>
              <div className="right-section">
                {juego && (
                  <button className="button" onClick={() => window.location.href = `/games/${juego.game.id}`}>Ir al juego</button>
                )}
              </div>
            </div>
            );
          }
          return null;
          })}
    </div>
  );
};

export default UserGameList;