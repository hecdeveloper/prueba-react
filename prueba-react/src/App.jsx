import "./App.css";
import responseMovies from "./mocks/results-response.json";
import noResults from "./mocks/noresults.json";

function App() {
  const movies = responseMovies.Search;
  const hasMovies = movies?.length > 0;
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
          {hasMovies ? (
            <ul>
              {movies.map((movie) => (
                <li key={movie.Title}>
                  <h3>{movie.Title}</h3>
                  <p>
                    {movie.Year}
                    <img src={movie.Poster} alt={movie.Title} />
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No se encontraron peliculas</p>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
