import React, {Component} from 'react'

class Login extends Component {
    state = { username: '', password: '' }

    render() {
        return <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    }
}

export default Login