function Card(props){
    const { data } = props

    return(
        <div className='card'>
            <img src={data.url} alt={data.title}/>
            <div className='cardText'>{data.title}</div>
        </div>
    )
}

export default Card