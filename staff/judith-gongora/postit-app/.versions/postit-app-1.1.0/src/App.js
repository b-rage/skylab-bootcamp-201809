import React, { Component } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import logic from './logic'

class App extends Component {
    state = { register : false, login : false, home : false, user: '', post: '', postits: logic.listPostits()}

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
            
            const result = this.state.postits.filter(postit => postit.user === log)

            this.setState({post : result, user : log}, this.handleHome)

        } catch (err) {
            console.error(err.message)
        }
        
    }

    render() {
        const {register, login, home} = this.state
        return <section className="landing">
                {!register && !login && !home && <button type="button" className="btn btn-primary btn-lg btn-padding" onClick={this.handleRegister}>Register</button>}
                {!register && !login && !home && <button type="button" className="btn btn-secondary btn-lg" onClick={this.handleLogin}>Login</button>}
                {register && <Register onRegisterClick={this.handleRegisterClick} />}
                {login && <Login onLoginClick={this.handleLoginClick} />}
                {home && <Home onHomeClick={this.state.user} onPostits={this.state.post}/>}
            </section>
    }
} 

export default App;
