import "./App.css";
import responseMovies from "./mocks/results-response.json";
import noResults from "./mocks/noresults.json";
import { Movies } from "./components/Movies";

export function useMovies (){
  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie =>({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))
  return {movies: mappedMovies}
}


function App() {
  const {movies: mappedMovies} = useMovies()


  return (
    <>
      <div className="page">
        <header>
          <form className="form">
            <label>
              <input placeholder="Avengers, Starwars, The Matrix" />
              <button type="submit">Buscar</button>
            </label>
          </form>
        </header>
        <main>
          <Movies movies={mappedMovies}/>
        </main>
      </div>
    </>
  );
}

export default App;
