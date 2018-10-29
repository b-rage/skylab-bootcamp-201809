
if (!sessionStorage.getItem('postits'))
sessionStorage.setItem('postits', JSON.stringify([]))

// this is to resolve the problem with key indexes, like this React does'nt have to paint again every postit, when someone deleted -beacuse of indexes change-
class Postit {
    constructor(text) {
        this.text = text
        this.id = Date.now()
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

    state = { postits: JSON.parse(sessionStorage.getItem('postits')) }

    handleSubmit = text => {
        const postit = new Postit(text)

        const postits = JSON.parse(sessionStorage.getItem('postits'))
        
        postits.push(postit)
        
        sessionStorage.setItem('postits', JSON.stringify(postits))
        
        this.setState({postits})
    }

    handleClick = id => {
        let postits = JSON.parse(sessionStorage.getItem('postits'))
        
        postits = postits.filter(postit => postit.id !== id)
        
        sessionStorage.setItem('postits', JSON.stringify(postits))

        this.setState({postits})
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
