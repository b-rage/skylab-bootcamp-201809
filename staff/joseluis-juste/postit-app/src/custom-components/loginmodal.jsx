import React from 'react';
import $ from 'jquery';

class LoginModalComponent extends React.Component {

    state = {username:null, password:null}

   
    setInputValue = (input, value) =>{

        switch(input){

            case "username":
                this.setState({username:value});
            break;
            case "password":
                this.setState({password:value});
            break;
            default:
        }

    }

    onSubmitText = () => {

        const {username, password} = this.state;
        this.props.onLoginUser(username, password);
        $("#login-modal").modal("hide");

    }

    render() {
        return <div className="modal fade" id = "login-modal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Login</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                    {/* Modal Body */}
                    <div className="modal-body">
                        <form className="form-horizontal" onSubmit={(ev) => {
                            ev.preventDefault();
                            this.onSubmitText();

                        }}>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  placeholder="Username" onChange = {(ev) => this.setInputValue("username", ev.target.value)}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="password" className="form-control"  placeholder="Password" onChange = {(ev) => this.setInputValue("password", ev.target.value)}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="submit" className="btn btn-default">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* Modal Footer */}
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" onClick = {(ev) => $('#register-modal').modal('hide')}>
                            Close
        </button>
                    </div>
                </div>
            </div>
        </div>

    }
}


export default LoginModalComponent