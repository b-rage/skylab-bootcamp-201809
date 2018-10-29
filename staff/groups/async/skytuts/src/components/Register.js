import React from 'react'

const Register = () => {
    return (
        <div className="Home">
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="name" />
                <input type="text" placeholder="surname" />
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button>Register</button>
                <a href="#">Already have an account? Login here!</a>
            </form>
        </div>
    )
}

export default Register