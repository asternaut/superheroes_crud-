import React from 'react';
import {Link} from 'react-router';

const HeroList = (props) => {
  return(
  <div>
    {props.heroes.map((item, index) => {
      return(
        <HeroCard key={index} {...item} submitNote = {props.submitNote} updateText = {props.updateText}/>
      )})
    }
  </div>
  )
}

const HeroCard = props =>
  <div className = "hero-card">
    <img src={props.img} />
    <h3> {props.name} </h3>
    <p> {props.superpower} </p>
    <p> {props.universe} </p>
    <p> {props.evil} </p>
    <Link to={`/heroes/edit/${props._id}`}>Edit</Link>

    <form className="post-form">
      <input type="text" placeholder="add comments here" onChange={(event) => props.updateText(event)}/>
      <button type="submit" onClick={(event) => props.submitNote(event, props._id) }> comment </button>
    </form>

    <p> {props.notes}</p>

  </div>

export default HeroList;
