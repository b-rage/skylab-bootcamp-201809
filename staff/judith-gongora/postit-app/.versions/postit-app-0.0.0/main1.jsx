class App extends React.Component {
    state = { text: '' , postit: [] }

    handleChange = event => {

        this.setState({ text : event.target.value})
    
    }
    handleClick = () => {
       this.setState({postit : [this.state.text,...this.state.postit]})
       //const posts = this.state.postit.concat(this.state.text)
       //this.setState({postit})
       this.state.text = ''
    }

    render() {
        return <div>
            <header>
                <nav><img src="http://assets.stickpng.com/thumbs/5b06c23efad1cae04539afe5.png" alt=""/></nav>
                <div className="form">
                    <textarea placeholder="input your new postit" value={this.state.text} onChange={this.handleChange} />
                    <button onClick={this.handleClick}>Add Postit</button> 
                </div>
            </header> 
            <section> 
                {this.state.postit.map(post => <article>{post}</article>)}
            </section> 
        </div>
        

    }
}

ReactDOM.render(<App />, document.getElementById('root'))

//this.state.postit.map(post => <article className="post"> {post}</article>)