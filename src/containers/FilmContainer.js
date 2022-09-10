import React,{useState, useEffect} from "react";
import FilmSelector from "../components/FilmSelector";
import Film from "../components/Film";

const FilmContainer = ()=>{

    const[films, setFilms] = useState([])
    const[selectedFilmId, setSelectedFilmId] = useState('')

    // const[characters, setCharacters] = useState([])
    // const[selectedCharacters, setSelectedCharacters] = useState('')

    // useEffect(() =>{
    //     getCharacters()
    // }, [])
    
    useEffect(() => {
        getFilms()
    },[])

    const getFilms = ()=> {
        fetch("https://ghibliapi.herokuapp.com/films/")
        .then(res => res.json())
        .then(filmData => setFilms(filmData))
    }

    // const getCharacters = ()=> {
    //     fetch("https://ghibliapi.herokuapp.com/people")
    //     .then(res => res.json())
    //     .then(characterData => setCharacters(characterData))
    // }

    // const onCharactersClick = () => {}

    const onFilmSelect = id =>{
        setSelectedFilmId(id)
    }

    const selectedFilm = films.find(film => film.id === selectedFilmId)

    return(
        <div>
            <h2>Welcome to this Ghibli app</h2>
            <FilmSelector films={films} onFilmSelect={onFilmSelect}/>
            <Film selectedFilm={selectedFilm}/>
        </div>
    )

}

export default FilmContainer