function ListItem(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.hours}</p>
            <p>{props.minutes}</p>
        </div>
    )
}

export default Movies;