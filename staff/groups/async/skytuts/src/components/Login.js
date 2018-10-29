import React from 'react'

const Login = () => {
    return (
        <div className="Home">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button>Login</button>
                <a href="#">Don't have an account? Sign up here</a>
            </form>
        </div>
    )
}

export default Login