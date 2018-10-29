import React, { Component } from 'react'
import Card from './Card'
import logic from '../logic'
import SearchBar from './SearchBar'
import ButtonBar from './ButtonBar'

class SearchCategories extends Component {
    state = {
        movies: [],
        error: null,
    }

    componentDidMount() {
        this.searchMoviesByCategories(this.props.query)
    }

    componentWillReceiveProps(props) {
        this.searchMoviesByCategories(props.query)
    }

    searchMoviesByCategories(query) {
        try {
            logic.searchMoviesByCategories(query)
                .then(movies => this.setState({ movies }))
                .catch(err => this.setState({ error: err.message }))
        }
        catch (err) {
            this.setState({ error: err.message })
        }
    }

    render() {
        return <div className="contain">
         <SearchBar />
         <ButtonBar/>

        <div className="row">
        <h4>Category selected:</h4>
            <div className="row__inner">

                {this.state.movies.map((film) => { return <Card title={film.title} description={film.overview} release={film.release_date} imgRoute={film.poster_path} id={film.id} key={film.id} onCardClick={this.handleCardClick} />
                    
                })}
            </div>
        </div>
        </div>
    }
}

export default SearchCategories