import { useContext } from "react";
import { GuesesContext } from "../pages/Start.jsx"

export default function Element(props) {
    const [guesses, setGuesses] = useContext(GuesesContext)
    function handleClick(e) {
        let repeat = false;
        for (let i=0; i<guesses.length; i++) {
            if (props.player._id === guesses[i]._id) {
                repeat = true;
            } 

        }

        if (repeat) {
            console.log("already guessed")
        } else {
            setGuesses(prevArr => [props.player, ...prevArr])
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