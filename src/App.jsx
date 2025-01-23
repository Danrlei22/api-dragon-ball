import { useEffect, useState } from 'react';

import NavBar  from './components/NavBar';
import Sides from './components/sides';
import fundoDia from './assets/fundoDia.jpg';
import fundoNoite from './assets/fundoNoite.jpg';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.style.backgroundImage = theme === "light" ? `url(${fundoDia})` : `url(${fundoNoite})`;

    document.body.style.transition = "background-image 2s linear";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "repeat";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <NavBar toggleTheme={toggleTheme} theme={theme}/>
      <Sides theme={theme}/>
      <Footer />
    </>
  )
}

export default App
