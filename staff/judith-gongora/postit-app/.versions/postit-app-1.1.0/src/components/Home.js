import React, { Component } from 'react'
import logic from '../logic'
import InputForm from './InputForm'
import Post from './Post'

class Home extends Component {
    state = { postits: logic.listPostits(), posts : this.props.onPostits }

    handleClick = (text) => {
        logic.createPostit(text, this.props.onHomeClick)

        this.setState({ postits: logic.listPostits() }, () => {this.handleUpdatePostit()}) //Si hay parametros para enviar tiene esta sintaxis

        
    }

    handleDelete = id => {

        logic.deletePostit(id)

        this.setState({ postits: logic.listPostits() }, this.handleUpdatePostit)

        
    }

    handleUpdatePost = (id, index , text) => {
        logic.UpdatePostit(id, index, text, this.props.onHomeClick)

        this.setState({ postits: logic.listPostits() }, this.handleUpdatePostit)
            
    }

    handleEdit = id => {
        logic.editPost(id)
    }
    
    handleUpdatePostit = () => {
        const result = this.state.postits.filter(postit => postit.user === this.props.onHomeClick)

        console.log(result)
        this.setState({posts : result})
    }

    render() {
        return <div>

        <InputForm onClick={this.handleClick}/>

        <section className="section-articles" >  
            {this.state.posts.map((postit, index) => <Post onDelete = {this.handleDelete} key={postit.id} index ={index} text={postit.text} id={postit.id} onEdit = {this.handleEdit} onUpdatePost = {this.handleUpdatePost}/>)}
        </section>
    </div>
    }
} 

export default Home;
