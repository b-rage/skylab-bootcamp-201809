import React, {Component} from 'react'
import Error from './Error'
import { Link } from 'react-router-dom'

class LogIn extends Component {
    state = { username: '', password: ''}

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
        const {username,password} = this.state
        this.props.onLogInSubmit( username, password)
    }

    render() {
        return <div className="login">
            <div className="login__title">
                <img className="login__logo" src="/img/skytube.logo.png" alt="logo"></img>
                <h1>SkyTube</h1>
            </div>
            <Error error={this.props.error} />
            <form className = "form" onSubmit={this.handleSubmit}>
                <h4 className = "form__label" >Username</h4>
                <input className = "form__input" onChange={this.handleUsernameChange}/>
                <h4 className = "form__label" >Password</h4>
                <input className = "form__input" type='password' onChange={this.handlePasswordChange}/>
                <button className = "form__button" type='submit'>Log In</button>
                <Link onClick = {this.props.onClick} className = "form__return" to='/'>Go back</Link>
            </form>
        </div>
    }
}

export default LogIn
