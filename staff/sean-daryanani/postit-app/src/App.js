import React, { Component } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import logic from './logic'
import Home from './components/Home'
import Error from './components/Error'

class App extends Component {
    state = {
        register: false, 
        login: false,
        userID: null,
        error: null,
    }

    handleRegister = () => {
        this.setState({register: !this.state.register})

    }
    
    handleLogin = () => {
        this.setState({login: !this.state.login,
        error:null})
    }

    handleLogout = () => {
        this.setState({userID: null})

        sessionStorage.removeItem('userID')
    }

    handleHome = () => {
        this.setState({home: !this.state.home,
        login:this.state.login})
    }

    registerSubmit = (name, surname, username, password) => {
        try {
            logic.createUser(name, surname, username, password)
                .then(() => this.setState({login: true, register: false, error: null}))
                .catch (err => this.setState({error: err.message}))
        } catch(err) {
            this.setState({error: err.message})
        }
    }



    loginSubmit = (username, password) => {

        try {
            logic.validateUser(username, password) 
                .then(({id, token}) => {
                    sessionStorage.setItem('userId', id)
                    sessionStorage.setItem('token', token)
                    this.setState({ userID: id, token, login: false, register: false, error: null })})
                    .catch(err => this.setState({ error: err.message }))
        }catch(err) {
            this.setState({error: err.message})
        }
        
    }
     
    render() {
        const { register, login, userID, error, token } = this.state
        return <div className="main-container">       
        {!register && !login && !userID &&             
            <section className="landing-section">
            <h1>Welcome to the Postit App!</h1>
            <button className="btn-landing btn btn-primary btn-lg" onClick={this.handleRegister}>Register</button>
            <button className="btn-landing btn btn-primary btn-lg" onClick={this.handleLogin}>Login</button>
            </section>}
        {register && <Register onRegisterClick={this.registerSubmit} backHandle={this.handleRegister}/>}
        {login && <Login onLoginClick={this.loginSubmit} backHandle={this.handleLogin} />} 
        {error && <Error message={error}/>}
        {userID && <Home logOut={this.handleLogout} propUserID={userID} token={token} /> }      
        </div>
    }

}

export default App

