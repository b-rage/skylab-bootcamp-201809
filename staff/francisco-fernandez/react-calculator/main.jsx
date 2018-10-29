function Button(props) {
    return <button class="btn btn-outline-secondary" onClick={() => props.onClick(props.operation)}>{props.operation}</button>
}

class App extends React.Component {
    state = { numberA: '', numberB: '', result: '' }

    keepNumberA = event => {
        const numberA = event.target.value

        this.setState({ numberA })
    }

    keepNumberB = event => {
        const numberB = event.target.value

        this.setState({ numberB })
    }

    operate = operation => {
        const { numberA, numberB } = this.state

        const a = parseFloat(numberA), b = parseFloat(numberB)

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

        this.setState({ result })
    }

    render() {
        return <div>
            <div class="container">
            
            <input class="number" value={this.state.numberA} type="number" onChange={this.keepNumberA} tabIndex="0" />
            <p class="font-weight-bold">Number 1</p>
            
            <input class="number" value={this.state.numberB} type="number" onChange={this.keepNumberB} tabIndex="1" />
            <p class="font-weight-bold">Number 2</p>
            
            <Button operation="+" onClick={this.operate}></Button>
            <Button operation="-" onClick={this.operate}></Button>
            <Button operation="*" onClick={this.operate}></Button>
            <Button operation="/" onClick={this.operate}></Button>
            <p class="font-weight-bold">Operation</p>

            <input class="number" value={this.state.result} type="result" disabled />
            <p class="font-weight-bold">Result</p>

            </div>

            
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))