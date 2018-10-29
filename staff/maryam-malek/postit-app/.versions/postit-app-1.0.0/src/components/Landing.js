import React, { Component } from 'react';

class Landing extends Component {
    
    state = {register: false, login: false}
    
    handleRegisterClick = () => {
        this.setState({register: true})
        
        this.props.onRegisterClick(this.state.register)
    }
    handleLoginClick = () => {
        this.setState({login: true})
        
        this.props.onLoginClick(this.state.login)
    }
    
    render() {
        return <section>
            <h1>Welcome to Postit App</h1>
            <button onClick={this.handleRegisterClick}>Register</button>
            <button onClick={this.handleLoginClick}>Login</button>
        </section >
    }
}

export default Landing;