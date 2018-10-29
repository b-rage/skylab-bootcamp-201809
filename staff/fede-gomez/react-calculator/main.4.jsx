const root = document.getElementById('root')

function HelloWorld(props) {
    return <h1>Hello, {props.name}!</h1>
}

class Button extends React.Component {
    state = { status: 'Off' }

    whenClicked = () => {
        const status = this.state.status === 'Off' ? 'On' : 'Off'

        this.setState({ status })

        this.props.whenClicked()
    }

    render() {
        return <button onClick={this.whenClicked}>{this.state.status}</button>
    }
}

class App extends React.Component {
    state = { messageStatus: true }

    switchMessageStatus = () => {
        const messageStatus = !this.state.messageStatus

        this.setState({ messageStatus })
    }

    render() {
        return <section>
            <Button whenClicked={this.switchMessageStatus} />

            {this.state.messageStatus && <HelloWorld name="Peter" />}
        </section>
    }
}

ReactDOM.render(<App />, root)


