import React, { Component } from 'react'
import logic from '../logic'
import MiniCard from './MiniCard'

class NowPlaying extends Component {
    state = {
        error: '',
        movies: [],
        flag: true

    }

    getNowPlaying = this.getNowPlaying.bind(this)

    getNowPlaying() {
        try {
            logic.searcNowPlaying()
                .then(movies => this.setState({ movies }))
                .catch(err => this.setState({ error: err.message }))
        }
        catch (err) {
            this.setState({ error: err.message })
        }
        this.setState({ flag: false })
    }


    render() {
        return <div className="contain">
            {this.state.flag && this.getNowPlaying()}
            <div className="row">
                <h4>Now Playing</h4>
                <div className="row__inner">
                    {this.state.movies.map((film, index) => {
                        return <MiniCard title={film.title} description={film.overview} release={film.release_date} imgRoute={film.poster_path} id={film.id} onCardClick={this.handleCardClick} key={film.id}/>
                    })}
                </div>
            </div>
        </div>

    }
}

export default NowPlaying