import React, { createContext, useState, useRef, useEffect } from 'react';
import api from '../api';
import Kristofferson from "../../public/assets/audios/Kristofferson.mp3";
import DigDigging from "../../public/assets/audios/Dig-Digging.mp3";
import MainTheme from "../../public/assets/audios/Main-Theme.mp3";
import MrFoxInTheFields from "../../public/assets/audios/Mr-Fox-In-The-Fields.mp3";

const GameContext = createContext();

const songs = [MrFoxInTheFields, MainTheme, Kristofferson, DigDigging];

const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [game, setGame] = useState(null);
  const [mrFox, setMrFox] = useState(null);
  const [refresh, setRefresh] = useState(true);
  const [characters_game, setCharacters_game] = useState([]);
  const [gameStatus, setGameStatus] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const [songIndex, setSongIndex] = useState(0);
  const audio = useRef(null);

  useEffect(() => {
    const audioElement = audio.current;
  
    if (audioElement) {
      // Iniciar la reproducción cada vez que cambia la canción
      audioElement.play();
  
      // Cambiar a la siguiente canción una vez la actual ha terminado
      const nextSong = () => setSongIndex((currentIndex) => (currentIndex + 1) % songs.length);
      audioElement.addEventListener('ended', nextSong);
  
      return () => {
        audioElement.removeEventListener('ended', nextSong);
      };
    }
  }, [songIndex]);

  const toggleAudio = () => {
    if (audio.current) {
      if (audio.current.paused) {
        audio.current.play();
      } else {
        audio.current.pause();
      }
    }
  };

  const nextSong = () => {
    setSongIndex((currentIndex) => (currentIndex + 1) % songs.length);
    if (audio.current) {
      audio.current.pause();
      audio.current.currentTime = 0;
    }
  };


  const listGames = async () => {
    try {
      console.log('api key', api.defaults.headers.common['Authorization']);
      console.log('localStorage', localStorage.getItem('token'));
      const response = await api.get('/games');
      setGames(response.data);
    } catch (error) {
      console.error('Error al obtener la lista de juegos:', error);
    }
  };

  const filterGames = async (filterByAvailable) => {
    try {
      console.log('api key', api.defaults.headers.common['Authorization']);
      console.log('localStorage', localStorage.getItem('token'));
      const response = await api.post('/games/filter', { 
        filterByAvailable,
      });
      setGames(response.data);
    } catch (error) {
      console.error('Error al obtener la lista de juegos:', error);
    }
  };


  const getGame = async (gameId) => {
    try {
      console.log('api key', api.defaults.headers.common['Authorization']);
      console.log('localStorage', localStorage.getItem('token'));
      const response = await api.get(`/games/${gameId}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener detalles del juego ${gameId}:`, error);
      return null;
    }
  };

  const createGame = async (userId, characterName) => {
    try {
      const response = await api.post('/games', {
        userId,
        characterName,
      });
      console.log('response', response.data);
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
      return null;
    } catch (error) {
      console.error(`Error al avanzar al siguiente turno en el juego ${gameId}:`, error);
      return error.response.data.message;
    }
  };

  const startGame = async (gameId) => {
    try {
      const response = await api.patch(`/games/${gameId}/start-game`);
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
            filterGames,
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
            toggleAudio,
            startGame,
            audio,
            nextSong,
        }}
    >
      {children}
      <audio src={songs[songIndex]} ref={audio} />
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };