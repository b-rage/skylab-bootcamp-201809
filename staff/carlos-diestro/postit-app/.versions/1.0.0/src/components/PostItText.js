import React, { Component } from 'react'
import logic from '../logic'

class PostItText extends Component {
  state = { 
    id: this.props.id,
    text: this.props.text,
    edit: false
  }

  handleEditClick = event => {
    this.setState({ edit: true })
  }

  handleSaveClick = event => {
    if (!this.state.text.length) {
      return
    }

    this.setState({ edit: false })

    logic.editPostIt(this.state.id, this.state.text)
  }

  handleChange = event => {
    this.setState({ text: event.target.value })
  }

  handleRemoveItem = () => {
    this.props.onRemoveItem(this.state.id)
  }

  handleDragStart = event => {
    // debugger
    
  }

  render() {
    let element
    let button

    if (this.state.edit) {
      element = <textarea value={this.state.text} onChange={this.handleChange}></textarea>
      button = <button type="button" onClick={this.handleSaveClick}><i className="far fa-save"></i></button>
    } else {
      element = <p>{this.state.text}</p>
      button = <button type="button" onClick={this.handleEditClick}><i className="far fa-edit"></i></button>
    }

    return (
      <div className="col-sm-12 col-md-6">
        <div className="alert alert-warning" draggable onDragStart={this.handleDragStart}>
          <div className="text-right">
            {button}
            <button type="button" onClick={this.handleRemoveItem}><i className="far fa-trash-alt"></i></button>
          </div>
          {element}
        </div>
      </div>
    )
  }
}

export default PostItText