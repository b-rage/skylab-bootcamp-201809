import React from 'react'
import logic from '../services/logic'
import userService from '../services/userService'
import LoginModalComponent from './loginmodal'
import RegisterModalComponent from './registermodal'
import ModalComponent from './modal'
import PostItComponent from './postit'
import $ from 'jquery'



class BoardComponent extends React.Component {

    state = {modalTitle:"", modalMessage:"", token:{}, logged:false, actual_user:{}}


    componentWillMount() {

        const user = logic.isLogged();
        if (user)
            this.setState({logged:true, actual_user:user});
    }

    addPostIt = (message) => {

        const {id, token} = this.state.token
        userService.getUserInfo(id, token).then(data => {
            
        try {
            userService.addPostIt(message, data)
        } catch (error) {
            this.setState({modalTitle:"Error", modalMessage: error.message});
            $("#modal").modal("show");
            return
        }
           
        userService.updateUser(id, token, data).then(resp => {
            
            this.setState({modalTitle:"PostIt", modalMessage: "PostIt added...", actual_user: data});
            $("#modal").modal("show");
            

        }).catch(error => {

            this.setState({modalTitle:"Error Updating User", modalMessage: error.message});
            $("#modal").modal("show");

        });
       
       }).catch(error => {
          
           this.setState({modalTitle:"Error GetUserInfo", modalMessage: error.message});
           $("#modal").modal("show");
       })     
       
    }

    deletePostIt = (postit_id) => {

        const {id, token} = this.state.token
        userService.getUserInfo(id, token).then(data => {
        try {
            userService.deletePostIt(postit_id, data)
        } catch (error) {
            this.setState({modalTitle:"Error", modalMessage: error.message});
            $("#modal").modal("show");
            return
        }
        userService.updateUser(id, token, data).then(resp => {
        
            this.setState({modalTitle:"PostIt", modalMessage: "PostIt deleted...", actual_user: data});
            $("#modal").modal("show");
            

        }).catch(error => {

            this.setState({modalTitle:"Error Updating User", modalMessage: error.message});
            $("#modal").modal("show");

        });
       
       }).catch(error => {
          
           this.setState({modalTitle:"Error GetUserInfo", modalMessage: error.message});
           $("#modal").modal("show");
       })     
    }

    editPostIt = (postit_id, text) => {

        const {id, token} = this.state.token
        userService.getUserInfo(id, token).then(data => {
       
        try {
            userService.editPostIt(postit_id, data, text)
        } catch (error) {
            this.setState({modalTitle:"Error", modalMessage: error.message});
            $("#modal").modal("show");
            return
        }
        userService.updateUser(id, token, data).then(resp => {
        
            this.setState({modalTitle:"PostIt", modalMessage: "PostIt updated...", actual_user: data});
            $("#modal").modal("show");
            

        }).catch(error => {

            this.setState({modalTitle:"Error Updating User", modalMessage: error.message});
            $("#modal").modal("show");

        });
       
       }).catch(error => {
          
           this.setState({modalTitle:"Error GetUserInfo", modalMessage: error.message});
           $("#modal").modal("show");
       })     
    }

    showModalRegister = () => {

        $('#register-modal').modal('show') //not use Jquery

    }

    showModalLogin = () => {

        $('#login-modal').modal('show') //not use Jquery

    }

    loginUser  = (username, password) => {

        userService.authenticateUser(username, password).then(res => {
          
             userService.getUserInfo(res.id, res.token).then(data => {
                
                this.setState({logged:true, token:res, actual_user: data});
               

            }).catch(error => {

                throw error

            });
        
        }).catch(error => {
           
            this.setState({modalTitle:"Login", modalMessage: error.message});
            $("#modal").modal("show");
        })
      
    }

    registerUser = (name, surname, username, password) => {
        
        userService.registerUser(name, surname, username, password).then(res => {

            this.setState({modalTitle:"Register User", modalMessage:"His account been created correctly..."});
            $("#modal").modal("show");

        }).catch(error => {

            this.setState({modalTitle:"Register User", modalMessage: error.message});
            $("#modal").modal("show");
        })
       
        
    }
    
    logoutUser = () => {

        this.setState({logged:false, actual_user:{}})
        
    }

    render() {

        const {logged, modalTitle,modalMessage, actual_user} = this.state

        return <section className="board">
            <RegisterModalComponent key="registerModal" onRegisterUser = {this.registerUser}></RegisterModalComponent>
            <LoginModalComponent key="loginModal" onLoginUser = {this.loginUser}></LoginModalComponent>
             <ModalComponent key="modal" title = {modalTitle} message = {modalMessage}/>
            <section className="board__forms">
                {logged && <form action="">
                    <input type="text" name="message" id="message" placeholder="Type your postit message..." />
                    <button className="button" onClick={(ev) => { ev.preventDefault(); this.addPostIt(document.getElementById("message").value) }}>Send...</button>
                </form>}
                <section className="board__panel-buttons">
                    {!logged  && <button onClick={() => this.showModalRegister()} className="button">Register</button>}
                    {!logged  && <button onClick={() => this.showModalLogin()} className="button">Login</button>}
                    {logged  && <button onClick = {this.logoutUser} className="button">Logout</button>}
                </section>
            </section>
            {logged && <section className="board__panel-postits">
                {
                    actual_user.postits.map((postit) => <PostItComponent key={postit.id} id={postit.id} onUpdatePost = {this.editPostIt} onDeletePost={this.deletePostIt} message={postit.text}></PostItComponent>)
                }
            </section>}

        </section>

    }
}

export default BoardComponent