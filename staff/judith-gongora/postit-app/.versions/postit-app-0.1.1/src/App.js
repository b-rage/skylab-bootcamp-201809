import React, { Component } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import logic from './logic'

class App extends Component {
    state = { register : false, login : false, home : false}

    handleRegister = () =>{
        this.setState({register :true })
    }
    handleLogin = () =>{
        this.setState({login :true })
    }
    handleHome = () =>{
        this.setState({home :true })
        this.setState({login :false })
    }
    handleRegisterClick = (name, surname, email, user, password) => {
        logic.createUser(name, surname, email, user, password)
        this.setState({register :false })
        this.setState({login :true })
    }

    handleLoginClick = (user, password) => {
        if(logic.loginUser(user, password)) this.handleHome()
        else alert('incorrect')
    }

    render() {
        return <section className="landing">
                {!this.state.register && !this.state.login && !this.state.home &&<button type="button" className="btn btn-primary btn-lg btn-padding" onClick={this.handleRegister}>Register</button>}
                {!this.state.register && !this.state.login && !this.state.home &&<button type="button" className="btn btn-secondary btn-lg" onClick={this.handleLogin}>Login</button>}
                {this.state.register && <Register onRegisterClick={this.handleRegisterClick} />}
                {this.state.login && <Login onLoginClick={this.handleLoginClick} />}
                {this.state.home && <Home onHomeClick={this.handleHomeClick} />}
            </section>
    }
} 

export default App;
