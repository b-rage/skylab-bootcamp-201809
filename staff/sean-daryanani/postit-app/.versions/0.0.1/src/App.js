import React, { Component } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import logic from './logic'
import Home from './components/Home'

class App extends Component {
    state = {
        register: false, 
        login: false,
        home: false,
        passVerification: '',
        userID : 0
    }

    handleRegister = () => {
        this.setState({register: !this.state.register,
        passVerification:''})

    }
    
    handleLogin = () => {
        this.setState({login: !this.state.login,
        passVerification:''})
    }

    handleLogout = () => {
        this.setState({home: !this.state.home})
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
        const result = logic.validateUser(username, password)
        if (typeof result==='object'){

            const verificationMessage = result[0]
            const userID = result[1]

            this.setState({passVerification: verificationMessage, 
                userID : userID,
            home:!this.state.home}, console.log(this.state.passVerification, this.state.userID))
        }

        else {
            this.setState({passVerification : result})
        }

        
    }
     
    render() {
        if (this.state.passVerification==='correct password' && this.state.home===true) return <Home logOut={this.handleLogout} propUserID={this.state.userID} />
        return <div className="register-and-login-container">
       
        {!this.state.register && !this.state.login &&             
            <section className="landing-section">
            <h1>Welcome to the Postit App!</h1>
            <button className="btn-landing btn btn-primary btn-lg" onClick={this.handleRegister}>Register</button>
            <button className="btn-landing btn btn-primary btn-lg" onClick={this.handleLogin}>Login</button>
            </section>}
        {this.state.register && <Register onRegisterClick={this.registerSubmit} backHandle={this.handleRegister}/>}
        {this.state.login && <Login onLoginClick={this.loginSubmit} backHandle={this.handleLogin} wrongPassword={this.state.passVerification} />} 
        

        </div>
    }

}

export default App

