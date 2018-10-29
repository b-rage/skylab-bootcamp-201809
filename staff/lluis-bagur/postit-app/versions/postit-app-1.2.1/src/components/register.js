import React, { Component } from 'react'

class Register extends Component {
    state = { username: '', name: '', surname: '', password: '' }

    handleNameChange = event => { //repetir para todos los campos
        const name = event.target.value

        this.setState({ name })
    }

    handleSurnameChange = event => { //repetir para todos los campos
        const surname = event.target.value

        this.setState({ surname })
    }

    handleUsernameChange = event => { //repetir para todos los campos
        const username = event.target.value

        this.setState({ username })
    }

    handlePasswordChange = event => { //repetir para todos los campos
        const password = event.target.value

        this.setState({ password })
    }

    handleSubmit = event => {
        event.preventDefault()

        const { name, surname, username, password } = this.state

        this.props.onRegisterClick(name, surname, username, password)
    }

    


    render() {

        return <form onSubmit={this.handleSubmit}>
        <input className="inputDates" type="text" placeholder="Name..."  onChange={this.handleNameChange}/>
        <input className="inputDates" type="text"  placeholder="Surname..."  onChange={this.handleSurnameChange}/>
        <input className="inputDates" type="text" placeholder="Username..."  onChange={this.handleUsernameChange}/>
        <input className="inputDates" type="password"  placeholder="password..."  onChange={this.handlePasswordChange}/>

        <button type="submit">Register</button>
    </form>
    }
}

export default Register