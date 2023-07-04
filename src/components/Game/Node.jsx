import React, { useContext } from 'react';

import { GameContext } from '../../contexts/GameContext';
import { CharacterContext } from '../../contexts/CharacterContext';

function Node({ id, type }) {
    const { setRefresh, performTurn, setGameStatus, isGameOver } = useContext(GameContext);
    const { character, selectedMove, setSelectedMove } = useContext(CharacterContext);

    if (!character) {
        return (
            <a className={`node node${id} ${type}`} >
            </a>
        );
    }

    const gameId = character.gameId;
    const characterId = character.id;

    const handleClick = () => {
        if (isGameOver) return;
        performTurn(gameId, characterId, selectedMove, id, false).then((res) => {
            setSelectedMove(null);
            setGameStatus(res)
            setRefresh(true);
        }).catch((err) => {
            console.log(err);
        });   
    }

    return (
        <a className={`node node${id} ${type}`} onClick={handleClick} >
        </a>
    );
}

export default Node;