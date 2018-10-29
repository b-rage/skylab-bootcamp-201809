import React, { Component } from 'react'
import Home from './components/Home'
import Landing from './components/Landing'
import Register from './components/Register'
import Login from './components/Login'
import logic from './logic'



class App extends Component {
    state={landing: true, register:false, login:false, home: false}

    handleRegisterSubmit = (name, surname, username, password) => {

        logic.registerUser(name, surname, username, password)

        this.setState({register: false, login:true})
    }

    handleLoginClick = login => {
        login && this.setState({login: true, landing: false})
    }

    handleRegisterClick = register => {
        register && this.setState({register: true, landing: false})   
    }

    handleLoginSubmit = (username, password) => {

        let message = logic.loginUser(username, password)

        if(message === 'allright'){
            
            this.setState({login: false, home: true})
            
        } else if(message === 'username'){
            console.log('Wrong username')
        } else{
            console.log('Wrong password')
        }


    }

    render() {
        return <section>
            {this.state.landing && <Landing onLoginClick={this.handleLoginClick} onRegisterClick={this.handleRegisterClick}/>}
            {this.state.register && <Register onSubmit={this.handleRegisterSubmit} />}
            {this.state.login && <Login onSubmit={this.handleLoginSubmit}/>}
            {this.state.home && <Home />}
        </section >
    }
}

export default App;
