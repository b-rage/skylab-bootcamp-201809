import React, { Component } from 'react'


class Post extends React.Component {
    state = {
         text: this.props.text
    }
 
 
    handleChange = event => {
     const text = event.target.value
     this.setState({ text })
    }
 
    handleBlur = () => {
        this.props.onUpdatePost(this.props.id, this.state.text)
    }
 
    render() {
     return <section>
                 <div className="article"><textarea className="postText" defaultValue={this.state.text} onChange={this.handleChange} onBlur={this.handleBlur}/></div>
                 <div className="btn-container">
                 <button className="button-delete" onClick={() => this.props.onDeletePost(this.props.id)}>delete</button>
                 </div>
             </section>
    }
             
 } 

export default Post