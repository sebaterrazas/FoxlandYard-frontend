import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Board from '../../components/Game/Board';
import MrFoxMovements from '../../components/Game/MrFoxMovements';
import '../../styles/Game.css'
import Node from '../../components/Game/Node';
import Connection from '../../components/Game/Connection';
import Character from '../../components/Game/Character';
import { GameContext } from '../../contexts/GameContext';
import { CharacterContext } from '../../contexts/CharacterContext';
import { AuthContext } from '../../contexts/AuthContext';


function GamePage() {
    const { gameId } = useParams();
    const [mrFoxMovements, setMrFoxMovements] = useState([]);

    const { 
            game,
            setGame,
            getGame, 
            getGameCharacters, 
            setMrFox, 
            getMrFoxMovements, 
            setRefresh, 
            refresh 
        } = useContext(GameContext);
    const { setCharacter } = useContext(CharacterContext);
    const { user} = useContext(AuthContext);


    const [nodes, setNodes] = useState([]);
    const [connections, setConnections] = useState([]);
    const [resConnections, setResConnections] = useState([]);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        if (refresh) {
            if (nodes.length === 0) {
                getGame(gameId).then((res) => {
                    setGame(res.game);
                    const nodes = res.game.Nodes.map((node) => {
                        return <Node key={node.nodeId} id={node.nodeId} type={node.movementType} />;
                    });
                    setNodes(nodes);
                    setResConnections(res.connections);
                }).catch((err) => {
                    console.log(err);
                });
            }

            getGameCharacters(gameId).then((res) => {
                const characters = res.map((character) => {
                    if (character.name === 'Mr. Fox') {
                        setMrFox(character);
                    }
                    if (character.userId === user.id) {
                        setCharacter(character);
                    }
                    return <Character key={character.id} name={character.name} nodeId={character.nodeId} />;
                });
                setCharacters(characters);
            }).catch((err) => {
                console.log(err);
            });

            /* const { characterId } = character;
            getCharacter(characterId).then((res) => {
                setCharacter({ characterId, ...res});
            }).catch((err) => {
                console.log(err);
            }); */

            getMrFoxMovements(gameId).then((res) => {
                setMrFoxMovements(res);
            }).catch((err) => {
                console.log(err);
            });

            setRefresh(false);
        }
    }, [refresh]);

    useEffect(() => {
        const drawConnections = () => {
            if (nodes && resConnections.length > 0) {
                const connections = resConnections.map((connection, index) => {
                    return <Connection key={index} type={connection.movementType} from={connection.node1Id} to={connection.node2Id} />;
                });
                setConnections(connections);
            }
        };

        drawConnections();

        window.addEventListener("resize", drawConnections);
        window.addEventListener("scroll", drawConnections);

        // Limpiar el evento cuando el componente se desmonte
        return () => {
            window.removeEventListener("resize", drawConnections);
            window.removeEventListener("scroll", drawConnections);
        };

    }, [nodes, resConnections]);

    useEffect(() => {
        setRefresh(true);
    }, []);

    return (
        <div className='game-view'>
            <Board nodes={nodes} characters={characters} connections={connections}/>
            <MrFoxMovements cards={mrFoxMovements}/>
        </div>
    );
}

export default GamePage;