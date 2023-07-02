import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GameContext } from '../../contexts/GameContext';
import { CharacterContext } from '../../contexts/CharacterContext';

import '../../styles/List_styles.css';

const CharactersGameList = () => {
  const { gameId } = useParams(); // Obtener el ID del juego desde la URL
  const { getGameCharacters, listGames, getGame } = useContext(GameContext);
  const { createCharacter } = useContext(CharacterContext);

  const [game, setGame] = useState(null); // Agregamos un estado para almacenar el objeto de juego

  useEffect(() => {
    const fetchData = async () => {
      try {
        await listGames();
        // await getGameCharacters(gameId);
        const gameData = await getGame(gameId);
        const game = gameData.game;
        setGame(game); // Actualizamos el estado con el objeto de juego obtenido
      } catch (error) {
        console.error(`Error al obtener los juegos y los personajes del juego ${gameId}:`, error);
      }
    };

    fetchData();
  }, [gameId]);

  const handleJoinGame = async (characterName) => {
    try {
      await createCharacter(gameId, 1, 0, characterName); // Hardcoreado el userId e hicimos que el personaje apareciera por default en el nodo 0.
      console.log('Se ha creado la instancia de personaje con éxito');
      window.location.reload(); // Para actualizar la página :)
    } catch (error) {
      console.error('Error al unirse al juego:', error);
    }
  };

  if (!game) {
    return <div>Loading...</div>; // Agregamos una condición para mostrar un mensaje de carga mientras se obtiene el objeto de juego
  }

  const isCharacterInGame = (characterName) => {
    return game.Characters.some((character) => character.name === characterName);
  };

  return (
    <div>
      <h1 className="titulo-listas">Lista de Personajes del juego N° {gameId}</h1>
      {game.Characters.map((character) => (
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

    <div className="game-item">  {/* Div para unirse como un personaje en caso de que no este en el juego */}
      {!isCharacterInGame("Mr. Fox") && (
        <button onClick={() => handleJoinGame("Mr. Fox")}>Únete como Mr. Fox</button>
      )}
      {!isCharacterInGame("Mr. Bunce") && (
        <button onClick={() => handleJoinGame("Mr. Bunce")}>Únete como Mr. Bunce</button>
      )}
      {!isCharacterInGame("Mr. Bean") && (
        <button onClick={() => handleJoinGame("Mr. Bean")}>Únete como Mr. Bean</button>
      )}
      {!isCharacterInGame("Mr. Boggis") && (
        <button onClick={() => handleJoinGame("Mr. Boggis")}>Únete como Mr. Boggis</button>
      )}
    </div>
    
    <div className="button-container">
      <button className="button2" onClick={() => (window.location.href = '/games')}>Volver a Juegos</button>
    </div>
  </div>
  );
};

export default CharactersGameList;
