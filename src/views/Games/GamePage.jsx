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

import MrFoxImage from '../../assets/images/avatars/mr-fox.png';
import MrBeanImage from '../../assets/images/avatars/mr-bean.png';
import MrBoggisImage from '../../assets/images/avatars/mr-boggis.png';
import MrBunceImage from '../../assets/images/avatars/mr-bunce.png';

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
            setGameStatus,
            setIsGameOver,
            startGame
        } = useContext(GameContext);
    const { setCharacter, characters, setCharacters, character } = useContext(CharacterContext);
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
        if (gameStatus) {
            setShowModal(true);
        }
    }, [gameStatus]);


    useEffect(() => {
        console.log('refresh', refresh);
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
                console.log('Characters', res.game.Characters);
                setCharactersElements(res.game.Characters.map((char) => {
                    if (char.name === 'Mr. Fox') {
                        setMrFox(char);
                        if (char.userId !== user.id && !res.game.winner) {
                           return;
                        }
                        /* if (character.name !== res.game.current_turn && !res.game.winner) {
                            return;
                         } */
                    }
                    if (char.userId === user.id) {
                        setCharacter(char);
                    }
                    return <Character key={char.id} name={char.name} nodeId={char.nodeId} />;
                }));
            }).catch((err) => {
                console.log(err);
            });

            if (['Mr. Fox wins!', 'Farmers win!', 'It\'s a tie...'].includes(gameStatus)) {
                setShowModal(true);
                setIsGameOver(true);
            }
            setRefresh(false);
        } else {
            setTimeout(() => {
                setRefresh(true);
            }, 2000);
        }
    }, [refresh]);

    // useEffect(() => {
    //     if (game) {
    //         const characterNameInTurn = game.current_turn;
    //         setCharacter(characters.find((char) => char.name === characterNameInTurn));
    //     }
    // }, [game]);

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

    if (game?.plays_left === null) {
        const handleStartGamePressed = async () => {
            if (characters.length < 2 && !characters.find((char) => char.name === 'Mr. Fox')) {
                setShowModal(true);
                return;
            }
            startGame(gameId);
        };
        const characterInfo = (name) => {

            const isPresent = characters.find((char) => char.name === name);
            let chosen = '';
            if (isPresent) {
                chosen = 'chosen';
            }
            let characterAvatar = <></>;
            if (name === 'Mr. Fox') characterAvatar = <img src={MrFoxImage} alt={name} />;
            if (name === 'Mr. Bean') characterAvatar = <img src={MrBeanImage} alt={name} />;
            if (name === 'Mr. Boggis') characterAvatar = <img src={MrBoggisImage} alt={name} />;
            if (name === 'Mr. Bunce') characterAvatar = <img src={MrBunceImage} alt={name} />;

            const player = (character && character.name === name) ? 'player' : '';
            return (
                <div className={`profile ${chosen} ${player} display-row`} >
                    {characterAvatar}
                    { isPresent && 
                        <p>{isPresent.User.username}</p>
                    }
                </div>
            );
        }
        return (
            <div className='flex-box'>
                <h3>Lobby del juego {game.id}</h3>
                <div className='game-lobby'>
                    <div className='display-column'>
                        {characterInfo('Mr. Fox')}
                        {characterInfo('Mr. Bean')}
                        {characterInfo('Mr. Boggis')}
                        {characterInfo('Mr. Bunce')}
                    </div>
                    <div className='display-column'>
                        <CustomButton type='primary' mode='contained' onClick={handleStartGamePressed}>Comenzar Juego</CustomButton>
                    </div>
                </div>
                {showModal && 
                (<div className="modal">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h2>Jugadores insuficientes</h2>
                        <CustomButton mode={'text'} type={'secondary'} onClick={closeModal}>X</CustomButton>
                    </div>
                    <div className="modal-body">
                        <p>Deben ser más de un jugador para poder empezar la partida, y uno de ellos tiene que ser Mr. Fox</p>
                    </div>
                </div>
            </div>)}
            </div>
    )}

    return (
        <div className='game-view'>
            <Board nodes={nodes} characters={charactersElements} connections={connections}/>
            <MrFoxMovements cards={mrFoxMovements}/>
            {showModal ? 
            (<div className="modal">
                <div className="modal-content">
                <div className="modal-header">
                    <h2>{ gameWinner ? 'Juego Terminado' : 'Movimiento inválido'}</h2>
                    <CustomButton mode={'text'} type={'secondary'} onClick={closeModal}>X</CustomButton>
                </div>
                <div className="modal-body">
                    <p>{gameWinner || gameStatus}</p>
                    <div>
                        <CustomButton type='primary' mode='contained' href="/" onClick={() => setGame(null)}>Salirse del Juego</CustomButton>
                    </div>
                </div>
                </div>
            </div>) 
            : null }
        </div>
    );
}

export default GamePage;