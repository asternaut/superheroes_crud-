import React, { Component } from 'react';
import PostHeroForm from './PostHeroForm';
import { browserHistory } from 'react-router';
import $ from 'jquery';

class PostContainer extends Component {
  state = {
    name: undefined,
    superpower: undefined,
    img: undefined
  }

  handleSubmit = this.handleSubmit.bind(this);

  handleSubmit(event){
    event.preventDefault()
    console.log(this.state.name, this.state.superpower, this.state.img);
    const hero={
      name: this.state.name,
      superpower: this.state.superpower,
      img: this.state.img
    }
    $.ajax({
      url:'/api/superheroes',
      method: 'POST',
      data: hero
    }).done((response) => {
      console.log(response);
      browserHistory.push('/heroes')})
  }

  updateField = this.updateField.bind(this);
  updateField(fieldName, fieldValue) {
    const newState= {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }
//above replaces below? I think
  updateName = (event) => this.setState({name: event.target.value})
  updateSuperpower = (event) => this.setState({superpower: event.target.value})
  updateImage = (event) => this.setState({img: event.target.value})

  render () {
    return(
      <div className="contain">
        <h1> Put your pup up for adoption </h1>
        <PostHeroForm
        updateField={this.updateField}
        handleSubmit={this.handleSubmit}
        updateName={this.updateName}
        updateSuperpower={this.updateSuperpower}
        updateImage={this.updateImage}/>
      </div>
    )
  }
}

export default PostContainer;
