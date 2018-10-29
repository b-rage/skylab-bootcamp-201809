import React, { Component } from 'react'
import logic from '../logic'
import InputForm from './InputForm'
import Post from './Post'
import Popup from './Popup'

class Home extends Component {
    state = {
        showPopup: false,
        postits: []
     }

     componentDidMount() {
         const {propUserID, token} = this.props
         logic.listPostitsByUser(propUserID, token) 
            .then(postits => {this.setState({postits})})
     }

     handleSubmit = text => {
        const { propUserID, token } = this.props

        logic.createPostit(text, propUserID, token)
            .then(() => logic.listPostitsByUser(propUserID, token))
            .then(postits => this.setState({ postits }))

    }
  
    handleDeletePost = id => {
        
        const { propUserID, token } = this.props

        logic.deletePostit(id, propUserID, token)
            .then(() => logic.listPostitsByUser(propUserID, token))
            .then(postits => this.setState({ postits }))
    }

    handleLogout = () => {
        this.props.logOut()
    }
  
    handleUpdatePost = (id, text) => {
        debugger
        const { propUserID, token } = this.props

        logic.updatePost(id, text, propUserID, token)
            .then(() => logic.listPostitsByUser(propUserID, token))
            .then(postits => this.setState({ postits }))
    }
  
    togglePopup = (id) => {
       
        this.setState({
            showPopup : !this.state.showPopup,
            clickedID : id
        })
    }

    render() {
        return <div className="container">
        <h1>Post it App</h1>
        <InputForm onSubmit = {this.handleSubmit} />
        <div className="test">
        {this.state.postits.map( postit => <Post key={postit.id} text={postit.text} id={postit.id}  onDeletePost = {this.handleDeletePost} editing = {this.state.showPopup} popup = {this.togglePopup} />)}
        {this.state.postits.map(postit => (this.state.showPopup && postit.id===this.state.clickedID) ? <Popup onUpdate={this.handleUpdatePost} key={postit.id} id={postit.id} text={postit.text}/> : null)}
        </div>
        <button onClick={this.handleLogout}>Log out</button>
        </div>
    }
}


export default Home


