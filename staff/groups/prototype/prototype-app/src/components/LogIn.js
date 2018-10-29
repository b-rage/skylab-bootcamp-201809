import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import logic from '../logic'

class LogIn extends Component {
  state = {
    username: '',
    password: '',
    status: ''
  }

  handleChange = (event) => {
    const input = event.target

    if (input.name === 'username') {
      this.setState({
        username: input.value
      })
    }

    if (input.name === 'password') {
      this.setState({
        password: input.value
      })
    }
  }

  // handleCLick = (event) => {
  //   event.preventDefault()

  //   this.props.onClick()
  // }

  handleSubmit = (event) => {
    event.preventDefault()

    try {
      logic.logIn(this.state.username, this.state.password)
        .then(() => { logic.retrieveUserData() })
        .then(() => { this.props.history.push('/') })
        .catch(error => this.setState({ status: error.message }))
    } catch (error) {
      this.setState({ status: error.message })
    }
  }

  render() {
    return (
      <form className="form-signin" onSubmit={this.handleSubmit}>
        <input type="text" name="username" className="form-control" placeholder="Username" onChange={this.handleChange} autoFocus />
        <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.handleChange} />
        <div className="invalid-feedback d-block my-3 text-center">{this.state.status}</div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Log In</button>
        <p className="my-3 text-center">Don't have an account? <Link to="/signin">Sign In</Link></p>
      </form>
    )
  }
}

export default withRouter(LogIn)