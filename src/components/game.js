import { useState } from "react";
import Card from "./card";
import leachie from '../images/leachie.jpeg'
import galapagos from '../images/galapagos.png'
import bearded from '../images/bearded-dragon.jpg'
import python from '../images/green-tree-python.jpeg'
import skink from '../images/blue-tongue-skink.jpeg'


function Gameboard(){
    const [reptiles, setReptiles] = useState([
        {'title' : 'tortoise', 'url' : galapagos},
        {'title' : 'leechie', 'url' : leachie},
        {'title' : 'bearded dragon', 'url' : bearded},
        {'title' : 'python', 'url' : python},
        {'title' : 'blue-tongued skink', 'url' : skink},

    ])


    const getShuffleFn = (array) => {
        const shuffleArray = () => {
            let shuffledArray = []
            while (array.length !== 0){
                let randomIndex = Math.round(Math.random() * (array.length - 1))
                shuffledArray.push(array[randomIndex])
                array.splice(randomIndex, 1)
            }
            setReptiles(shuffledArray)
        }
        return shuffleArray
    }

    return(
        <div>
            <button onClick={getShuffleFn(reptiles)}>Test me</button>
            <Card data={reptiles[0]} />
            <Card data={reptiles[1]} />
            <Card data={reptiles[2]} />
            <Card data={reptiles[3]} />
            <Card data={reptiles[4]} />
        </div>
    )
    
}

export default Gameboard