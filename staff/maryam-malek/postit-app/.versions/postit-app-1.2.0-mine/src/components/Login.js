import React, { Component } from 'react';

class Login extends Component {
  state = {username: '', password:''}
  
  handleUsernameChange = event => {
    const username = event.target.value
   
    this.setState({ username })
  }
  handlePasswordChange = event => {
    const password = event.target.value
  
    this.setState({ password })
  }

  handleSubmit = event => {
    event.preventDefault()
 
    this.props.onSubmit(this.state.username, this.state.password)
  }

  render() {
    return <section>
      <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Username...' onChange={this.handleUsernameChange}></input>
        <input type='password' placeholder='Password...' onChange={this.handlePasswordChange}></input>
        <button type='submit'>Login</button>
      </form>

    </section >
  }
}

export default Login;