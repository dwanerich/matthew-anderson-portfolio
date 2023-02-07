import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Celebrity from "./components/Celebrity";
import Advertising from "./components/Advertising";
import Editorial from "./components/Editorial";
import About from "./components/About";
import Home from "./components/Home";


function App() {
  return (
    <div className="App">
       <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/celebrity" element={<Celebrity />}></Route>
        <Route exact path="/advertising" element={<Advertising />}></Route>
        <Route exact path="/editorial" element={<Editorial />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>

    </div>
  );
}

export default App;
