import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Search from './pages/Search'
import Saved from './pages/Saved'
import NoMatch from './pages/NoMatch'
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
      return (
        <div>
          <Navbar />
          <Jumbotron />
          <Router>
            <Switch>
              <Route exact path='/' component={ Search } />
              <Route exact path='/search' component={ Search } />
              <Route exact path='/saved' component={ Saved } />
              <Route component={ NoMatch } />
            </Switch>
          </Router>
        </div>
      )
    }
  }
}

export default App;
