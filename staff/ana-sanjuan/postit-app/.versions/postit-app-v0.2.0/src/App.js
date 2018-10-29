import React, { Component } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import logic from './logic'

class App extends Component {
    state = { register: false, login: false, home: false}

    handleRegister = () => { 
        this.setState({register: true})
    }

    handleLogin = () => {
        this.setState({login: true})
    }

    handleRegisterClick = (name, surname, username, password) => {
        logic.registerUser(name, surname, username, password)
        this.setState({register: false})
        this.setState({login: true})
    }

    handleLoginClick = (username, password) => {
        const gologin = logic.authenticate(username, password)

        if(gologin) {
            this.setState({home: true})
            this.setState({login: false})
           
        } else {
            alert('incorrect password or username')
        }

    }

    render() {
        return <div> 
            {!this.state.register && !this.state.login && !this.state.home && <section>
                <button onClick={this.handleRegister} >Register</button>
                <button onClick={this.handleLogin}>Log In</button>
            </section>}
            {this.state.register && <Register onRegisterClick = {this.handleRegisterClick}/>}
            {this.state.login && <Login onLoginClick = {this.handleLoginClick}/>}
            {this.state.home && <Home />}
        </div>
    }
}

export default App
