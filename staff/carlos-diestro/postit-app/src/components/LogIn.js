import React, {Component} from 'react'

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

  handleCLick = (event) => {
    event.preventDefault()

    this.props.onClick()
  }

  handleSubmit = (event) => {
    event.preventDefault()

    try {
      this.props.onSubmit(this.state.username, this.state.password)
        .catch(error => this.setState({ status: error.message }))
    } catch(error) {
      this.setState({ status: error.message })
    }
  }

  render() {
    return (
      <form className="form-signin" onSubmit={this.handleSubmit}>
        <h2 className="font-weight-normal text-center my-3">Post-<span className="badge badge-warning">it</span></h2>
        <input type="text" name="username" className="form-control" placeholder="Username" onChange={this.handleChange} autoFocus />
        <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.handleChange} />
        <div className="invalid-feedback d-block my-3 text-center">{this.state.status}</div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Log In</button>
        <p className="my-3 text-center">Don't have an account? <a href="" onClick={this.handleCLick}>Sign In</a></p>
      </form>
    )
  }
}

export default LogIn