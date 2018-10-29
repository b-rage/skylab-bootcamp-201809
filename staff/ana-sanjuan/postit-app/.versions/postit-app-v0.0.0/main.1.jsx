
class InputForm extends React.Component{
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
        <button className="btn btn-warning" onClick = {()=> props.DadDelete(props.index)}>Delete Me</button>
        </article>
}
class App extends React.Component{
    state = { posts: []}

    handleSubmit = text => {
        const posts = [...this.state.posts, text]

        this.setState({ posts })
    }

    handleDelete = index => {
        const posts = this.state.posts.filter((post, _index) => index !== _index)
    
        this.setState({posts})
    }
    render() {
        return <section> 
            <h1>Post-It App <i className="fas fa-sticky-note"></i></h1>
            <InputForm DadSubmit={this.handleSubmit}/>
            <section>  
                {this.state.posts.map((post, index) => <Article key={index} index={index} postItText={post} DadDelete={this.handleDelete}/>)}
            </section> 
        </section>
    }
}

ReactDOM.render(<App />, root)
