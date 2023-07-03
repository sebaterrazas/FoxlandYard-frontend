import React, { createContext, useState } from 'react';
import api from '../api';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [game, setGame] = useState(null);
  const [mrFox, setMrFox] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [characters_game, setCharacters_game] = useState([]);
  const [gameStatus, setGameStatus] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const listGames = async () => {
    try {
      const response = await api.get('/games');
      setGames(response.data);
    } catch (error) {
      console.error('Error al obtener la lista de juegos:', error);
    }
  };

  const getGame = async (gameId) => {
    try {
      const response = await api.get(`/games/${gameId}`);
      // console.log("RESPUESTA:", response.data);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener detalles del juego ${gameId}:`, error);
      return null;
    }
  };

  const createGame = async () => {
    try {
      const response = await api.post('/games');
      return response.data;
    } catch (error) {
      console.error('Error al crear un juego:', error);
      return null;
    }
  };
  
  const performTurn = async (gameId, characterId, movementType, destinationNodeId, useHelp) => {
    try {
      const response = await api.patch(`/games/${gameId}/perform-turn`, {
        characterId,
        movementType,
        destinationNodeId,
        useHelp,
      });
      return response.data;
    } catch (error) {
      console.error(`Error al avanzar al siguiente turno en el juego ${gameId}:`, error);
      return null;
    }
  };

  return (
    <GameContext.Provider
        value={{
            games,
            game,
            setGame,
            listGames,
            performTurn,
            getGame,
            createGame,
            setMrFox,
            mrFox,
            setRefresh,
            refresh,
            characters_game,
            setCharacters_game,
            gameStatus,
            setGameStatus,
            setIsGameOver,
            isGameOver,
        }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };