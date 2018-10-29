 import React, { Component } from 'react';
import './App.css';
import logic from './logic.js'
import InputForm from './components/InputForm.js'
import Post from './components/Post.js'

class App extends Component {
  state = { postits: logic.listPostits() }

  handleSubmit = text => {
      console.log('App', 'handleSubmit (setState)')

      logic.createPostit(text)

      this.setState({ postits: logic.listPostits() })
  }

  handleDeletePost = id => {
      logic.deletePostit(id)

      this.setState({ postits: logic.listPostits() })
  }
  handleEditPost = (id) =>{
      
      logic.editPost(id)

      this.setState({ postits: logic.listPostits() })
  }

  render() {
      console.log('App', 'render')

      return <div>
          <h1>Post-It App <i className="fas fa-sticky-note"></i></h1>

          <InputForm onSubmit={this.handleSubmit} />

          <section>
              {/* {this.state.posts.map((post, index) => <article key={index} className="post">{post}</article>)} */}
              {this.state.postits.map(postit => <Post key={postit.id} text={postit.text} id={postit.id} onDeletePost={this.handleDeletePost} onEditPost={()=>this.handleEditPost(postit.id)} />)}
          </section>
      </div>
  }
}

export default App

//ReactDOM.render(<App />, document.getElementById('root'))

