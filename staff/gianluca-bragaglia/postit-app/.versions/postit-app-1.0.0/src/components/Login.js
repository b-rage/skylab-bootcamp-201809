import React, {Component} from 'react'

class Login extends Component {
    state = { username: '', password: '' }

    handleUsernameLoginChange = event => {
        const username = event.target.value

        this.setState({ username })
    }

    handlePasswordLoginChange = event => {
        const password = event.target.value

        this.setState({ password })
    }


    handleSubmit = event => {
        event.preventDefault()

        const {username, password } = this.state

        this.props.onLoginClick(username, password)
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Username" onChange={this.handleUsernameLoginChange}/>
            <input type="password" placeholder="Password" onChange={this.handlePasswordLoginChange} />
            <button type="submit">Login</button>
        </form>
    }
}

export default Login