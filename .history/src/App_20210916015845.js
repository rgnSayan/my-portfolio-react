import React from 'react'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import MenuIcon from '@material-ui/icons/Menu'
import './App.css';

function App() {
  return (
    <div className="app">
      <MenuIcon />
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
