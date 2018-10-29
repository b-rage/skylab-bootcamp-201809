import React, { Component } from 'react'
import logic from '../logic'
import SearchForm from './SearchForm'
import Event from './Event'
import Error from './Error'
import { Redirect, Route, withRouter } from 'react-router-dom'
import SearchResults from './SearchResults'

class Home extends Component {
    state = {
        error: null,
        carousel: [],
        eventInfoArray: [],
        favouriteEvents: [],
        searchFlag: true,
        dropwdown: 'all'
    }

    componentDidMount() {


        logic.showEvents()

            .then(events => this.setState({ carousel: events }))

            .catch(err => this.setState({ error: err }))   
            

    }

    handleSubmit = query => {

        this.setState({ error: false, searchFlag: false}, () => this.props.history.push(`/home/search/${query}`))
    }

    findBestImage = (arr) => {
        let placeHolder = []

        arr.images.forEach(el=> placeHolder.push(el.width))

        return placeHolder.indexOf(Math.max(...placeHolder));
    }

    handleDropDown = value => {
        this.setState({dropwdown : value})

       
    }

    render() {
        const { error } = this.state
        return <div>

            {<SearchForm onSubmit={this.handleSubmit} onDropDownChange={this.handleDropDown} />}

            {error && <Error message={error} />}

            <Route path="/home/search/:query" render={props => <SearchResults error={error} filter={this.state.dropwdown} query={props.match.params.query} />} /> 

           {this.state.searchFlag && <div className="favourite-title"><h1>Recommended Events</h1></div>}
            {this.state.searchFlag && <section>

                <div className="index-content">

                    <div className="container-carousel">

                        {this.state.carousel.map(event => <Event key={event.id} eventImgUrl={event.images[this.findBestImage(event)].url} eventName={event.name} eventCity={event._embedded.venues[0].city.name} eventUrl={event.url} eventId={event.id} eventDate={event.dates.start.localDate} eventSearch={this.addToEventInfoArray} favourites={this.props.favourites} />)}

                    </div>

                </div>

            </section>}

        </div>
    }
}

export default withRouter(Home)




