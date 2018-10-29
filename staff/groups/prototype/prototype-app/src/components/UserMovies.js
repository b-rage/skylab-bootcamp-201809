import React, { Component } from 'react'
import logic from '../logic'
import MoviesList from './MoviesList'

class UserMovies extends Component {
    render() {
      return <section className="list-movies">
        { logic._user.pending.length !== 0 ? <div className="container">
          <div className="row">
            <h4 className="font-weight-bold my-4">Pending movies</h4>
          </div>
          <div className="row">
            <MoviesList movies={logic._user.pending} />
          </div>
        </div> : <div className="container"><div className="row"><h4 className="font-weight-bold my-4">You don't have any movie in your Waiting list</h4></div></div> }
        { logic._user.seen.length !== 0 ? <div className="container">
          <div className="row">
            <h4 className="font-weight-bold my-4">Movies seen</h4>
          </div>
          <div className="row">
            <MoviesList movies={logic._user.seen} />
          </div>
        </div> : <div className="container"><div className="row"><h4 className="font-weight-bold my-4">You don't have any movies in the list of movies seen</h4></div></div> }
        </section>
    }
}

export default UserMovies