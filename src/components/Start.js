import Header from '../components/Header'
import Instructions from '../components/Instructions'

export default function Start({setGameState}){
    return(
        <div className='end'>
            <Header/>
            <Instructions/>
            <button onClick={() => {setGameState('active')}}>Start Game</button>
        </div>
    )
}