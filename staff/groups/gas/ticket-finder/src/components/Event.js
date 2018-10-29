import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logic from '../logic'
import { withRouter } from 'react-router-dom'

class Event extends Component {
    state ={
        favouriteSelected: false,
        error: null,
    }

    componentDidMount() {

         logic.isFavourite(this.props.eventId)        
        .then(res => this.setState ({ favouriteSelected:res }))
    }
    
    handleSearchEvent = e => {
        e.preventDefault()

        this.props.eventSearch(this.props.eventId)

    }

    storeFavourites = (e) => {
        e.preventDefault()

        logic.storeFavourites(this.props.eventId)

        this.setState({favouriteSelected: !this.state.favouriteSelected})


    }

    handleDeleteFavourites = (e) => {
        e.preventDefault()

        logic.deleteFavourite(this.props.eventId)

        .catch(err => this.setState({error: err}))    

        this.setState({favouriteSelected: !this.state.favouriteSelected})
    }

    goToEvents = (e) => {
        e.preventDefault()

        this.props.history.push(`/eventinformation/${this.props.eventId}`)
    }

    changeDate = () => {
        const monthNames = ['', "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

        const tempDate = this.props.eventDate.split('-')

        let date = tempDate[2] + ' ' + monthNames[parseInt(tempDate[1])] + ' ' + tempDate[0]

        return date
    }
    render(){    
    
    return <div className="col-lg-4">
       
        <div className="card">
            
        <Link to={`/eventinformation/${this.props.eventId}`}><img className="card-img-top" src={this.props.eventImgUrl } alt="Card cap" /></Link>
        
                <div className="card-body">

                    <h5 className="card-title"> {this.props.eventName }</h5>

                    <p>{this.changeDate()}</p>

                    <p> { this.props.eventCity } </p>

                    <p className="card-link"><a target="blank" href= {this.props.eventUrl }>Get tickets</a></p>

                   <a href="#" className="favourites-btn" onClick={this.state.favouriteSelected ? this.handleDeleteFavourites : this.storeFavourites}><i className={this.state.favouriteSelected ? 'fas fa-star' : 'far fa-star' }>  {this.state.favouriteSelected ? <span>Added to favourites</span>: <span>Add to favourites</span>}</i></a>

                    </div>
                </div>

                </div> 

    }
}     
        
export default withRouter(Event)


