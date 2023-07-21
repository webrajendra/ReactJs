import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Inc, Dec, Add } from './states/reducers';

function App() {
  const curState = useSelector((state) => (state.counter));
  const dispatch = useDispatch();
  return (
    <div className="App">
       <h1>{curState}</h1>
       <button onClick={()=>dispatch(Inc())}>Inc</button>
       <button onClick={()=>dispatch(Dec())}>Dec</button>
       <button onClick={()=>dispatch(Add(20))}>Add by 20</button>
    </div>
  );
}

export default App;
