import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Leo9Homepage from './components/Landingpage';
import './App.css'

const App = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Leo9Homepage theme={theme} />
    </>
  );
};

export default App;
