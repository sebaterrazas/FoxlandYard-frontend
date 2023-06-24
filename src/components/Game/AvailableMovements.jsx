import React, { useState, useEffect, useContext} from 'react';

// import { GameContext } from '../../contexts/GameContext';
import { CharacterContext } from '../../contexts/CharacterContext';
import MovementCard from './MovementCard';


function AvailableMovements(props) {
    // const { setRefresh, refresh } = useContext(GameContext);
    const { character, setCharacter, getCharacter } = useContext(CharacterContext);

    // useEffect(() => {
    //     setRefresh(true);
    // }, []);

    // useEffect(() => {
    //     if (refresh) {
    //         const { characterId } = character;
    //         getCharacter(characterId).then((res) => {
    //             setCharacter({ characterId, ...res});
    //         }).catch((err) => {
    //             console.log(err);
    //         });
    //         setRefresh(false);
    //     }
    // }, [refresh]);

    return (
        <div className='available-movements'>
            <div className='av-mov-title' >Tus movimientos restantes</div>
            <div className='av-mov-content'>
                <MovementCard type={'walk'} number={character.walkCards} />
                <MovementCard type={'bike'} number={character.bikeCards} />
                <MovementCard type={'car'} number={character.carCards}  />
            </div>
        </div>
    );
}

export default AvailableMovements;