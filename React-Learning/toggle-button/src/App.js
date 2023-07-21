import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [btnState, setBtnState] = useState('ON');

  // // let currValue = "ON";
  // useEffect (() => {
  //   // const toggleHandler = () => {
  //     setInterval(()=> {
  //       setBtnState('OFF')
  //     }, 2000)
      
  //   // }
  // }) 
  return (
    <div className="App">
       <button onClick={()=> setBtnState(btnState ? 'ON' : 'OFF')}>{btnState}</button>
    </div>
  );
}

export default App;
