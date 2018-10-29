import React, { Component } from 'react'
import logic from '../logic'
import InputForm from './InputForm'
import Post from './Post'
import Popup from './Popup'

class Home extends Component {
    state = {
        postits: logic.listPostitsByUser(this.props.propUserID),
        showPopup: false,
     }

     handleSubmit = (text,userID) => {
        logic.createPostit(text, this.props.propUserID)
        
        this.setState({ postits: logic.listPostitsByUser(this.props.propUserID) })
    }
  
    handleDeletePost = id => {
        
        logic.deletePostit(id)
  
        this.setState({ postits : logic.listPostitsByUser(this.props.propUserID),
        showPopup :false })
    }

    handleLogout = () => {
        this.props.logOut()
    }
  
    handleUpdatePost = (id, text, userID) => {
        logic.updatePost(id, text, this.props.propUserID )
    
        this.setState({postits : logic.listPostitsByUser(this.props.propUserID),
        showPopup : false})
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


