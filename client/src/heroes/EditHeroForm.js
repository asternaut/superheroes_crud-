import React from 'react';
import EditHeroContainer from './EditHeroForm';

const HeroForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>Name</label>
        <input type="text" value={props.name} placeholder="name" onChange ={(event) => props.updateField('name', event.target.value)}/>
        <label>Description</label>
        <input type="text" value={props.superpowers} placeholder="description"/>
        <label>Image</label>
        <input type="text" value={props.img} placeholder="paste image URL here" onChange ={(event) => props.updateField('img', event.target.value)}/>

        <div className="col-md-12">
         <div className="row">
           <div className="powerList">{
             props.superpowers.map((power,index) =>
               <h3 key={index}>{power}</h3>
             )
           }
           </div>
           <input type="text" placeholder="Pleasue enter hero power." onChange={(event) => props.updateField("newPower",event.target.value)}/>
         </div>
         <div className="row">
         <button onClick={(event) => props.updatePowers(event)} className="btn btn-default">Add Power +</button>
         <button onClick={(event) => props.removePower(event)} className="btn btn-default">Remove Power -</button>
         </div>
        </div>

        <button type="submit"> update </button>
      </form>
    </div>
  )
}

export default HeroForm;
