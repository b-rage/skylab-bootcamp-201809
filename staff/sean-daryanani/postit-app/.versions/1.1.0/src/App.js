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
        error: null,
        userID : this.getUserID()
    }

    getUserID() {
        const userID = sessionStorage.getItem('userID')

        return userID ? parseInt(userID) : null
    }

    handleRegister = () => {
        this.setState({register: !this.state.register,
        passVerification:''})

    }
    
    handleLogin = () => {
        this.setState({login: !this.state.login,
        error:null})
    }

    handleLogout = () => {
        this.setState({userID: !this.state.userID})
    }

    handleHome = () => {
        this.setState({home: !this.state.home,
        login:this.state.login})
    }

    registerSubmit = (name, email, username, password) => {
        logic.createUser(name, email, username, password)

        this.setState({
            login: true,
            register: false
        })
    }

    loginSubmit = (username, password) => {
        try {
            const userID = logic.validateUser(username, password) 

            this.setState({userID, login: false, register: false, error: null})

            sessionStorage.setItem('userID', userID)

        } catch (err) {
            this.setState({error : err.message })
        }
        
    }
     
    render() {
        const { register, login, userID, error } = this.state
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
        {userID && <Home logOut={this.handleLogout} propUserID={userID} /> }      
        </div>
    }

}

export default App

