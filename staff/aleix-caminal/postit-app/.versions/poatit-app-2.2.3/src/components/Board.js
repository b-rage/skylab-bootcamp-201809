import React, { Component } from 'react'
import LOGIC from '../logic'

function Post(props) {
    return <article className="post">
        <button className="post__button" onClick={props.onDelete}>X</button>
        <h3 className="post__title">{props.title}</h3>
    </article>
}

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title,
            posts: LOGIC.posts.find({
                board_id: this.props.id
            })
        }

        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleKeyPress(event) {
        if (event.key === 'Enter' && event.target.value) {
            this.setState({
                posts: LOGIC.addPost(event.target, this.props.id)
            })
        }
    }

    handleDelete(id) {
        this.setState({
            posts: LOGIC.deletePost(id)
        })
    }

    handleChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    render() {
        return <section className="board">
            <button className="board__button" onClick={this.props.onDelete}>X</button>
            <input className="board__title" value={this.state.title} onChange={this.handleChange} onBlur={() => this.props.onUpdate(this.props.id, this.state.title)} />
            {this.state.posts.map((post) => {
                return <Post key={post.id} id={post.id} title={post.title} onDelete={() => this.handleDelete(post.id)} />
            })}
            <input className="board__input" onKeyPress={this.handleKeyPress} placeholder="Add another post" />
        </section>
    }
}

export default Board;
