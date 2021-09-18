import React, { useState } from 'react'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import './App.css';

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="app">
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
