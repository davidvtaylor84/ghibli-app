const Film = ({selectedFilm, onFavouriteToggle})=>{

    if (!selectedFilm) {
        return null
    }

    const handleClick = ()=>{
        onFavouriteToggle(selectedFilm.id)
    }

    const favouriteBtnText = selectedFilm.isFavourite ? 'Remove from favourites' : 'Add to favourites'

    return (
        <>
        <div><img className="image" src={selectedFilm.image}></img></div>
        <div className="film">
            <h3>{selectedFilm.title}...{selectedFilm.original_title}</h3>
            <p>Release Date: {selectedFilm.release_date}</p>
            <p>Description: {selectedFilm.description}</p>
            <p>Director: {selectedFilm.director}</p>
            <p>Producer: {selectedFilm.producer}</p>
            <p>Running Time: {selectedFilm.running_time}mins</p>
            <button onClick={handleClick}>{favouriteBtnText}</button>
        </div>
        </>
    )

}

export default Film