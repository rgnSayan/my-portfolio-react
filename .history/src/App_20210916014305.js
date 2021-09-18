import React, { useState } from 'react'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import MenuIcon from '@material-ui/icons/Menu'
import './App.css';

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="app">
      {open ? <Sidebar /> :
        <div>
          <MenuIcon />
          <Home />
        </div>
      }
    </div>
  );
}

export default App;
