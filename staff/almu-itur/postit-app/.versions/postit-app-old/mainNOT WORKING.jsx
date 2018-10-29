class InputForm extends React.Component {
    state = { note:'' }

    handleInput = event => { 
        const note = event.target.value
        this.setState({ note })
    }

    handleSubmit = event => {

        event.preventDefault()

        this.props.onSubmit(this.state.note)

        this.setState({ note: '' })
    }

    render() {
        return <form>
            <label>Add text</label>
            <input type="text" value={this.state.note} onChange={this.handleInput} />
            <input type="submit" onSubmit={this.handleSubmit} value="Create note" />
        </form>
    }

}

function PostIt(props) {
    return <section><article className="post">{props.note}</article></section>
}

class App extends React.Component {

    state = { notes: [] }

    createNote = note => {
        event.preventDefault()     
        const notes = this.state.notes.concat(note)
        this.setState({ notes })
    }

    render() {
        return <div>
            <h1>Post-It App</h1>    

            <InputForm onSubmit={this.handleSubmit} />
            
            <section>
              {this.state.notes.map((post, index) => <PostIt key={index} note={post} />)}
            </section>
            
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))