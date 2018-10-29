const root = document.getElementById('root')

function HelloWorld() {
    return <h1>Hello, World!</h1>
}

function App() {
    return <section>
        <HelloWorld />
    </section>
}

ReactDOM.render(<App />, root)


