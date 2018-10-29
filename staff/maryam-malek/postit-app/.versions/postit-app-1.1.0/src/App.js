import React, { Component } from 'react'
import Home from './components/Home'
import Landing from './components/Landing'
import Register from './components/Register'
import Login from './components/Login'
import Error from './components/Error'
import logic from './logic'
import {storage} from './data'



class App extends Component {
    state={landing: true, register:false, login:false, home: false, userId: this.getUserId(), error: null}
    
    getUserId() {
        const userId = sessionStorage.getItem('userId')

        return userId ? parseInt(userId) : null
    }
   
    handleRegisterSubmit = (name, surname, username, password) => {
        try{
            logic.registerUser(name, surname, username, password)
            
            this.setState({register: false, login:true})
        } catch(err){
            this.setState({ error: err.message })
        }
    }

    handleLoginClick = login => {
        login && this.setState({login: true, landing: false})
    }

    handleRegisterClick = register => {
        register && this.setState({register: true, landing: false})   
    }

    handleLoginSubmit = (username, password) => {

        try{
            let userId = logic.authenticate(username, password)

            this.setState({userId, login: false, home: true})

            storage.setItem('userId', JSON.stringify(userId))
        } catch(err){
            this.setState({ error: err.message })
        }
    }

    handleLogOutClick = () => {
        this.setState({home: false, landing: true, userId: null})
    }

    handleLReturnClick = () => {
        this.setState({login: false, register: false, landing: true})
    }

    render() {
        return <section>
            {this.state.landing && !this.state.userId && <Landing onLoginClick={this.handleLoginClick} onRegisterClick={this.handleRegisterClick}/>}
            {this.state.register && <Register onReturnClick={this.handleReturnClick} onSubmit={this.handleRegisterSubmit} />}
            {this.state.login && <Login onReturnClick={this.handleReturnClick} onSubmit={this.handleLoginSubmit}/>}
            {!this.state.landing && !this.state.home && <button onClick={this.handleReturnClick}>Return</button>}            
            {this.state.error && <Error message={this.state.error} />}            
            {this.state.userId && <Home userId={this.state.userId}/>}
            {this.state.userId && <button onClick={this.handleLogOutClick}>Log Out</button>}
        </section >
    }
}

export default App;
