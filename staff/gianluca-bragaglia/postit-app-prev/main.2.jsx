
class Post extends React.Component {
   state = {
        text: this.props.text
   }


   handleChange = event => {
    const text = event.target.value
    this.setState({ text })
   }

   handleBlur = () => {
       this.props.onUpdatePost(this.props.id, this.state.text)
   }

   render() {
    return <section>
                <div className="article"><textarea className="postText" defaultValue={this.state.text} onChange={this.handleChange} onBlur={this.handleBlur}/></div>
                <div className="btn-container">
                <button className="button-delete" onClick={() => this.props.onDeletePost(this.props.id)}>delete</button>
                </div>
            </section>
   }
            
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

    handleUpdatePost = (id, text) => {
        logic.updatePostit(id, text)

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
            {this.state.postits.map(postit => <Post key={postit.id} text={postit.text} id={postit.id} onDeletePost={this.handleDeletePost} onUpdatePost={this.handleUpdatePost} />)}
            </div>
           
                       
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))