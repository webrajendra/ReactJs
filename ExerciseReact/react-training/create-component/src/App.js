import { Button } from '@mui/material';
import './App.css';
import UserInput from './components/UserInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserInput type="email" placeholder="Enter your email" inputClass="textInput" ErrorMsg="Enter valid email" />
        <UserInput type="password" placeholder="Enter password" inputClass="textInput"/>
        <Button variant="contained">Submit</Button>
      </header>
    </div>
  );
}

export default App;
