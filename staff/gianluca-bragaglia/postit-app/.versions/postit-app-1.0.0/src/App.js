import React, { Component } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import Error from './components/Error'
import logic from './logic'


class App extends Component {

  state = { register: false, login: false,  userId: this.getUserId(), error: null }


  getUserId() {
    const userId = sessionStorage.getItem('userId')

    return userId ? parseInt(userId) : null
  }

  handleRegister = () => {
    this.setState({ register: true })
  }

  handleLogin = () => {
      this.setState({ login: true, register: false })
     
  }

  handleRegisterClick = (name, surname, username, password) => {
    try {
      logic.registerUser(name, surname, username, password)

      this.setState({ login: true, register: false, error: null })
  } catch (err) {
     this.setState({error: err.message})
  }
     
  }

  handleLoginClick = (username, password) => {
    
      try{
        const userId = logic.loginUser(username, password)
        this.setState({userId, login: false, register: false, error: null})
        sessionStorage.setItem('userId', userId)
      }catch(err) {
        this.setState({error: err.message})
      }
        
  }

  handleLogoutClick = () => {
    this.setState({ userId: null })
    sessionStorage.removeItem('userId')
  }

  render() {

      const { register, login, userId, error } = this.state

      return  <div className="container">
                {!register && !login && !userId && <section>
                  <button onClick={this.handleRegister}>Register</button> 
                or <button onClick={this.handleLogin}>Login</button>
                </section>}
                {this.state.register && <Register onRegisterClick={this.handleRegisterClick} />}
                {this.state.login && <Login onLoginClick={this.handleLoginClick}/>}
                {error && <Error message={error}/>}
                {userId && <section><button onClick={this.handleLogoutClick}>Logout</button></section>}
                {this.state.userId && <Home userId={userId}/>}
                
              </div>
      
      
         
  }
}

export default App;




