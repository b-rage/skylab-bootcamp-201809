import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Card extends Component {
    render() {
        return <div className="tile">
            <div className="tile__media">
                <Link to={`/movie/${this.props.id}`}><img className="tile__img" src={'https://image.tmdb.org/t/p/w500/' + this.props.imgRoute} /></Link>
            </div>
        </div>



    }
}

export default Card