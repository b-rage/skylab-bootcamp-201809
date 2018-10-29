import React, { Component } from 'react'
import logo from '../icon1.png'

class Register extends Component {
    state = { name: '', surname: '', username: '', password: '' }

    handleNameChange = event => {
        const name = event.target.value

        this.setState({ name })
    }

    handleSurnameChange = event => {
        const surname = event.target.value

        this.setState({ surname })
    }

    handleUsernameChange = event => {
        const username = event.target.value

        this.setState({ username })
    }

    handlePasswordChange = event => {
        const password = event.target.value

        this.setState({ password })
    }

    handleLogin = event => {
        event.preventDefault()
        this.props.onGoBack()

    }

    handleSubmit = event => {
        event.preventDefault()

        const { name, surname, username, password } = this.state

        this.props.onRegister(name, surname, username, password)
    }

    render() {
        return <div className="landing"> 
            <div className="landing__page">
                <div className="group__register">
                    <div className="login__center">  
                    <div className="logo-l"><img className="logo__img-l" src={logo}></img> </div>     
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="Name" onChange={this.handleNameChange} />
                            <input type="text" placeholder="Surname" onChange={this.handleSurnameChange} />
                            <input type="text" placeholder="Username" onChange={this.handleUsernameChange} />
                            <input type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                            <button className="login__submit" type="submit">Register</button> 
                        </form>
                        <a className="login__back" href="#" onClick={this.handleLogin}>Si ya estás logeado. Inicia sensión aquí.</a>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Register