import "./App.css";
import React, { useState, useEffect } from "react";

import { TailSpin } from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const res = await fetch(
        "https://hub.dummyapis.com/employee?noofRecords=100&idStarts=1001"
      );
      const finalRes = await res.json();
      setData(finalRes);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header"> <h1> NPM Packages - Spinner / Loader </h1></header>
      <ul>
        {loading ? (
          <TailSpin />
        ) : (
          data.map((e, i) => {
            return <li key={i}>{e.email}</li>;
          })
        )}
      </ul>
    </div>
  );
}

export default App;
