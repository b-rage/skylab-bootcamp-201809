import React, {Component} from 'react'
import { Button, Input } from "mdbreact"

class Register extends Component {
    state = { name: '', email: '', username: '', password: '', passwordRepeat: '' }

    handleNameChange = event => {
        const name = event.target.value

        this.setState({ name })
    }

    handleEmailChange = event => {
        const email = event.target.value

        this.setState({ email })
    }

    handleUsernameChange = event => {
        const username = event.target.value

        this.setState({ username })
    }

    handlePasswordChange = event => {
        const password = event.target.value

        this.setState({ password })
    }

    handleRepeatPasswordChange = event => {
        const passwordRepeat = event.target.value

        this.setState({ passwordRepeat })
    }

    handleSubmit = event => {
        event.preventDefault()

        const { name, email, username, password, passwordRepeat } = this.state

        this.props.onRegister(name, email, username, password, passwordRepeat)
    }

    render() {
        return <div className="register-container">

        <form onSubmit={this.handleSubmit}>

            <Input type="text" label="Name" onChange={this.handleNameChange} />

            <Input type="text" label="Email" onChange={this.handleEmailChange} />

            <Input type="text" label="Username" onChange={this.handleUsernameChange} />

            <Input type="password" label="Password" onChange={this.handlePasswordChange} />

            <Input type="password" label="Repeat Password" onChange={this.handleRepeatPasswordChange} />

            <div className="button-container">
            
            <Button color="unique" type="submit">Register</Button> <a id="back-btn" href="#" onClick={this.props.onGoBack}>Back</a>
            </div>
        </form>
        </div>
    }
}

export default Register