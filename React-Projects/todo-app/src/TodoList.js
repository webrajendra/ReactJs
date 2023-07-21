import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const TodoList = () => {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);

  function addActivity() {
    setlistData((listData) => {
      const updatedActivityList = [...listData, activity];
      setActivity("");
      return updatedActivityList;
    });
  }
  function removeActivity (i) {
    const updatedListData = listData.filter((el,id)=> {
        return i!=id;
    })
    setlistData(updatedListData)
  }
  function removeAll () {
    return setlistData([]);
  }
  return (
    <div className="App">
      <div className="headerWrap">
        <h2>TODO APP</h2>
      </div>
      <div className="formWrap">
        <TextField
          id="standard-basic"
          label="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <Button variant="contained" onClick={addActivity} color="secondary">
          Add
        </Button>
      </div>
      <div className="container">
        <div className="todoListing">
          <h2>Activity List</h2>
          <ul>
            {listData != [] &&
              listData.map((data, i) => {
                return (
                  <>
                    <li key={i}>{data} <button className="removeSingle" onClick={()=>removeActivity(i)}>X</button> </li>
                  </>
                );
              })}
              {listData.length >= 1 && 
                <button className="removeAll" onClick={removeAll}>Remove All X</button>
                }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
