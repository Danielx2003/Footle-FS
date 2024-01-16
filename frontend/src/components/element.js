import React from 'react';

export default function Element(props) {
    console.log(props.players)
    function handleClick(e) {
        console.log(props.players.name)
    }
    return (
        <div className="element">
            {JSON.stringify(props.players).length >= 1 ? <p onClick={handleClick} >{props.players.name}</p> : <p onClick={handleClick}>nish</p>}
        </div>
    )
}