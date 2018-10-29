import React, { Component } from 'react'
import logic from './logic'
import Login from './components/login'
import Register from './components/register'
import Landing from './components/landing';

class App extends Component {
    state = { register: false, login: false, userId: null }

    handleRegister = () => {
        this.setState({ register: true })
    }

    handleLogin = () => {
        this.setState({ login: true })
    }

    handleRegisterClick = (name, surname, username, password) => {
        try {
            logic.registerUser(name, surname, username, password)
            this.setState({ register: false, app: true })
        }catch (err) {
            console.error(err.message)       
       }
    }

    handleLoginClick = (username, password) => {
        try {
            const userId = logic.loginUser(username, password)
            console.log(logic.listPostitsByUser(userId))            
            this.setState({ userId, login: false, register: false })
        }  catch (err) {
            console.error(err.message)
        }
    }

    render() {
        const { register, login, userId } = this.state
        return <div className="landingPage">

            {!register && !login && !userId && <section><h1 className="title">Post-It App </h1><button onClick={this.handleRegister}>Register</button> or <button onClick={this.handleLogin}>Login</button></section>}
            {register && <Register onRegisterClick={this.handleRegisterClick} />}
            {login && <Login onLoginClick={this.handleLoginClick} />}
            {userId && <Landing userId={userId} />}
        </div>
    }
}
export default App