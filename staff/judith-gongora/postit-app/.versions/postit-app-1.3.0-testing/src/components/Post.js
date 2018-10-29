import React, { Component } from 'react'; 

class Post extends Component{

    state = { text: this.props.text }


    handleChange = event => {
        const text = event.target.value

        this.setState({ text })
    }

    handleBlur = () => {
        this.props.onUpdatePost(this.props.id, this.props.index, this.state.text)
    }

    handleEdit= () => {
        this.props.onEdit(this.props.id)
    }

    handleDelete= () => {
        this.props.onDelete(this.props.id)
    }

    render(){
            return <article onClick={this.handleEdit} onBlur={this.handleBlur} className="post">
                        <textarea onChange={this.handleChange} id={this.props.id} className="transparent" defaultValue={this.props.text}></textarea> 
                        <button onClick={this.handleDelete}>x</button>
                    </article>
            }
}
module.exports = Post
// export default Post