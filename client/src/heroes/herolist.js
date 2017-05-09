import React from 'react';
import {Link} from 'react-router';

const HeroList = (props) => {
  return(
  <div>
    {props.heroes.map((item, index) => {
      return(
        <HeroCard key={index} {...item}/>
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
  </div>

export default HeroList;
