// Presentation (components)

class InputForm extends React.Component {
    state = { text: '' }

    handleInput = event => {
        const text = event.target.value

        this.setState({ text })
    }

    handleSubmit = event => {
        event.preventDefault()

        this.props.onSubmit(this.state.text)

        this.setState({ text: '' })
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <textarea placeholder='Write your text...' value={this.state.text} onChange={this.handleInput}></textarea>
            <button type='submit'>Create</button>
        </form>
    }
}

class PostIt extends React.Component {
    state = { editText: '' }

    handleInput = event => {
        const editText = event.target.value
        this.setState({ editText })
    }

    handleSubmit = event => {
        event.preventDefault()

        this.props.onSubmit(this.state.editText, this.props.id)

        this.setState({ editText: '' })
    }

    render() {
        return <div>
            <article className='postIt'>
                <p >{this.props.paint}</p>
                <button className='postIt__button' type='button' onClick={() => { this.props.onClick(this.props.id) }} >X</button>
                <button className='postIt__button--edit' type='button' onClick={this.props.onEditClick} >EDIT</button>
            </article>
            {this.props.show &&
                <form onSubmit={this.handleSubmit}>
                    <textarea value={this.state.text} onChange={this.handleInput}>{this.props.paint}</textarea>
                    <button type='submit'>Submit changes</button>
                </form> }
        </div>
    }
}

class App extends React.Component {

    state = { postits: logic.listPostits(), show: false }

    handleSubmit = text => {
        const postit = new Postit(text)

        logic.createPostit(postit)

        this.setState({ postits: logic.listPostits() })
    }

    handleClick = id => {
        logic.deletePostit(id)

        this.setState({ postits: logic.listPostits() })
    }

    handleEditSubmit = (text, id) => {
        logic.changePostit(text, id)
        this.setState({ postits: logic.listPostits(), show: false })

    }

    handleEditClick = () => {
        this.setState({ show: true })

    }

    render() {
        return <section className='main-section'>
            <h1>Post-It App</h1>

            <InputForm onSubmit={this.handleSubmit} />

            <section className='postit-board'>
                {this.state.postits.map(postit => <PostIt show={this.state.show} onEditClick={this.handleEditClick} onSubmit={this.handleEditSubmit} paint={postit.text} key={postit.id} id={postit.id} onClick={this.handleClick} />)}
            </section>
        </section >
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
