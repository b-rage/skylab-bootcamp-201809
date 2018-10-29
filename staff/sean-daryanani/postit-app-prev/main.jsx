class InputForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            input: ''
        }

        this.keepText = this.keepText.bind(this)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    keepText(event) {
        this.setState({
            input : event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        this.props.onSubmit(this.state.input)

        this.setState({input: ''})
    }

    render() {
        return <form className="form-group" onSubmit={this.handleSubmit}>
        <textarea className="form-control" cols="30"  value={this.state.input}  onChange={this.keepText} placeholder='' type="text"/>
        <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    }

}

function List(props) {

    return <ul className="list-group">
    {props.items.map((el,index) => 
    <li className="list-group-item list-group-item-warning" 
    
     key={index}>{el}  <button onClick = {() => props.removeToDo(index)} className="close">&times;</button></li>)}
    
    </ul>
}



class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            items: []
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.removeToDo = this.removeToDo.bind(this)
    }


    handleSubmit(input) {
        this.setState({
            items : [...this.state.items, input],
            input:''
        })

        }

    removeToDo(index) {
        
        this.setState({
            items: this.state.items.filter((el,i)=> i!==index)
            
        })
        

    }

    render() {
        return <div className="container">
        <h1>Post it App</h1>
        <InputForm onSubmit = {this.handleSubmit} />
        <List items={this.state.items} removeToDo={this.removeToDo} />
        </div>

    }
}


ReactDOM.render(<App/>, document.getElementById('root'))