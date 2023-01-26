import "./App.css";
import Movie from "./components/Movie";
import movies from "./Movies.json";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <ul>
        {movies.map((element, i) => {
          return (
            <li>
              <Movie
                key={i}
                title={element.Title}
                year={element.Year}
                rating={element.imdbID}
                poster={element.Poster}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
