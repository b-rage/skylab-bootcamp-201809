import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Search extends Component {
  state = {
    query: ''
  }

  handleChange = event => {
    this.setState({ query: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    
    const query = this.state.query.replace(/\s/g, '+')
    this.props.history.push(`/search/${query}`)
  }

  render() {
    return (
      <section className="slide">
        <div className="container">
          <div className="row">
            <img className="img-fluid" src={require("../img/front.png")} alt="collage" />
            <div className="search">
              <h2>Search, save, vote <br /> and more</h2>
              <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} placeholder="Write a movie..." spellCheck="false" />
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default withRouter(Search)