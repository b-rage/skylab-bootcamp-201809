import React, { Component } from 'react'
import logic from '../logic'
import InputForm from './InputForm'
import Post from './Post'

class Home extends Component {
    state = { postits: []}

    componentDidMount() {
        console.log('Postits', 'componentDidMount')

        const { userId, token } = this.props

        logic.listPostits(userId, token)
            .then(postits => { this.setState({ postits }) })
    }

    handleClick = (text) => {
        const { userId, token } = this.props

        logic.createPostit(text, userId, token)
            .then(() => logic.listPostits(userId, token))
            .then(postits => this.setState({ postits }))
        
    }

    handleDelete = id => {

        const { userId, token } = this.props

        logic.deletePostit(id, userId, token)
            .then(() => logic.listPostits(userId, token))
            .then(postits => this.setState({ postits }))
        
    }

    handleUpdatePost = (id, index , text) => {
        const { userId, token} = this.props

        logic.UpdatePostit(userId, token, id, index, text)
            .then(() => logic.listPostits(userId, token))
            .then(postits => this.setState({ postits }))
            
    }

    handleEdit = id => {
        logic.editPost(id)
    }
    

    render() {
        return <div>

        <InputForm onClick={this.handleClick}/>

        <section className="section-articles" >  
            {this.state.postits.map((postit, index) => <Post onDelete = {this.handleDelete} key={postit.id} index ={index} text={postit.text} id={postit.id} onEdit = {this.handleEdit} onUpdatePost = {this.handleUpdatePost}/>)}
        </section>
    </div>
    }
} 

export default Home;
