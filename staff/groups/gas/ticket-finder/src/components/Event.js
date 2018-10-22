import React, { Component } from 'react'
import logic from '../logic'
import EventInfo from './EventInfo'

class Event extends Component {
    
    handleSearchEvent = e => {
        e.preventDefault()
        this.props.test(this.props.eventId)

    }

    getFavouriteId = () => {
        this.props.addToFavourites(this.props.eventId)
    }

    changeDate = () => {
        const monthNames = ['', "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const tempDate = this.props.eventDate.split('-')
        let date = tempDate[2] + ' ' + monthNames[parseInt(tempDate[1])] + ' ' + tempDate[0]
        return date
    }
    render(){    
    let priceMessage =""

    let TBAmessage = ""
    if (this.props.eventMinPrice) {
        priceMessage = <span>From {this.props.eventMinPrice} EUR</span>
    }
    if (!this.props.eventMinPrice) {
        TBAmessage = <span>Price to be announced</span>
    }
    return <li>
        <div className="card">
            
            <a onClick={this.handleSearchEvent} href="#"><img className="card-img-top" src={this.props.eventImgUrl } alt="Card cap" /></a>
                <div className="card-body">
                    <h5 className="card-title"> {this.props.eventName }</h5>
                    <p>{this.changeDate()}</p>
                    <p> { this.props.eventCity } </p>
                    <p className="card-text"><a target="blank" href= {this.props.eventUrl }>Get tickets</a></p>
                    <p> {this.props.eventMinPrice ? priceMessage : TBAmessage} </p>
                    <button onClick = {this. getFavouriteId}>Add to favourites</button>
                </div>
        </div>       
    </li>
    }
}     
        
export default Event