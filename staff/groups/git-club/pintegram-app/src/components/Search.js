import React, { Component } from 'react'
import logic from '../logic'
import ListUsersSearch from './ListUsersSearch'
import logo from '../icon1.png'

class Search extends Component {
    state = { text: null, users: [], result:true}

    // componentDidMount() {
    //     logic.listPosts() 
    // }
    
    handleContentChange = event => {
        const text = event.target.value

        this.setState({ text })
    }

    handleSearchUsers = event => {
        event.preventDefault()
        logic.searchUsers(this.state.text)
        .then(users => this.setState({users, result:false}))

    }

    handleUserSearch = username =>{
        this.props.onUserSearch(username)
    } 


    render() {
        return <div className="div-home">
            <nav className="nav"><div className="logo"><img onClick={this.props.onGoBack} className ="logo__img" src={logo}></img><h1 onClick={this.props.onGoBack} className="title">Pintegram</h1></div>
            <div className="menu">
                <i className="menu__button fas fa-search"></i>
                <i onClick={this.props.onPost} className="menu__button fas fa-upload"></i>
                <i onClick={this.props.onProfile} className="menu__button fas fa-user"></i>
                <i onClick={this.props.onLogout} className="menu__button fas fa-sign-out-alt"></i>
            </div>
            </nav>
            <div className="search"> 
                <div className="search__center">
                    <div className="group__search">
                        <input value={this.state.text} onChange={this.handleContentChange} placeholder="Text to search here..."/>
                        {this.state.text !== null && <button onClick={this.handleSearchUsers} className="upload-button">Search</button>}
                        {!this.state.users.length && !this.state.result ? <p>No results.</p> :this.state.users.map(user => <ListUsersSearch key={user.id} id={user.id} username={user.username} onSearch={this.handleUserSearch} />)}
                    </div>

                </div>
            </div>
        </div>
    }
}

export default Search
