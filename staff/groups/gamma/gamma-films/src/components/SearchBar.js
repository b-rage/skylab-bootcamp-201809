import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'

class SearchBar extends Component {
    
    state = {
        query: '',
        error: '',
        movies: []
    }

    handleQueryChange = event => {

        const query = event.target.value

        this.setState({ query })
    }
    handleSubmit = event => {

        event.preventDefault()

        const query = this.state.query

        if(query != '') this.props.history.push(`/search/${query}`)
    }

    verResultados = event => {
        event.preventDefault()
        }

    render() {
        return <form className="form_search" onSubmit={this.handleSubmit}>
            <input className="search-bar" type='text' placeholder='Write a title...' onChange={this.handleQueryChange}></input>
            <button className="button_search" type='submit'></button>
        </form>
    }
}

export default withRouter(SearchBar)

