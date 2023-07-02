import React, { useContext, useEffect, useState } from 'react';
import { CharacterContext } from '../../contexts/CharacterContext';

import '../../styles/List_styles.css';

const AllCharacters = () => {
  const { characters, listCharacters } = useContext(CharacterContext);

  useEffect(() => {
    listCharacters();
  }, []);

  return (
    <div>
      <h1 className="titulo-listas">Lista de todos los personajes en la BDD</h1>
      {characters.map((character) => (
        <div key={character.id}>
            <p><span className="bold-text">Id del personaje:</span> {character.id}</p>
            <p><span className="bold-text">Nombre:</span> {character.name}</p>
            <p><span className="bold-text">Id del usuario que lo ocupa:</span> {character.userId}</p>
            <hr />
        </div>
        ))}
    </div>
    );
};

export default AllCharacters;