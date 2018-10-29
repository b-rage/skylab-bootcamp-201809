import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Board from './components/Board'
import LOGIC from './logic'

function Header(props) {
    return <header className="header">
        <h1 className="header__title"><span role="img" aria-label="jsx-a11y/accessible-emoji">🎻</span> Cello</h1>
        {LOGIC.isAuthenticated() && (
            <div className="dropdown">
                <span className="dropdown__title">{LOGIC.auth.name}</span>
                <div className="dropdown__content">
                    <ul className="dropdown__list">
                        <li><button className="dropdown__link" onClick={props.onLogout}>Log Out</button></li>
                        {/* <li><button className="dropdown__link">Edit User</button></li> */}
                    </ul>
                </div>
            </div>
        )}
    </header>
}

function Add(props) {
    return <section className="add">
        <form onSubmit={props.onSubmit}>
            <input className="add__input" type="text" name="title" placeholder="Add another board" />
            <button className="add__button">Add Board</button>
        </form>
    </section>
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boards: []
        }

        if (LOGIC.isAuthenticated()) {
            this.state.boards = LOGIC.boards.find({
                user_id: LOGIC.auth.id
            })
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            boards: LOGIC.addBoard(event.target, LOGIC.auth.id)
        })
    }

    handleDelete(id) {
        this.setState({
            boards: LOGIC.deleteBoard(id)
        })
    }

    handleUpdate(id, title) {
        this.setState({
            boards: LOGIC.updateBoard(id, title)
        })
    }

    handleLogin(event) {
        event.preventDefault()
        LOGIC.login(event.target, auth => {
            this.setState({
                boards: LOGIC.boards.find({
                    user_id: auth.id
                })
            })
            this.props.history.push('/boards')
        })
    }

    handleRegister(event) {
        event.preventDefault()
        LOGIC.register(event.target, () => {
            this.props.history.push('/login')
        })
    }

    handleLogout() {
        LOGIC.logout(() => {
            this.props.history.push('/login')
        })
    }

    renderLogin() {
        return <section className="main__auth">
            <Login onClick={() => this.props.history.push('/register')} onSubmit={this.handleLogin} />
        </section>
    }

    renderRegister() {
        return <section className="main__auth">
            <Register onClick={() => this.props.history.push('/login')} onSubmit={this.handleRegister} />
        </section>
    }

    renderBoards() {
        return <section className="main__boards">
            {this.state.boards.map((board) => {
                return <Board key={board.id} id={board.id} title={board.title} onDelete={() => this.handleDelete(board.id)} onUpdate={this.handleUpdate} />
            })}
            <Add onSubmit={this.handleSubmit} />
        </section>
    }

    render() {
        return <section className="main">
            <Header onLogout={this.handleLogout} />
            <Route exact path="/" render={() => LOGIC.isAuthenticated() ? <Redirect to="/boards" /> : <Redirect to="/login" />} />
            <Route path="/login" render={() => !LOGIC.isAuthenticated() ? this.renderLogin() : <Redirect to="/boards" />} />
            <Route path="/register" render={() => !LOGIC.isAuthenticated() ? this.renderRegister() : <Redirect to="/boards" />} />
            <Route path="/boards" render={() => LOGIC.isAuthenticated() ? this.renderBoards() : <Redirect to="/login" />} />
        </section>
    }
}

export default withRouter(App)
