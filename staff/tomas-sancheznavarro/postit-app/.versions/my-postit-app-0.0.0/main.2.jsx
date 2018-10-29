// segunda iteración, separada en componentes

class InputForm extends React.Component {
    state = { text: '' }

    handleInput = event => {
        console.log('InputForm', 'handleInput (setState)')

        const text = event.target.value

        this.setState({ text })
    }

    handleSubmit = event => {
        console.log('InputForm', 'handleSubmit(setState)')

        event.preventDefault()

        this.props.onSubmit(this.state.text)

        this.setState({ text: '' })
    }

    render() {
        console.log('InputForm', 'render')

        return <form onSubmit={this.handleSubmit}>
            <textarea value={this.state.text} placeholder="Write text here..." onChange={this.handleInput} />
            <button type="submit"><i className="fas fa-plus"></i>Post it!</button>
        </form>
    }
}

function Post(props) {
    console.log('Post', '"render"')

    return (
        <div>
            <article className="post">{props.text}</article>
            <button onClick={() => props.onDeletePost(props.index)}><i className="far fa-trash-alt"></i></button>
        </div>
    )
}


class App extends React.Component {
    state = { posts: [] }

    handleSubmit = text => {
        console.log('App', 'handleSubmit(setState')

        // const posts = this.state.posts.concat(text)
        const posts = [...this.state.posts, text]

        this.setState({ posts })
    }

    handleDeletePost = index => {
        const posts = this.state.posts.filter((post, _index) => index !== _index)

        this.setState({ posts })

        // this.setState({ posts: this.state.posts.filter((post, i) => i !== index) }) >> mi versión anterior

    }

    render() {
        console.log('App', 'render')

        return <div>
            <h1>Post-It App <i className="fas fa-sticky-note"></i></h1>

            <InputForm onSubmit={this.handleSubmit} />

            <section>
                {this.state.posts.map((post, index) => <Post key={index} text={post} index={index} onDeletePost={this.handleDeletePost} />)}
            </section>
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))