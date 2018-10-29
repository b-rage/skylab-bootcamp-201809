import React, { Component } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Error from './components/Error'
import logic from './logic'

class App extends Component {
    state = { register : false, login : false, user: this.getUserId(), error: null}

    getUserId() {
        const userId = sessionStorage.getItem('userId') 

        return userId ? parseInt(userId) : null
    }

    handleRegister = () =>{
        this.setState({register :true })
    }
    handleLogin = () =>{
        this.setState({login :true, error : null })
    }
    handleHome = () =>{
        this.setState({login :false, error : null })
    }
    handleRegisterClick = (name, surname, email, user, password) => {
        
        try {
            logic.createUser(name, surname, email, user, password)

            this.setState({ login: true, register: false })
        } catch (err) {
            console.error(err.message)
        }
    }

    handleLoginClick = (username, password) => {
        
        try {
            const log = logic.loginUser(username, password)
           
            this.setState({user : log}, this.handleHome)
            
            sessionStorage.setItem('userId', user)

        } catch (err) {
            this.setState({ error: err.message })
        }
        
    }

    handleLogoutClick = () => {

        this.setState({ user: null })
        sessionStorage.removeItem('userId')
    }

    render() {
        const {register, login, user, error} = this.state
        return <section className="landing">
                {!register && !login && !user && <button type="button" className="btn btn-primary btn-lg btn-padding" onClick={this.handleRegister}>Register</button>}
                {!register && !login && !user && <button type="button" className="btn btn-secondary btn-lg" onClick={this.handleLogin}>Login</button>}
                {register && <Register onRegisterClick={this.handleRegisterClick} />}
                {login && <Login onLoginClick={this.handleLoginClick} />}
                {error && <Error message={error} />}
                {user && <section><button onClick={this.handleLogoutClick}>Logout</button></section>}
                {user && <Home onHomeClick={user} />}
            </section>
    }
} 

module.exports = App
// export default App;
