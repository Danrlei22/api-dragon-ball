import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Characters from "./pages/Characters";
import Home from "./pages/Home";
import Planets from "./pages/Planets";
import About from "./pages/About";
import Transformations from "./pages/Transformations";
import CharacterDetail from "./pages/CharacterDetail";

import NavBar from "./components/NavBar";
import fundoDia from "./assets/fundoDia.jpg";
import fundoNoite from "./assets/fundoNoite.jpg";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.style.backgroundImage =
      theme === "light" ? `url(${fundoDia})` : `url(${fundoNoite})`;
    document.body.style.backgroundColor =
      theme === "light" ? "#b5c7e1" : "#173e4d";
    document.body.style.transition = "background-image 2s linear";
    document.body.style.backgroundSize = "100% auto";
    document.body.style.backgroundPosition = "center top";
    document.body.style.backgroundRepeat = "repeat";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <NavBar toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route exact path="/" element={<Home theme={theme} />} />
        <Route path="/home" element={<Home theme={theme} />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
        <Route path="/transformations" element={<Transformations />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
