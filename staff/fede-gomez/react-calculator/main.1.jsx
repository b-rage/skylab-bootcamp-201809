const root = document.getElementById('root')

const title = <h1>hola mundo</h1>

const items = ['ana', 'maria', 'peter', 'john'].map(name =>
        <li>{name}</li>
    )

const names = <ul>{items}</ul>

ReactDOM.render([title, names], root)


