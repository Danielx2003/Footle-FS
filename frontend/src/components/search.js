import React from "react"
import { useState, useEffect } from "react"
import Element from "./element.js"

export default function Search() {
    const [input, setInput] = React.useState("")
    const [players, setPlayers] = React.useState([])

    useEffect(() => {
        console.log(players)
        const fetchPlayers = async () => {
            const response = await fetch(`api/players/search/${input}`)
            const json = await response.json()
            console.log("fetch made")
            if (response.ok) {
                setPlayers(json)
            }
        }
        if (input.length > 3) {
            fetchPlayers()
        } else {
            setPlayers([])
        }
    }, [input])

    function handleTyping(e) {
        setInput(e.target.value)
        console.log(e.target.value)
    }


    return (
        <div className="dropdown">
            <input onChange={handleTyping}
                className="dropdown--input"
                value={input}
                placeholder="Guess Here"
            ></input>
            {players.map(player => <Element
                players={player}
            />)}

        </div>

    )
}   