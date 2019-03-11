import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import axios from 'axios';

class RandomBeer extends Component {

    state = {
        beer: {}
    }

    componentDidMount() {
        axios.get("https://ironbeer-api.herokuapp.com/beers/random")
        .then(response => {
            this.setState({ 
                beer: response.data[0]
            })
        })
    }

    render(){
        return (<div class="container">
                    <div class="row">
                        <div className="col-lg-3 eachBeer">
                            <img src={this.state.beer.image_url} className="beerPicture"></img>
                            <b><h3>{this.state.beer.name}</h3></b>
                            <h6>{this.state.beer.tagline}</h6>
                            <p>Created by: {this.state.beer.contributed_by}</p>
                        </div>
                    </div>
                </div>)
    }

}

export default RandomBeer;