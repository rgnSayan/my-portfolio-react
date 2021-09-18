import React, { useState } from 'react'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import './App.css';

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="app">
      {open ?
        <div>
          <CloseIcon />
          <Sidebar />
        </div>
        :
        <div>
          <MenuIcon onClick={() => setOpen(!open)} style={{ color: 'orange', fontSize: '2rem' }} />
          <Home />
        </div>
      }
    </div>
  );
}

export default App;
