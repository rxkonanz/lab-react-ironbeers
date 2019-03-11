import React, { Component } from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import axios from 'axios';

class App extends Component {

  componentDidMount(){
    axios.get("https://ironbeer-api.herokuapp.com/beers/all")
  }

  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path='/beers' component={AllBeers}/>
            <Route exact path='/random-beer' component={RandomBeer}/>
          </Switch>
      </div>
    );
  }
}

export default App;
