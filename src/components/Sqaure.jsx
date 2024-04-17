// Square.jsx

import React from 'react';

function Square(props) {
    return (
        <div onClick={props.onClick} className={`square ${props.val === 'X' ? 'x-turn' : 'o-turn'}`}>
            <h5>{props.val}</h5>
        </div>
    );
}

export default Square;
