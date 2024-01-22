import { useContext } from "react";
import { GuesesContext } from "../pages/Start.jsx"

export default function Element(props) {
    const [guesses, setGuesses] = useContext(GuesesContext)
    function handleClick(e) {
        console.log("-------")
        console.log(guesses, "is guesses")
        console.log(props.player)
        console.log("-------")
        for (let i = 0; i < guesses.length; i++) {
            if (guesses[i] === props.player) {
                console.log("already in list")
            } else {
                console.log(props.player, "is not equal to", guesses[i])
            }
        }

        if (guesses.includes(props.player)) {
            console.log("already guessed")
        } else {
            setGuesses(prevArr => [...prevArr, props.player])
        }
        props.setRequestResult([])
        props.setInput("")
    }

    return (
        <div className="element">
            {JSON.stringify(props.player).length >= 1 ? <p onClick={handleClick} >{props.player.name}</p> : <p onClick={handleClick}>nish</p>}
        </div>

    )

}