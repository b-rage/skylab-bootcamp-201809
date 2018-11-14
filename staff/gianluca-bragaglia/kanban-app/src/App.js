import React, { Component } from 'react'
import { Route, withRouter, Redirect } from 'react-router-dom'
import logic from './logic'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'
import Postits from './components/Postits'
import Error from './components/Error'
import Landing from './components/Landing'
import Profile from './components/Profile'
import EditProfile from './components/EditProfile'


logic.url = 'http://localhost:5000/api'

class App extends Component {
    state = { error: null }

    handleRegisterClick = () => this.props.history.push('/register')

    handleLoginClick = () => this.props.history.push('/login')

    handleRegister = (name, surname, username, password) => {
        try {
            logic.registerUser(name, surname, username, password)
                .then(() => {
                    this.setState({ error: null }, () => this.props.history.push('/login'))
                })
                .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    handleEditProfile = (name, surname, username,  newPassword, password) => {
        try {
            logic.modifyUser(name, surname, username,  newPassword, password)
                .then(() => {
                    this.setState({ error: null }, () => this.props.history.push('/profile'))
                })
                .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    handleLogin = (username, password) => {
        try {
            logic.login(username, password)
                .then(() => {
                    this.setState({ error: null }, () => this.props.history.push('/postits'))
                })
                .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    handleLogoutClick = () => {
        logic.logout()

        this.props.history.push('/')
    }

    handleProfileClick = () => this.props.history.push('/profile')   

    handleGoBack = () => this.props.history.push('/')

    render() {
        const { error } = this.state

        return <div>
            <Navbar></Navbar>
            
            <Route exact path="/" render={() => !logic.loggedIn ? 
                <Landing onRegisterClick={this.handleRegisterClick} onLoginClick={this.handleLoginClick} /> : <Redirect to="/postits" />} />
            
            <Route path="/register" render={() => !logic.loggedIn ? 
                <Register onRegister={this.handleRegister} onGoBack={this.handleGoBack} /> : <Redirect to="/postits" />} />

            <Route path="/login" render={() => !logic.loggedIn ? 
                <Login onLogin={this.handleLogin} onGoBack={this.handleGoBack} /> : <Redirect to="/postits" />} />
            {error && <Error message={error} />}

            <Route path="/postits" render={() => logic.loggedIn ? 
                <div className='logout-container'>
                    <section><button className='btn-logout' onClick={this.handleLogoutClick}>Logout</button></section>
                    <br></br>
                    <section><button className='btn-logout' onClick={this.handleProfileClick}>Profile</button></section>
                    <Postits />
                </div> : <Redirect to="/" />} />
            <Route path="/profile" render={() => logic.loggedIn ? <Profile /> : <Redirect to="/login" />} />
            <Route path="/edit" render={() => logic.loggedIn ? <EditProfile onEditProfile={this.handleEditProfile} /> : <Redirect to="/login" />} />

        </div>
    }
}

export default withRouter(App)
