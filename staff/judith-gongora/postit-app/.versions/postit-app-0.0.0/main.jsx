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

class Post extends React.Component{

    state = { text: this.props.text }


    handleChange = event => {
        const text = event.target.value

        this.setState({ text })
    }

    handleBlur = () => {
        this.props.onUpdatePost(this.props.id, this.props.index, this.state.text)
    }

    handleEdit= () => {
        this.props.onEdit(this.props.id)
    }

    handleDelete= () => {
        this.props.onDelete(this.props.id)
    }

    // editAreaD= id => {
    //     document.getElementById(id).disabled = true;
    // }

    render(){
            return <article onClick={this.handleEdit} onBlur={this.handleBlur} className="post">
                        <textarea onChange={this.handleChange} id={this.props.id} disabled className="transparent" defaultValue={this.props.text}></textarea> 
                        {/* <button onClick={this.handleBlur}>Edit</button> */}
                        <button onClick={this.handleDelete}>x</button>
                    </article>
            }
}

// function Post(props) {

//     return <article onClick={() => props.onClickAreaE(props.id)} onBlur={() => props.onClickEdit(props.id,props.index)} className="post">
//                 <button onClick={() => props.onClick(props.id)}>x</button>
//                 <textarea className="transparent" id={props.id} disabled defaultValue={props.text}></textarea> 
//                 {/* <button onClick={() => props.onClickEdit(props.id,props.index)}>Edit</button> */}
//             </article>
// }



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

    // handleUpdatePost = (id, text) => {
    //     logic.updatePostit(id, text)
  
    //     this.setState({ postits: logic.listPostits() })
    // }

    handleUpdatePost = (id,index,text) => {
        logic.UpdatePostit(id, index, text)

        this.setState({ postits: logic.listPostits() })
    }

    handleEdit = id => {
        logic.editPost(id)
    }

    handleAreaD = id => {
        logic.editAreaD(id)
    }

    render() {
        return <div>

        <InputForm onClick={this.handleClick}/>

        <section>
            {/* {this.state.posts.map((post, index) => <article key={index} className="post">{post}</article>)} */}
            {this.state.postits.map((postit, index) => <Post onDelete = {this.handleDelete} key={postit.id} index ={index} text={postit.text} id={postit.id} onEdit = {this.handleEdit} onClickAreaD = {this.handleAreaD} onUpdatePost = {this.handleUpdatePost}/>)}
        </section>
    </div>
    }
} 
ReactDOM.render(<App />, document.getElementById('root'))

//{this.state.posts.map((post, index) => <article key={index} className="post">{post}</article>)}