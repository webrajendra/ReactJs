import "./App.css";
import Movie from "./components/Movie";
import movies from "./Movies.json";
import Header from "./components/Header";

function App() {
  const login = false;
  return (
    
    <div className="App">
      <Header />
      {
          (()=> {
            if(login) {
              return <h3>Login Successful</h3>
            } else {
              return <h3>Login First</h3>
            }
            
          })()
          
        }
      <ul>
        
        {movies.map((element, i) => {
          return (
            <li key={i}>
              <Movie
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
