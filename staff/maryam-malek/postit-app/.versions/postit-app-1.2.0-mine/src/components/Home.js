import React, { Component } from 'react';
import logic from './../logic'
import InputForm from './InputForm'
import PostIt from './Postit'
import './Home.css'

class Home extends Component {

  state = { postits: logic.listPostits(this.props.userId)}

  handleSubmit = text => {
    const {userId} = this.props

      logic.createPostit(text, false, userId)

      this.setState({ postits: logic.listPostits(userId) })
  }

  handleClick = id => {
      logic.deletePostit(id)

      this.setState({ postits: logic.listPostits(this.props.userId) })
  }

  handleEditSubmit = (text, id) => {
      logic.changePostit(text, id, false)
      this.setState({ postits: logic.listPostits(this.props.userId)})

  }

  handleEditClick = (id) => {
      logic.apearEdit(id, true)
      this.setState({ postits: logic.listPostits(this.props.userId)})

  }

  render() {
      return <section className='main-section'>
          <h1>Post-It App</h1>

          <InputForm onSubmit={this.handleSubmit} />

          <section className='postit-board'>
              {this.state.postits.map(postit => <PostIt show={postit.show} onEditClick={() => {this.handleEditClick(postit.id)}} onSubmit={this.handleEditSubmit} paint={postit.text} key={postit.id} id={postit.id} onClick={this.handleClick} />)}
          </section>
      </section >
  }
}

export default Home;
