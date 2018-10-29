import React, { Component } from 'react'
import logic from '../logic'
import Event from './Event'
import { Button } from "mdbreact"
import Error from './Error'

class SearchResults extends Component {
    state = {
        events: [],
        pageNumber: 1,
        reducedEvents: [],
        error: false
    }

    componentDidMount() {

        this.searchEvents(this.props.query)
    }

    componentWillReceiveProps(props) {
        this.searchEvents(props.query)
            
    }
    
    searchEvents(query) {
      
        let filtered = [];

        try {
            
            logic.searchEvents(query)
                .then(events => {
                    if (this.props.filter!=='all') {

                        filtered = events.filter( item => item.classifications[0].segment.name===this.props.filter)

                        this.setState({ events: filtered, reducedEvents: [...filtered.slice(0, 6)] })
                    }
                    else {
                        this.setState({ events: events, reducedEvents: [...events.slice(0, 6)] })
                    }
                })
                .catch(() => this.setState({ error: `There are no events for this search :'(` }))
        }
        catch (err) { alert('Only searches in English are accepted') }
    }

    goToNextPage = () => {

        const maxPages = Math.ceil(this.state.events.length / 6)

        if (this.state.pageNumber < maxPages) {

            const nextPage = this.state.pageNumber + 1

            const paintArr = this.state.events.slice((nextPage * 6) - 6, nextPage * 6)

            this.setState({ pageNumber: nextPage, reducedEvents: paintArr })
        }
    }

    goToPreviousPage = () => {

        if (this.state.pageNumber > 1) {

            const previousPage = this.state.pageNumber - 1

            const paintArr = this.state.events.slice((previousPage * 6) - 6, previousPage * 6)

            this.setState({ pageNumber: previousPage, reducedEvents: paintArr })

        }
    }

    findBestImage = (arr) => {
        let placeHolder = []

        arr.images.forEach(el=> placeHolder.push(el.width))

        return placeHolder.indexOf(Math.max(...placeHolder));
    }

    render() {
        const { error } = this.state
        return <section>

             {this.props.error && <Error message={this.props.error} />}

            <div className="index-content">

                <div className="container-carousel">

                    {this.state.reducedEvents.map(event => <Event favourites={this.props.favourites} key={event.id} eventImgUrl={event.images[this.findBestImage(event)].url} eventName={event.name} eventCity={event._embedded.venues[0].city.name} eventUrl={event.url} eventMinPrice={!!event.priceRanges ? event.priceRanges[0].min : false} eventId={event.id} eventDate={event.dates.start.localDate} eventSearch={this.addToEventInfoArray} />)}

                </div>

            </div>

            <div className="page-btns">
            
                {<Button color="unique" onClick={this.goToPreviousPage}>Previous page</Button>}

                {<Button color="unique" onClick={this.goToNextPage}>Next page</Button>}

                <p>Page {this.state.error ? '0' : this.state.pageNumber} out of {Math.ceil(this.state.events.length / 6)}</p>

            </div>

        </section>
    }
}

export default SearchResults