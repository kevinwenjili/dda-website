import React from "react";
// import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useLayoutEffect } from "react";

import ScrollReset from "./components/ScrollReset";
import Home from "./components/Pages/Home";
import Projects from "./components/Pages/Projects";



const App: React.FC = () => {
  return (
    // <Router basename="/dda-website">
    <Router>
      <ScrollReset />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
    </Router>
  );
};

export default App;
