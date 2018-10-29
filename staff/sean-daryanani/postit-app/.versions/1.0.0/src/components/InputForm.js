import React,{ Component } from 'react'

class InputForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ''
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

        this.props.onSubmit(this.state.text)

        this.setState({text: ''})
    }

    render() {
        return <form className="postit-form-group" onSubmit={this.handleSubmit}>
        <textarea className="postit-form form-control" cols="30"  value={this.state.text}  onChange={this.handleInput} placeholder='' type="text"/>
        <button className="postit-submit-btn btn btn-primary" type="submit">Submit</button>
        </form>
    }

}

export default InputForm