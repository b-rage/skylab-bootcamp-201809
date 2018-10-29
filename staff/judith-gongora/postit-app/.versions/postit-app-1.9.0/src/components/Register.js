import React, { Component } from 'react'

class Register extends Component {
    state = { name:'', surname:'', email:'', user: '' , password: ''}

    handleChangeName = event => { 

        this.setState({ name : event.target.value})
    
    }
    handleChangeSurname = event => { 

        this.setState({ surname : event.target.value})
    
    }
    handleChangeEmail = event => { 

        this.setState({ email : event.target.value})
    
    }
    handleChangeUser = event => { 

        this.setState({ user : event.target.value})
    
    }

    handleChangePass = event => { 

        this.setState({ password : event.target.value})
    
    }
    
    handleSubmit = event => {
        event.preventDefault()
        this.props.onRegisterClick(this.state.name, this.state.surname, this.state.email, this.state.user,this.state.password)
        
    }


    render() {
        return  <div className="login">
            <form className="form-login">
                <div className="form-group">
                    <label htmlFor="exampleInputName1">Name </label>
                    <input type="name" className="form-control" id="exampleInputName1" aria-describedby="NameHelp" placeholder="Enter name" value={this.state.name} onChange={this.handleChangeName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputSurname1">Surname </label>
                    <input type="Surname" className="form-control" id="exampleInputSurname1" aria-describedby="SurnameHelp" placeholder="Enter surname" value={this.state.surname} onChange={this.handleChangeSurname}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email </label>
                    <input type="Email" className="form-control" id="exampleInputEmail1" aria-describedby="EmailHelp" placeholder="Enter email" value={this.state.email} onChange={this.handleChangeEmail}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputUsername1">Username </label>
                    <input type="Username" className="form-control" id="exampleInputUsername1" aria-describedby="UsernameHelp" placeholder="Enter username" value={this.state.user} onChange={this.handleChangeUser}/>
                    <small id="UsernameHelp" className="form-text text-muted">We'll never share your Username with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.handleChangePass}/>
                </div>
                <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
 
    }
} 

module.exports = Register
// export default Register
