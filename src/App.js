import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationMenu from './Navigation-Menu/Navigation-Menu.js'
import './App.css';

function App() {
  return (
      <Router>
        <div className='Navigation'>
        {/* Render Navigation Menu */}
          <NavigationMenu />  
          <Switch>
            {/* Define Routes */}

          </Switch>
        </div>
      </Router>
  );
}

export default App;
