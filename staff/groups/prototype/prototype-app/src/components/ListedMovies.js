import React, { Component } from 'react'
import logic from '../logic'
import MoviesList from './MoviesList'

class ListedMovies extends Component {
    state={movies: [], title: ''}

    componentDidMount = () => {
        switch(this.props.kind){
            case 'trending':
            logic.retrieveTrending()
                .then(movies => { this.setState({ movies, title: 'Trending movies' }) })
            break
            case 'inTheatre':
            logic.retrieveInTheatre()
                .then(movies => { this.setState({ movies, title: 'In theatre movies' }) })
            break
            case 'popular':
            logic.retrievePopular()
                .then(movies => { this.setState({ movies, title: 'Popular movies' }) })
            break
        }
    }

    render() {
        return <div>
            <h3>{this.state.title}</h3>
            <MoviesList movies={this.state.movies} />
        </div>
    }
}

export default ListedMovies