import React from 'react';
import Square from './Square';

const Board = ({ squares, onClick, winnerSquares }) => {
    const winner = 'winner';
    const loser = '';

    return (
        <div className="board">
            {squares.map((square, i) =>(
                winnerSquares && winnerSquares.includes(i)
                ? <Square key={i} value={square} onClick={() => onClick(i)} winner={winner} /> 
                : <Square key={i} value={square} onClick={() => onClick(i)} winner={loser} />
            ))}
        </div>
    )
}

export default Board
