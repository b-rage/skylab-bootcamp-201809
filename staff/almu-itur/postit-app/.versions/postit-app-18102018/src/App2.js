import React, { Component } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import logic from './logic2'
import Home from './components/Home'


class App extends Component {
    state = { register: false, login: false, home: false }

    handleRegister = () => {
        this.setState({ register: true })
    }

    handleLogin = () => {
        this.setState({ login: true })
    }

    handleRegisterClick = (name, surname, username, password) => {
        logic.registerUser(name, surname, username, password)
        this.setState({ login: true , register: false})
    }

    handleLoginClick = (username, password) => {

        this.user = logic.loginUser(username, password);
        if (this.user) { 
            this.setState({ login: false , home: true})            
        }
        else { alert('not ok') }
    }

    render() {
        return <div>
            {!this.state.register && !this.state.login && !this.state.home && <section><button onClick={this.handleRegister}>Register</button> or <button onClick={this.handleLogin}>Login</button></section>}
            {this.state.register && <Register onRegisterClick={this.handleRegisterClick} />}
            {this.state.login && <Login onLoginClick={this.handleLoginClick} />}
            {this.state.home && <Home user={this.user}/>}

        </div>
    }
}

export default App
