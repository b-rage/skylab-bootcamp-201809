

class InputForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }

        this.handleInput = this.handleInput.bind(this)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(event) {
        this.setState({
            text : event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        this.props.onSubmit(this.state.text)

        this.setState({text: ''})
    }

    render() {
        return <form className="form-group" onSubmit={this.handleSubmit}>
        <textarea className="form-control" cols="30"  value={this.state.text}  onChange={this.handleInput} placeholder='' type="text"/>
        <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    }

}

function Post(props) {
    function showPopup() {

    }
    return <ul className="list-group">
    <button onClick={() => props.popup(props.id)} className="btn btn-info"><i className="far fa-edit"></i></button>
    <li onClick={() => props.complete(props.id)} className="list-group-item list-group-item-warning" >{(props.completeState && props.id=== props.clickID) ? <strike>{props.text}</strike> : props.text }</li>    
    <button  className="btn btn-info" onClick={() => props.onDeletePost(props.id)}><i className="far fa-trash-alt"></i></button>    

    </ul>
  

    
}

class Popup extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: props.text
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(event) {
        this.setState({
            text : event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        this.props.onUpdate(this.props.id, this.state.text)

        this.setState({text: ''})
    }

    render() {
        return <div className="popup">
        <form onSubmit={this.handleSubmit} onBlur={this.handleSubmit} className="form-group shadow-textarea">
        <textarea id="form18" className="form-control z-depth-1" rows="2" cols="10" value={this.state.text} onChange={this.handleInput}/>
        <button id="update-save" className="btn btn-primary">Save changes</button>
        </form>
        
        </div>
    }
}




class App extends React.Component {
    state = {
         postits: logic.listPostits(),
         showPopup: false,
         clickedID : 0,
         completed: false
     }

    handleSubmit = text => {
        logic.createPostit(text)
        
        this.setState({ postits: logic.listPostits() })
    }

    handleDeletePost = id => {
        
        logic.deletePostit(id)

        this.setState({ postits : logic.listPostits(),
        showPopup :false })
    }

    handleUpdatePost = (id, text) => {
        logic.updatePost(id, text)

        this.setState({postits : logic.listPostits(),
        showPopup : false})
    }

    togglePopup = (id) => {
       
        this.setState({
            showPopup : !this.state.showPopup,
            clickedID : id
        })
    }

    updateCompleted = (id) => {
        this.setState({
            completed : !this.state.completed,
            clickedID: id
        })
    }

    markComplete = (id) => {

    }


    render() {

        return <div className="container">
        <h1>Post it App</h1>
        <InputForm onSubmit = {this.handleSubmit} />
        <div className="test">
        {this.state.postits.map( postit => <Post key={postit.id} text={postit.text} id={postit.id} onDeletePost = {this.handleDeletePost} editing = {this.state.showPopup} popup = {this.togglePopup} complete={this.updateCompleted} completeState={this.state.completed} clickID={this.state.clickedID} />)}
        {this.state.postits.map(postit => (this.state.showPopup && postit.id===this.state.clickedID) ? <Popup onUpdate={this.handleUpdatePost} key={postit.id} id={postit.id} text={postit.text}/> : null)}
        </div>
        </div>

    }
}


ReactDOM.render(<App/>, document.getElementById('root'))

