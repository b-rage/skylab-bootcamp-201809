import React, { Component } from 'react'
import logic from '../logic'
import { withRouter } from 'react-router-dom'

class MovieDetail extends Component {

  state = { pending: false, seen: false, favourite: false, like: false, unlike: false }

  componentDidMount = () => {
    try {
      logic.retrieveMovie(this.props.id)
        .then(movie => { this.setState({ movie }) })
        .then(() => {

          if (JSON.stringify(logic._user) !== '{}') {

            //Check another way to know if logic._user is an empty object or not

            let indexSeen = logic.checkInList(this.props.id, 'seen')

            let indexPending = logic.checkInList(this.props.id, 'pending')

            if (indexSeen !== -1) {

              let favourite = logic.checkState(this.props.id, 'favourite')
              let like = logic.checkState(this.props.id, 'like')
              let unlike = logic.checkState(this.props.id, 'unlike')

              this.setState({ seen: true, favourite, like, unlike })

              //Why is not working????
            }

            else if (indexPending !== -1) this.setState({ pending: true })
          }
        })
        .catch(error => this.setState({ error: error.message }))

    } catch (error) {
      this.setState({ error: 'something went wrong, try again please' })
    }

  }

  componentWillUnmount = (prevProps, prevState) => {
    // if(prevState.seen !== this.state.seen || prevState.pending !== this.state.pending || prevState.favourite !== this.state.favourite || prevState.like !== this.state.like || prevState.unlike !== this.state.unlike) {
    // if (prevState.seen !== this.state.seen) {

    //Where to put that to guarantee that the warning message disappears? 
    this.setState({ warning: null })
  }

  handleBackClick = event => {
    event.preventDefault()

    this.props.history.goBack()
  }

  handleSeenClick = event => {
    event.preventDefault()
    try {
      const check = logic.seenClick(this.state.movie)

      switch (check) {

        case '00':
          this.setState({ seen: false })
          break
        case '10':
          this.setState({ seen: true, pending: false, warning: null })
          break
        default:
          this.setState({ warning: check })
        //the state changes, but it doesn't call teh render yet
      }
    } catch (error) {
      this.setState({ error: 'something went wrong, try again please' })
    }
  }

  handlePendingClick = event => {
    event.preventDefault()
    try {
      const check = logic.pendingClick(this.state.movie)

      switch (check) {

        case '00':
          this.setState({ pending: false })
          break
        case '01':
          this.setState({ seen: false, pending: true, favourite: false, like: false, unlike: false })
          break
        default:
          this.setState({ warning: check })
      }
    } catch (error) {
      this.setState({ error: 'something went wrong, try again please' })
    }

  }

  handleFavouriteClick = event => {
    event.preventDefault()
    try {
      const check = logic.favouriteClick(this.props.id)

      switch (check) {

        case '0':
          this.setState({ favourite: false })
          break
        case '1':
          this.setState({ favourite: true })
          break
        default:
          this.setState({ warning: check })
      }
    } catch (error) {
      this.setState({ error: 'something went wrong, try again please' })
    }

  }

  handleLikeClick = event => {
    event.preventDefault()
    try {
      const check = logic.likeClick(this.props.id)

      switch (check) {

        case '00':
          this.setState({ like: false })
          break
        case '10':
          this.setState({ like: true, unlike: false })
          break
        default:
          this.setState({ warning: check })
      }
    } catch (error) {
      this.setState({ error: 'something went wrong, try again please' })
    }
  }

  handleUnlikeClick = event => {
    event.preventDefault()
    try{
    const check = logic.unlikeClick(this.props.id)

    switch (check) {

      case '00':
        this.setState({ unlike: false })
        break
      case '01':
        this.setState({ like: false, unlike: true })
        break
      default:
        this.setState({ warning: check })
    }
  } catch(error) {
    this.setState({ error: 'something went wrong, try again please' })
    }
  }

  // componentDidCatch(errorString, errorInfo) {
  //   this.setState({ error: errorString })
  // }

  render() {
    return <div>
      {this.state.movie && <div>
        <section className='top'>
          <div className='container'>
            <div className='row div-backdrop justify-content-center'>
              {this.state.movie.backdrop_path ? <img className='backdrop img-fluid' src={`https://image.tmdb.org/t/p/w780/${this.state.movie.backdrop_path}`} /> : <img src='https://dummyimage.com/780x439/707070&text=+' />}

              <div className='arrow'>
              </div>
              <div className='title-poster'>
                <a onClick={this.handleBackClick}><i className="fa fa-arrow-left arrow"></i></a>
                <h2>{this.state.movie.title}</h2>
              </div>
            </div>
          </div>
        </section>
        <section className='body-top'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-4 offset-md-2 col-sm-8 poster-col text-center'>
                {this.state.movie.poster_path ? <img className='poster' src={`https://image.tmdb.org/t/p/w185/${this.state.movie.poster_path}`} /> : <img src='https://dummyimage.com/185x278/707070&text=+' />}
                <div className='d-block icons-row1 mt-2'>
                  {this.state.seen ? <a onClick={this.handleSeenClick}><i className="fa fa-eye clicked"></i></a> : <a onClick={this.handleSeenClick}><i className="fa fa-eye"></i></a>}
                  {this.state.pending ? <a onClick={this.handlePendingClick}><i className="fa fa-clock-o clicked"></i></a> : <a onClick={this.handlePendingClick}><i className="fa fa-clock-o"></i></a>}
                </div>
                <div className='d-block icons-row2'>
                  {this.state.favourite ? <a onClick={this.handleFavouriteClick}><i className="fa fa-star clicked"></i></a> : <a onClick={this.handleFavouriteClick}><i className="fa fa-star-o"></i></a>}
                  {this.state.like ? <a onClick={this.handleLikeClick}><i className="fa fa-thumbs-up clicked"></i></a> : <a onClick={this.handleLikeClick}><i className="fa fa-thumbs-up"></i></a>}
                  {this.state.unlike ? <a onClick={this.handleUnlikeClick}><i className="fa fa-thumbs-down clicked"></i></a> : <a onClick={this.handleUnlikeClick}><i className="fa fa-thumbs-down"></i></a>}
                </div>
                {this.state.warning && <p className='warning'>{this.state.warning}</p>}

              </div>
              <div className='col-md-5 col-sm-8 mt-2 info-col'>
                <div>
                  <div className='d-block mb-2'>
                    <span>{this.state.movie.release_date.slice(0, 4)}</span>  <span> | </span>
                    <span>{`${this.state.movie.runtime}'`}</span>   <span> | </span>
                    <span>{`${this.state.movie.vote_average} / 10`}</span>
                  </div>
                  {this.state.movie.spoken_languages.map(languages => <div className='d-inline mt-5'><span>{languages.name}</span><span> | </span></div>)}
                  {this.state.movie.production_countries.map(companies => <p>{companies.origin_country}</p>)}
                  {this.state.movie.budget !== 0 && <p>{`Budget $${this.state.movie.budget}`}</p>}
                  {this.state.movie.genres.map(genres => <div className='d-inline'><span>{genres.name}</span><span> | </span></div>)}
                </div>
                <div className='mt-5 mb-4'>
                  <h3 className='sinopsis-title '>Overview</h3>
                  <p className='sinopsis-text text-justify'>{this.state.movie.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='bottom'>
          <div className='container'>
            <div className='row cast-title-row justify-content-center'>
              <h3 className='cast-title mr-5'>Cast</h3>
            </div>
            <div className='row cast-row ml-4 justify-content-center'>
              {this.state.movie.credits.cast.slice(0, 5).map(cast => <div className='d-inline'>{cast.profile_path ? <img src={`https://image.tmdb.org/t/p/w92/${cast.profile_path}`} /> : <img src='https://dummyimage.com/92x138/707070&text=+' />}<p>{cast.name}</p> </div>)}
            </div>
          </div>
        </section>
        {this.state.error && <h3 className='text-center h5 mt-5 alert-danger'>{this.state.error}</h3>}
      </div>}
    </div>

  }
}

export default withRouter(MovieDetail)