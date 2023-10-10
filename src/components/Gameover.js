
export default function Gameover({gameState, setGameState, highestScore}){
    if (gameState === 'loss'){
        return (
            <div>
                <div>GAME OVER</div>
                <div>HIGH SCORE: {highestScore}</div>
                <button onClick={() => {setGameState('active')}}>Play Again</button>
            </div>
        )
    } else {
        return (
            <div>
                <div>WINNER WINNER</div>
                <button onClick={() => {setGameState('active')}}>Play Again</button>
            </div>
        )
        
    }
}