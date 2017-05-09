import React, { Component } from 'react';
import EditVillainForm from './EditVillainForm';
import $ from 'jquery';

class EditVillainContainer extends Component{
  state={
    isFetching: true,
    name: undefined,
    superpowers: undefined,
    img: undefined,
    newPower: undefined
  }


  componentDidMount = () => this.loadVillain();

  handleSubmit=this.handleSubmit.bind(this);
  updateField=this.updateField.bind(this);
  updateField(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }

  loadVillain(){
    $.ajax({
      url:`/api/villains/#{this.props.params.villainId}`,
      method: 'Get'
    }).done(data => {
      this.setState({
        name:        data.name,
        superpowers: data.superpowers,
        img:         data.img,
        isFetching:  false
      })
    })
  }

  handleSubmit(event){
    event.preventDefault();
    const data = {
      name:        this.state.name,
      superpowers: this.state.superpowers,
      img:         this.state.img
    }
    $.ajax({
      url: `/api/villains/${this.props.params.villainId}`,
      method: 'PUT',
      data: data
    }).done(response => { console.log(response); })
  }

  updatePowers(event){
    event.preventDefault();
    const tempArray = [];
    tempArray.push(this.state.newPower);
    this.setState({ superpowers: tempArray });
    this.setState({ newPower: '' });
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
        { !this.state.isFetching ?
            <EditVillainForm
              handleSubmit={this.handleSubmit}
              updateField={this.updateField}
              updatePowers={(event) => this.updatePowers(event)}
              name={this.state.name}
              superpowers={this.state.superpowers}
              img{this.state.img} /> : <h4> One moment... </h4> }
      </div>
    )
  }
}

export default EditVillainContainer;
