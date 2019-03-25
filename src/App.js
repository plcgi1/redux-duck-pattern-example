import React, { Component } from 'react'
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import HomeContainer from './app/home/HomeContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={HomeContainer} />
          <Route path='/home' component={HomeContainer} />
          {/* Add all your remaining routes here, like /trending, /about, etc. */}
        </div>
      </Router>
    );
  }
}

export default App;
