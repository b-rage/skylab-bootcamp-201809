class PostId {
    constructor(text) {
        this.next = text
        this.id = Date.now()
    }
}

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
        return <form className='' onSubmit={this.keepSubmit}>
        <textarea placeholder="Write your post it here" value={this.state.text} onChange={this.handleInput} tabIndex="0" />
        <button type="submit">Create</button>
        </form>
    }
}

function Post(props) { 
    return <article className="post">{props.text}</article>
}

class PostIt extends React.Component {
    state = { posts: [] }

    keepSubmit = text => {
        const posts = this.state.posts.concat(text)

        this.setState({ posts }) 
    }

    // deletePost = (id) => {
    //     const posts = this.state.posts.filter((postId) => postId.id !== id)

    //     this.setState({ posts })
    // }

    render() {
        return <div>
            <h1>Post-it or die trying</h1>

            <KeepMessage onSubmit={this.keepSubmit}/>
           
            <section>
                {/* {this.state.posts.map((post, index) =>  */}
                {this.state.posts.map((post, index) => <Post key={index} text={post} />)}
                {/* {return <div><Post key={PostId.id} text={PostId.text}/><div><button className='deleteButton' index={PostId.id} onClick={this.deletePost}>Delete</button></div></div>} )}  */}
            </section>

        </div>
    }
}

ReactDOM.render(<PostIt />, document.getElementById('root'))