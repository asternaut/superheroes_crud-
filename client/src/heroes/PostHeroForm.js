import React from 'react';

const PostHeroForm = (props) => (
    <div className="post-form">
      <form onSubmit={(event) => props.handleSubmit(event)}>
        <input onChange={(event) => props.updateName(event)} type="text" placeholder="hero name"/>
        <input onChange={(event) => props.updateSuperpower(event)} type="text" placeholder="description"/>
        <input onChange={(event) => props.updateImage(event)} type="text" placeholder="image URL"/>
        <button type="submit"> post </button>
      </form>
    </div>
  )

export default PostHeroForm;
