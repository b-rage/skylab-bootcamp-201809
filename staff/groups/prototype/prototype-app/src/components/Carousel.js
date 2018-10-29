import React, { Component } from 'react'
import logic from '../logic'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import 'slick-carousel'

class Carousel extends Component {
  state = {}

  componentDidMount = () => {
    let slick

    switch (this.props.listType) {
      case 'now_playing':
        slick = logic.retrieveInTheatre()
          .then(movies => {
            this.setState({ movies: logic._inTheatreMovies })
          })
          .catch(error => this.setState({ error: error.message }))

        break
      case 'popular':
        slick = logic.retrievePopular()
          .then(movies => {
            this.setState({ movies: logic._popularMovies })
          })
          .catch(error => this.setState({ error: error.message }))

        break
      case 'trending':
        slick = logic.retrieveTrending()
          .then(movies => {
            this.setState({ movies: logic._trendingMovies })
          })
          .catch(error => this.setState({ error: error.message }))

        break
    }

    slick.then(() => {
      this.$el = $(this.el);
      this.$el.slick({
        infinite: true,
        arrows: true,
        dots: false,
        centerMode: true,
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 760,
            settings: {
              slidesToShow: 1,
            }
          }]
      })
    })
  }

  componentWillUnmount() {
    this.$el.slick('destroy');
  }

  render() {
    return (
      <section className="movies-carousel">
        <div className="container">
          <div className="row">
            <h5 className="font-weight-bold my-4">{this.props.title}</h5>
          </div>
          {this.state.error && <h3 className='text-center h5 mt-5 alert-danger'>{this.state.error}</h3>}
          <div className="row carousel" ref={el => this.el = el}>
            {this.state.movies && this.state.movies.map(movie => {
              return (
                <div className="carousel-img" key={movie.id}>
                  {movie.poster_path && <Link to={`/movie/${movie.id}`}><img className="img-fluid img-medium-rounded" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} /></Link>}
                  {!movie.poster_path && <Link to={`/movie/${movie.id}`}><img className="img-fluid img-medium-rounded" src="https://dummyimage.com/240x360/707070&text=+" /></Link>}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default Carousel