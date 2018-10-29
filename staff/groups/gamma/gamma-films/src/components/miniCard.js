import React, { Component } from 'react'
import { Link } from 'react-router-dom'


function MiniCard(props) {

    return <div className="tile"  >
        <div className="tile__media">
            <Link to={`/movie/${props.id}`}><img className="tile__img" src={'https://image.tmdb.org/t/p/w500/' + props.imgRoute} /></Link>
        </div>
    </div>
}
export default MiniCard