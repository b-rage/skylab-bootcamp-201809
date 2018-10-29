
const root = document.getElementById('root')

function Button(props) {
    return <button type='button' onClick={props.onClick}>Hello World!</button>
}

function PostIt(props){
    

    return  <article className='postit'>{props.text}</article>
}


class App extends React.Component {
    state = { comment: '',
            text:[] }

    keepText  = event => {
        const comment = event.target.value
        this.setState({ comment })
        
        
    }
   
    createText =() =>{
               
       // this.setState({text:inputs});
        this.setState(prevState => ({
            text: [...prevState.text, this.state.comment]
          })) 

    }

    
    render() {
        
        return <div>  <h1>Post-It App</h1>
        <form className='form'>
        <textarea placeholder="Write text here..." onChange={this.keepText}></textarea>
            <Button onClick={this.createText}></Button> 
        </form>
    
        <section>

            {/* <PostIt text={this.state.text}></PostIt> */}
            {
            this.state.text.map((comment) => <PostIt text = {comment}></PostIt>) }
        }
        </section></div>
        
       
    }
}


ReactDOM.render(<App />, document.getElementById('root'))