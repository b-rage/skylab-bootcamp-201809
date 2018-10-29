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

// class Post extends React.Component{
//     editAreaE= id => {
//         document.getElementById(id).disabled = false;
//     }

//     editAreaD= id => {
//         document.getElementById(id).disabled = true;
//     }

//     render(){
//             return <article onClick={this.editAreaE(props.id)} onblur={this.editAreaD(props.id)} className="post">
//                         <textarea id={props.id} disabled>{props.text}</textarea> 
//                         <button onClick={() => props.onClickEdit(props.id,props.index)}>Edit</button>
//                         <button onClick={() => props.onClick(props.id)}>x</button>
//                     </article>
//             }
// }

function Post(props) {

    return <article onClick={() => props.onClickAreaE(props.id)} onBlur={() => props.onClickEdit(props.id,props.index)} className="post">
                <button onClick={() => props.onClick(props.id)}>x</button>
                <textarea className="transparent" id={props.id} disabled defaultValue={props.text}></textarea> 
                {/* <button onClick={() => props.onClickEdit(props.id,props.index)}>Edit</button> */}
            </article>
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

    handleEdit = (id,index) => {
        logic.editPostit(id, index)

        this.setState({ postits: logic.listPostits() })
    }

    handleAreaE = id => {
        logic.editAreaE(id)
    }

    handleAreaD = id => {
        logic.editAreaD(id)
    }

    render() {
        return <div>

        <InputForm onClick={this.handleClick}/>

        <section>
            {/* {this.state.posts.map((post, index) => <article key={index} className="post">{post}</article>)} */}
            {this.state.postits.map((postit, index) => <Post onClick = {this.handleDelete} key={postit.id} index ={index} text={postit.text} id={postit.id} onClickAreaE = {this.handleAreaE} onClickAreaD = {this.handleAreaD} onClickEdit = {this.handleEdit}/>)}
        </section>
    </div>
    }
} 
ReactDOM.render(<App />, document.getElementById('root'))

//{this.state.posts.map((post, index) => <article key={index} className="post">{post}</article>)}