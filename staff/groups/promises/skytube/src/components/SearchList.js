import React from 'react'
import Video from './Video'

function SearchList(props) {
    return <section className="searchlist">
        {props.videos && props.videos.length > 0 && (
            props.videos.map(video => {
                return <Video key={video.id} video={video} onClick={props.onVideoClick}/>
            })
        )}
    </section>
}

export default SearchList
