import React, { useContext } from 'react';

import { CharacterContext } from '../../contexts/CharacterContext';

import MrFox from '../../../public/assets/images/avatars/mr-fox.png';
import MrBean from '../../../public/assets/images/avatars/mr-bean.png';
import MrBoggis from '../../../public/assets/images/avatars/mr-boggis.png';
import MrBunce from '../../../public/assets/images/avatars/mr-bunce.png';

function Character({ name, nodeId }) {
    const { character, characters } = useContext(CharacterContext);

    let characterAvatar = <></>;
    if (name === 'Mr. Fox') characterAvatar = <img src={MrFox} alt={name} />;
    if (name === 'Mr. Bean') characterAvatar = <img src={MrBean} alt={name} />;
    if (name === 'Mr. Boggis') characterAvatar = <img src={MrBoggis} alt={name} />;
    if (name === 'Mr. Bunce') characterAvatar = <img src={MrBunce} alt={name} />;

    let sharedClass = '';
    const characterInNode = characters.find(c => c.nodeId === nodeId && c.name !== name);
    if (characterInNode) {
        const order = ['Mr. Fox', 'Mr. Bean', 'Mr. Boggis', 'Mr. Bunce']
        const playerIndex = order.indexOf(name) + 1;
        sharedClass = `shared-${playerIndex}`;
    }

    const player = (character && character.name === name) ? 'player' : '';
    return (
        <div className={`character ${sharedClass} node${nodeId} ${player}`} >
            {characterAvatar}
        </div>
    );
}

export default Character;