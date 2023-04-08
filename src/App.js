import React from "react";
import { BrowserRouter, Routes,  Route} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Navbar from "./components/inc/Navbar";
import './Style.css';
import Footer from "./components/inc/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
