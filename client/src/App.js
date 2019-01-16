import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {

  state = {
    isLoaded: false,
  }

  componentDidMount() {
  }

  render () {
    if (!this.state.isLoaded) {
      return (
        <div>Loading .... </div>
      )
    } else {
      console.log(`App loaded`);
    }
    return (
      <Router>

      </Router>
    )
  }
}

export default App;
