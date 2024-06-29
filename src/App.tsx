import React from "react";
// import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import ScrollReset from "./components/ScrollReset";
import Home from "./components/Pages/Home";
import Projects from "./components/Pages/Projects";
import About from "./components/Pages/About"

const App: React.FC = () => {
  return (
    // <Router basename="/dda-website">
    <Router>
      <ScrollReset />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </Router>
  );
};

export default App;
