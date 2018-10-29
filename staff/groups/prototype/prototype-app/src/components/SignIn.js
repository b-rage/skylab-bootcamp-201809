import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'
import logic from '../logic'

class SigIn extends Component {
  state = {
    username: '',
    email: '',
    name: '',
    surname: '',
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

    if (input.name === 'email') {
      this.setState({
        email: input.value
      })
    }

    if (input.name === 'name') {
      this.setState({
        name: input.value
      })
    }

    if (input.name === 'surname') {
      this.setState({
        surname: input.value
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
    logic.signIn(
      this.state.username,
      this.state.email, this.state.name,
      this.state.surname,
      this.state.password
    ).then(() => {this.props.history.push('/login')})
      .catch(error => this.setState({ status: error.message }))
    } catch(error) {
      this.setState({ status: error.message })
    }

  }

  render() {
    return (
      <form className="form-signin" onSubmit={this.handleSubmit}>
        <input type="text" name="username" className="form-control" placeholder="Username" onChange={this.handleChange} autoFocus />
        <input type="text" name="email" className="form-control" placeholder="Email" onChange={this.handleChange} />
        <input type="text" name="name" className="form-control" placeholder="Name" onChange={this.handleChange} />
        <input type="text" name="surname" className="form-control" placeholder="Surname" onChange={this.handleChange} />
        <input type="password" name="password" className="form-control"  placeholder="Password" onChange={this.handleChange} />
        <div className="invalid-feedback d-block my-3 text-center">{this.state.status}</div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign In</button>
        <p className="my-3 text-center">Already have an account? <Link to="/login">Log In</Link></p>
      </form>
    )
  }
}

export default withRouter(SigIn)