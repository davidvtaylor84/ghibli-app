const FavouriteFilms = ({films, onFilmSelect}) => {

  const favourites = films.filter(film => film.isfavourite)

  return (
    <>
    {/* <h3>My Favourite Ghibli Films</h3> */}
    <ul>
      {favourites.map(film => {
          return (
            <li key={film.id}>
              <button onClick={() => onFilmSelect(film.id)}>{film.title}</button>
            </li>
          )
        })}
    </ul>
    </>
  )
}

export default FavouriteFilms