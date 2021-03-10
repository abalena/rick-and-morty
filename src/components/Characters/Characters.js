const Characters = () => {

    let characters = fetch("https://rickandmortyapi.com/api/character")
        .then(
            response => response.json(),
            error => console.log(error)
        )
        .then(
            data => console.log(data.results), 
            error => console.log(error)
            )


    return (
        <>
            <h1>Characters</h1>
            <div> </div>
        </>

    )
}
export default Characters;