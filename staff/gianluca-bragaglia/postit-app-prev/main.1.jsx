
// Model (domain)

const storage = sessionStorage
// const storage = localStorage

if (!storage.getItem('postits'))
    storage.setItem('postits', JSON.stringify([]))

// function Postit(text) {
//     this.text = text
//     this.id = Date.now()
// }

class Postit {
    constructor(text) {
        this.text = text
        this.id = Date.now()
    }
}


function Post(props) {
   
    return <section>
                <article className="article">{props.text}</article>
                <button className="button-delete" onClick={() => props.onDeletePost(props.id)}>delete</button>
            </section>        
} 


class App extends React.Component {


    state = { postits: JSON.parse(storage.getItem('postits')),
            text: ''
    }

    handleChange = event => {
        
        const text = event.target.value

        this.setState({ text })

    }
    
    
    handleSubmit = event => { 
        event.preventDefault()   

        const postit = new Postit(this.state.text)

        const postits = JSON.parse(storage.getItem('postits'))

        postits.push(postit)

        storage.setItem('postits', JSON.stringify(postits))

        this.setState({ postits: JSON.parse(storage.getItem('postits')) })

        this.setState({text: ''})

    }


    handleDeletePost = id => {  
        
        let postits = JSON.parse(storage.getItem('postits'))

        postits = postits.filter(postit => postit.id !== id)

        storage.setItem('postits', JSON.stringify(postits))

        this.setState({ postits: JSON.parse(storage.getItem('postits')) })

        
       
    }

    render() {
        return <div className="container">
            <h1>Post-It App</h1>
            <form onSubmit={this.handleSubmit}>
                <textarea placeholder="Write text here..." type="text" onChange={this.handleChange} value={this.state.text} /><br></br>
                <button className="button" type="submit">Create</button>
            </form>
            <div className="posts-container">
            {this.state.postits.map(postit => <Post key={postit.id} text={postit.text} id={postit.id} onDeletePost={this.handleDeletePost} />)}
            </div>
                       
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))