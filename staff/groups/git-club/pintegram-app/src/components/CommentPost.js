import React, { Component } from 'react'
import logic from '../logic'

class commentPost extends Component {
    state = { username : ' ' }
    
    componentDidMount() {
        logic.retrieveUserComment(this.props.id)
        .then(username => this.setState({username}))
     
    }

    render() {
        return <div className="comment__post">
                <p className="comment__post-left" ><span className='comment__post-bold'>{this.state.username}</span> {this.props.content}</p>   
            </div>
    }
}

export default commentPost
