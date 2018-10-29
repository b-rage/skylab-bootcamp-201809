import React, { Component } from 'react'
import logic from '../logic'
import InputForm from './InputForm'
import Post from './Post'

class Profile extends Component {
    state = { posts: [] }

    componentDidMount() {
        logic.listPosts()
            .then(posts => { this.setState({ posts }) })

        // TODO error handling!
    }

    handleSubmit = text =>
        logic.createPost(text)
            .then(() => logic.listPosts())
            .then(posts => this.setState({ posts }))

    // TODO error handling!

    handleDeletePost = id =>
        logic.deletePost(id)
            .then(() => logic.listPosts())
            .then(posts => this.setState({ posts }))

    // TODO error handling!


    handleUpdatePost = (id, text) =>
        logic.updatePost(id, text)
            .then(() => logic.listPosts())
            .then(posts => this.setState({ posts }))

    // TODO error handling!


    render() {
        return <div>
            <h1>Pintegram App <i className="fas fa-sticky-note"></i></h1>

            <InputForm onSubmit={this.handleSubmit} />

            <section>
                {this.state.posts.map(postit => <Post key={postit.id} text={postit.text} id={postit.id} onDeletePost={this.handleDeletePost} onUpdatePost={this.handleUpdatePost} />)}
            </section>
        </div>
    }
}

export default Profile
