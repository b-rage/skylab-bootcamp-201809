// Presentation (components)

class KeepMessage extends React.Component {
    state = { text: '' }

    handleInput = event => {
        const text = event.target.value
    
        this.setState({ text })
    }

    keepSubmit = event => {
        event.preventDefault()

        this.props.onSubmit(this.state.text)

        this.setState({ text: '' })
    }

    render () {
        return <form onSubmit={this.keepSubmit}>
        <input value={this.state.text} placeholder="Write your post it here" onChange={this.handleInput}/>
        <button type="submit">Submit<i></i></button>
        </form>
    }
}

class Post extends React.Component { 
    state = { text: this.props.text }

    keepChange = event => {
        const text = event.target.value 

        this.setState({ text })
    }

    keepBlur = () => {
        this.props.editPost(this.props.id, this.state.text)
    }

    render() { 

        return 
        <article className="post">
        <textarea defaultValue= {this.state.text} /> 

        <button className="editButton" onClick={() => this.props.onEditPost(props.id)} onBlur={this.keepBlur}>Edit<i></i></button>
        
        <button className="deleteButton" onClick={() => this.props.onDeletePost(props.id)}>Delete<i></i></button>
    </article>
    }
}

class PostIt extends React.Component {
    state = { postits: logic.listPostits() }

    keepSubmit = text => {
        logic.createPostit(text)

        this.setState({ postits: logic.listPostits() }) 
    }

    editPost = (id, text) => {
        logic.editPostit(id, text)

        this.setState({ postits: logic.listPostits() })
    }

    deletePost = id => {
        logic.deletePostit(id)

        this.setState({ postits: logic.listPostits() })
    }



    render() {
        return <div>
            <h1>Post-it or die trying</h1>

            <KeepMessage onSubmit={this.keepSubmit}/>
           
            <section>
                {this.state.postits.map(postit => <Post key={postit.id} text={postit.text} id={postit.id} onDeletePost={this.deletePost} onEditPost={this.editPost} />)}
            </section>

        </div>
    }
}
ReactDOM.render(<PostIt />, document.getElementById('root'))