// CLASE PADRE DE TODOS

class App extends React.Component {

    state = {
        texts: logic.listPostits()
    }

    handleSubmit = this.handleSubmit.bind(this)
    handleDelete = this.handleDelete.bind(this)

    handleSubmit(event) {
        logic.createPostit(event)

        this.setState({ texts: logic.listPostits() })
    }


    handleDelete(INDEXtoBeDeleted) {
        logic.deletePostit(INDEXtoBeDeleted)

        this.setState({ texts: logic.listPostits() })
    }

    handleEditPost = id => {
        let element = document.getElementById(id)
        if (element.disabled) {
            element.disabled = false
        }
        else{
            logic.modifyPostit(id)
            // let temp_text= texts.filter(_id => id===_id)
            // temp_text.text=
            element.disabled = true
        }
        
            
    }


    render() {
        return <div className="container">
            <h1>Post-It App</h1>
            <Menu onSubmit={this.handleSubmit} />
            <section className="posts-container">
                {this.state.texts.map(postit => {
                    return <Notes key={postit.id} text={postit.text} index={postit.id} handleDelete={this.handleDelete}handleEditPost={this.handleEditPost}/>
                })}
            </section>

        </div>
    }
}

// THIS CLASS IS A SON OF "App"

class Menu extends React.Component {
    state = { text: '' }

    handleInput = event => {
        console.log('InputForm', 'handleInput (setState)')

        const text = event.target.value

        this.setState({ text })
    }

    handleSubmit = event => {
        console.log('InputForm', 'handleSubmit (setState)')

        event.preventDefault()

        this.props.onSubmit(this.state.text)

        this.setState({ text: '' })
    }

    render() {
        console.log('InputForm', 'render')

        return <form onSubmit={this.handleSubmit}>
            <textarea value={this.state.text} placeholder="Write text here..." onChange={this.handleInput} />
            <Button name={'Create'} />
        </form>
    }
}

// THIS CLASS IS A SON OF "App"

function Notes(props) {

    return <article className="article">
        <textarea name="" id={props.index} cols="30" rows="10" disabled >{props.text}</textarea>

        <button onClick={() => props.handleDelete(props.index)} >X</button>

        <button onClick={() => props.handleEditPost(props.index)} >Edit</button>

    </article>

}
// THIS FUNCTION IS A SON OF "MENU"

function Button(props) {
    return <button type="submit">{props.name}</button>
}

// RENFER APP

ReactDOM.render(<App />, document.getElementById('root'))