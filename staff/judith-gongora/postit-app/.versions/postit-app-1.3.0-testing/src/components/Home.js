import React, { Component } from 'react'
import logic from '../logic'
import InputForm from './InputForm'
import Post from './Post'

class Home extends Component {
    state = { postits: logic.listPostitsByUser(this.props.onHomeClick)}

    handleClick = (text) => {
        logic.createPostit(text, this.props.onHomeClick)

        this.setState({ postits: logic.listPostitsByUser(this.props.onHomeClick) }) //Si hay parametros para enviar tiene esta sintaxis
        
    }

    handleDelete = id => {

        logic.deletePostit(id)

        this.setState({ postits: logic.listPostitsByUser(this.props.onHomeClick) })
        
    }

    handleUpdatePost = (id, index , text) => {
        logic.UpdatePostit(id, index, text, this.props.onHomeClick)

        this.setState({ postits: logic.listPostitsByUser(this.props.onHomeClick) })
            
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
module.exports = Home
// export default Home;
