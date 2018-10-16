// Presentation (components)

class InputForm extends React.Component {
    state = { text: '' }

    handleChange = event => { //event aqui es el parametro de entrada

        this.setState({ text : event.target.value})
    
    }

    handleClick = () => {

        this.props.onClick(this.state.text)

        this.setState({ text: '' })
     }

    render() {
        console.log('InputForm', 'render')

        return <header>
            <nav><img src="http://assets.stickpng.com/thumbs/5b06c23efad1cae04539afe5.png" alt=""/></nav>
            <div className="form">
                <textarea placeholder="input your new postit" value={this.state.text} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Add Postit</button> 
            </div>
        </header> 
        
    }
}

function Post(props) {

    return <article onClick={() => props.onClick(props.id)} className="post">{props.text}</article>
}


class App extends React.Component {
    state = { postits: logic.listPostits() }
   
    handleClick = (text) => {
        logic.createPostit(text)

        this.setState({ postits: logic.listPostits() })
    }

    handleDelete = id => {
        logic.deletePostit(id)

        this.setState({ postits: logic.listPostits() })
    }

    render() {
        return <div>

        <InputForm onClick={this.handleClick}/>

        <section>
            {/* {this.state.posts.map((post, index) => <article key={index} className="post">{post}</article>)} */}
            {this.state.postits.map((postit) => <Post onClick = {this.handleDelete} key={postit.id} text={postit.text} id={postit.id} />)}
        </section>
    </div>
    }
} 
ReactDOM.render(<App />, document.getElementById('root'))

//{this.state.posts.map((post, index) => <article key={index} className="post">{post}</article>)}