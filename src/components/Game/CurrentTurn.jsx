import React, { useContext, useState, useEffect } from 'react';

import { GameContext } from '../../contexts/GameContext';
import { CharacterContext } from '../../contexts/CharacterContext';

import MrFox from '../../assets/images/avatars/mr-fox.png';
import MrBean from '../../assets/images/avatars/mr-bean.png';
import MrBoggis from '../../assets/images/avatars/mr-boggis.png';
import MrBunce from '../../assets/images/avatars/mr-bunce.png';

function CurrentTurn() {
    const [playingCharacters, setPlayingCharacters] = useState([]);
    const { 
        game,
    } = useContext(GameContext);
    const { 
        characters,
    } = useContext(CharacterContext);

    useEffect(() => {
        setPlayingCharacters(characters.map((character, index) => {
            if (character.name === 'Mr. Fox') return <img key={index} className={classOnTurn(character.name)} src={MrFox} alt={character.name} />;
            if (character.name === 'Mr. Bean') return <img key={index} className={classOnTurn(character.name)} src={MrBean} alt={character.name} />;
            if (character.name === 'Mr. Boggis') return <img key={index} className={classOnTurn(character.name)} src={MrBoggis} alt={character.name} />;
            if (character.name === 'Mr. Bunce') return <img key={index} className={classOnTurn(character.name)} src={MrBunce} alt={character.name} />;
            return <></>;
        }));
    }, [characters]);

    const characterInTurn = game.current_turn;
    const classOnTurn = (character) => {
        if (characterInTurn === character) return 'on-turn';
        return 'not-on-turn';
    }
    return (
        <div className='current-turn navbar-container'>
            <div className='container-title' >Turno actual</div>
            <div className='container-content'>
                {playingCharacters}
            </div>
        </div>
    );
}

export default CurrentTurn;