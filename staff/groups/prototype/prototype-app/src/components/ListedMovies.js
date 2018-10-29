import React, { Component } from 'react'
import logic from '../logic'
import Search from './Search';
import MoviesList from './MoviesList';
import $ from 'jquery'

class ListedMovies extends Component {
    state = { title: '', page: '1', search: false }

    componentDidMount = () => {
        switch (this.props.kind) {
            case 'trending':
                logic.retrieveTrending()
                    .then(movies => { this.setState({ movies, title: 'Trending movies' }) })
                    .catch(error => this.setState({ error: error.message }))

                break
            case 'now_playing':
                logic.retrieveInTheatre()
                    .then(movies => { this.setState({ movies, title: 'Now playing' }) })
                    .catch(error => this.setState({ error: error.message }))

                break
            case 'popular':
                logic.retrievePopular()
                    .then(movies => { this.setState({ movies, title: 'Popular movies' }) })
                    .catch(error => this.setState({ error: error.message }))

                break
            default:
                try {
                    logic.retrieveMovies(this.props.kind, this.state.page)
                        .then(movies => {
                            let query = logic.beautifyQuery(this.props.kind)
                            this.setState({ movies, title: query })
                        })
                        .catch(error => this.setState({ error: error.message }))


                    this.setState({ search: true })
                } catch (error) {
                    this.setState({ error: 'something went wrong, try again please' })
                }
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (this.props !== nextProps) {
            switch (nextProps.kind) {
                case 'trending':
                    logic.retrieveTrending()
                        .then(movies => { this.setState({ movies, title: 'Trending movies' }) })
                        .catch(error => this.setState({ error: error.message }))

                    break
                case 'now_playing':
                    logic.retrieveInTheatre()
                        .then(movies => { this.setState({ movies, title: 'Now playing' }) })
                        .catch(error => this.setState({ error: error.message }))

                    break
                case 'popular':
                    logic.retrievePopular()
                        .then(movies => { this.setState({ movies, title: 'Popular movies' }) })
                        .catch(error => this.setState({ error: error.message }))

                    break
                default:
                    try {
                        logic.retrieveMovies(nextProps.kind)
                            .then(movies => {
                                let query = logic.beautifyQuery(nextProps.kind)

                                this.setState({ movies, title: query })
                            })
                            .catch(error => this.setState({ error: error.message }))

                        this.setState({ search: true })
                    } catch (error) {
                        this.setState({ error: 'something went wrong, try again please' })
                    }
            }
        }

        this.setState({ page: '1' })
    }

    pagination = () => {
        let pages = []
        let maxPages = this.state.movies.total_pages

        if (maxPages > 10) maxPages = 10

        for (let i = 1; i <= maxPages; i++) {
            if (i == this.state.page) {
                pages.push(<li className="page-item active"><a className="page-link" href="#" onClick={this.handleClick}>{i}</a></li>)
            } else {
                pages.push(<li className="page-item"><a className="page-link" href="#" onClick={this.handleClick}>{i}</a></li>)
            }
        }

        return pages
    }

    handleClick = event => {
        event.preventDefault()

        const page = event.target.innerText

        switch (this.props.kind) {
            case 'trending':
                try {
                    logic.retrieveTrending(page)
                        .then(movies => this.setState({ page, movies }))
                        .catch(error => this.setState({ error: error.message }))
                } catch (error) {
                    this.setState({ error: 'something went wrong, try again please' })
                }
                break
            case 'now_playing':
                try {
                    logic.retrieveInTheatre(page)
                        .then(movies => this.setState({ page, movies }))
                        .catch(error => this.setState({ error: error.message }))
                } catch (error) {
                    this.setState({ error: 'something went wrong, try again please' })
                }
                break
            case 'popular':
                try {
                    logic.retrievePopular(page)
                        .then(movies => this.setState({ page, movies }))
                        .catch(error => this.setState({ error: error.message }))
                } catch (error) {
                    this.setState({ error: 'something went wrong, try again please' })
                }
                break
            default:
                try {
                    logic.retrieveMovies(this.props.kind, page)
                        .then(movies => this.setState({ page, movies }))
                        .catch(error => this.setState({ error: error.message }))
                } catch (error) {
                    this.setState({ error: 'something went wrong, try again please' })
                }
        }

        $("html, body").animate({ scrollTop: 0 }, "slow");
    }

    render() {
        return (
            <div>
                {this.state.search && <Search />}
                {this.state.movies && <section className="list-movies">
                    <div className="container">
                        <div className="row">
                            <h3 className="font-weight-bold mt-5 mb-4">{this.state.title}</h3>
                        </div>
                        {this.state.error && <h3 className='text-center h5 mt-5 alert-danger'>{this.state.error}</h3>}
                        <MoviesList movies={this.state.movies.results} pages={this.state.movies.total_pages} currentPage={this.state.page} />
                        <div className="row justify-content-center">
                            <nav className="my-3">
                                <ul className="pagination">
                                    {/* <li className="page-item"><a className="page-link" href="#">Previous</a></li> */}
                                    {this.pagination().map(page => page)}
                                    {/* <li className="page-item"><a className="page-link" href="#">Next</a></li> */}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </section>}
            </div>
        )
    }
}

export default ListedMovies