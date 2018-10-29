function PostIt() {

}

class App extends React.Component {

    state = { note: '' }

    keepNote = event => { 
        var note = event.target.value
        this.setState({ note })
        this.createNote()
    }

    createNote = event => {
        console.log(`Entra en createNote`)
    }

    render() {
        return (
            <div className="App">
                <form>
                    <label>Add text</label>
                    <input type="text" value={this.state.note} onChange={this.keepNote}/>
                    <input type="submit" value="Create note"/>
                </form>
            </div>
        )

        // <PostIt createNote="+" onClick={this.operate}></Button>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))