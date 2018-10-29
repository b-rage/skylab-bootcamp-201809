import React from 'react'

const Post = (props) => {
    console.log('Post', '"render"')

    return (
        <div>
            <article className="post"><p>{props.text}</p>
                <button onClick={() => props.onDeletePost(props.id)}><i className="far fa-trash-alt"></i></button>
            </article>
        </div>
    )
}

export default Post