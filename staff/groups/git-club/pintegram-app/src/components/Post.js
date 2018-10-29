import React, { Component } from 'react'
import logic from '../logic'
import AddComment from './AddComment'
import CommentPost from './CommentPost'

class Post extends Component {
    state = { postId:this.props.id, url:this.props.url, text: this.props.text, liked: null, likes: undefined, user: null, comments: [], comment:false, commentsCount: 0, userComment:null}

    // constructor(props) {
    //     super(props)
    //     // create a ref to store the textInput DOM element
    //     this.state = { postId:this.props.id, url:this.props.url, text: this.props.text, liked: null, likes: undefined, user: null}
    //     this.comment = React.createRef()
    // }
    
    componentDidMount() {
        logic.retriveUser(this.props.user)
            .then(user => { this.setState({ user }) })
        
        logic.likesPost(this.state.postId)
            .then(likes => { this.setState({ likes }) })
       
        logic.likedPost(this.state.postId)
            .then(liked => { this.setState({ liked }) })
        
        logic.commentsPost(this.state.postId)
        .then(commentsCount => { this.setState({ commentsCount }) })

        logic.retrieveComments(this.state.postId)
        .then(comments => { this.setState({ comments }) })
        
    }

    handleLikePost = () => {
      
        logic.addLike(this.state.postId)
        .then(() => this.handleAddLikes())

        // logic.addLike(this.state.postId)
        //    .then(logic.likesPost(this.state.postId).then(likes => { this.setState({ likes })}))
        //    .then(logic.likedPost(this.state.postId).then(liked => { this.setState({ liked })}))
    }

    handleAddLikes = () => {
        Promise.all([logic.likesPost(this.state.postId), logic.likedPost(this.state.postId)])
            .then(([likes, liked]) => {this.setState({ likes, liked})})
    }

    handleAddComment = (content) => {
        logic.addComment(this.state.postId, content)
        .then(() => this.handleOffComment())
    }

    handleComment = () => {
        this.setState({comment : true}) 
    }
    handleOffComment= () => {
        this.setState({comment : false}) 
        logic.commentsPost(this.state.postId).then(commentsCount => { this.setState({ commentsCount }) })
        logic.retrieveComments(this.state.postId)
        .then(comments => { this.setState({ comments }) })
    }

    handleUserSearch = (event) => {
        event.preventDefault()
        this.props.onUserSearch(this.state.user)
    }


    render() {
        return <article className="post">
            <div className="post__justify">
            <div className="post__center">
            <h1 className="post__text color" onClick={this.handleUserSearch} >{this.state.user}</h1>
            <img className="post__img" src={this.state.url}></img>
            <div className="post__icon">
            {!this.state.liked ? <i onClick={this.handleLikePost} className="far fa-heart icon"></i> : <i className="fas fa-heart icon"></i>}{this.state.likes}
            <i onClick={this.handleComment} className="fas fa-comment icon"></i>{this.state.commentsCount}
            </div>
            <p className="post__text post__text-margin">{this.state.text}</p>
            <section className="comments_group">
                {this.state.comments.map(comment => <CommentPost key={comment.id} id={comment.id} content={comment.content} />)}
            </section> 
            {this.state.comment && <AddComment onAddComment={this.handleAddComment} />}
            </div> 
            </div>    
        </article>
    }
}

export default Post