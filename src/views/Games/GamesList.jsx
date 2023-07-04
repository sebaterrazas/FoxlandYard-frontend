import React, { useContext, useEffect, useState  } from 'react';
import { useNavigate } from 'react-router-dom';

import { GameContext } from '../../contexts/GameContext';
import { CharacterContext } from '../../contexts/CharacterContext';
import { AuthContext } from '../../contexts/AuthContext';


import '../../styles/List_styles.css';

const GamesList = () => {
  const { user, token } = useContext(AuthContext);
  const { games, listGames, filterGames, createGame } = useContext(GameContext);
  const { characters, setCharacters, createCharacter } = useContext(CharacterContext);
  const [filterByAvailable, setFilterByAvailable] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    filterGames(filterByAvailable);
  }, []);

  useEffect(() => {
    filterGames(filterByAvailable);
  }, [filterByAvailable]);

  const handleCreateGame = async (userId, characterName) => {
    try {
      const result = await createGame(userId, characterName);  // Realiza alguna acción adicional con la respuesta, si es necesario
      if (result?.game) {
        navigate(`/games/${result.game.id}`)
        return;
      }
    } catch (error) {
      console.error('Error al crear un juego:', error);
      return null;
    }
  };

  const handleCharacterSelection = async (character) => {
    setSelectedCharacter(character);
    setShowPopup(false);

    await handleCreateGame(user.id, character);
  };

  console.log('games:', games[0])

  return (
    <div className="flex-box">
      <h1 className="titulo-listas">Lista de juegos</h1>
      <div className="button-container">
        <button className="button2" onClick={() => setFilterByAvailable(!filterByAvailable)}>{ filterByAvailable ? <>Ver todos los juegos</> : <>Ver juegos disponibles</>}</button>
        <button className="button2" onClick={() => setShowPopup(!showPopup)}>Crear un nuevo juego</button>
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
      {games.map((game) => (
        <div key={game.id} className="game-item">
          <div className="left-section">
            <p><span className="bold-text">N° de juego: </span> {game.id}</p> {/* Básicamente el GameId */}
            <p><span className="bold-text">Ganador: </span> {game.winner ? game.winner : 'Aún no hay ganador'}</p>
            <p><span className="bold-text">Jugadores: </span> {game.Characters.length} / 4</p>
            <p><span className="bold-text">{game.plays_left ? 'Jugadas restantes:' : 'Juego sin iniciar'} </span> {game.plays_left}</p>
          </div>
          <div className="right-section">
            <br></br>
            <button className="button" onClick={() =>navigate(`/games/${game.id}`)}>Ir al juego</button>
            <br></br>
            <button className="button" onClick={() => navigate(`/games/${game.id}/characters`)}>Ver personajes</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GamesList;