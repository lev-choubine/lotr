function Movies(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <span>{props.hours}</span> 
            <span> hours </span>
            <span>{props.minutes}</span>
            <span> minutes</span>
        </div>
    )
}

export default Movies;