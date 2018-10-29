// Presentation (components)

class InputForm extends React.Component {
    state = { text: '' }

    handleInput = event => {
        console.log('InputForm', 'handleInput (setState)')

        const text = event.target.value

        this.setState({ text })
    }

    handleSubmit = event => {
        console.log('InputForm', 'handleSubmit (setState)')

        event.preventDefault()

        this.props.onSubmit(this.state.text)

        this.setState({ text: '' })
    }

    render() {
        console.log('InputForm', 'render')

        return <form onSubmit={this.handleSubmit}>
        <textarea className="textarea" value={this.state.text} placeholder="Write text here..." onChange={this.handleInput} />
        <button className="btn" type="submit">Create</button>
        </form>
    }
}

class Post extends React.Component {
    state= { text: this.props.text}

    handleEditPost = event => {
     const text = event.target.value
     this.state({text})   
    }

    handleblur = () => {
        this.props.onUpdatePost(this.props.is, this.state.text)
    }

    render() {
    console.log('Post', '"render"')

    return <div>
            <article className="post">
                <textarea className="postit" value={this.state.text} onchange={this.handleEditPost} onBlur={this.handleblur}></textarea>
            </article>

            <button onClick={() => props.onDeletePost(props.id)}><i className="fas fa-ban"></i></button>
        </div>    
}
}

class App extends React.Component {
    state = { postits: logic.listPostits() }

    handleSubmit = text => {
        console.log('App', 'handleSubmit (setState)')

        logic.createPostit(text)

        this.setState({ postits: logic.listPostits() })
    }

    handleDeletePost = id => {
        logic.deletePostit(id)

        this.setState({ postits: logic.listPostits() })
    }

    handleUpdatePost = (id, text) => {
        logic.updatePostit(id, text)

        this.setState({ postits: logic.editPostits() })
    }

    render() {
        console.log('App', 'render')

        return <div className="app_cont">
            <h1 className="title">Post-It App</h1>

            <InputForm onSubmit={this.handleSubmit} />
            

            <section className="article_cont">
            {this.state.postits.map(postit => <Post key={postit.id} text={postit.text} id={postit.id} onDeletePost={this.handleDeletePost} onUpdatePost={this.handleUpdatePost}/>)}
            </section>
            </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))