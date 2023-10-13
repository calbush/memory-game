
export default function Gameover({gameState, setGameState, highestScore}){
    if (gameState === 'loss'){
        return (
            <div className="end">
                <div className="h1">GAME OVER</div>
                <div className="flavor">Someone needs to brush up on their reptile knowledge.</div>
                <div>HIGH SCORE: {highestScore}</div>
                <button onClick={() => {setGameState('active')}}>Play Again</button>
            </div>
        )
    } else {
        return (
            <div className="end">
                <div className="h1">WINNER WINNER</div>
                <div className="flavor">Reptile Dinner.</div>
                <button onClick={() => {setGameState('active')}}>Play Again</button>
            </div>
        )
        
    }
}