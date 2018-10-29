import React, { Component } from 'react';
import LOGIC from './logic'
import Login from './components/Login'
import Register from './components/Register'
import Board from './components/Board'

function Header(props) {
    return <header className="header">
        <h1 className="header__title"><span role="img" aria-label="jsx-a11y/accessible-emoji">🎻</span> Cello</h1>
        {props.auth && Object.keys(props.auth).length > 0 && (
            <div className="dropdown">
                <span className="dropdown__title">{props.auth.name}</span>
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
            auth: LOGIC.getAuth(),
            view: 'login',
            boards: []
        }

        if (this.state.auth && Object.keys(this.state.auth).length > 0) {
            this.state.boards = LOGIC.boards.find({
                user_id: this.state.auth.id
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
            boards: LOGIC.addBoard(event.target, this.state.auth.id)
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
        const auth = LOGIC.login(event.target)
        if (auth) {
            this.setState({
                auth: auth,
                boards: LOGIC.boards.find({
                    user_id: auth.id
                })
            })
        }
    }

    handleRegister(event) {
        event.preventDefault()
        this.setState({
            view: LOGIC.register(event.target) ? 'login' : 'register'
        })
    }

    handleLogout() {
        this.setState({
            auth: LOGIC.logout()
        })
    }

    render() {
        return <section className="main">
            <Header auth={this.state.auth} onLogout={this.handleLogout} />
            {!this.state.auth || Object.keys(this.state.auth).length === 0 ? (
                <section className="main__auth">
                    {this.state.view === 'login' ? (
                        <Login onClick={() => this.setState({view:'register'})} onSubmit={this.handleLogin} />
                    ) : (
                        <Register onClick={() => this.setState({view:'login'})} onSubmit={this.handleRegister} />
                    )}
                </section>
            ) : (
                <section className="main__boards">
                    {this.state.boards.map((board) => {
                        return <Board key={board.id} id={board.id} title={board.title} onDelete={() => this.handleDelete(board.id)} onUpdate={this.handleUpdate} />
                    })}
                    <Add onSubmit={this.handleSubmit} />
                </section>
            )}
        </section>
    }
}

export default App;
