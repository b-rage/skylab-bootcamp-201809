import React, { Component } from 'react'
import logic from './logic'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import Error from './components/Error'


class App extends Component {

    state = {
        texts: this.getTexts(), userId: this.getUserId(), register: false, login: false, error: null
    }


    handleSubmit = this.handleSubmit.bind(this)
    handleDelete = this.handleDelete.bind(this)
    handleLogin = this.handleLogin.bind(this)

    getTexts() {
        const texts = JSON.parse(sessionStorage.getItem('postits'))

        return texts ? (texts) : []
    }

    getUserId() {
        const userId = sessionStorage.getItem('userId')

        return userId ? parseInt(userId) : null
    }

    handleSubmit(text) {
        logic.createPostit(text, this.state.userId)
        let texts = logic.listPostits()
        const userId = this.state.userId
        texts = texts.filter((item) => item.userId === userId)

        this.setState({ texts })
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
        this.setState({ register: !this.state.register })
    }

    OnHandleLogin = () => {
        this.setState({ login: !this.state.login, error: null })
    }

    handleRegister(_name, _surname, _username, _password) {
        logic.createUser(_name, _surname, _username, _password)
    }

    handleLogin(_username, _password) {
        try {
            const userId = logic.checkLogin(_username, _password)
            let texts = logic.listPostits()
            texts = texts.filter((item) => item.userId === userId)

            this.setState({ texts, userId, login: false, register: false })

            sessionStorage.setItem('userId', userId)
        } catch (err) {
            this.setState({error : err.message })
        }
    }

    handleLogoutClick = () => {

        this.setState({ userId: '', register: false, login: false })
        sessionStorage.setItem('userId', '')
    }

    activateUser() {
        const texts = logic.listPostitsbyId(this.state.userId)
        if (texts !== undefined) {
            this.setState({ texts })
        } else {
            this.setState({ texts: [] })
        }
    }

    render() {
        const { register, login, userId, error } = this.state

        return <div>

            {!register && !login && !userId && <section>
                <button onClick={this.OnHanldeRegister}>Register</button> or <button onClick={this.OnHandleLogin}>Login</button></section>}

            {this.state.register && <Register handleRegister={this.handleRegister} />}

            {this.state.login && <Login handleLogin={this.handleLogin} />}

            {error && <Error message={error} />}

            {userId && <section><button onClick={this.handleLogoutClick}>Logout</button></section>}

            {/* TODO show Home on successful login */}
            {userId && <Home texts={this.state.texts} handleDelete={this.handleDelete} handleEditPost={this.handleEditPost} handleSubmit={this.handleSubmit} userId={userId} />}

        </div>


    }
}

export default App;
