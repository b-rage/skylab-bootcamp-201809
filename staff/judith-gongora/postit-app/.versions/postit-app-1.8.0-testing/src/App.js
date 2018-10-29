import React, { Component } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Error from './components/Error'
import logic from './logic'

class App extends Component {
    state = { register : false, login : false, error: null, user: null, token : null}

    handleRegister = () =>{
        this.setState({register :true })
    }
    handleLogin = () =>{
        this.setState({login :true })
    }

    handleRegisterClick = (name, surname, email, user, password) => {
        
        try {
            logic.createUser(name, surname, email, user, password)
                .then(() => this.setState({ login: true, register: false, error: null }))
                .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    handleLoginClick = (username, password) => {
        
        try {
            logic.loginUser(username, password)
                .then(({id, token}) => {
                    sessionStorage.setItem('userId', id)
                    sessionStorage.setItem('token', token)
                    
                    this.setState({ user: id, token, login: false, register: false, error: null })
                })
                .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
        
    }

    handleLogoutClick = () => {
        this.setState({ user: null })

        sessionStorage.removeItem('userId')
    }

    render() {
        const {register, login, user, error, token} = this.state
        return <section className="landing">
                {!register && !login && !user && <button type="button" className="btn btn-primary btn-lg btn-padding" onClick={this.handleRegister}>Register</button>}
                {!register && !login && !user && <button type="button" className="btn btn-secondary btn-lg" onClick={this.handleLogin}>Login</button>}
                {register && <Register onRegisterClick={this.handleRegisterClick} />}
                {login && <Login onLoginClick={this.handleLoginClick} />}
                {error && <Error message={error} />}
                {user && <section><button onClick={this.handleLogoutClick}>Logout</button></section>}
                {user && <Home userId={user} token={token} />}
            </section>
    }
} 
module.exports = App
// export default App;
