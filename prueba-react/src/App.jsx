import "./App.css";
import responseMovies from "./mocks/results-response.json";
import noResults from "./mocks/noresults.json";
import { ListOfMovies } from "./components/Movies";

function App() {
  const movies = responseMovies.Search;
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
          <ListOfMovies movies={movies}/>
        </main>
      </div>
    </>
  );
}

export default App;
