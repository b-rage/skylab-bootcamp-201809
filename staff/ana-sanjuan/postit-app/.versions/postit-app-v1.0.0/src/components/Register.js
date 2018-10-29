import React, {Component} from 'react'

class Register extends Component {

    state = {name: '', surname: '', username: '', password: ''}


    handleNameChange = event => {
        const name = event.target.value

        this.setState({name})
    }

    handleSurnameChange = event => {
        const surname = event.target.value

        this.setState({surname})
    }

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

        const {name, surname, username, password} = this.state

        this.props.onRegisterClick(name, surname, username, password)

    }

    render(){
        return<form onSubmit={this.handleSubmit}>
            <input type='text' placeholder='Name' onChange={this.handleNameChange}></input>
            <input type='text' placeholder='Surname' onChange={this.handleSurnameChange}></input>
            <input type='text' placeholder='Username' onChange={this.handleUsernameChange}></input>
            <input type='password' placeholder='Password' onChange={this.handlePasswordChange}></input>
            <button type='Submit'>Submit</button>
        </form>
    }

}

export default Register