// tercera iteración, esta vez guardando  las notas en Session Storage
//Model (domain)
if (!sessionStorage.getItem('postits'))
    sessionStorage.setItem('postits', JSON.stringify([]))

class Postit {
    constructor(text) {
        this.text = text
        this.id = Date.now()
    }
}

//Business (logic)?

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

const Post = (props) => {
    console.log('Post', '"render"')

    return (
        <div>
            <article className="post"><p>{props.text}</p>
                <button onClick={() => props.onDeletePost(props.id)}><i className="far fa-trash-alt"></i></button>
            </article>
        </div>
    )
}


class App extends React.Component {
    state = { postits: JSON.parse(sessionStorage.getItem('postits')) }

    handleSubmit = text => {
        console.log('App', 'handleSubmit(setState')

        const postit = new Postit(text)

        const postits = JSON.parse(sessionStorage.getItem('postits'))

        postits.push(postit)

        sessionStorage.setItem('postits', JSON.stringify(postits))

        this.setState({ postits })
    }

    handleDeletePost = id => {
        let postits = JSON.parse(sessionStorage.getItem('postits'))

        postits = postits.filter(postit => postit.id !== id)

        sessionStorage.setItem('postits', JSON.stringify(postits))

        this.setState({ postits })
    }

    render() {
        console.log('App', 'render')

        return <div>
            <h1>Post-It App <i className="fas fa-sticky-note"></i></h1>

            <InputForm onSubmit={this.handleSubmit} />

            <section>
                {this.state.postits.map(postit => <Post key={postit.id} text={postit.text} id={postit.id} onDeletePost={this.handleDeletePost} />)}
            </section>
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))