import React, { useState } from 'react'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import './App.css';

function App() {
  const [open, setOpen] = useState(true)
  return (
    <div className="app">
      {open ? <Sidebar /> : <MenuIcon />}
      <Home />
    </div>
  );
}

export default App;
