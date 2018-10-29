import React, { Component } from 'react'
import logic from '../logic'
import SearchBar from './SearchBar'
import GenresTags from './GenresTags';

class Movie extends Component {
    state = {
        flag: false,
        theMovie: null,
        theOverview: null,
        thePoster: null,
        theDate: null,
        err: '',
        showFavButton: false,
        flagController: true,
        youtubeKey: null,
        cast: '',
        genres: null,
        reviews: ''
    }

    componentDidMount() {

        const id = this.props.id

        try {
            logic.searchMovie(id)
                .then(movie => {
                    this.favButtonController()
                    this.setState({
                        theMovie: movie.original_title,
                        theOverview: movie.overview,
                        thePoster: movie.poster_path,
                        theDate: movie.release_date,
                        genres: movie.genres
                    })
                })
                .catch(err => this.setState({ error: err.message }))
        }
        catch (err) {
            this.setState({ error: err.message })
        }

        try {

            logic.searchTrailer(id)
                .then(trailer => {

                    this.setState({ youtubeKey: trailer[0].key })
                })
                .catch(err => this.setState({ error: err.message }))
        }
        catch (err) {
            this.setState({ error: err.message })
        }

        try {

            logic.searchCharacters(id)
                .then(results => {

                    this.setState({ cast: results })
                })
                .catch(err => this.setState({ error: err.message }))
        }
        catch (err) {
            this.setState({ error: err.message })
        }

        try {
            logic.getReviews(id)
                .then(reviews => {
                    this.setState({ reviews: reviews })
                })
                .catch(err => this.setState({ error: err.message }))
        }
        catch (err) {
            this.setState({ error: err.message })
        }
    }

    handleAddFav = () => {
        this.setState({ flagController: true })
        logic.listFavourites(this.props.id)
            .then(res => {
                logic.updateFavourites(res, this.props.id, this.state.thePoster)
                    .then(() => this.favButtonController())
            })
    }

    handleRemoveFav = () => {
        this.setState({ flagController: true })
        logic.listFavourites(this.props.id)
            .then(res => {
                logic.removeFavourites(res, this.props.id, this.state.thePoster)
                    .then(() => this.favButtonController())
            })
    }

    favButtonController() {

        const id = this.props.id

        if (!!this.props.isLoggedIn) {
            let listFav = ''
            try {
                logic.listFavourites()
                    .then(res => listFav = res)
                    .then(() => {
                        const showFavButton = listFav.find(F => F.id === id)

                        this.setState({ showFavButton })
                        this.setState({ flagController: false })
                    })
                    .catch(err => this.setState({ error: err.message }))

            } catch (err) {
                if (err.message) throw Error(err.message)
            }
        }
    }

    render() {

        const lengthCast = this.state.cast[0]
        const lengthReviews = this.state.reviews[0]

        return <div className="home">
            <SearchBar />
            <div className='card'>

                <div className='card_left'>
                    <img src={'https://image.tmdb.org/t/p/w500/' + this.state.thePoster}></img>
                </div>

                <div className='card_right'>

                    <h1>{this.state.theMovie}</h1>

                    <div className='card_right__details'>

                        <ul>
                            <li>ID: {this.props.id}</li>
                            <li>{this.state.theDate}</li>
                            <li>Action</li>
                        </ul>
                        <div className='card_right__rating'>
                            {this.props.isLoggedIn && !!!this.state.showFavButton && <div>
                                <button className="unlike_btn" type="button" onClick={this.handleAddFav} ></button>
                            </div>}

                            {this.props.isLoggedIn && !!this.state.showFavButton && <div>
                                <button className="like_btn" type="button" onClick={this.handleRemoveFav} ></button>

                            </div>}
                        </div>

                        <div className='card_right__review'>
                            <p>{this.state.theOverview}</p>
                        </div>
                        <p>Related categories:</p>
                        <div className="_tags">

                            {!!this.state.genres && this.state.genres.map((genres) => {
                                return <div>
                                    <GenresTags id={genres.id} name={genres.name} handleMovieCardQuery={this.props.handleMovieCardQuery} />

                                </div>
                            })}
                        </div>

                    </div>
                </div>
            </div>
            <div className="card_btns">
                {!!lengthCast && <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">More Info</button>}

                {!!lengthReviews && <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseReviews" aria-expanded="false" aria-controls="collapseReviews">Reviews</button>}

            </div>

            {!!lengthCast && <div class="collapse" id="collapseExample">
                <div class="card card-body">

                    <div className="contain_actors">
                        <div><h3>Main Characters</h3></div>
                        <div className="contain_profile_actors">

                            {this.state.cast.map((cast, index) => {
                                if (index < 5) {
                                    return <div className="profile_actors">
                                        <p>{cast.name + ' as ' + cast.character}</p>
                                        <img className="img-actors" src={'https://image.tmdb.org/t/p/w300/' + cast.profile_path}></img>
                                    </div>
                                }
                            })}

                        </div>
                    </div>
                </div>
                <iframe className="video-frame" src={"https://www.youtube.com/embed/" + this.state.youtubeKey} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

            </div>}

            {!!lengthReviews && <div class="collapse" id="collapseReviews">
                <div class="card card-body">
                    <div className="reviews">
                        <div className="contain_actors">
                            <div><h3>Reviews</h3></div>
                            <div className="contain_reviews">

                                {this.state.reviews.map((review, index) => {
                                    if (index < 5) {
                                        return <div className="reviews_text">
                                            <h5>{review.author+":"}</h5>
                                            <p>{review.content}</p>
                                        </div>
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </div>}

        </div>


    }
}

export default Movie