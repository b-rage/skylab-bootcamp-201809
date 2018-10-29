import React, {Component} from 'react'

class Login extends Component {
    state = { username: '', password: '' }

    handleLogin=this.handleLogin.bind(this)
    handleLogin(event){
        event.preventDefault()

        this.props.handleLogin(this.state.username, this.state.password)
    }

    handleInput_Username = event => {
        console.log('esta cambiando el username')

        const username = event.target.value

        this.setState({ username })
    }

    handleInput_Password = event => {
        console.log('esta cambiando el password')

        const password = event.target.value

        this.setState({ password })
    }

    render() {
        return <form onSubmit={this.handleLogin}>
            <input type="text" placeholder="Username" onChange={this.handleInput_Username} />
            <input type="text" placeholder="Password" onChange={this.handleInput_Password} />
            <button type="submit">Login</button>
        </form>
    }
}

export default Login