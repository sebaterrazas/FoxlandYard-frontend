import React from 'react';

import Ash from '../../assets/images/characters/Ash1.jpg'
import Kris from '../../assets/images/characters/kris.png'
import Kylie from '../../assets/images/characters/kylie.jpeg'

const FamilyMembers = (props) => {
    const onClick = (member) => {
        console.log(member)
    }
    return (
        <div className='family-members'>
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
    );
}

export default FamilyMembers;