import React, {Component} from 'react'

class LogIn extends Component {
  state = {
    name: '',
    password: ''
  }

  handleChange = (event) => {
    const input = event.target

    if (input.name === 'name') {
      this.setState({
        name: input.value
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

    this.props.onSubmit(this.state.name, this.state.password)
  }

  render() {
    return (
      <form className="form-signin" onSubmit={this.handleSubmit}>
        <h2 className="font-weight-normal text-center my-3">Post-<span className="badge badge-warning">it</span></h2>
        <input type="text" name="name" className="form-control" placeholder="Name" onChange={this.handleChange} autoFocus />
        <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.handleChange} />
        {/* <div className="d-block text-center invalid-feedback mb-3">Credentials are wrong</div> */}
        <button className="btn btn-lg btn-primary btn-block" type="submit">Log In</button>
        <p className="my-3 text-center">Don't have an account? <a href="" onClick={this.handleCLick}>Sign In</a></p>
      </form>
    )
  }
}

export default LogIn