import "./App.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
function App(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([
      ...data, //Keep remaining data and add new data as well in same object
      {
        name,
        email,
      },
    ]);
    // to blank input fields after data submit
    setName("");
    setEmail("");
  };

  const removeHandler = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Add Record</h2>
      </header>
      <Stack spacing={2} direction="row">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <Button onClick={addData} variant="contained">
          <AddIcon />
        </Button>
      </Stack>
      {/* Mapping submitted data  */}
      <div className="dataHeader">
        <ul>
          <li>Name</li>
          <li>Email</li>
          <li>Remove</li>
        </ul>
      </div>
      {data.map((element, index) => {
        return (
          <div className="dataListRow" key={index}>
            <ul>
              <li>{element.name}</li>
              <li>{element.email}</li>
              <li>
                <Button
                  onClick={removeHandler}
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default App;
