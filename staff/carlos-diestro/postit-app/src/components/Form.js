import React, { Component } from 'react'

class Form extends Component {
  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({ text: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    if (!this.state.text.length) {
      return
    }

    this.props.onSubmit(this.state.text)

    this.setState({ text: '' })

    event.currentTarget[0].focus()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <textarea className="form-control" rows="3" autoFocus placeholder="Write something..." onChange={this.handleChange} value={this.state.text}></textarea>
        </div>
        <button type="submit" className="btn btn-primary mb-2">Create a Post-it</button>
      </form>
    )
  }
}

export default Form