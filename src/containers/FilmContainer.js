import React,{useState, useEffect} from "react";
import FilmSelector from "../components/FilmSelector";
import CharacterSelector from "../components/CharacterSelector";
import Film from "../components/Film";
import Character from "../components/Character";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FavouriteFilms from "../components/FavouriteFilms";

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

    const onFavouriteToggle = (id) => {
        const updatedFilms = films.map((film) => {
          return film.id === id
            ? {...film, isFavourite: !film.isFavourite}
            : film
        })
        setFilms(updatedFilms)
      }

    const onFilmSelect = id =>{
        setSelectedFilmId(id)
    }

    const selectedFilm = films.find(film => film.id === selectedFilmId)

    const onCharacterSelect = id =>{
        setSelectedCharacters(id)
    }

    const selectedCharacter = characters.find(character => character.id === selectedCharacters)


    return(
        <div>
            <Header/>
            <FavouriteFilms films={films} onFilmSelect={onFilmSelect}/>
            <FilmSelector films={films} onFilmSelect={onFilmSelect}/>
            <Film selectedFilm={selectedFilm} onFavouriteToggle={onFavouriteToggle}/>
            <CharacterSelector characters={characters} onCharacterSelect={onCharacterSelect}/>
            <Character selectedCharacter={selectedCharacter}/>
            <Footer/>
        </div>
    )

}

export default FilmContainer