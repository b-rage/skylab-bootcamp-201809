//import logic from './logic'

class ModalComponent extends React.Component {

    constructor(props) {

        super(props);
    }
    
    render = () => {

      return (
  
        <div className="modal fade" id="modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{this.props.title}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{this.props.message}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      );
    }

}

class LoginModalComponent extends React.Component {

    state = {username:null, password:null}

    constructor(props) {

        super(props);
    }

    setInputValue = (input, value) =>{

        switch(input){

            case "username":
                this.setState({username:value});
            break;
            case "password":
                this.setState({password:value});
            break;
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
                        <form className="form-horizontal" role="form" onSubmit={(ev) => {
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




class RegisterModalComponent extends React.Component {

    state = {name:null, surname:null, username:null, password:null}

    setInputValue = (input, value) =>{

        switch(input){

            case "name":
                this.setState({name:value});
            break;
            case "surname":
                this.setState({surname:value});
            break;
            case "username":
                this.setState({username:value});
            break;
            case "password":
                this.setState({password:value});
            break;
        }

    }

    constructor(props) {

        super(props);
    }

    onSubmitText = () => {
            
        const {name, surname, username, password} = this.state;
        this.props.onRegisterUser(name, surname, username, password);
        $("#register-modal").modal("hide");

    }

    render() {
        return <div className="modal fade" id = "register-modal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Register User</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                    {/* Modal Body */}
                    <div className="modal-body">
                        <form className="form-horizontal" role="form" onSubmit={(ev) => {
                            ev.preventDefault();
                            this.onSubmitText();

                        }}>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  placeholder="Name" onChange = {(ev) => this.setInputValue("name", ev.target.value)}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  placeholder="Surname" onChange = {(ev) => this.setInputValue("surname", ev.target.value)}/>
                                </div>
                            </div>
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


class PostitModalComponent extends React.Component {

    constructor(props) {

        super(props);
    }

    onSubmitText = (value) => {

        this.props.onSubmittedText(value);
        $('#' + this.props.id).modal('hide'); //not use Jquery
       

    }

    render() {
        return <div className="modal fade" id={this.props.id} tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    {/* Modal Body */}
                    <div className="modal-body">
                        <form className="form-horizontal" role="form" onSubmit={(ev) => {
                            ev.preventDefault();
                            this.onSubmitText($(ev.target).find("#inputEmail3").val());

                        }}>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" readOnly className="form-control"  placeholder={"OldValue: " + this.props.oldmessage}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputEmail3" placeholder="Text..."/>
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
                        <button type="button" className="btn btn-default" onClick = {(ev) => $('#' + this.props.id).modal('hide')}>
                            Close
        </button>
                    </div>
                </div>
            </div>
        </div>

    }
}

class PostItComponent extends React.Component {

    
    
    constructor(props) {
        super(props);
        
    }

   

    showModal = () => {

        $('#' + this.props.id).modal('show');

    }

    handleSubmittedText = (text) => {

       
        this.props.onUpdatePost(this.props.id, text);

    }

    
    render() {
        return <article className="postit">{this.props.message}
            <PostitModalComponent id = {this.props.id} oldmessage = {this.props.message} onSubmittedText={this.handleSubmittedText} />
            <a  onClick={() => { this.props.onDeletePost(this.props.id) } } href="#" className="icon-x"></a>
            <button onClick={(ev) => this.showModal()} className="btn btn-primary btn-lg">Edit</button>
        </article>
    }
}

class BoardComponent extends React.Component {

    state = {errorLoginMessage:"", logged:false, actual_user:{} }

    constructor(props) {
        super(props);
      
    }

    addPostIt = (message) => {

        this.setState({actual_user:  logic.createPostit(this.state.actual_user.id, message)});
       
    }

    deletePostIt = (id) => {

         this.setState({actual_user:  logic.deletePostit(this.state.actual_user.id, id)});
    }

    editPostIt = (id, text) => {

        this.setState({actual_user:  logic.updatePostit(this.state.actual_user.id, id, text)});
    }

    showModalRegister = () => {

        $('#register-modal').modal('show'); //not use Jquery

    }

    showModalLogin = () => {

        $('#login-modal').modal('show'); //not use Jquery

    }

    loginUser  = (username, password) => {

        const user = logic.loginUser(username, password);
        if (user){
            this.setState({logged:true, actual_user: user});

        }else{
            this.setState({errorLoginMessage: "The credentials entered are not correct..."});
            $('#modal').modal('show');
        }

    }

    registerUser = (name, surname, username, password) => {
        
        let actual_user = new User(name, surname, username, password, []);
        let users = logic.listUsers();
        users.push(actual_user);
        logic.persistUsers(users);
        this.setState({actual_user:actual_user});
        
    }
    
    logoutUser = () => {

        this.setState({logged:false, actual_user:{}})
    }

    render() {
        const {logged, errorLoginMessage, actual_user} = this.state

        return <section className="board">
            <RegisterModalComponent key="registerModal" onRegisterUser = {this.registerUser}></RegisterModalComponent>
            <LoginModalComponent key="loginModal" onLoginUser = {this.loginUser}></LoginModalComponent>
             <ModalComponent key="modal" title ="Error Login" message = {errorLoginMessage}/>
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

class App extends React.Component {

    render() {

        return <BoardComponent></BoardComponent>
    }
}



ReactDOM.render(<App />, document.getElementById('root'));