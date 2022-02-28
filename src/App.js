import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Project from "./components/Project";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  const [kondisi, setKondisi] = useState("");
  const location = useLocation();

  useEffect(() => {
    setKondisi(location.pathname);
    // console.log(kondisi);
    // console.log(location.pathname);
  }, [location]);
  return (
    <div className="App">
      <Helmet>
        <title> Kun Blog...</title>
      </Helmet>
      <Navbar address={kondisi} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
