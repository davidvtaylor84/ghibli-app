import React,{useState, useEffect} from "react";
import FilmSelector from "../components/FilmSelector";

const FilmContainer = ()=>{

    const[films, setFilms] = useState([])
    // const[selectedFilmId, setSelectedFilmId] = useEffect('')
    
    useEffect(() => {
        getFilms()
    },[])

    const getFilms = ()=> {
        fetch("https://ghibliapi.herokuapp.com/films/")
        .then(res => res.json())
        .then(filmData => setFilms(filmData))
    }

    return(
        <div>
            <h2>Welcome to this Ghibli app</h2>
            <FilmSelector films={films}/>
        </div>
    )

}

export default FilmContainer