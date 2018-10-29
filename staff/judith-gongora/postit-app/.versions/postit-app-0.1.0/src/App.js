import React, { Component } from 'react'
import logic from './logic'
import InputForm from './components/InputForm'
import Post from './components/Post'

class App extends Component {
    state = { postits: logic.listPostits() }
   
    handleClick = (text) => {
        logic.createPostit(text)

        this.setState({ postits: logic.listPostits() })
    }

    handleDelete = id => {
        logic.deletePostit(id)

        this.setState({ postits: logic.listPostits() })
    }

    handleUpdatePost = (id,index,text) => {
        logic.UpdatePostit(id, index, text)

        this.setState({ postits: logic.listPostits() })
    }

    handleEdit = id => {
        logic.editPost(id)
    }

    render() {
        return <div>

        <InputForm onClick={this.handleClick}/>

        <section>
            {this.state.postits.map((postit, index) => <Post onDelete = {this.handleDelete} key={postit.id} index ={index} text={postit.text} id={postit.id} onEdit = {this.handleEdit} onUpdatePost = {this.handleUpdatePost}/>)}
        </section>
    </div>
    }
} 

export default App;
