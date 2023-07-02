import React, { createContext, useState } from 'react';
import api from '../api';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [game, setGame] = useState(null);
  const [mrFox, setMrFox] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [characters_game, setCharacters_game] = useState([]);
  // const [users, setUsers] = useState([]);

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

  const getMrFoxMovements = async (gameId) => {
    try {
      const response = await api.get(`/games/${gameId}/mr-fox-movements`);
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

  const getGameBoard = async (gameId) => {
    try {
      const response = await api.get(`/games/${gameId}/board`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener el tablero del juego ${gameId}:`, error);
      return null;
    }
  };
  
  const createGameBoard = async (gameId) => {
    try {
      const response = await api.post(`/games/${gameId}/board`);
      return response.data;
    } catch (error) {
      console.error(`Error al crear el tablero del juego ${gameId}:`, error);
      return null;
    }
  };
  
  // const getGameCharacters = async (gameId) => {
  //   try {
  //     const response = await api.get(`/games/${gameId}/characters`);
  //     console.log("==========================================")
  //     console.log("Response:", response.data)
  //     return response.data;
  //   } catch (error) {
  //     console.error(`Error al obtener personajes del juego ${gameId}:`, error);
  //     return null;
  //   }
  // };

  const getGameCharacters = async (gameId) => {
    try {
      // Lógica para obtener los personajes del juego usando el ID proporcionado
      const response = await api.get(`/games/${gameId}/characters`);
      setCharacters_game(response.data);
    } catch (error) {
      console.error(`Error al obtener los personajes del juego ${gameId}:`, error);
    }
  };
  
  const nextTurn = async (gameId) => {
    try {
      const response = await api.patch(`/games/${gameId}/next-turn`);
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
            getGame,
            getMrFoxMovements,
            createGame,
            getGameBoard,
            createGameBoard,
            getGameCharacters,
            nextTurn,
            setMrFox,
            mrFox,
            setRefresh,
            refresh,
            characters_game,
            setCharacters_game,
            // users,
            // setUsers,
        }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };