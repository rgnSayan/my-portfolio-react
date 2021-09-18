import React from 'react'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
