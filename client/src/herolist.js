import React, { Component } from 'react';

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
    <p> {props.name} </p>
    <p> {props.superpower} </p>
    <p> {props.universe} </p>
    <p> {props.evil} </p>
  </div>

export default HeroList
