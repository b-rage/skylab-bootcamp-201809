const storage = sessionStorage

if (!storage.getItem('postits'))
storage.setItem('postits', JSON.stringify([]))

class Postit {
    constructor(text) {
        this.text = text
        this.id = Date.now()
    }
}
const logic = {
    createPostit(postit) {
        const postits = JSON.parse(storage.getItem('postits'))
        
        postits.push(postit)
        
        storage.setItem('postits', JSON.stringify(postits))
    },

    deletePostit(id) {

        let postits = JSON.parse(storage.getItem('postits'))
        
        postits = postits.filter(postit => postit.id !== id)
        
        storage.setItem('postits', JSON.stringify(postits))
    },

    listPostits() {
        return JSON.parse(storage.getItem('postits'))
    }
}


class InputForm extends React.Component {
    state = { text: '' }

    handleInput = event => {
        const text = event.target.value

        this.setState({ text })
    }

    handleSubmit = event => {
        event.preventDefault()

        this.props.onSubmit(this.state.text)

        this.setState({ text: '' })
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <textarea placeholder='Write your text...' value={this.state.text} onChange={this.handleInput}></textarea>
            <button type='submit'>Create</button>
        </form>
    }
}

function PostIt(props) {
    return <article className='postIt'>
        <p >{props.paint}</p>
        <button className='postIt__button' type='button' onClick={() => {props.onClick(props.id)}} >X</button>
    </article>
}

class App extends React.Component {

    state = { postits: logic.listPostits() }

    handleSubmit = text => {
        const postit = new Postit(text)

        logic.createPostit(postit)
        
        this.setState({postits: logic.listPostits()})
    }

    handleClick = id => {
        logic.deletePostit(id)

        this.setState({postits: logic.listPostits()})
    }

    render() {
        return <section className='main-section'>
            <h1>Post-It App</h1>

            <InputForm onSubmit={this.handleSubmit} />

            <section className='postit-board'>
                {this.state.postits.map(postit => <PostIt paint={postit.text} key={postit.id} id={postit.id} onClick={this.handleClick}/>)}
            </section>
        </section >
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
