function Button(props) {
    return <button onClick={() => props.onClick(props.operation)} className="btn btn-primary btn-lg btn-block">{props.operation}</button>
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
        return <div className="wrapper">
        <h2 className="mb-0 text-white lh-100">Calculator</h2>
            <div className="inputs">
            <input value={this.state.numberA} type="number" className="form-control" placeholder="First number" onChange={this.keepNumberA} tabIndex="0" />

            <input value={this.state.numberB} type="number" className="form-control" placeholder="Second number" onChange={this.keepNumberB} tabIndex="1" />

            </div>
            <div className="inputs">
            <Button operation="+" onClick={this.operate} > </Button>
            <Button operation="-" onClick={this.operate} ></Button>
            <Button operation="*" onClick={this.operate} ></Button>
            <Button operation="/" onClick={this.operate} ></Button>
            </div>
            <div className="inputs">
            <label className="form-control">=</label><input value={this.state.result} type="result" className="form-control" disabled />
            </div>
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))