import React, { Component } from 'react'
import logic from './logic'
import Menu from './components/Menu'
import Notes from './components/Notes'

class App extends Component {

  state = {
      texts: logic.listPostits()
  }

  handleSubmit = this.handleSubmit.bind(this)
  handleDelete = this.handleDelete.bind(this)

  handleSubmit(event) {
      logic.createPostit(event)

      this.setState({ texts: logic.listPostits() })
  }


  handleDelete(INDEXtoBeDeleted) {
      logic.deletePostit(INDEXtoBeDeleted)

      this.setState({ texts: logic.listPostits() })
  }

  handleEditPost = (id, el) => {
      let element = document.getElementById(id)
      if (element.childNodes[1].disabled===true) {
          element.childNodes[1].disabled = false
          logic.modifyPostit(id)
          this.setState({ texts: logic.listPostits() })
      }
      else {
          element.childNodes[1].disabled = true
      }
  }

  render() {
      return <div className="container">
          <h1>Post-It App</h1>
          <Menu onSubmit={this.handleSubmit} />
          <section className="posts-container">
              {this.state.texts.map(postit => {
                  return <Notes key={postit.id} text={postit.text} index={postit.id} handleDelete={this.handleDelete} handleEditPost={this.handleEditPost} />
                  })}
          </section>

      </div>
  }
}

export default App;
