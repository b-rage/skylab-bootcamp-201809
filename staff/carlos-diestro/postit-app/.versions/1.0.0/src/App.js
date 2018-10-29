import React, { Component } from 'react'
import LogIn from './components/LogIn'
import SigIn from './components/SignIn'
import PostIt from './components/PostIt'
import logic from './logic'

class App extends Component {
  state = {
    signIn: false,
    logIn: true,
    isLoggedIn: false,
    user: {}
  }

  handleSigInSubmit = (name, email, password) => {
    // debugger

    logic.signIn(name, email, password)

    this.setState({
      signIn: false,
      logIn: true
    })
  }

  handleSigInClick = () => {
    this.setState({
      signIn: false,
      logIn: true
    })
  }

  handleLogInSubmit = (name, password) => {
    // debugger

    const user = logic.logIn(name, password)

    if (user) {
      this.setState({
        logIn: false,
        isLoggedIn: true,
        user: {
          id: user.id,
          name: user.name
        }
      })
    } else {
      console.log('bad login')
    }
  }

  handleLogInClick = () => {
    this.setState({
      signIn: true,
      logIn: false
    })
  }

  handleLogOutClick = () => {
    this.setState({
      logIn: true,
      isLoggedIn: false
    })
  }

  render() {
    return (
      <div>
        { this.state.logIn && <LogIn onSubmit={this.handleLogInSubmit} onClick={this.handleLogInClick} /> }
        { this.state.signIn && <SigIn onSubmit={this.handleSigInSubmit} onClick={this.handleSigInClick} /> }
        { this.state.isLoggedIn && <PostIt user={this.state.user} session={this.state.isLoggedIn} onClick={this.handleLogOutClick} /> }
      </div>
    )
  }
}

export default App