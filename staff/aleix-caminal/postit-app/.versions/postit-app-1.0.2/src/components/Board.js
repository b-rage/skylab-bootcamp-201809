import React, { Component } from 'react';
import LOGIC from '../logic'

function Input(props) {
    return <input className="board__input" onKeyPress={props.onKeyPress} placeholder="Add another post" />
}

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
            posts: LOGIC.find('posts', {
                board_id:this.props.id
            }
        )}

        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleKeyPress(event) {
        if (event.key === 'Enter' && event.target.value) {
            this.setState({
                posts: LOGIC.addPost({
                    title: event.target.value,
                    board_id: this.props.id
                })
            })

            event.target.value = '';
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
            <Input onKeyPress={this.handleKeyPress} />
        </section>
    }
}

export default Board;
