import { createContext, useState } from "react";
import "./App.css";
import CompA from "./components/CompA";

const AppState = createContext();

function App() {
  const [data, setData] = useState('Data from App Comp');
  return (
    <AppState.Provider value={data}>
      <div className="App">
        <div className="App-header">
          <h2>Use context hook</h2>
        </div>
        {/* If we have many components and we want to pass any props / data directly
        into particular components then we can't pass the data directly using
        props - props drilling concept is not good for that so we are using next
        concept that is context api / usecontext hook. */}
        {/* If we pass the data using props then we have to pass data from every props i.e. if we want to pass data from CompA to CompC, then we have to pass CompA to CompB then CompB to Comp C like this */}
        <CompA />
      </div>
    </AppState.Provider>
  );
}

export default App;
export {AppState};