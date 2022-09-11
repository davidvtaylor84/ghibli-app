const Film = ({selectedFilm, onCharactersClick})=>{

    if (!selectedFilm) {
        return null
    }

    const handleClick = ()=>{
        onCharactersClick(selectedFilm.people[0])
    }


    return (
        <div>
            <img src={selectedFilm.image}></img>
            <h3>{selectedFilm.title}...{selectedFilm.original_title}</h3>
            <p>Release Date: {selectedFilm.release_date}</p>
            <p>Description: {selectedFilm.description}</p>
            <p>Director: {selectedFilm.director}</p>
            <p>Producer: {selectedFilm.producer}</p>
            <p>Running Time: {selectedFilm.running_time}mins</p>
            <button onClick={handleClick}>Film Characters</button>
        </div>
    )

}

export default Film