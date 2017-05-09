import React, { Component } from 'react';
import EditHeroForm from './EditHeroForm';
import $ from 'jquery';

class EditHeroContainer extends Component{
  state = {
    isFetching: true,
    name: undefined,
    superpowers: undefined,
    img: undefined,
    newPower: undefined
  }

  componentDidMount = () => this.loadHero();

  handleSubmit=this.handleSubmit.bind(this);
  updateField = this.updateField.bind(this);
  updateField(fieldName, fieldValue) {
    const newState= {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }

  loadHero(){
    $.ajax({
      url:`/api/superheroes/${this.props.params.heroId}`,
      method: 'GET'
    }).done(data =>{
      this.setState({
        name:        data.name,
        superpowers: data.superpowers,
        img:         data.img,
        isFetching:  false })
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      name:        this.state.name,
      superpowers: this.state.superpowers,
      img:         this.state.img,
    }
    $.ajax({
      url:`/api/superheroes/${this.props.params.heroId}`,
      method: 'PUT',
      data: data
    }).done(response => { console.log(response); })
  }

  updatePowers(event){
    event.preventDefault();
    const tempArray = [];
    tempArray.push(this.state.newPower);
    this.setState({superpowers: tempArray});
    this.setState({ newPower: ''});
    console.log(this.state.superpowers);
  }

  removePower(event){
    event.preventDefault();
    let tempArray = this.state.superpowers;
    tempArray = tempArray.length > 0 ? tempArray.splice(-1) : tempArray;
    console.log(tempArray);
    this.setState({ superpowers: tempArray });
    console.log(this.state.superpowers);

  }

  render(){
    return(
      <div className="contain">
        <h1> Update A Pet </h1>
        <h3> Editing: <em> { this.state.name } </em> </h3>
        { !this.state.isFetching ?
          <EditHeroForm
          handleSubmit={this.handleSubmit}
          updateField={this.updateField}
          updatePowers={(event)=> this.updatePowers(event)}
          name={this.state.name}
          superpowers={this.state.superpowers}
          img={this.state.img} /> : <h4> One moment... </h4> }
      </div>
    )
  }
}

export default EditHeroContainer;
