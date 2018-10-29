const root = document.getElementById('root')

function HelloWorld(props) {
    return <h1>Hello, {props.name}!</h1>
}

class Button extends React.Component {
    constructor() {
        super()

        this.state = { status: 'Off' }

        // this.whenClicked = this.whenClicked.bind(this)
    }

    //whenClicked() {
    whenClicked = () => {
        console.log('i was clicked')

        const status = this.state.status === 'Off' ? 'On' : 'Off'

        this.setState({ status })
    }

    render() {
        // return <button onClick={this.whenClicked.bind(this)}>{this.state.status}</button>
        return <button onClick={this.whenClicked}>{this.state.status}</button>
    }
}

function App() {
    return <section>
        <HelloWorld name="Peter" />
        <Button />
    </section>
}

ReactDOM.render(<App />, root)


