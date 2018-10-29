import React, { Component } from 'react'

class Login extends Component {
    state = { user: '' , password : ''}

    handleChangeUser = event => { //event aqui es el parametro de entrada

        this.setState({ user : event.target.value})
    
    }

    handleChangePass = event => { //event aqui es el parametro de entrada

        this.setState({ password : event.target.value})
    
    }
    
    handleSubmit = event => {
        event.preventDefault()
        this.props.onLoginClick(this.state.user,this.state.password)
        
    }

    render() {
        return  <div className="login">
            <form className="form-login">
                <div className="form-group">
                <label htmlFor="exampleInputUsername1">Username </label>
                <input type="Username" className="form-control" id="exampleInputUsername1" aria-describedby="UsernameHelp" placeholder="Enter username" value={this.state.user} onChange={this.handleChangeUser}/>
                <small id="UsernameHelp" className="form-text text-muted">We'll never share your Username with anyone else.</small>
                </div>
                <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.handleChangePass}/>
                </div>
                <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
 
    }
} 
module.exports = Login
// export default Login
