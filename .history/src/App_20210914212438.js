import React from 'react'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <Sidebar />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
