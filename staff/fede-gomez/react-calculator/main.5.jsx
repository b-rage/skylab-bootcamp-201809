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

class X extends React.Component {
    state = { message: 'button is off' }

    whenClicked = () => {
        const message = this.state.message === 'button is off' ? 'button is on' : 'button is off'

        this.setState({ message })
    }

    render() {
        return <section>
            <Button whenClicked={this.whenClicked} />
            <h2>{this.state.message}</h2>
        </section>
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

            <X />
        </section>
    }
}

ReactDOM.render(<App />, root)


