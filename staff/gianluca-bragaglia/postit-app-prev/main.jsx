
function Post(props) {
   
    return <section>
                <div className="article"><p className="postText">{props.text}</p></div>
                <div className="btn-container">
                <button className="button-delete" onClick={() => props.onDeletePost(props.id)}>delete</button>
                <button className="button-edit" onClick={() => props.onEditPost(props.id)}>edit</button>
                </div>
            </section>        
} 


class App extends React.Component {


    state = { 
            postits: logic.listPostits(),
            text: ''
    }

    handleChange = event => {
        
        const text = event.target.value

        this.setState({ text })

    }
    
    
    handleSubmit = event => { 
        event.preventDefault()   

        logic.createPostit(this.state.text)

        this.setState({ postits: logic.listPostits() })

        this.setState({text: ''})

    }


    handleDeletePost = id => {  
        
        logic.deletePostit(id)

        this.setState({ postits: logic.listPostits() })        
       
    }


    handleEditPost = (id) => {
        logic.editPostit(id)
        this.setState({ postits: logic.listPostits() })
    }

    render() {
        return <div className="container">
            <h1>Post-It App</h1>
            <form onSubmit={this.handleSubmit}>
                <textarea placeholder="Write text here..." type="text" onChange={this.handleChange} value={this.state.text} /><br></br>
                <button className="button" type="submit">Create</button>
            </form>
            <div className="posts-container">
            {this.state.postits.map(postit => <Post key={postit.id} text={postit.text} id={postit.id} onDeletePost={this.handleDeletePost} onEditPost={this.handleEditPost}/>)}
            </div>
                       
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))