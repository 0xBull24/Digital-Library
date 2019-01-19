import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import './App.css';

class App extends Component {

  state = {
    isLoaded: false,
  }

  componentDidMount() {
    this.setState( {
      isLoaded: true
    });
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
      <Navbar />
    )
  }
}

export default App;
