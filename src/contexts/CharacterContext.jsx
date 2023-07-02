import React, { createContext, useState } from 'react';
import api from '../api'; // Importar tu instancia de Axios

const CharacterContext = createContext();

const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState(null);
  const [selectedMove, setSelectedMove] = useState(null);

  const listCharacters = async () => {
    try {
      const response = await api.get('/characters');
      setCharacters(response.data);
    } catch (error) {
      console.error('Error al obtener la lista de personajes:', error);
    }
  };

  const createCharacter = async (gameId, userId, nodeId, characterName) => {
    try {
      const response = await api.post('/characters', {
        gameId,
        userId,
        nodeId,
        characterName,
      });
      return response.data;
    } catch (error) {
      console.error('Error al crear un personaje:', error);
      return null;
    }
  };

  const getCharacter = async (characterId) => {
    try {
      const response = await api.get(`/characters/${characterId}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener información del personaje ${characterId}:`, error);
      return null;
    }
  };
  
  const useHelp = async (characterId, helperName) => {
    try {
      const response = await api.patch(`/characters/${characterId}/use-help`, {
        helperName,
      });
      return response.data;
    } catch (error) {
      console.error(`Error al utilizar ayuda para el personaje ${characterId}:`, error);
      return null;
    }
  };
  
  const grabFood = async (characterId, useHelp) => {
    try {
      const response = await api.patch(`/characters/${characterId}/grab-food`, {
        useHelp,
      });
      return response.data;
    } catch (error) {
      console.error(`Error al robar comida con el personaje ${characterId}:`, error);
      return null;
    }
  };
  
  const placeTrap = async (characterId, useRat) => {
    try {
      const response = await api.patch(`/characters/${characterId}/place-trap`, {
        useRat,
      });
      return response.data;
    } catch (error) {
      console.error(`Error al colocar trampa con el personaje ${characterId}:`, error);
      return null;
    }
  };
  
  const getDetails = async (characterId) => {
    try {
      const response = await api.get(`/characters/${characterId}/details`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener detalles del personaje ${characterId}:`, error);
      return null;
    }
  };

  return (
    <CharacterContext.Provider
      value={{ 
        characters,
        setCharacters,
        listCharacters, 
        createCharacter,
        getCharacter,
        useHelp,
        grabFood,
        placeTrap,
        getDetails,
        setCharacter,
        character,
        setSelectedMove,
        selectedMove
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export { CharacterContext, CharacterProvider };