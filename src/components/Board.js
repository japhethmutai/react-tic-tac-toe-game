import React from 'react';
import Square from './Square';

const Board = ({ squares, onClick, winnerSquares }) => {
    return (
        <div className="board">
            {squares.map((square, i) =>(
                winnerSquares && winnerSquares.includes(i)
                ? <Square key={i} value={square} onClick={() => onClick(i)} winner='winner' /> 
                : <Square key={i} value={square} onClick={() => onClick(i)} winner='' />
            ))}
        </div>
    )
}

export default Board
