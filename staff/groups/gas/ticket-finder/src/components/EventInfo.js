import React, { Component } from 'react'
import logic from '../logic'

class EventInfo extends Component {

    state = {eventInfoArray: [],
    err: null}

    componentDidMount() {
        this.addToEventInfoArray(this.props.id)     

    }

    addToEventInfoArray = id => {

            try {
                logic.searchEventInfo(id)
                .then(eventInfo => this.setState({ eventInfoArray: eventInfo }))
                .catch(err => this.setState({ error: err }))
                   
            }
            catch (err) { this.setState({err}) }
    }

    findBestImage = (arr) => {
        let placeHolder = []

        arr.images.forEach(el=> placeHolder.push(el.width))

        return placeHolder.indexOf(Math.max(...placeHolder));
    }

    render() {

        const { eventInfoArray } = this.state

    return <div className="eventInfo-container">

            <h1 className="eventInfo-title">{eventInfoArray.name}</h1>

            <img className="eventInfo-image" src={eventInfoArray.images && eventInfoArray.images[this.findBestImage(eventInfoArray)].url} alt="Card cap" />

                <div className="eventInfo-body">

                    <div className="eventInfo-body__eventInfo">
                    
                    <h4 className="eventInfo-title"> {eventInfoArray.name }</h4>

                    <p> {eventInfoArray.dates && (eventInfoArray.dates.start.localTime ? eventInfoArray.dates.start.localTime : 'Event time to be announced') } </p>
                    
                    <p> {eventInfoArray._embedded && eventInfoArray._embedded.venues[0].city.name} </p>

                    <p>{eventInfoArray.priceRanges ? <span>From {eventInfoArray.priceRanges[0].min} EUR</span> : <span>Price to be announced</span>}</p>

                    <p className="card-text"><a target="blank" href= {eventInfoArray.url}>Get tickets</a></p>
                    </div>

                    {<iframe className="card-body__googleMaps" width="100%" height="450" frameBorder="0"  src={"https://www.google.com/maps/embed/v1/view?key=AIzaSyCk3qtl1MWipyqiAvMNKewzEjZbD-zrw7A&center=" + (eventInfoArray._embedded && eventInfoArray._embedded.venues[0].location.latitude) + "," + (eventInfoArray._embedded && eventInfoArray._embedded.venues[0].location.longitude) + "&zoom=16&maptype=roadmap"} />}

                </div>
        </div>
    }
}

export default EventInfo

