import React, { Component } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import logic from './logic'


class App extends Component {
    state = { register: false, login: false, userId: null }

    handleRegisterClick = () => {
        this.setState({ register: true })
    }

    handleLoginClick = () => {
        this.setState({ login: true })
    }

    handleRegister = (name, surname, username, password) => {
        try {
            logic.registerUser(name, surname, username, password)

            this.setState({ login: true, register: false })
        } catch (err) {
            console.error(err.message)
        }
    }

    handleLogin = (username, password) => {
        try {
            const userId = logic.authenticate(username, password)

            this.setState({ userId, login: false, register: false })
        } catch (err) {
            console.error(err.message)
        }
    }

    render() {
        const { register, login, userId } = this.state

        return <div>
            {!register && !login && !userId && <section><button onClick={this.handleRegisterClick}>Register</button> or <button onClick={this.handleLoginClick}>Login</button></section>}
            {register && <Register onRegister={this.handleRegister} />}
            {login && <Login onLogin={this.handleLogin} />}
            {userId && <Home userId={userId} />}
        </div>
    }
}

// export default App
module.exports = App
