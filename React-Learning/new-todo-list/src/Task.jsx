import React from 'react'

function Task({title, description, deleteTask, index}) {
  return (
    <div className='task'>
       <p>Title : {title}</p>
       <p>Description : {description}</p>
       <p onClick={()=>deleteTask(index)}>X:</p>
    </div>
  )
}

export default Task