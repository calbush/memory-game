import { useState } from "react";
import Scoreboard from "./Scoreboard";
import leachie from '../images/leachie.jpeg'
import galapagos from '../images/galapagos.png'
import bearded from '../images/bearded-dragon.jpg'
import python from '../images/green-tree-python.jpeg'
import skink from '../images/blue-tongue-skink.jpeg'
import Card from "./card";



function Gameboard(){
    const [reptiles, setReptiles] = useState([
        {'title' : 'tortoise', 'url' : galapagos},
        {'title' : 'leechie', 'url' : leachie},
        {'title' : 'bearded dragon', 'url' : bearded},
        {'title' : 'python', 'url' : python},
        {'title' : 'blue-tongued skink', 'url' : skink},
    ])
    const [clickedCards, setClickedCards] = useState([])
    const [count, setCount] = useState(0)
    const [highestScore, setHighestScore] = useState(0)

    const clickHandler = (e) => {
        let id = e.target.parentNode.lastChild.textContent
        setReptiles(shuffleArray(reptiles))
        keepScore(id)
    }

    const shuffleArray = (array) => {
        return [...array].sort(() => Math.random() - 0.5)
    }

    const resetGame = () => {
        setCount(0)
        setClickedCards([])
    }

    const keepScore = (id) => {
        if (clickedCards.includes(id)){
            resetGame()
        } else {
            setCount(count + 1)
            setClickedCards([...clickedCards, id])
            if (count + 1 > highestScore){
                setHighestScore(highestScore + 1)
            }
        }
    }
    

    return(
        <div className='gameBoard'>
            <Scoreboard current={count} highest={highestScore}/>
            <ul className='cardHolder'>
                <Card reptile={reptiles[0]} clickHandler={clickHandler}/>
                <Card reptile={reptiles[1]} clickHandler={clickHandler}/>
                <Card reptile={reptiles[2]} clickHandler={clickHandler}/>
                <Card reptile={reptiles[3]} clickHandler={clickHandler}/>
                <Card reptile={reptiles[4]} clickHandler={clickHandler}/>
            </ul>
        </div>
    )
    
}

export default Gameboard