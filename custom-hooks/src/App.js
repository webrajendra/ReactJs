import "./App.css";
import useFetch from "./components/useFetch";
import useRandomColor from "./components/useRandomColor";

function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");
  const { color, changeColor } = useRandomColor();
  return (
    <div
      className="App"
      style={{ width: "100vw", height: "100vh", backgroundColor: "#" + color }}
    >
      <header className="App-header">
        <h1>Custom Hooks</h1>
      </header>
      <button onClick={changeColor}>Click to Change Background Color</button>
      <ul>
        {data.map((e, i) => {
          return (
            <li key={i}>
              <p>{e.name}</p>
              <p>{e.username}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
