import React, { Component } from 'react'
import logic from '../logic'

class PostOtherUser extends Component {
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
        debugger
        this.props.onDeletePost(this.state.postId)
    }

    render() {
        return <section className="gallery__user">
            <div><img className="user__img" src={this.state.url}></img>
            <div className="user__likes"><i className="fas fa-heart icon"></i><span className="left">{this.state.likes}</span></div>
            </div>
        </section>
    }
}

export default PostOtherUser