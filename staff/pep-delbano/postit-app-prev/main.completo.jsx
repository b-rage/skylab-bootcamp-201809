// Model (domain)

if (!sessionStorage.getItem('postits'))
    sessionStorage.setItem('postits', JSON.stringify([]))


// Business (logic)?

// Presentation (components):


class InputForm extends React.Component {
    state = { text: '' }

    handleInput = event => { //to take and store in the state the text written in input (we call this method with 'onChange' in render())
        // console.log('InputForm', 'handleInput (setState)')

        const text = event.target.value

        this.setState({ text })  //
    }

    handleSubmitIForm = event => {  //to delete input value after clicking submit (we call it with 'onSubmit' in render())!
        // console.log('InputForm', 'handleSubmitIForm (setState)')

        event.preventDefault()

        this.props.onSubmit(this.state.text)

        this.setState({ text: '' })
    }

    render() {
        // console.log('InputForm', 'render')

        return <form onSubmit={this.handleSubmitIForm}> 
            <input value={this.state.text} placeholder="Write text here..." onChange={this.handleInput} />

            <button type="submit"><i className="fas fa-plus"></i></button>
        </form>
    }
}




class Postit { //component whit a text and a unic id only
    constructor(text) {
        this.text = text
        this.id = Date.now()
        //using 'Date.now' method we can give a unic id to each postit instance we make
    }
}



class Post extends React.Component {  // the post with delete and edit buttons that will be rendered by App component
    state = { text: this.props.text}


    handleEditPost = event => {
        const text = <event className="target value"/>
        this.setState( {text})
    }

    handleBlur = () => {
        this.props.onUpdatePost(this.props.id, this.state.text)
    }

    render() {
        
        return <article className="post">
        
            <h2>{Post.index}</h2>

            <button onClick={() => props.onDeletePost(this.props.id)}><i className="far fa-trash-alt"></i></button>

            <button onClick={() => props.onEditPost(this.props.id)}><i className="far fa-edit"></i></button>

            <p className="textPostit">{this.props.text}</p>

            <textarea defaultValue={this.props.text} onChange={this.handleEditPost}/>

        </article>
    }
}


class App extends React.Component {
    state = { postits: JSON.parse(sessionStorage.getItem('postits')) }

    handleSubmitApp = text => {  //another functionality for the inputForm when clicking Submit: pushes the Postit instance just made to sessionStorage with the rest of the stored postits, and save this updated list in 'App.state' (with 'setState' JSX attribute)

        // console.log('App', 'handleSubmitApp (setState)')

        const postit = new Postit(text)

        const postits = JSON.parse(sessionStorage.getItem('postits'))

        postits.push(postit)

        sessionStorage.setItem('postits', JSON.stringify(postits))  //pass new postit to JSON to store it in sessionStorage

        this.setState({ postits })  //in the render below, we print each postit just stored in the App.state, by using .map method
    }

    handleDeletePost = id => {
        let postits = JSON.parse(sessionStorage.getItem('postits'))

        postits = postits.filter(postit => postit.id !== id)

        sessionStorage.setItem('postits', JSON.stringify(postits))

        this.setState({ postits })
    }

    handleEditPost = id => {
        let postits = JSON.parse(sessionStorage.getItem('postits'))

    }

    render() {  //we use a 'key' (JSX attribute) when rendering Post,  to let React know if it's a new item and should be rendered, or if it's the same than before, don't render it again (React only renders the changes)
        // console.log('App', 'render')

        return <div>
            <h1>Post-It App <i className="fas fa-sticky-note"></i></h1>

            <InputForm onSubmit={this.handleSubmitApp} />

            <section>
                {/* {this.state.posts.map((post, index) => <article key={index} className="post">{post}</article>)} */}
                {this.state.postits.map(postit => <Post key={postit.id} text={postit.text} id={postit.id} onDeletePost={this.handleDeletePost} handleBlur={this.handleUpdatePost}/>)}
            </section>
        </div>
    }
}


ReactDOM.render(<App />, document.getElementById('root'))