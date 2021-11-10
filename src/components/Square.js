import React from 'react'

const Square = ({ value, onClick, winner }) => {
    const style = value ? `squares ${value} ${winner}` : `squares`

    return (
        <button className={style} onClick={onClick}>
            {value}
        </button>
    )
}

export default Square
