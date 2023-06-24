import React, { useContext } from 'react';

import { CharacterContext } from '../../contexts/CharacterContext';

import MrFox from '../../assets/images/avatars/mr-fox.png';
import MrBean from '../../assets/images/avatars/mr-bean.png';
import MrBoggis from '../../assets/images/avatars/mr-boggis.png';
import MrBunce from '../../assets/images/avatars/mr-bunce.png';

function Character({ name, nodeId }) {
    const { character } = useContext(CharacterContext);

    let characterAvatar = <></>;
    if (name === 'Mr. Fox') characterAvatar = <img src={MrFox} alt={name} />;
    if (name === 'Mr. Bean') characterAvatar = <img src={MrBean} alt={name} />;
    if (name === 'Mr. Boggis') characterAvatar = <img src={MrBoggis} alt={name} />;
    if (name === 'Mr. Bunce') characterAvatar = <img src={MrBunce} alt={name} />;

    const player = (character && character.name === name) ? 'player' : '';
    return (
        <div className={`character node${nodeId} ${player}`} >
            {characterAvatar}
        </div>
    );
}

export default Character;