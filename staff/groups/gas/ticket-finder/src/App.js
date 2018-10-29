import React, { Component } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Error from './components/Error'
import Landing from './components/Landing'
import Home from './components/Home'
import logic from './logic'
import Favourites from './components/Favourites'
import NavbarComponent from './components/NavbarComponent'
import { Route, withRouter, Redirect } from 'react-router-dom'
import EventInfo from './components/EventInfo'

class App extends Component {

  state = { error: null,
            favouritesArray: []}

  handleRegisterClick = () => this.props.history.push('/register')

  handleLoginClick = () => this.props.history.push('/login')


  handleRegister = (name, email, username, password, passwordRepeat) => {

    try {
        logic.registerUser(name, email, username, password, passwordRepeat)
            .then(() => {
                this.setState({ error: null }, () => this.props.history.push('/login'))
            })
            .catch(err => this.setState({ error: err.message }))
    } catch (err) {
        this.setState({ error: err.message })
    }
}

handleLogin = (username, password) => {
    try {
        logic.login(username, password)
            .then(() =>  {
            this.setState({ error: null }, () => this.props.history.push('/home'))
        })
            .catch(err => this.setState({ error: err.message }))
    } catch (err) {
        this.setState({ error: err.message })
    }

}

handleLogoutClick = () => {
    logic.logout()
    this.setState({favouritesArray: []})
    this.props.history.push('/')
}

handleGoBack = () =>  {
    this.setState({error: null})
    this.props.history.push('/')
}

  render() {
    
    const { error } = this.state

    return <div>
    {logic.loggedIn && <NavbarComponent onLogout={this.handleLogoutClick}></NavbarComponent>}

    <Route exact path="/" render={() => !logic.loggedIn ? <Landing onRegisterClick={this.handleRegisterClick} onLoginClick={this.handleLoginClick} /> : <Redirect to="/home" />} />

    <Route path="/register" render={() => !logic.loggedIn ? <Register onRegister={this.handleRegister} onGoBack={this.handleGoBack} /> : <Redirect to="/home" />} />

    <Route path="/login" render={() => !logic.loggedIn ? <Login onLogin={this.handleLogin} onGoBack={this.handleGoBack} /> : <Redirect to="/home" />} />

    {error && <Error message={error} />}

    <Route path="/home" render={() => logic.loggedIn ? <Home favouriteState={this.handleFavouriteState} onLogout={this.handleLogoutClick}  /> : <Redirect to="/home" />} />

    <Route path="/favourites" render={() => logic.loggedIn ? <Favourites deleteFavourite={this.handleDeleteFavourite} favouritesList={this.state.favouritesArray} /> : <Redirect to="/home" />}
     />
     
    <Route path="/eventinformation/:id" render={(props) => logic.loggedIn ? <EventInfo id={props.match.params.id}/> : <Redirect to="/home" />} />
    
    </div>
  }
}

export default withRouter(App);


