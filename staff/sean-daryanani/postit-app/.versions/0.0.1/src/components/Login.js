import React, { Component } from 'react'

class Login extends Component {
    state = {
        username: '',
        password: '',

    }

    handleUsername = event => {
        const username = event.target.value

        this.setState({username})
    }

    handlePassword = event => {
        const password = event.target.value

        this.setState({password})
    }

    passwordValidation = (event) => {
        event.preventDefault()

        this.props.onLoginClick(this.state.username, this.state.password)

    
    }

    render() {
        let wrongPass;

        let wrongUser;

        if (this.props.wrongPassword==='incorrect password') wrongPass=true

        if (this.props.wrongPassword==='incorrect username') wrongUser=true
        
        return <section className="login">
        <h1>Login</h1>
        
        <form className="form-group" onSubmit={this.passwordValidation}>
             <div className="form-group">
            <input className="form-control" required onChange={this.handleUsername} value={this.state.username} type="text" placeholder="username" />
            </div>
            <div className="form-group">
            <input className="form-control" onChange={this.handlePassword} value={this.state.password} type="password" placeholder="password" />
            </div>
            <div className="form-group">
            <button className="btn-register btn btn-primary">Submit</button>
            </div>
        </form>        
        <button className="btn-register btn btn-link" onClick={this.props.backHandle}>Back to home page</button>    
        {wrongPass ? <p>Incorrect password!</p> : null}
        {wrongUser ? <p>Incorrect username!</p> : null}
        </section>       
    }
}

export default Login