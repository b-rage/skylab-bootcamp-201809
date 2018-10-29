import React from 'react'

function Video(props) {
    return <article className="video" onClick={() => props.onClick(props.video)}>
        <img className="video__image" src={props.video.thumbnail} alt="thumbnail"></img>
        <h2 className="video__title">{props.video.title}</h2>
    </article>
}

export default Video
