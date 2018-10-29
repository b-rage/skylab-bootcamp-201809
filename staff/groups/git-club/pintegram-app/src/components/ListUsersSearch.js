import React, { Component } from 'react'
import logic from '../logic'

class ListUsersSearch extends Component {
    state = { username: this.props.username}

    // componentDidMount() {
    //     logic.listPosts() 
    // }

    handleUser = event => {
        event.preventDefault()
        this.props.onSearch(this.state.username)     
    }


    render() {
        return  <p className="post__text color margin" onClick={this.handleUser}>{this.state.username}</p>
        
    }
}

export default ListUsersSearch
