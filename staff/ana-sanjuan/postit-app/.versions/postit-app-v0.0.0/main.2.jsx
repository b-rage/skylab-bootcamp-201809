
class Postit {
    constructor(text) {
        this.text = text
        this.id = Date.now()
    }
}


class InputForm extends React.Component {
    state = {textValue: "" }

    handleInput = event => {
        const textValue = event.target.value

        this.setState({textValue})
    }

    handleSubmit = event => {
        event.preventDefault()
        
        this.props.DadSubmit(this.state.textValue)

        this.setState({ textValue: '' })
      
     }

    render(){
        return<form onSubmit={this.handleSubmit} >
            <textarea placeholder="Write text here..." onChange={this.handleInput} value = {this.state.textValue}></textarea>
            <button type= "submit">Create</button>
        </form>
    }
}

function Article (props) {

    return <article className="post">
        <p>{props.postItText}</p>
        <button className="btn btn-warning" onClick = {()=> props.DadDelete(props.id)}>Delete Me</button>
        </article>
}
class App extends React.Component {
    state = { postits: []}

    handleSubmit = text => {
        var post = new Postit(text)
        
        const postits = [...this.state.postits, post]
        
        this.setState({ postits })
    }

    handleDelete = id => {
        const postits = this.state.postits.filter(postit => postit.id !== id)

        this.setState({postits})
    }

    render() {
        return <section> 
            <h1>Post-It App <i className="fas fa-sticky-note"></i></h1>
            <InputForm DadSubmit={this.handleSubmit}/>
            <section>  
                {this.state.postits.map(postit => <Article key={postit.id} id={postit.id} postItText={postit.text} DadDelete={this.handleDelete}/>)}
            </section> 
        </section>
    }
}

ReactDOM.render(<App />, root)
