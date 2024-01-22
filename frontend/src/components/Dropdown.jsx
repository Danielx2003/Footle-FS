import React from "react"
import { useState, useEffect, useContext } from "react"
import { GuesesContext } from "../pages/Start.jsx"
import Element from "./Element.jsx"

export default function Dropdown() {
    const [input, setInput] = useState("")
    const [requestResult, setRequestResult] = useState([])
    const [guesses, setGuesses] = useContext(GuesesContext)

    useEffect(() => {
        const fetchPlayers = async () => {
            const response = await fetch(`http://localhost:4000/api/players/search/${input}`)
            const json = await response.json()
            if (response.ok) {
                setRequestResult(json)
            }
        }
        if (input.length > 3) {
            fetchPlayers()
        } else {
            setRequestResult([])
        }
    }, [input])

    function handleTyping(e) {
        setInput(e.target.value)
    }


    return (
        <div className="dropdown">
            <input onChange={handleTyping}
                className="dropdown--input"
                value={input}
                placeholder="Guess here">
            </input>
            {requestResult.map(player => <Element
                key={player._id}
                player={player}
                setRequestResult={setRequestResult}
                setInput={setInput}
            />)}
        </div>
    )
}   