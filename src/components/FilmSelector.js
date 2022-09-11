
const FilmSelector=({films, onFilmSelect})=>{

    const handleChange = event =>{
        onFilmSelect(event.target.value)
    }

    return (
        <div className="selector">
        <p>Select film:</p>
        <select defaultValue="" onChange={handleChange}>
            <option value="" disabled>Choose a Ghibli film</option>{
                films.map( film => {
                    return (
                        <option key={film.id} value={film.id}>{film.title}</option>
                    )
                })
            }
        </select>
        </div>
    )
}

export default FilmSelector