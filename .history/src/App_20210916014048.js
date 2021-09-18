import React, { useState } from 'react'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import MenuIcon from './Components/Menu'
import './App.css';

function App() {
  return (
    <div className="app">

      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
