const root = document.getElementById('root')

function Button (props) {
    return <button onClick={()=>props.operate(props.operation)}>{props.operation}</button>
}


class App extends React.Component {

    state = {numA: '', numB: '', result: ''}

    getNumA = event => {
        const numA = event.target.value 
        this.setState({numA})
    }
    getNumB = event => {
        const numB = event.target.value 
        this.setState({numB})
    }
    operate = operation => {
        const {numA, numB} = this.state
        const a = parseFloat(numA), b = parseFloat(numB)
        let result

        switch (operation) {
            case '+':
                result = a + b
                break
            case '-':
                result = a - b
                break
            case '*':
                result = a * b
                break
            case '/':
                result = a / b
        }
        this.setState({result})
    }

    render() {
        return <section>
            <h1>Calculator</h1>
            <input value={this.state.numA} type="number" onChange={this.getNumA}/>
            <Button operation='+' operate={this.operate}></Button>
            <Button operation='-' operate={this.operate}></Button>
            <Button operation='*' operate={this.operate}></Button>
            <Button operation='/' operate={this.operate}></Button>            
            <input value ={this.state.numB} type="number" onChange={this.getNumB}/>
            =<input value={this.state.result} type="result"/>
        </section>
    }

}

ReactDOM.render(<App />, root)

