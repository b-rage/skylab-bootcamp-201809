import React, { Component } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import Error from './components/Error'
import logic from './logic'

class App extends Component {
    state = { register: false, login: false, userId: this.getUserId(), error: null}

    getUserId() {
        const userId = sessionStorage.getItem('userId')

        return userId ? parseInt(userId) : null
    }

    handleRegister = () => { 
        this.setState({register: true})
    }

    handleLogin = () => {
        this.setState({login: true})
    }

    handleRegisterClick = (name, surname, username, password) => {
        try {
            logic.registerUser(name, surname, username, password)

            this.setState({register: false, login: true, error: null})
        } catch(err) {
            this.setState({ error: err.message })
        }  
    }

    handleLoginClick = (username, password) => {
        try {
            const userId = logic.authenticate(username, password)

            this.setState({userId, login: false, register: false, error:null})

            sessionStorage.setItem('userId', userId)
        } catch(err) {
            this.setState({ error: err.message })
        }
    }

    handleLogoutClick = () => {
        logic.deleteUserId()
        this.setState({ userId: null })
        
    }

    render() {
        const {register, login, userId, error} = this.state
        return <div> 
            {!register && !login && !userId && <section>
                <button onClick={this.handleRegister} >Register</button>
                <button onClick={this.handleLogin}>Log In</button>
            </section>}
            {register && <Register onRegisterClick = {this.handleRegisterClick}/>}
            {login && <Login onLoginClick = {this.handleLoginClick}/>}
            {error && <Error message={error} />}
            {userId && <section><button onClick={this.handleLogoutClick}>Logout</button></section>}
            {userId && <Home userId={userId}/>}
        </div>
    }
}

export default App
