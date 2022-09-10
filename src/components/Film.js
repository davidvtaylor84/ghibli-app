const Film = ({selectedFilm})=>{

    if (!selectedFilm) {
        return null
    }

    return (
        <div>
            <h3>{selectedFilm.title}...{selectedFilm.original_title}</h3>
            <p>Release Date: {selectedFilm.release_date}</p>
            <p>Description: {selectedFilm.description}</p>
            <p>Director: {selectedFilm.director}</p>
            <p>Producer: {selectedFilm.producer}</p>
            <p>Running Time: {selectedFilm.running_time}mins</p>
            <img src={selectedFilm.image}></img>
        </div>
    )

}

export default Film