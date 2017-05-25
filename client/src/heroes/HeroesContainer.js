import React, { Component } from 'react';
import $ from 'jquery'
import HeroList from './HeroList'


//Initialize empty state for heroes
//Create a function to pull heroes from DB
//Call function when comp mounts
//Use new data to update state
//Render component to display data
class HeroesContainer extends Component {
  state= {
    heroes: undefined,
    text: undefined,
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

  updateText = (event) => this.setState({text: event.target.value})

  submitNote = this.submitNote.bind(this);

  submitNote(event, _id){
    event.preventDefault();
    if(!this.state.text || this.state.text.length < 1){
      alert( "this field is empty!" )
      return
    }
    let note = {content: this.state.text}
    $.ajax({
      url: `api/superheroes/note/${_id}`,
      method: 'POST',
      data: note,
    }).done((response) => this.loadHeroes )
  }

  render() {
    return (
      <div className="contain hero-container">
        { this.state.heroes ? <HeroList heroes={ this.state.heroes } updateText={this.updateText} submitNote={ this.submitNote }/> : <p> nothing here 😞 </p> }
      </div>
    );
  }
}

export default HeroesContainer;
