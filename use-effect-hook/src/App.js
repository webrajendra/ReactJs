import logo from "./logo.svg";
import "./App.css";

import React, { useState, useEffect } from "react";

function App() {
  const [state, setState] = useState(6);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      let data = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );
      let res = await data.json();
      setData(res);
    }
    getData();
  }, [state]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          <img src={logo} className="App-logo" alt="logo" />{" "}
          <span>useEffect Hook</span>{" "}
          <img src={logo} className="App-logo" alt="logo" />
        </h2>
      </header>
      <div className="apiDataListing">
        <section></section>
        {data.map((element, index) => {
          return (
            <>
              <div className="col" key={index}>
                <div className="userProfilePic">
                  <img src={element.imageUrl} />
                </div>
                <div className="userInfo">
                  <p>ID - {element.id}</p>
                  <p>{element.firstName}</p>
                  <p>{element.lastName}</p>
                  <p>{element.email}</p>
                  <p>{element.contactNumber}</p>
                  <p>{element.age}</p>
                  <p>{element.dob}</p>
                  <p>{element.address}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <button onClick={() => setState(state + 5)}>Add More {state + 4}</button>
    </div>
  );
}

export default App;
