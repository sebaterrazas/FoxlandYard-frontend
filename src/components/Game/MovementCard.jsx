import React, { useContext } from 'react';

import '../../styles/MovementCard.css';

import Walk from '../../assets/images/icons/walk.png'
import Bike from '../../assets/images/icons/bike.png'
import Car from '../../assets/images/icons/sidecar.png'

import { CharacterContext } from '../../contexts/CharacterContext';

function MovementCard({ type, number, isStatic }) {
    const { selectedMove, setSelectedMove } = useContext(CharacterContext);

    let Image = <></>;
    if (type === 'walk') Image = <img src={Walk} />;
    if (type === 'bike') Image = <img src={Bike} />;
    if (type === 'car') Image = <img src={Car} />;

    const handleClick = () => {
        if (isStatic) return;
        if (type === selectedMove) setSelectedMove(null);
        else setSelectedMove(type);
    }

    const selected = (selectedMove === type || (isStatic && type !== 'empty')) ? 'selected' : '';
    const staticClass = isStatic ? 'static' : 'dynamic';
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