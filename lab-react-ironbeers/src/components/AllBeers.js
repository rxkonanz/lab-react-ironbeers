import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import axios from 'axios';

class AllBeers extends Component {

    state = {
        beers: []
    }

    displayBeers = () => {
        let list = this.state.beers.map((beer,i) => {
            return <div className="col-lg-3 eachBeer">
                        <img src={beer.image_url} className="beerPicture"></img>
                        <b><h3>{beer.name}</h3></b>
                        <h6>{beer.tagline}</h6>
                        <p>Created by: {beer.contributed_by}</p>
                    </div>
        })
        return list;
    }
    
    componentDidMount() {
        axios.get("https://ironbeer-api.herokuapp.com/beers/all")
        .then(response => {
            this.setState({ beers: response.data })
        })
    }

    render(){
        return (<div class="container">
                    <div class="row">
                        {this.displayBeers()}
                    </div>
                </div>)
    }
    

}

export default AllBeers;