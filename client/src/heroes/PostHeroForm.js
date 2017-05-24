import React from 'react';

const PostHeroForm = (props) => (
    <div className="post-form">
      <form onSubmit={(event) => props.handleSubmit(event)}>
        <input onChange={(event) => props.updateName(event)} type="text" placeholder="hero name"/>
        <input onChange={(event) => props.updateSuperpower(event)} type="text" placeholder="description"/>
        <input onChange={(event) => props.updateImg(event)} type="text" placeholder="image URL"/>
        <input onChange={(event) => props.updateUniverse(event)} type="text" placeholder="universe"/>
        <input onChange={(event) => props.updateEvil(event)} type="text" placeholder="evil? true or false"/>
        <button type="submit"> post </button>
      </form>
    </div>
  )

export default PostHeroForm;
