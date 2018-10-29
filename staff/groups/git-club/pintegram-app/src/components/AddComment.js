import React, { Component } from 'react'

class AddComment extends Component {
    state = { content: " ", }
    
    handleContentChange = event => {
        const content = event.target.value

        this.setState({ content })
    }

    handleAdd = event => {
        event.preventDefault()
        debugger
        this.props.onAddComment(this.state.content)
    }

    render() {
        return <div className="div__comments">
            <textarea onChange = {this.handleContentChange} className="comment"  defaultValue={this.state.content} />
            <button  onClick = {this.handleAdd}>Add Comment</button>
        </div>
    }
}

export default AddComment
