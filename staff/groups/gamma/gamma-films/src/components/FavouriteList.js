import React, { Component } from 'react'
import logic from '../logic'
import MiniCard from './MiniCard'


class FavouriteList extends Component {
    state = {
        error: '',
        movies: [],
        flag: true

    }

    handleSearch = this.handleSearch.bind(this)

    handleSearch(date) {
        try {
            logic.searchPopularMovies(date)
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
            {this.state.flag && this.handleSearch("week")}
            <div className="row">
                <h4>Popular movies</h4>
                <div className="row__inner">
                    {this.state.movies.map((film, index) => {
                        return <MiniCard title={film.title} description={film.overview} release={film.release_date} imgRoute={film.poster_path} id={film.id} onCardClick={this.handleCardClick} key={film.id}/>
                    })}
                </div>
            </div>
        </div>

    }
}

export default FavouriteList