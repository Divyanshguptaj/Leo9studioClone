import React, { useState } from "react";
import "./App.css";
import Navbar from './components/Navbar'
import Leo9Homepage from "./components/landingpage";
// import Hero from './components/Hero'

function App() {
  return (
    <div>
      <Navbar/>
      <Leo9Homepage/>
      {/* <Navbar/> */}
      {/* <Hero/> */}
    </div>
  );
}

export default App;
