import React, { Component } from 'react'
import logic from './logic'
import Menu from './components/Menu'
import Notes from './components/Notes'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'

class App extends Component {

    state = {
        _Users: [], texts: [], now: {}, refister:false, login:false, home:false
    }

    
    handleSubmit = this.handleSubmit.bind(this)
    handleDelete = this.handleDelete.bind(this)
    handleLogin = this.handleLogin.bind(this)
    
    constructor() {
        super()
        let users = logic.listUsers()

        console.log(users)
        if (users === null) {
            users = []
            logic.persistUsers(users)
        }
    }

    handleSubmit(event) {
        logic.createPostit(event)

        this.setState({ texts: logic.listPostits() })
    }

    handleDelete(INDEXtoBeDeleted) {
        logic.deletePostit(INDEXtoBeDeleted)

        this.setState({ texts: logic.listPostits() })
    }

    handleEditPost = (id, el) => {
        let element = document.getElementById(id)
        if (element.childNodes[1].disabled === true) {
            element.childNodes[1].disabled = false
            logic.modifyPostit(id)
            this.setState({ texts: logic.listPostits() })
        }
        else {
            element.childNodes[1].disabled = true
        }
    }

    OnHanldeRegister = () => {
        this.setState({ register: true })
    }

    OnHandleLogin = () => {
        this.setState({ login: true })
    }

    OnHandleHome = () => {
        this.setState({ home: true })
    }

    handleRegister(_name, _surname, _username, _password) {

        logic.createUser(_name, _surname, _username, _password)
    }

    handleLogin(_username, _password) {
        const now = logic.checkLogin(_username, _password)
        if (!now.length) {
            console.log('false now ', now)
        }
        else {
            console.log('true now ', now)
            this.OnHandleHome()
        }
        this.setState({ now: now })
        this.setState({ texts: logic.listPostits(now.id) })
    }

    render() {

        return <div>
            {!this.state.register && !this.state.login && <section><button onClick={this.OnHanldeRegister}>Register</button> or <button onClick={this.OnHandleLogin}>Login</button></section>}

            {this.state.register && <Register handleRegister={this.handleRegister} />}

            {this.state.login && <Login handleLogin={this.handleLogin} />} 

            {/* TODO show Home on successful login */}
             {this.state.home && <Home users={this.state._Users} postits={this.state.texts} handleDelete={this.handleDelete} handleEditPost={this.handleEditPost}   />}
        </div>


    }
}

export default App;
