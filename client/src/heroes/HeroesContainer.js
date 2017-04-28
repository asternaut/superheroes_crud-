import React, { Component } from 'react';
import $ from 'jquery'
import HeroList from './herolist'


//Initialize empty state for heroes
//Create a function to pull heroes from DB
//Call function when comp mounts
//Use new data to update state
//Render component to display data
class HeroesContainer extends Component {
  state= {
    heroes: undefined
  }

  componentDidMount= () => this.loadHeroes()
  loadHeroes(){
    $.ajax({
      url:'/api/superheroes',
      method: 'GET'
    }).done((response) => {
      console.log(response.data);
      this.setState({ heroes: response.data })
    });
  }

  render() {
    return (
      <div>
        { this.state.heroes ? <HeroList heroes={ this.state.heroes } /> : <p> nothing here 😞 </p> }
      </div>
    );
  }
}

export default HeroesContainer;
