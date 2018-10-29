import React, { Component } from 'react';
import './Postit.css'

class PostIt extends Component {
    state = { editText: this.props.paint }

    handleInput = event => {
        const editText = event.target.value
        this.setState({ editText })
    }

    handleSubmit = event => {
        event.preventDefault()

        this.props.onSubmit(this.state.editText, this.props.id)

        this.setState({ editText: this.state.editText })
    }

    render() {
        return <div>
            <article className='postIt'>
                <p >{this.props.paint}</p>
                <button className='postIt__button' type='button' onClick={() => { this.props.onClick(this.props.id) }} >X</button>
                <button className='postIt__button--edit' type='button' onClick={this.props.onEditClick} >EDIT</button>
            </article>
            {this.props.show &&
                <form onSubmit={this.handleSubmit}>
                    {/* <textarea value={this.state.text} onChange={this.handleInput}>{this.props.paint}</textarea> */}
                    <textarea  defaultValue={this.state.editText} onChange={this.handleInput}></textarea>
                    <button type='submit'>Submit changes</button>
                </form> }
        </div>
    }
}

export default PostIt
