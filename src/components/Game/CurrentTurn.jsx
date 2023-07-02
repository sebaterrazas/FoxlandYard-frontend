import React, { useContext } from 'react';

import { GameContext } from '../../contexts/GameContext';
import MrFox from '../../assets/images/avatars/mr-fox.png';
import MrBean from '../../assets/images/avatars/mr-bean.png';
import MrBoggis from '../../assets/images/avatars/mr-boggis.png';
import MrBunce from '../../assets/images/avatars/mr-bunce.png';

function CurrentTurn() {
    const { 
        game,
    } = useContext(GameContext);

    const characterInTurn = game.current_turn;
    const classOnTurn = (character) => {
        if (characterInTurn === character) return 'on-turn';
        return 'not-on-turn';
    }
    return (
        <div className='current-turn navbar-container'>
            <div className='container-title' >Turno actual</div>
            <div className='container-content'>
                <img className={classOnTurn('Mr. Fox')} src={MrFox} alt={'mr-fox'} />
                <img className={classOnTurn('Mr. Bean')} src={MrBean} alt={'mr-bean'} />
                <img className={classOnTurn('Mr. Boggis')} src={MrBoggis} alt={'mr-boggis'} />
                <img className={classOnTurn('Mr. Bunce')} src={MrBunce} alt={'mr-bunce'} />
            </div>
        </div>
    );
}

export default CurrentTurn;