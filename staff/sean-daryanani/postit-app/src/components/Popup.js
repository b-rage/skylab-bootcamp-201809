import React, { Component } from 'react'

class Popup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: props.text
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(event) {
        this.setState({
            text : event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        this.props.onUpdate(this.props.id, this.state.text)

        this.setState({text: ''})
    }

    render() {
        return <div className="popup">
        <form onSubmit={this.handleSubmit} onBlur={this.handleSubmit} className="form-group shadow-textarea">
        <textarea id="form18" className="form-control z-depth-1" rows="2" cols="10" value={this.state.text} onChange={this.handleInput}/>
        <button id="update-save" className="btn btn-primary">Save changes</button>
        </form>
        
        </div>
    }
}

export default Popup