import React from 'react';

const NotesList = (props) => {
  return(
    <div>
      <h3> Comments </h3>
      <div>
        {props.notes.map((item, index) => (
          <div key={index}>
            <div> {item.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotesList
