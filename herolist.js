import React, { Component } from 'react';

const XPannel = (props) => {
  return(
    <div>
      <span>{props.name}</span>
      <p>{props.superpower}</p>
      <span>{props.universe}</span>
      <span>{props.evil}</span>
      <img src={props.img}/>
    </div>
  )
}
