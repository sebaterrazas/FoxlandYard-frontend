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

import '../../styles/Modal.css';
import CustomButton from '../../components/CustomButton';


function GamePage() {
    const { gameId } = useParams();
    const [mrFoxMovements, setMrFoxMovements] = useState([]);

    const { 
            game,
            setGame,
            getGame,
            MrFox,
            setMrFox, 
            setRefresh, 
            refresh,
            gameStatus,
            setIsGameOver,
        } = useContext(GameContext);
    const { setCharacter, characters, setCharacters } = useContext(CharacterContext);
    const { user} = useContext(AuthContext);


    const [nodes, setNodes] = useState([]);
    const [connections, setConnections] = useState([]);
    const [resConnections, setResConnections] = useState([]);
    const [charactersElements, setCharactersElements] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const [gameWinner, setGameWinner] = useState(null);

    const closeModal = () => {
        setShowModal(false);
    };


    useEffect(() => {
        if (refresh) {
            getGame(gameId).then((res) => {
                setResConnections(res.connections);
                setGame(res.game);
                const nodes = res.game.Nodes.map((node) => {
                    return <Node key={node.nodeId} id={node.nodeId} type={node.movementType} />;
                });
                if (res.game.winner) {
                    if (res.game.winner === 'Mr. Fox') {
                        setGameWinner('Ha ganado Mr. Fox!');
                    } else if (res.game.winner === 'Farmers') {
                        setGameWinner('Han ganado los granjeros!');
                    } else {
                        setGameWinner('Es un empate...');
                    }
                    setIsGameOver(true);
                    setShowModal(true);
                }
                setNodes(nodes);
                setMrFoxMovements(res.game.MrFoxMovements);
                setCharacters(res.game.Characters);
                setCharactersElements(res.game.Characters.map((character) => {
                    if (character.name === 'Mr. Fox') {
                        setMrFox(character);
                        if (character.userId !== user.id && !res.game.winner) {
                           return;
                        }
                        /* if (character.name !== res.game.current_turn && !res.game.winner) {
                            return;
                         } */
                    }
                    if (character.userId === user.id) {
                        setCharacter(character);
                    }
                    return <Character key={character.id} name={character.name} nodeId={character.nodeId} />;
                }));
            }).catch((err) => {
                console.log(err);
            });

            if (['Mr. Fox wins!', 'Farmers win!', 'It\'s a tie...'].includes(gameStatus)) {
                setShowModal(true);
                setIsGameOver(true);
            }
            setRefresh(false);
        }
    }, [refresh]);

    useEffect(() => {
        if (game) {
            const characterNameInTurn = game.current_turn;
            setCharacter(characters.find((character) => character.name === characterNameInTurn));
        }
    }, [game]);

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
            <Board nodes={nodes} characters={charactersElements} connections={connections}/>
            <MrFoxMovements cards={mrFoxMovements}/>
            {showModal ? 
            (<div className="modal">
                <div className="modal-content">
                <div className="modal-header">
                    <h2>Juego Terminado</h2>
                    <CustomButton mode={'text'} type={'secondary'} onClick={closeModal}>X</CustomButton>
                </div>
                <div className="modal-body">
                    <p>{gameWinner}</p>
                    <div>
                        <CustomButton type='primary' mode='contained' href="/">Salirse del Juego</CustomButton>
                    </div>
                </div>
                </div>
            </div>) 
            : null }
        </div>
    );
}

export default GamePage;