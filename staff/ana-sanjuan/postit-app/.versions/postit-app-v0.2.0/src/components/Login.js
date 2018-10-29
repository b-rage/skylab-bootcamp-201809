import React, {Component} from 'react'

class Login extends Component {
    state = {username: '', password: '', id: ''}

    handleUsernameChange = event => {
        const username = event.target.value

        this.setState({username})
    }

    handlePasswordChange = event => {
        const password = event.target.value

        this.setState({password})
    }

    handleSubmit = event =>{
        event.preventDefault()

        const {username, password} = this.state

        this.props.onLoginClick(username, password)

    }

    render(){
        return<form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Username' onChange={this.handleUsernameChange}></input>
        <input type='password' placeholder='Password' onChange={this.handlePasswordChange}></input>
        <button type='Submit'>Submit</button>
    </form>
    }

}

export default Login