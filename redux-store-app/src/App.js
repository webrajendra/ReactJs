import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Inc, Dec } from './states/reducers';

function App() {
  const curState = useSelector((state) => (state.counter));
  const dispatch = useDispatch();
  return (
    <div className="App">
       <h1>{curState}</h1>
       <button onClick={()=>dispatch(Inc(10))}>Inc</button>
       <button onClick={()=>dispatch(Dec(5))}>Dec</button>
    </div>
  );
}

export default App;
