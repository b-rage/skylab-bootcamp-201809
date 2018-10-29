import React, { Component } from 'react'
import logic from '../logic'

class PostUserLiked extends Component {
    state = { postId:this.props.id, url:this.props.url, text: this.props.text, likes: null}

    componentDidMount() {
        logic.listPosts()
            .then(posts => { this.setState({ posts }) })

        logic.likesPost(this.state.postId)
            .then(likes => { this.setState({ likes }) })
    }

    handleLikePost = () => {
        // logic.likedPost(postId)
        this.setState({ like: true })
    }

    handleDelete = event => {
        event.preventDefault()
        this.props.onDeleteLike(this.state.postId)
    }

    render() {
        return <section className="gallery__user">
            <img className="user__img" src={this.state.url}></img>
            <div className="user__likes-user"><i className="fas fa-heart icon"></i>{this.state.likes} <i onClick={this.handleDelete} className="fas fa-trash icon__trash"></i></div>

        </section>
    }
}

export default PostUserLiked