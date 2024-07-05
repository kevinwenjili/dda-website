import React, { useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import ScrollReset from "./components/ScrollReset";
import Home from "./components/Pages/Home";
import Projects from "./components/Pages/Projects";
import About from "./components/Pages/About";
import Team from "./components/Pages/Team";

function HashScroll() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
}

const App: React.FC = () => {
  return (
    // <Router basename="/dda-website">
    <Router>
      <HashScroll />
      <ScrollReset />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
};

export default App;
