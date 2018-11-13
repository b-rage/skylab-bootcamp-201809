import React, { Component } from 'react'
import logic from '../logic'

class Post extends Component {
    state = { text: this.props.text, status:'' }


    handleChange = event => {
        const text = event.target.value

        this.setState({ text })
    }

    handleBlur = () => {
        this.props.onUpdatePost(this.props.id, this.state.text, this.props.status)
    }

  


    dropDownHandlePost = event => {

        const statusDrop = event.target.value       
        this.setState({ status: statusDrop })    
        this.props.onUpdatePost(this.props.id, this.state.text, statusDrop)
 
       } 

    render() {
        return <article className="post">
            <textarea defaultValue={this.state.text} onChange={this.handleChange} onBlur={this.handleBlur} />

            <div className='buttons-post'>
                <select className='dropdownPost' onChange={this.dropDownHandlePost}>

                    <option >Move to</option>

                    <option  value='TODO'>TODO</option>

                    <option  value='DOING'>DOING</option>

                    <option value='REVIEW'>REVIEW</option>

                    <option value='DONE'>DONE</option>
                    
                </select>

                <a className='btn-trash' onClick={() => this.props.onDeletePost(this.props.id)}><i className="far fa-trash-alt"></i></a>
            </div>
        </article>
    }
}

export default Post