import React, { Component } from 'react'
import logic from './logic'
import InputForm from './components/InputForm'
import Post from './components/Post'

class App extends Component {
    state = { postits: logic.listPostits() }

    handleSubmit = text => {
        logic.createPostit(text)

        this.setState({ postits: logic.listPostits() })
    }

    handleDelete = id => {
        
        logic.deletePostit(id)

        this.setState({ postits: logic.listPostits() })
    }

    handleUpdatePost = (text, id) => {

        logic.updatePostit(id, text)

        this.setState({ postits: logic.listPostits() })


    }

    render() {
        return <section> 
            <h1>Post-It App <i className="fas fa-sticky-note"></i></h1>
            <InputForm DadSubmit={this.handleSubmit}/>
            <section>  
                {this.state.postits.map(postit => <Post key={postit.id} id={postit.id} text={postit.text} onDeletePost={this.handleDelete} onUpdatePost={this.handleUpdatePost}/>)}
            </section> 
        </section>
    }
}

export default App;
