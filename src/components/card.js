function Card({reptile, clickHandler}){

    return(
        <li>
            <div className='card' onClick={clickHandler}>
                <img src={reptile.url} alt={reptile.title}/>
                <div>{reptile.title}</div>
            </div>
        </li>
    )
}

export default Card