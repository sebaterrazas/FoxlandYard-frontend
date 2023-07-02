import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GameContext } from '../../contexts/GameContext';
import { CharacterContext } from '../../contexts/CharacterContext';

import '../../styles/List_styles.css';

const CharactersGameList = () => {
  const { gameId } = useParams(); // Obtener el ID del juego desde la URL
  const { characters_game, getGameCharacters } = useContext(GameContext);
  const { characters, listCharacters } = useContext(CharacterContext);

  useEffect(() => {
    getGameCharacters(gameId); // Esto como que activa la función getGameCharacters para que characters_game no este vacía (dependiendo del gameId obviamente).

    if (characters_game.length === 0) {
      listCharacters(); // Obtener la lista completa de personajes si no hay personajes en el juego
    } else {
      getGameCharacters(gameId); // Obtener los personajes del juego si existen
    }
  }, [gameId]);
  // }, [gameId, getGameCharacters, listCharacters, characters_game.length]);

  return (
    <div>
      <h1 className="titulo-listas">Lista de Personajes del juego N° {gameId}</h1>
      {characters_game.length > 0 ? (
        characters_game.map((character) => (
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
        ))
      ) : (
        <div className="game-item">
          <p>No hay personajes en este juego.</p>
          <button className="button" onClick={() => assignUserToCharacter(gameId)}>
            Asignar Usuario
          </button>
        </div>
      )}
      <div className="button-container">
        <button className="button2" onClick={() => window.location.href = '/games'}>Volver a Juegos</button>
      </div>
    </div>
  );
};

export default CharactersGameList;


/*
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GameContext } from '../../contexts/GameContext';

import '../../styles/List_styles.css'

const CharactersGameList = () => {
  const { gameId } = useParams(); // Obtener el ID del juego desde la URL
  const { characters, getGameCharacters } = useContext(GameContext);

  useEffect(() => {
    getGameCharacters(gameId); // Pasar el ID del juego a la función
  }, [gameId, getGameCharacters]); // Ejecutar efecto cada vez que gameId cambie

  return (
    <div>
      <h1 className="titulo-listas">Lista de Personajes del juego N° {gameId}</h1>
      {characters.map((character) => (
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
        <div class="button-container">
          <button className="button2" onClick={() => window.location.href = `/games`}>Volver a Juegos</button>
        </div>
    </div>
  );
};

export default CharactersGameList;
*/



/*
=== CÓDIGO ANTES DEL CAMBIO FINAL ===

import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GameContext } from '../../contexts/GameContext';
import { CharacterContext } from '../../contexts/CharacterContext';

import '../../styles/List_styles.css';

const CharactersGameList = () => {
  const { gameId } = useParams(); // Obtener el ID del juego desde la URL
  const { characters_game, getGameCharacters } = useContext(GameContext);
  const { characters, listCharacters } = useContext(CharacterContext);

  const [isMrFox, setIsMrFox] = useState(false)
  const [isMrBunce, setIsMrBunce] = useState(false)
  const [isMrBean, setIsMrBean] = useState(false)
  const [isMrBoggis, setIsMrBoggis] = useState(false)

  useEffect(() => {
    getGameCharacters(gameId);

    const fetchData = async () => {
      try {
        if (characters_game.length === 0) {
          await listCharacters(); // Obtener la lista completa de personajes si no hay personajes en el juego
        } else {
          await getGameCharacters(gameId); // Obtener los personajes del juego si existen
        }
      } catch (error) {
        console.error(`Error al obtener los personajes del juego ${gameId}:`, error);
      }
    };

    fetchData();
  }, [gameId]);

  useEffect(() => {
    characters_game.forEach((character) => {
      if (character.name === "Mr. Fox") {setIsMrFox(true)}
      if (character.name === "Mr. Bunce") {setIsMrBunce(true)}
      if (character.name === "Mr. Bean") {setIsMrBean(true)}
      if (character.name === "Mr. Boggis") {setIsMrBoggis(true)}
    })
  }, [characters_game]);

  return (
    <div>
      <h1 className="titulo-listas">Lista de Personajes del juego N° {gameId}</h1>
      {characters_game.length > 0 ? (
        characters_game.map((character) => (
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
        ))
      ) : (
        <>
          <div className="game-item">
            <p>No hay personajes en este juego.</p>
            <button className="button" onClick={() => assignUserToCharacter(gameId)}>Asignar Usuario</button>
          </div>
          <h3>Lista de Personajes:</h3>
          {characters.map((character) => (
            <div key={character.id}>
              <p>Nombre: {character.name}</p>
              <p>N° del usuario que lo ocupa: {character.userId}</p>
              <hr />
            </div>
          ))}
        </>
      )}

      <div className="game-item">
      {!isMrFox && (<button> Únete como Mr. Fox </button>)}
      {!isMrBunce && (<button> Únete como Mr. Bunce </button>)}
      {!isMrBean && (<button> Únete como Mr. Bean </button>)}
      {!isMrBoggis && (<button> Únete como Mr. Boggis </button>)}
    </div>

    <div className="button-container">
      <button className="button2" onClick={() => (window.location.href = '/games')}>Volver a Juegos</button>
    </div>

  </div>
);
};

export default CharactersGameList;
*/