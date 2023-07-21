import { useState } from 'react';
import './App.css';
import Task from './Task';

function App() {
 const [tasks, setTasks] = useState([]);
 const [title, setTitle] = useState('');
 const [description, setDescription] = useState('');
const formHandler = (e) => {
  e.preventDefault();
  setTasks([...tasks,  {
    title, description
  },])
  // console.log(...tasks);
}
const deleteTask = (index) => {
  const filteredArr = tasks.filter((val, i) => {
    return i !== index;
  })
  setTasks(filteredArr);
}
  return (
    <div className="App">
      <h2>To Do App</h2>
      <div className='todoForm'>
        <form onSubmit={formHandler}>
          <input type="text" placeholder='Enter Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
          <textarea placeholder='Enter Description' value={description} onChange={(e)=>setDescription(e.target.value)} />
          <button type='submit'>Submit</button>
        </form>
      </div>
      {tasks.map((item, index)=>{
        return (
        <Task title={item.title} description={item.description} key={index} deleteTask={deleteTask} index={index} />
        )
      })
    }
      
    </div>
  );
}

export default App;
