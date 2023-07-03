import React, { useContext}  from 'react';

import { GameContext } from '../../contexts/GameContext';

import Ash from '../../assets/images/characters/Ash1.jpg'
import Kris from '../../assets/images/characters/kris.png'
import Kylie from '../../assets/images/characters/kylie.jpeg'

const FamilyMembers = (props) => {
    const { isGameOver } = useContext(GameContext);

    const onClick = (member) => {
        if (isGameOver) return;
        console.log(member)
    }
    return (
        <div className='family-members navbar-container'>
            <div className='container-title' >Pide ayuda a un familiar</div>
            <div className='container-content'>
                <a className={`available`} onClick={() => onClick('ash')}>
                    <img src={Ash} alt={'ash'} />
                </a>
                <a className={`used`} onClick={() => onClick('kris')}>
                    <img src={Kris} alt={'kris'} />
                </a>
                <a className={`used`} onClick={() => onClick('kylie')}>
                    <img src={Kylie} alt={'kylie'} />      
                </a>
            </div>
        </div>
    );
}

export default FamilyMembers;