import "./App.css";
import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const decrementHandler = () => {
    setNumber(number - 1);
  };

  const incrementHandler = () => {
    setNumber(number + 1);
  };

  return (
    <div className="App">
      <header className="appHeader">
        <h2>Counter App using useState Hook</h2>
      </header>
      <div className="counterWrap">
        <h3>{number}</h3>
        <button onClick={decrementHandler}> - Decrement</button>
        <button onClick={incrementHandler}> + Increment</button>
      </div>
    </div>
  );
}

export default App;
