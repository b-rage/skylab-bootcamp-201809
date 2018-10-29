const storage = sessionStorage
// const storage = localStorage

//Model (domain)

if (!storage.getItem('postits'))
    storage.setItem('postits', JSON.stringify([]))


class Postit {
    constructor(text) {
        this.text = text
        this.id = Date.now()
    }
}

//bussiness

const logic = {
    
    createPostit(text) {
        const postit = new Postit(text)

        const postits = this.listPostits()

        postits.push(postit)

        this.persistPostits(postits)
    },

    listPostits(id) {
        return JSON.parse(storage.getItem('postits'))

    },

    persistPostits(postits) {
        storage.setItem('postits', JSON.stringify(postits))
    },

    deletePostit(id){
        let postits = this.listPostits()

        postits = postits.filter(postit => postit.id !== id)

        storage.setItem('postits', JSON.stringify(postits))
    },

    updatePostit(id, text) {
        let postits = this.listPostits()

        const postit = postits.find(postit => postit.id === id)

        postit.text = text

        this.persistPostits(postits)
    }
}

// Presentation (components)
class InputForm extends React.Component {
    state = {text: "" }

    handleInput = event => {
        const text = event.target.value

        this.setState({text})
    }

    handleSubmit = event => {
        event.preventDefault()
        
        this.props.DadSubmit(this.state.text)

        this.setState({ text: '' })
      
    }

    render(){
        return<form onSubmit={this.handleSubmit} >
            <input value = {this.state.text} placeholder="Write text here..." onChange={this.handleInput} />
            <button type= "submit">Create</button>
        </form>
    }
}

class Post extends React.Component {

    state = {text: this.props.text  }

    handleChange = event => {
        const text = event.target.value

        this.setState({text})
    }

    handleBlur = event => {
        this.props.onUpdatePost( this.state.text, this.props.id)
      
    }

    render(){
        return <article className="post">
            <textarea defaultValue={this.state.text} onChange={this.handleChange} onBlur={this.handleBlur} />
            <button onClick={() => this.props.onDeletePost(this.props.id)}><i className="far fa-trash-alt"></i></button>      
        </article>
    }
}

class App extends React.Component {
    state = { postits: logic.listPostits() }

    handleSubmit = text => {
        logic.createPostit(text)

        this.setState({ postits: logic.listPostits() })
    }

    handleDelete = id => {
        
        logic.deletePostit(id)

        this.setState({ postits: logic.listPostits() })
    }

    handleUpdatePost = (text, id) => {

        logic.updatePostit(id, text)

        this.setState({ postits: logic.listPostits() })


    }

    render() {
        return <section> 
            <h1>Post-It App <i className="fas fa-sticky-note"></i></h1>
            <InputForm DadSubmit={this.handleSubmit}/>
            <section>  
                {this.state.postits.map(postit => <Post key={postit.id} id={postit.id} text={postit.text} onDeletePost={this.handleDelete} onUpdatePost={this.handleUpdatePost}/>)}
            </section> 
        </section>
    }
}

ReactDOM.render(<App />, root)
