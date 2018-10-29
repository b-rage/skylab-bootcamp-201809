import React, { Component } from 'react';
import LOGIC from './logic'
import Board from './components/Board'

function Add(props) {
    return <section className="add">
        <form onSubmit={props.onSubmit}>
            <input className="add__input" type="text" placeholder="Add another board" />
            <button className="add__button">Add Board</button>
        </form>
    </section>
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boards: LOGIC.all('boards')
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        let input = event.target.querySelector('input');
        this.setState({
            boards: LOGIC.addBoard({
                title: input.value
            })
        })

        input.value = ''
    }

    handleDelete(id) {
        this.setState({
            boards: LOGIC.deleteBoard(id)
        })
    }

    handleUpdate(id, title) {
        this.setState({
            boards: LOGIC.updateBoard(id, {
                title: title
            })
        })
    }

    render() {
        return <section className="main">
            <h1 className="main__title"><span role="img" aria-label="jsx-a11y/accessible-emoji">🎻</span> Cello</h1>
            <section className="main__boards">
                {this.state.boards.map((board) => {
                    return <Board key={board.id} id={board.id} title={board.title} onDelete={() => this.handleDelete(board.id)} onUpdate={this.handleUpdate} />
                })}
                <Add onSubmit={this.handleSubmit} />
            </section>
        </section>
    }
}

export default App;
