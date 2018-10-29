// class PostId {
//     constructor(text) {
//         this.next = text
//         this.id = Date.now()
//     }
// }

class KeepMessage extends React.Component {
    state = { text: '' }

    handleInput = event => {
        const text = event.target.value
    
        this.setState({ text })
    }

    keepSubmit = event => {
        event.preventDefault()

        this.props.onSubmit(this.state.text)

        this.setState({ text: '' })
    }

    render () {
        return <form onSubmit={this.keepSubmit}>
        <input value={this.state.text} placeholder="Write your post it here" onChange={this.handleInput}/>
        <button type="submit">Submit<i className="fas fa-plus"></i></button>
        </form>
    }
}

function Post(props) { 

    return <article className="post">
        <p>{props.text}</p>
        <button onClick={() => props.onDeletePost(props.index)}><i className="deleteButton"></i></button>
    </article>
}

class PostIt extends React.Component {
    state = { posts: [] }

    keepSubmit = text => {
        const posts = this.state.posts.concat(text)

        this.setState({ posts }) 
    }

    deletePost = (index) => {
        const posts = this.state.posts.filter((post, _index) => index !== _index)

        this.setState({ posts })
    }

    render() {
        return <div>
            <h1>Post-it or die trying</h1>

            <KeepMessage onSubmit={this.keepSubmit}/>
           
            <section>
                {this.state.posts.map((post, index) => <Post key={index} text={post} index={index} className='deleteButton' onDeletePost={this.deletePost} />)}
            </section>

        </div>
    }
}

ReactDOM.render(<PostIt />, document.getElementById('root'))