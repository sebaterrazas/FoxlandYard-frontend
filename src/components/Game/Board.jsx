import React from 'react';

import '../../styles/Board.css';

function Board({ nodes, connections, characters}) {

    return (
        <div className='board'>
            {connections}
            {nodes}
            {characters}
        </div>
    );
}

export default Board;