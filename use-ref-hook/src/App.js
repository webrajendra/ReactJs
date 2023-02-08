import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const inputField = useRef();

  const formHandler = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    inputField.current = input; //comment this to check focus on button click
    // console.log(inputField);
  }, [input]);

  const focusHandler = () => {
    inputField.current.focus();
  };


  return (
    <div className="App">
      <header className="App-header">
        <h2>useRef Hook</h2>
      </header>
      <input ref={inputField} value={input} type={"text"} onChange={formHandler} />
      <p>Prev State was - {inputField.current} </p>
      <button onClick={focusHandler}>Button</button>
    </div>
  );
}

export default App;
