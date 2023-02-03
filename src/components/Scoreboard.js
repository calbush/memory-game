function Scoreboard({current, highest}){
    return(
        <div>
            <div className='left'>
                <div className='label'>Current Score:</div>
                <div className='score'>{current}</div>
            </div>
            <div className='right'>
                <div className='label'>Highest Score:</div>
                <div className='score'>{highest}</div>
            </div>
        </div>
    )
}

export default Scoreboard