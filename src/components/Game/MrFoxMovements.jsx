import React from 'react';
import MovementCard from './MovementCard';

function MrFoxMovements({ cards }) {
    
    const renderCards = () => {
        const boardCards = [];
        // cards.forEach((card, index) => {
        //     const isCircle = (index - 2) % 5 === 0;
        //     const numberClass = 'number' + (isCircle ? ' circle' : '');
        //     boardCards.push(
        //         <div className='cell' key={`card-${index}`} >
        //             <div className={numberClass} >{index + 1}</div>
        //             <MovementCard key={`card-${index}`} type={card.movementType} />
        //         </div>
        //     );
        // });

        for (let cardIndex = 0; cardIndex < 24; cardIndex++) {
            const isCircle = (cardIndex - 2) % 5 === 0;
            const numberClass = 'number' + (isCircle ? ' circle' : '');
            const type = cards[cardIndex] ? cards[cardIndex].movementType : 'empty';
            boardCards.push(
                <div className='cell' key={`card-${cardIndex}`} >
                    <div className={numberClass} >{cardIndex + 1}</div>
                    <MovementCard key={`card-${cardIndex}`} type={type} isStatic={true} />
                </div>
            );
        }

        return boardCards;
    };
    
    return (
    <div className="mr-fox-movements" >
        <h3>
            Movimientos de Mr Fox
        </h3>
        <div className='cards-table'>
            {renderCards()}
        </div>
    </div>
    );
}

export default MrFoxMovements;
