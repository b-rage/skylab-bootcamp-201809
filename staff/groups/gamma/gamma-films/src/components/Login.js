import React, { Component } from 'react'
import logic from '../logic'
import Error from './Error'

class Login extends Component {
    state = { username: '', password: '', error: '' }

    handleUsernameChange = event => {
        const username = event.target.value

        this.setState({ username })
    }

    handlePasswordChange = event => {
        const password = event.target.value

        this.setState({ password })

    }

    handleSubmit = this.handleSubmit.bind(this)
    handleSubmit(event) {
        event.preventDefault()

        const { username, password } = this.state

        try {
            logic.loginUser(username, password)
                .then(() => this.setState({ error: "" }))
                .then(() => this.props.history.push('/'))
                .then(() => this.props.isLoggedIn())
                .catch(err => this.setState({ error: err.message }))

        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    verResultados = event => {
        event.preventDefault()
    }

    render() {
        return <div className="login_component">
            <form className="login_form" onSubmit={this.handleSubmit}>
                <input type="text" className="form-control" type="text" placeholder="Username" onChange={this.handleUsernameChange} />
                <br></br>
                <input type="password" className="form-control" type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                <br></br>
                {this.state.error && <Error message={this.state.error} />}
                <button className="btn btn-outline-secondary" type="submit">Login</button>
                <a className="btn btn-link" href="#" onClick={this.props.onGoBack}>back</a>
            </form>
        </div>
    }
}

export default Login