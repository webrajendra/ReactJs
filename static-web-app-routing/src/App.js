import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Error from "./components/Error";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div className="container">
            <Navigation />
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
