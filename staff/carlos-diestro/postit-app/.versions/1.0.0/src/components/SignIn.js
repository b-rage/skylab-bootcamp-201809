import React, {Component} from 'react'

class SigIn extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

  handleChange = (event) => {
    const input = event.target

    if (input.name === 'name') {
      this.setState({
        name: input.value
      })
    }

    if (input.name === 'email') {
      this.setState({
        email: input.value
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

    // debugger

    this.props.onSubmit(this.state.name, this.state.email, this.state.password)
  }

  render() {
    return (
      <form className="form-signin" onSubmit={this.handleSubmit}>
        <h2 className="font-weight-normal text-center my-3">Post-<span className="badge badge-warning">it</span></h2>
        <input type="text" name="name" className="form-control" placeholder="Name" onChange={this.handleChange} autoFocus />
        <input type="text" name="email" className="form-control" placeholder="Email" onChange={this.handleChange} />
        <input type="password" name="password" className="form-control"  placeholder="Password" onChange={this.handleChange} />
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign In</button>
        <p className="my-3 text-center">Already have an account? <a href="" onClick={this.handleCLick}>Log In</a></p>
      </form>
    )
  }
}

export default SigIn