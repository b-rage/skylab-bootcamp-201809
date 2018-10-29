import React, { Component } from 'react'
import logo from '../icon1.png'

class AddPost extends Component {
    state = { img: null, text: null}

    // componentDidMount() {
    //     logic.listPosts() 
    // }
    
    handleContentChange = event => {
        const text = event.target.value

        this.setState({ text })
    }

    uploadWidget =() => {
        let widget = window.cloudinary.openUploadWidget({ cloud_name: 'skylabcoders', upload_preset: 'wqmshx2h', tags:['pintegram']},
            (error, result) => {
               
                if (result.event === "success") {
                    const img = result.info.secure_url

                    this.setState({ img })
                    
                    widget.close()
                }
            })
            console.log()
    }

    handlePost = event => {
        event.preventDefault()
        
        const { img, text } = this.state

        this.props.onPost(img, text)
    }


    render() {
        return <div className="div-home">
            <nav className="nav"><div onClick={this.props.onGoBack} className="logo"><img onClick={this.props.onGoBack} className ="logo__img" src={logo}></img><h1 onClick={this.props.onGoBack} className="title">Pintegram</h1></div>
            <div className="menu">
                <i onClick={this.props.onSearch} className="menu__button fas fa-search"></i>
                <i className="menu__button fas fa-upload"></i>
                <i onClick={this.props.onProfile} className="menu__button fas fa-user"></i>
                <i onClick={this.props.onLogout} className="menu__button fas fa-sign-out-alt"></i>
            </div>
            </nav>
            <div className="upload"> 
                <div className="upload__center">
                    <div className="group__upload">
                        <p className="upload__text" >Add image first. Then add text if you want.</p>
                        <img className="post__img" src={this.state.img} ></img>
                        <textarea className = "textarea__post" defaultValue={this.state.text} onChange={this.handleContentChange} placeholder="Text here..."/>
                        <button onClick={this.uploadWidget} className="upload-button">Add Image</button>
                        {this.state.img !== null && <button onClick={this.handlePost} className="upload-button">Post</button>}
                    </div>
                </div>
            </div>
        </div>
    }
}

export default AddPost
