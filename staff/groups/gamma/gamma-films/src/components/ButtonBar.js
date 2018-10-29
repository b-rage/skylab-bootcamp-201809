import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'

class ButtonBar extends Component {
state = {
    query: '',
    error: '',
    movies: []
}

handleQueryChange = event => {

    
    this.setState({query: event.target.value});
}
handleSubmit = event => {

    event.preventDefault()

    const query = this.state.query
    
    if (query!='') this.props.history.push(`/categories/${query}`)
}

verResultados = event => {
    event.preventDefault()
}

render() {
    return <div className="dropdown">
            <form className="form_search" onSubmit={this.handleSubmit}>
            <select className="select_cat" onChange={this.handleQueryChange}>
                <option type='text' >Select...</option>
                <option type='button' value="28" onClick={this.handleQueryChange}>Action</option>
                <option type='button' value="12" onClick={this.handleQueryChange}>Adventure</option>
                <option type='button' value="16" onClick={this.handleQueryChange}>Animation</option>
                <option type='button' value="35" onClick={this.handleQueryChange}>Comedy</option>
                <option type='button' value="80" onClick={this.handleQueryChange}>Crime</option>
                <option type='button' value="99" onClick={this.handleQueryChange}>Documentary</option>
                <option type='button' value="10751" onClick={this.handleQueryChange}>Family</option>
                <option type='button' value="14" onClick={this.handleQueryChange}>Fantasy</option>
                <option type='button' value="36" onClick={this.handleQueryChange}>History</option>
                <option type='button' value="27" onClick={this.handleQueryChange}>Horror</option>
                <option type='button' value="10402" onClick={this.handleQueryChange}>Music</option>
                <option type='button' value="9648" onClick={this.handleQueryChange}>Mistery</option>
                <option type='button' value="10749" onClick={this.handleQueryChange}>Romance</option>
                <option type='button' value="878" onClick={this.handleQueryChange}>Science Fiction</option>
                <option type='button' value="10770" onClick={this.handleQueryChange}>TV Movie</option>
                <option type='button' value="53" onClick={this.handleQueryChange}>Thriller</option>
                <option type='button' value="10752" onClick={this.handleQueryChange}>War</option>
                <option type='button' value="37" onClick={this.handleQueryChange}>Western</option>
            </select>
            <button className="button_search2" type='submit'></button>
            </form>
        </div>
    }
}

export default withRouter(ButtonBar)