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
            <textarea className="textarea" value={this.state.text} placeholder="Write text here..." onChange={this.handleInput} />
            <button className="btn" type="submit">Create</button>
        </form>
    }
}

function Post(props) {
    return <div>
            <article className="post">{props.text}</article>
            <button  className="delete" type="submit" onClick={() => props.delete(props.index)}> <i className="fas fa-ban"></i> </button> 
            </div>
}

class App extends React.Component {
    state = { posts: [] }

    handleSubmit = text => {

        const posts = this.state.posts.concat(text)

        this.setState({ posts })
    }

    handleDelete = index => {

        const post = this.state.post.filter((post,_index)=> index !==_index)

        this.setState({posts})
    }

    render() {

        return <div className="app_cont">
            <h1 className="title">Post-It App</h1>

            <InputForm onSubmit={this.handleSubmit} />
            

            <section className="article_cont">
                {this.state.posts.map((post, index) => <Post delete={this.handleDelete} key={index} index={index} text={post} />)}
            </section>
            </div>
    }   

}

ReactDOM.render(<App />, document.getElementById('root'))



// function Button(props) {
//     return <button className="btn" value="Add PostIt" onClick={props.onClick} > Add new PostIt </button>
// }

// class App extends React.Component {
//     constructor (props) {
//         super (props)
//         this.state = { text: '', postit: []}
//         this.handleChange = this.handleChange.bind(this)
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleChange(event) {
//         this.setState({text: event.target.value})
//     }
//     handleClick(){

//         this.setState({postit:[...this.state.postit, this.state.text]})
//         this.state.text=""
//     }
//     render() {
//         return <div className="cont">

//             <div className="app_cont">

//                 <h1 className="title">Post-It App</h1>

//                 <textarea className="textarea" value={this.state.text} onChange={this.handleChange} />

//                 <Button onClick={this.handleClick}></Button>

//             </div>
//                 <div className="article_cont">
//                     {this.state.postit.map((postit) =>{
//                         return <article className="article">{postit}</article>
//                     })}
//             </div>
//         </div>
//         }
// }   
// ReactDOM.render(<App />, document.getElementById('root'))