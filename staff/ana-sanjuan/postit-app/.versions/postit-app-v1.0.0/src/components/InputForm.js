import React, { Component } from 'react'

class InputForm extends Component {
    state = {text: "" }

    handleInput = event => {
        const text = event.target.value

        this.setState({text})
    }

    handleSubmit = event => {
        event.preventDefault()
        
        this.props.DadSubmit(this.state.text)

        this.setState({ text: '' })
      
    }

    render(){
        return<form onSubmit={this.handleSubmit} >
            <input value = {this.state.text} placeholder="Write text here..." onChange={this.handleInput} />
            <button type= "submit">Create</button>
        </form>
    }
}

export default InputForm