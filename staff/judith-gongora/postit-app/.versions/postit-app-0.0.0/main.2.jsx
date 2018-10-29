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

    return <article onClick={() => props.onClick(props.index)} className="post">{props.text}</article>
}


class App extends React.Component {
    state = { postit: [] }
   
    handleClick = (text) => {
        console.log('entra')
        this.setState({postit : [text,...this.state.postit]})
        //const posts = this.state.postit.concat(this.state.text)
        //this.setState({postit})
    }

    handleDelete = index => {
        let posts = Array.from(this.state.postit)
        posts.splice(index,1)

        this.setState({ postit:posts })
    }

    render() {
        return <div>

        <InputForm onClick={this.handleClick}/>

        <section>
            {/* {this.state.posts.map((post, index) => <article key={index} className="post">{post}</article>)} */}
            {this.state.postit.map((post, index) => <Post onClick = {this.handleDelete} key={index} index={index} text={post} />)}
        </section>
    </div>
    }
}
ReactDOM.render(<App />, document.getElementById('root'))

//{this.state.posts.map((post, index) => <article key={index} className="post">{post}</article>)}