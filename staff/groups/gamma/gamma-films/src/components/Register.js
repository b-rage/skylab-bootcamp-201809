import React, { Component } from 'react'
import logic from '../logic'
import { Route, withRouter, Redirect } from 'react-router-dom'
import Error from './Error'


class Register extends Component {

    state = {
        name: '',
        surname: '',
        username: '',
        password: '',
        repeatPassword: '',
        error: ''
    }

    handleNameChange = event => {
        const name = event.target.value
        this.setState({ name })
    }


    handleSurnameChange = event => {
        const surname = event.target.value
        this.setState({ surname })
    }

    handleUserNameChange = event => {
        const username = event.target.value
        this.setState({ username })
    }

    handlePasswordChange = event => {
        const password = event.target.value
        this.setState({ password })
    }

    handleRepeatPasswordChange = event => {
        const repeatPassword = event.target.value
        this.setState({ repeatPassword })
    }

    handleSubmit=this.handleSubmit.bind(this)

    handleSubmit (event){
        event.preventDefault()
        const { name, surname, username, password } = this.state

        try {
            logic.registUser(name, surname, username, password)
                .then(() => this.setState({ error: null }))
                .then(() => this.props.history.push('/login'))
                .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    }


    render() {


        return <div className="login_component">
            <form className="login_form" onSubmit={this.handleSubmit}>

                <label className="login_back">Name</label>
                <input className="form-control" type='text' placeholder="Name" onChange={this.handleNameChange}></input>

                <label className="login_back">Surname</label>
                <input className="form-control" type='text' placeholder="Surname" onChange={this.handleSurnameChange}></input>

                <label className="login_back">Username</label>
                <input className="form-control" type='text' placeholder="Username" onChange={this.handleUserNameChange}></input>

                <label className="login_back">Password</label>
                <input className="form-control" type='password' placeholder="Password" onChange={this.handlePasswordChange}></input>

                <label className="login_back">Repeat password</label>
                <input className="form-control" type='password' placeholder="Repeat password" onChange={this.handleRepeatPasswordChange}></input>

                {this.state.error && <Error message={this.state.error} />}
                
                <button className="btn btn-outline-secondary" type='submit'>Register</button>
                <a className="btn btn-link" href="#" onClick={this.props.onGoBack}>back</a>

            </form>
        </div>

    }
}

export default Register