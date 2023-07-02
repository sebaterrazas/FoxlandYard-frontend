// =============== CODIGO DE RECUERDO 1 ===============

// import React, { useContext, useEffect } from 'react';
// import { GameContext } from '../../contexts/GameContext';

// const GamesList = () => {
//   const { games, listGames } = useContext(GameContext);

//   useEffect(() => {
//     listGames();
//   }, []);

//   return (
//     <div>
//       <h1>Lista de juegos</h1>
//       <ul>
//         {games.map((game) => (
//           <li key={game.id}>{game.winner}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GamesList;



// =============== CODIGO DE RECUERDO 2 ===============

// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { GameContext } from '../../contexts/GameContext';
// import { CharacterContext } from '../../contexts/CharacterContext';

// import '../../styles/List_styles.css';

// const CharactersGameList = () => {
//   const { gameId } = useParams(); // Obtener el ID del juego desde la URL
//   const { characters_game, getGameCharacters} = useContext(GameContext);
//   const { characters, listCharacters, createCharacter } = useContext(CharacterContext);

//   const [isMrFox, setIsMrFox] = useState(false)
//   const [isMrBunce, setIsMrBunce] = useState(false)
//   const [isMrBean, setIsMrBean] = useState(false)
//   const [isMrBoggis, setIsMrBoggis] = useState(false)

//   useEffect(() => {    // Hay una parte de este useEffect no es es necesaria porque no la ocupamos al final
//     getGameCharacters(gameId);

//     const fetchData = async () => {
//       try {
//         if (characters_game.length === 0) {
//           await listCharacters(); // Obtener la lista completa de personajes si no hay personajes en el juego
//         } else {
//           await getGameCharacters(gameId); // Obtener los personajes del juego si existen
//         }
//       } catch (error) {
//         console.error(`Error al obtener los personajes del juego ${gameId}:`, error);
//       }
//     };

//     fetchData();
//   }, [gameId]);

//   useEffect(() => {
//     characters_game.forEach((character) => {
//       if (character.name === "Mr. Fox") {
//         setIsMrFox(true)};
//       if (character.name === "Mr. Bunce") {
//         setIsMrBunce(true)};
//       if (character.name === "Mr. Bean") {
//         setIsMrBean(true)};
//       if (character.name === "Mr. Boggis") {
//         setIsMrBoggis(true)};
//     })
//   }, [characters_game]);

//   const handleJoinGame = async (characterName) => {
//     try {
//       // Llamar a la función createCharacter para crear la instancia de personaje
//       await createCharacter(gameId, 1, 0, characterName);      // Hardcoreado el userId e hicimos que el personaje apareciera por default en el nodo 0.
      
//       // Realizar cualquier acción adicional después de crear la instancia de personaje
//       console.log('Se ha creado la instancia de personaje con éxito');
//       window.location.reload();
//     } catch (error) {
//       // Manejar cualquier error que ocurra
//       console.error('Error al unirse al juego:', error);
//     }
//   };

//   return (
//     <div>
//       <h1 className="titulo-listas">Lista de Personajes del juego N° {gameId}</h1>
//       {characters_game.map((character) => (
//           <div key={character.id} className="game-item">
//             <div className="left-section">
//               <p><span className="bold-text">Personaje:</span> {character.name}</p>
//               <p><span className="bold-text">N° del usuario que lo ocupa:</span> {character.userId}</p>
//               <p><span className="bold-text">Comida que le queda:</span> {character.food}</p>
//             </div>
//             <div className="right-section">
//               <p><span className="bold-text">Cartas de caminata que le quedan:</span> {character.walkCards}</p>
//               <p><span className="bold-text">Cartas de bicicleta que le quedan:</span> {character.bikeCards}</p>
//               <p><span className="bold-text">Cartas de auto que le quedan:</span> {character.carCards}</p>
//             </div>
//           </div>
//         ))}
//       <div className="game-item">  {/* Div para unirse como un personaje en caso de que no este en el juego */}
//         {!isMrFox && (
//         <button onClick={() => handleJoinGame("Mr. Fox")}> Únete como Mr. Fox </button>
//         )}
//         {!isMrBunce && (
//         <button onClick={() => handleJoinGame("Mr. Bunce")}> Únete como Mr. Bunce </button>
//         )}
//         {!isMrBean && (
//         <button onClick={() => handleJoinGame("Mr. Bean")}> Únete como Mr. Bean </button>
//         )}
//         {!isMrBoggis && (
//         <button onClick={() => handleJoinGame("Mr. Boggis")}> Únete como Mr. Boggis </button>
//         )}
//       </div>

//       <div className="button-container">
//         <button className="button2" onClick={() => (window.location.href = '/games')}>Volver a Juegos</button>
//       </div>

//     </div>
//   );
// };

// export default CharactersGameList;