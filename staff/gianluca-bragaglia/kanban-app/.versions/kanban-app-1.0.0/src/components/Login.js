import React, {Component} from 'react'

class Login extends Component {
    state = { username: '', password: '' }

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

        const { username, password } = this.state

        this.props.onLogin(username, password)
    }

    render() {
     
        return <form className='form' onSubmit={this.handleSubmit}>
            <input className='input' type="text" placeholder="Username" onChange={this.handleUsernameChange} />
            <br></br>
            <input className='input' type="password" placeholder="Password" onChange={this.handlePasswordChange} />
            <br></br>
            <button className='btn-login2' type="submit">Login</button> 
            <br></br>
            <a className='back' href="#" onClick={this.props.onGoBack}>back</a>
        </form>
    }
}

export default Login