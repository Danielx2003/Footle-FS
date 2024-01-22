import React, { createContext, useState, useEffect } from "react";
import Dropdown from "../components/Dropdown.jsx"
import Player from "../components/Player.jsx"
export const HiddenPlayerContext = createContext()
export const GuesesContext = createContext(false)

const Start = () => {
    //get random player, and make it context.
    const [hiddenPlayer, setHiddenPlayer] = useState({})
    const [guesses, setGuesses] = useState([])

    useEffect(() => {
        const fetchPlayers = async () => {
            const response = await fetch(`http://localhost:4000/api/players/random`)
            const json = await response.json()
            if (response.ok) {
                setHiddenPlayer(prevState => json[0])
            }
        }
        fetchPlayers()
    }, [])

    return (
        <GuesesContext.Provider value={[guesses, setGuesses]}>
            <Dropdown />
            <HiddenPlayerContext.Provider value={hiddenPlayer}>
                {guesses.map((player) => <Player key={player._id} item={player} />)}
            </HiddenPlayerContext.Provider>
        </GuesesContext.Provider>

    )
}
export default Start

//   <HiddenPlayerContext.Provider value={hiddenPlayer}>
// put above player