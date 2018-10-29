import React, { Component } from 'react'
import logic from '../logic'

class Profile extends Component {

    state = {
        name: '',
        surname: '',
        username: '',
        address: '',
        password: '',
        edit: true
    }

    handleNameChange = event => {
        const name = event.target.value
        this.setState({ name })
    }


    handleSurnameChange = event => {
        const surname = event.target.value
        this.setState({ surname })
    }

    handleUserNameChange = event => {
        const username = event.target.value
        this.setState({ username })
    }

    handleAddressChange = event => {
        const address = event.target.value
        this.setState({ address })
    }

    handlePasswordChange = event => {
        const password = event.target.value
        this.setState({ password })
    }

    handleEditProfile = event => {
        event.preventDefault()
        this.setState({edit : false})

    }

    handleSubmit = event => {
        event.preventDefault()
        const { name, surname, username, address, password } = this.state
        try {
            logic.editUser(name, surname, username, address, password)
                .then(() => {
                    this.setState({ error: null }, () => this.props.history.push('/profile'))
                })
                .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    }



    render() {


        return <div>
            <form onSubmit={this.handleSubmit}>
                <h1>Your profile</h1>
                <label>Name</label><input type='text' placeholder={this.state.name} onChange={this.handleNameChange} disabled={this.state.edit}></input>
                <label>Surname</label><input type='text' placeholder="Surname" onChange={this.handleSurnameChange} disabled={this.state.edit}></input>
                <label>User Name</label><input type='text' placeholder="User Name" onChange={this.handleUserNameChange} disabled={this.state.edit}></input>
                <label>Addres</label><input  type='text' placeholder="Addres" onChange={this.handleAddressChange} disabled={this.state.edit}></input>
                <label>Change Password</label><input type='password' placeholder="Name" onChange={this.handlePasswordChange} disabled={this.state.edit}></input>
                <button type='submit' disabled={this.state.edit}>Save Changes</button>
            </form>
            <button onClick={this.handleEditProfile}>Edit profile</button>
        </div>
    }

}

export default Profile