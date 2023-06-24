import React, { useContext } from 'react';

import { GameContext } from '../../contexts/GameContext';
import { CharacterContext } from '../../contexts/CharacterContext';

function Node({ id, type }) {
    const { setRefresh } = useContext(GameContext);
    const { character, selectedMove, moveCharacter, setSelectedMove } = useContext(CharacterContext);

    const characterId = character.id;

    const handleClick = () => {
        moveCharacter(characterId, selectedMove, id, false).then((res) => {
            setRefresh(true);
            setSelectedMove(null);
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