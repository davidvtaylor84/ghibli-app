import React,{useState, useEffect} from "react";
import FilmSelector from "../components/FilmSelector";
import Film from "../components/Film";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FilmContainer = ()=>{

    const[films, setFilms] = useState([])
    const[selectedFilmId, setSelectedFilmId] = useState('')

    const[characters, setCharacters] = useState([])
    const[selectedCharacters, setSelectedCharacters] = useState('')

    useEffect(() =>{
        getCharacters()
    }, [])
    
    useEffect(() => {
        getFilms()
    },[])

    const getFilms = ()=> {
        fetch("https://ghibliapi.herokuapp.com/films/")
        .then(res => res.json())
        .then(filmData => setFilms(filmData))
    }

    const getCharacters = ()=> {
        fetch("https://ghibliapi.herokuapp.com/people")
        .then(res => res.json())
        .then(characterData => setCharacters(characterData))
    }

    // const onCharactersClick = (list) => {
    //     const theseCharacters = characters.filter(character => list == character.url)
    //     console.log(theseCharacters)
    //     return setSelectedCharacters(theseCharacters)
    // }


    const onFilmSelect = id =>{
        setSelectedFilmId(id)
    }

    const selectedFilm = films.find(film => film.id === selectedFilmId)

    return(
        <div>
            <Header/>
            <FilmSelector films={films} onFilmSelect={onFilmSelect}/>
            <Film selectedFilm={selectedFilm}/>
            <Footer/>
        </div>
    )

}

export default FilmContainer