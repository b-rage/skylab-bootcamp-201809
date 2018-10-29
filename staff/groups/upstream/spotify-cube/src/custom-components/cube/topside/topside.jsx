import React, {Component} from 'react'
import Login from '../../login/login';
import Header from '../../header/header'
import userService from '../../../services/userlogic'

export default class TopSide extends Component{

    state = {isLogged:false, message:""}

    componentWillMount(){
        let session = userService.getSessionFromStorage();
        if (session){
            this.setState({isLogged:true})
            this.props.onLogin(true)
        }
    }

    handleLogin = ({ username, password }) => {
        
        try {
            userService.authenticateUser(username, password)
                .then((data) => {
                   
                   sessionStorage.setItem("user",JSON.stringify(data))
                   this.setState({isLogged:true}, () => {
                       
                       this.props.onLogin(true)
                   })

                })
                .catch(err => this.setState({message:err.message}))
        } catch (err) {
            this.setState({message:err.message})
        }
    }

    handleLogout = () =>{

        sessionStorage.clear();
        this.setState({isLogged:false}, () =>{
            
            this.props.onLogout()
            
        })

    }

  

    render(){
        return (
            <section className="top">
                <Header></Header>
                {!this.state.isLogged && <Login message = {this.state.message} onClickRegister = {this.props.onClickRegister} onLogin={this.handleLogin}></Login>}
               {this.state.isLogged && <section className="top__seccion-button">
                    <button onClick={this.handleLogout} className="btn btn-warning">Logout</button>
                </section>}
            </section>
        );
    }
}
