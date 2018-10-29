
function Button(props) {
    return <button type='button' onClick={props.clicked}>Create</button>
}

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = { inputText: [] }
    }

    show = () => {
    }

    keepText = (event) => {
        const inputText = event.target.value
        this.state.inputText.push(inputText)
        this.setState({inputText})
    }

    render() {
        return <form>
            <textarea value={this.state.inputText} onChange={this.keepText}></textarea>
            <Button clicked={this.show}></Button>
        </form>
    }
}

class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state = { input: '' }
    }

    render() {
        return <article>this.state.input</article>
    }
}

function App() {

    return <section>
        <h1>Post-It App</h1>
        <Form></Form>
        <section>
            <Article></Article>
        </section>
    </section>


}




ReactDOM.render(<App />, document.getElementById('root'))
