import React, { useContext, useEffect, useState  } from 'react';
import { GameContext } from '../../contexts/GameContext';
import { CharacterContext } from '../../contexts/CharacterContext';
import { AuthContext } from '../../contexts/AuthContext';


import '../../styles/List_styles.css';

const GamesList = () => {
  const { user, token } = useContext(AuthContext);
  const { games, listGames, createGame } = useContext(GameContext);
  const { characters, setCharacters, createCharacter } = useContext(CharacterContext);


  const [showPopup, setShowPopup] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState('');

  useEffect(() => {
    listGames();
  }, []);

  const handleCreateGame = async (userId, characterName) => {
    try {
      const gameId = await createGame(userId, characterName);  // Realiza alguna acción adicional con la respuesta, si es necesario
      window.location.reload(); // Para actualizar la página :)
      return gameId;
    } catch (error) {
      console.error('Error al crear un juego:', error);
      return null;
    }
  };

  const handleJoinGame = async (gameId, characterName) => {
    try {
      // Llamar a la función createCharacter para crear la instancia de personaje
      await createCharacter(gameId, user.id, characterName);   
      
      // Realizar cualquier acción adicional después de crear la instancia de personaje
      console.log('Se ha creado la instancia de personaje con éxito');
      window.location.reload();
    } catch (error) {
      // Manejar cualquier error que ocurra
      console.error('Error al unirse al juego:', error);
    }
  };

  const handleCharacterSelection = async (character) => {
    setSelectedCharacter(character);
    setShowPopup(false);

    const gameId = await handleCreateGame(user.id, character);
    if (gameId) {
      handleJoinGame(gameId, character);
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
        <button className="button2" onClick={() => setShowPopup(true)}>Crear un nuevo juego</button>
      </div>

      {showPopup && (
        <div className="popup">
          <h2>Selecciona un personaje:</h2>
          <button onClick={() => handleCharacterSelection('Mr. Fox')}>Mr. Fox</button>
          <button onClick={() => handleCharacterSelection('Mr. Bunce')}>Mr. Bunce</button>
          <button onClick={() => handleCharacterSelection('Mr. Bean')}>Mr. Bean</button>
          <button onClick={() => handleCharacterSelection('Mr. Boggis')}>Mr. Boggis</button>
        </div>
      )}
    </div>
  );
};

export default GamesList;