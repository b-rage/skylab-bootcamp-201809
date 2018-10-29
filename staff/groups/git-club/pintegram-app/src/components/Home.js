import React, { Component } from 'react'
import logo from '../icon1.png'
import logic from '../logic'
import Post from './Post'

class Home extends Component {
    state = { posts: [], liked: [], results: [], nameSearch: '' }

    componentDidMount() {
        logic.listAllPosts()
        .then(posts => this.setState({ posts }))
        // TODO error handling!
        logic.listLikes()
        logic.listPosts()
        logic.listComments()
     
    }

    handleUserSearch = name =>{   
        this.props.onUserSearch(name)
    }
    

    render() {
        return <div className="div-home">
            <nav className="nav"><div className="logo"><img className ="logo__img" src={logo}/><h1 className="title">Pintegram</h1></div>
            <div className="menu">
                <i onClick={this.props.onSearch} className="menu__button fas fa-search"></i>
                <i onClick={this.props.onPost} className="menu__button fas fa-upload"></i>
                <i onClick={this.props.onProfile} className="menu__button fas fa-user"></i>
                <i onClick={this.props.onLogout} className="menu__button fas fa-sign-out-alt"></i>
            </div>
            </nav>
            <section className="home__post">
                {this.state.posts.map(post => <Post key={post.id} id={post.id} url={post.url} text={post.description} onUserSearch={this.handleUserSearch} user={post.userId} />)}
            </section>
        </div>
    }
}

export default Home
