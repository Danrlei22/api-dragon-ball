import { useEffect, useState } from 'react';

import NavBar  from './components/NavBar';


function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#FFF" : "#000";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <NavBar toggleTheme={toggleTheme} theme={theme}/>
    </>
  )
}

export default App
