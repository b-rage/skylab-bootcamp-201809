function PostIt(props) {
    return <section><article>{props.note}</article></section>
}

class App extends React.Component {

    state = { note: '', notes: [] }

    keepNote = event => { 
        var note = event.target.value
        this.setState({ note })
    }

    createNote = event => {
        event.preventDefault()     
        this.setState(prevState => ({
            notes: [...prevState.notes, this.state.note]
        })) 
    }

    render() {
        return (
            <div className="container">
                <form>
                    <label>Add text</label>
                    <input type="text" onChange={this.keepNote}/>
                    <input type="submit" onClick={this.createNote} value="Create note"/>
                </form>
                <div className="postIt-container">
                    {this.state.notes.map((post) => {
                        return <PostIt key={post} note={post} />
                    })}
                </div>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))