import React, { Component } from 'react'
import logic from '../logic'
import Card from './Card'
import { Route, withRouter } from 'react-router-dom'
import Movie from './Movie'
import SearchResults from './SearchResults'
import SearchCategories from './SearchCategories'
import TopRatedSlide from './TopRatedSlide'
import CategoryAction from './CategoryAction'
import CategoryFamily from './CategoryFamily'
import SearchBar from './SearchBar'
import ButtonBar from './ButtonBar'
import MyFavourites from './MyFavourites'
import NowPlaying from './NowPlaying'


class Home extends Component {

    state = {
        query: '',
        error: '',
        movies: [],
        queryName: ''
    }

    handleCardClick = id => {
        this.props.history.push(`/movie/${id}`)
    }

    handleMovieCardQuery= (query, name) =>{
        this.setState({query})
        this.setState({queryName:name})
        this.props.history.push(`/categories/${query}`)
    }

    render() {
        return <div className="home">

            <Route exact path="/" render={props =><SearchBar />}/>
            <Route exact path="/" render={props =><ButtonBar/>}/>
            <Route exact path="/" render={props =><MyFavourites/>}/>
            <Route exact path="/" render={props =><TopRatedSlide/>}/>
            <Route exact path="/" render={props =><NowPlaying/>}/>
            <Route exact path="/" render={props =><CategoryAction/>}/>
            <Route exact path="/" render={props =><CategoryFamily/>}/>

            <Route path="/search/:query" render={props => <SearchResults query={props.match.params.query} />} />
            <Route path="/categories/:query" render={props => <SearchCategories query={props.match.params.query} />} />
            <Route path="/movie/:id" render={props => <Movie id={props.match.params.id} isLoggedIn={this.props.isLoggedIn} handleFavourites={this.props.handleFavourites} handleMovieCardQuery={this.handleMovieCardQuery}  />} />


        </div>
    }

}

export default withRouter(Home)