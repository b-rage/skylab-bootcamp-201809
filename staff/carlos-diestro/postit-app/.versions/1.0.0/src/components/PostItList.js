import React from 'react'
import PostItText from './PostItText'

const PostItList = props => {
  const handleRemoveItem = (id) => {
    props.onRemoveItem(id)
  }

  return (
    <div className="post-it my-3">
      <div className="row">
        {props.items.map((item) => (
          <PostItText id={item.id} text={item.text} key={item.id} onRemoveItem={handleRemoveItem} />
        ))}
      </div>
    </div>
  )
}

export default PostItList