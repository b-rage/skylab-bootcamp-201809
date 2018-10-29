import React, {Component} from 'react'
import logic from '../logic'
import InputForm from './InputForm'
import Post from './Post'


class Home extends Component {
    state = { postits: logic.listPostitsByUserId(this.props.userId) }

    handleSubmit = text => {
        const {userId} = this.props

        logic.createPostit(text, userId)

        this.setState({ postits: logic.listPostitsByUserId(userId) })
    }

    handleDelete = id => {    
        logic.deletePostit(id)

        this.setState({ postits: logic.listPostitsByUserId(this.props.userId) })
    }

    handleUpdatePost = (text, id) => {    
        logic.updatePostit(id, text)

        this.setState({ postits: logic.listPostitsByUserId(this.props.userId) })
    }

    render() {
        return <section> 
            <h1>Post-It App <i className="fas fa-sticky-note"></i></h1>
            <InputForm DadSubmit={this.handleSubmit}/>
            <section>  
                {this.state.postits.map(postit => <Post  key={postit.id} id={postit.id} text={postit.text} onDeletePost={this.handleDelete} onUpdatePost={this.handleUpdatePost}/>)}
            </section> 
        </section>
    }
}

export default Home