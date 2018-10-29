import React, {Component} from 'react'
import userService from '../../services/userlogic'



export default class Register extends Component{

  
    state = {registerMessage:"", name: '', surname: '', email: '', username: '', password: '' }

    handleNameChange = event => {
        const name = event.target.value

        this.setState({ name })
    }

    handleSurnameChange = event => {
        const surname = event.target.value

        this.setState({ surname })
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

    handleSubmit = event => {
        event.preventDefault()

        const { name, surname, email, username, password } = this.state

            try {
                userService.registerUser(name, surname, email, username, password)
                    .then(() => {
                        this.setState({ registerMessage: "User registered correctly", name: '', surname: '', email: '', username: '', password: '' }, () => {
                            
                            setTimeout(() => {
                                this.setState({registerMessage:""})                
                            }, 3000)
    
                        })
                    })
                    .catch(err => this.setState({ registerMessage: err.message }))
            } catch (err) {
                this.setState({ registerMessage: err.message }, () =>{

                    setTimeout(() => {
                        this.setState({registerMessage:""})                
                    }, 3000)
                })
            }
        
    }
    
    handleClickLogin = () =>{

        this.setState({name: '', surname: '', email: '', username: '', password: '' })
        this.props.onClickLogin();
        
    }

    render(){
        return (  <form className="custom-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        
                        <input value={this.state.name} type="text"  className="form-control"  placeholder="Name" onChange={this.handleNameChange} />
                    </div>
                    <div className="form-group">
                        
                        <input value={this.state.surname} type="text" className="form-control"  placeholder="Surname" onChange={this.handleSurnameChange}  />
                    </div>
                    <div className="form-group">
                       
                        <input value={this.state.email} type="email" className="form-control"  placeholder="Email" onChange={this.handleEmailChange}  />
                    </div>
                   <div className="form-group">
                      
                        <input value={this.state.username} type="text" className="form-control"  placeholder="Username" onChange={this.handleUsernameChange}  />
                    </div>
                    <div className="form-group">
                       
                        <input value={this.state.password} type="password" className="form-control"  placeholder="Password" onChange={this.handlePasswordChange}  />
                    </div>
               
                    <button type="submit" className="btn btn-primary">Register</button>
                    <button onClick={this.handleClickLogin} type="button" className="btn btn-primary">Login</button>
                    <h2>{this.state.registerMessage}</h2>
                </form>

           
        );
    }
}
