import React, { Component } from 'react'
import FavouriteEvents from './FavouriteEvents'
import logic from '../logic'


class Favourites extends Component {
    state = {
        favouritesList: []
    }

    componentDidMount() {

        this.retrieveFavourites()        

    }

    handleDeleteFavourites = (id) => {

        logic.deleteFavourite(id)

        .then(res => this.setState({favouritesList: res}))

        .catch(err => this.setState({error: err}))    

    }

    retrieveFavourites() {
        try {
           
        logic.retrieveFavouriteEvents()

        .then(res => {this.setState({ favouritesList: res })})

        .catch(err => this.setState({ error: err }))

        }
        catch(err) {alert('error')}    
    }   

    findBestImage = (arr) => {
        let placeHolder = []

        arr.images.forEach(el=> placeHolder.push(el.width))

        return placeHolder.indexOf(Math.max(...placeHolder));
    }

    render() {
        return <section>
        <div className="favourite-title"><h1>Favourites</h1></div>
        
        <div className="favourite-title"><h1>{!this.state.favouritesList.length?  <span>Your favourites list is empty</span> : ''}</h1></div>
        

        
        <div className="favouriteList-container">
            {this.state.favouritesList.map(item => <FavouriteEvents key={item.id} id={item.id} img={item.images[this.findBestImage(item)].url} name={item.name} city={item._embedded.venues[0].city.name} date={item.dates.start.localDate} deleteFavourite={this.handleDeleteFavourites} eventUrl={item.url}/>)}

        </div>
    
        </section>

    }
}

export default Favourites