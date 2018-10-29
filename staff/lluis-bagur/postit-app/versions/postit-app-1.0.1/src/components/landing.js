import React, { Component } from 'react'
import logic from '../logic'
import InputForm from './InputForm'
import Post from './Post' 

class Landing extends Component {
    state = { postits: logic.listPostitsByUser(this.props.userId) }

    
  handleSubmit = text => {
    console.log('App', 'handleSubmit (setState)')

    const { userId } = this.props

    logic.createPostit(text, userId)

    this.setState({ postits: logic.listPostitsByUser(userId) })
}

  handleDeletePost = id => {
      logic.deletePostit(id)

      this.setState({ postits: logic.listPostitsByUser(this.props.userId) })
    }

  handleUpdatePost = (id, text) => {
      logic.updatePostit(id, text)

      this.setState({ postits: logic.listPostitsByUser(this.props.userId) })
    }

  render() {
      console.log('App', 'render')

      return <div className="app_cont">
            <h1 className="title">Post-It App</h1>
          <InputForm onSubmit={this.handleSubmit} />

          <section className="article_cont">
              {this.state.postits.map(postit => <Post key={postit.id} text={postit.text} id={postit.id} onDeletePost={this.handleDeletePost} onUpdatePost={this.handleUpdatePost} />)}          
          </section>
      </div>
  }
}


export default Landing