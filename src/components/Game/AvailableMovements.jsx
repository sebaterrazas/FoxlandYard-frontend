import React, { useContext} from 'react';

import { CharacterContext } from '../../contexts/CharacterContext';
import MovementCard from './MovementCard';


function AvailableMovements(props) {
    const { character } = useContext(CharacterContext);

    return (
        <div className='navbar-container'>
            <div className='container-title' >Tus movimientos restantes</div>
            <div className='container-content'>
                <MovementCard type={'walk'} number={character.walkCards} />
                <MovementCard type={'bike'} number={character.bikeCards} />
                <MovementCard type={'car'} number={character.carCards}  />
            </div>
        </div>
    );
}

export default AvailableMovements;