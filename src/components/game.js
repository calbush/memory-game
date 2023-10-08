import { useState } from "react";
import Scoreboard from "./Scoreboard";
import leachie from '../images/leachie.jpeg'
import galapagos from '../images/galapagos.png'
import bearded from '../images/bearded-dragon.jpg'
import python from '../images/green-tree-python.jpeg'
import skink from '../images/blue-tongue-skink.jpeg'
import chameleon from '../images/chameleon.jpeg'
import tuatara from '../images/tuatara.jpeg'
import viper from '../images/gaboon-viper.jpeg'
import turtle from '../images/sea-turtle.jpeg'
import iguana from '../images/iguana.jpeg'
import Card from "./card";



function Gameboard(){
    const [reptiles, setReptiles] = useState([
        {'title' : 'tortoise', 'url' : galapagos},
        {'title' : 'leechie', 'url' : leachie},
        {'title' : 'bearded dragon', 'url' : bearded},
        {'title' : 'python', 'url' : python},
        {'title' : 'blue-tongued skink', 'url' : skink},
        {'title' : 'chameleon', 'url' : chameleon},
        {'title' : 'tuatara', 'url' : tuatara},
        {'title' : 'sea turtle', 'url' : turtle},
        {'title' : 'viper', 'url' : viper},
        {'title' : 'iguana', 'url' : iguana}
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
                {reptiles.map(element => <Card key={element.url} reptile={element} clickHandler={clickHandler}/>)}
            </ul>
        </div>
    )
    
}

export default Gameboard