import React, { Component } from 'react'
import logic from '../logic'
import SearchBar from './SearchBar'


class GenresTags extends Component {


    searchQueryOnHome=()=>{
        this.props.handleMovieCardQuery(this.props.id)
    }

    render() {
        return <button className="tags" onClick={this.searchQueryOnHome}>{this.props.name} </button>

    }
}
    export default GenresTags