import React, {Component} from 'react'


export default class Login extends Component{
    
   
    state = { message:"", username: '', password: '' }

    componentWillReceiveProps(props){

        this.setState({message:props.message}, () => {

            setTimeout(() => {
                this.setState({message:""})                
            }, 3000)

        });
    }
    
    handleUsername = event => {
        const username = event.target.value

        this.setState({ username })
    }

    handlePassword = event => {
        const password = event.target.value

        this.setState({ password })
    }

    handleSubmit = event => {      //envia el state (que son los value de los inputs guardados con las funciones de arriba) al padre mediante la callback handleLogin que nos ha pasado éste mediante props
        event.preventDefault();

        this.props.onLogin(this.state)
    }
    
    handleClickRegister = () =>{

        this.setState({username:"", password:""})
        this.props.onClickRegister()
    }

    render(){
        return (
                          
                <form className="custom-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input value={this.state.username} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Username" onChange= {this.handleUsername} />
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Password</label>
                    <input value={this.state.password} type="password" className="form-control" aria-describedby="emailHelp" placeholder="Password" onChange={this.handlePassword} />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <button onClick={this.handleClickRegister} type="button" className="btn btn-primary">Register</button>
                    <h2>{this.state.message}</h2>
                </form>
           
        );
    }
}
