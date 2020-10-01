import React from 'react';

export default function PlayAgain (props) {
    return(
        <div className="game-done">
            <div className="message" style={{color: props.gameStatus === 'Lost'? 'red' : 'green'}}>
            {props.gameStatus === 'Lost'? 'Game Over' : 'Nice'}
            </div>
            <button onClick={props.onClick}>Play Again</button>
        </div>
    );
}