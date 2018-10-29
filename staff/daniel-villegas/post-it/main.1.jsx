function Button(props) {
    return <button type='button' onClick={props.onClick}>add post-it</button>
}

function Article (props) {
    return <div>{props.posts}</div>
}
    
class PostIt extends React.Component {
    state = { text: '', posts: []}

    keepMessage = event => {
        const text = event.target.value

        this.setState({ text })
    }

    print = () => {
        event.preventDefault()

        const posts = this.state.posts.concat(this.state.text)

        this.setState({posts})
        // this.setState(prevState => ({
        //     posts: [...prevState.posts, this.state.text]
        // }))    

        //con el setState le pasamos el estado de posts y se le añade text.
    }

    render() {
        return <div>
            <h1>Post-it or die trying</h1>
            <form className=''>
            <textarea placeholder="Write your post it here" value={this.state.text} type="text" onChange={this.keepMessage} tabIndex="0" />
            <Button onClick={this.print}></Button>
            </form>

            <section>
                {this.state.posts.map((post, index) => <article key={index} className='post'>{post}</article>)}
                {/* <Article posts = {this.state.posts}></Article> */}
            </section>
        </div>
    }
}

ReactDOM.render(<PostIt />, document.getElementById('root'))