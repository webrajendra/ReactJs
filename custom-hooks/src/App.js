import './App.css';
import useFetch from './components/useFetch';

function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users")
  return (
    <div className="App">
      <header className="App-header">
        <h1>Custom Hooks</h1> 
      </header>
        <ul>
          {
        data.map((e,i) => {          
          return (
            <li  key={i}>
              <p>{e.name}</p>
              <p>{e.username}</p>
              </li>
            )
        })
        
      }
      </ul>
    </div>
  );
}

export default App;
