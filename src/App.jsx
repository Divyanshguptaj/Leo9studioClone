import React, { useState } from "react";
import "./App.css";
import Navbar from './components/Navbar'
import Leo9Homepage from "./components/landingpage";
// import Hero from './components/Hero'

function App() {
  // 'light' or 'dark'
  const [theme, setTheme] = useState('light'); 

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <Navbar toggleTheme={toggleTheme} />
      <Leo9Homepage theme={theme} />
      {/* <Navbar/> */}
      {/* <Hero/> */}
    </div>
  );
}

export default App;
