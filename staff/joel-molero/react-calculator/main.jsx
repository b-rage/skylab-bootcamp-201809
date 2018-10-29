const root = document.getElementById('root')

function FirstNumber() {
    return <input></input>
}

function SecondNumber() {
    return <input></input>
}

function Sum() {
    return <button>+</button>
}

function Subtract() {
    return <button>-</button>
}

function Multiply() {
    return <button>*</button>
}

function Divide() {
    return <button>/</button>
}

function Output() {
    return <output></output>
}

function App() {
    return <section>
        <FirstNumber />
        <SecondNumber />
        <Sum />
        <Subtract />
        <Multiply />
        <Dividir />
        <Output />
    </section>
}

ReactDOM.render(<App />, root)