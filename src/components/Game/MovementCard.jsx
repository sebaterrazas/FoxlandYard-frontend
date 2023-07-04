import React, { useContext } from 'react';

import '../../styles/MovementCard.css';

import Walk from '../../../public/assets/images/icons/walk.png'
import Bike from '../../../public/assets/images/icons/bike.png'
import Car from '../../../public/assets/images/icons/sidecar.png'

import { CharacterContext } from '../../contexts/CharacterContext';
import { GameContext } from '../../contexts/GameContext';

function MovementCard({ type, number, isStatic }) {
    const { selectedMove, setSelectedMove } = useContext(CharacterContext);
    const { isGameOver } = useContext(GameContext);

    let Image = <></>;
    if (type === 'walk') Image = <img src={Walk} />;
    if (type === 'bike') Image = <img src={Bike} />;
    if (type === 'car') Image = <img src={Car} />;

    const handleClick = () => {
        if (isGameOver) return;
        if (isStatic) return;
        if (type === selectedMove) setSelectedMove(null);
        else setSelectedMove(type);
    }

    const selected = (selectedMove === type || (isStatic && type !== 'empty')) && !isGameOver ? 'selected' : '';
    const staticClass = (isStatic || isGameOver) ? 'static' : 'dynamic';
    return (
        <a className={`movement-card ${type} ${selected} ${staticClass}`} onClick={handleClick}>
            <div className='card-content'>
                <div className='card-number'>{number}</div>
                {Image}
            </div>
        </a>
    );
}

export default MovementCard;