import "./App.css";
import { useReducer } from "react";

function App() {
  const reducer = (state, action) => {
    if (action.type === "INC") {
      return state + 2;
    }
    if (action.type === "DEC") {
      return state - 2;
    }
    if (action.type === "MUL") {
      return state * 2;
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div className="App">
      <header className="App-header">
        <h2>useReducer Hook</h2>
      </header>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "INC" })}>Increament</button>
      <button onClick={() => dispatch({ type: "DEC" })}>Decreament</button>
      <button onClick={() => dispatch({ type: "MUL" })}>Multiply</button>
    </div>
  );
}

export default App;
