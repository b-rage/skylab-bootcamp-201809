import React, { Component } from 'react'
import { Route, withRouter, Redirect } from 'react-router-dom'
import EditProfile from './EditProfile'
import logic from '../logic'

class Profile extends Component {

    state = { name: '', surname: '', username: '' }

    componentDidMount() {
        try {
            logic.getUser()
            .then(user => { this.setState({ name: user.name, surname: user.surname, username: user.username }) })
            .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    handleEditClick = () => this.props.history.push('/edit') 


    render() {

        return<div className='profile-container'>
            <div className='profile-container-left'>
                
            </div>
            <div className='profile-container-right'>
                <p className='profile-info'>name: {this.state.name}</p>
                <p className='profile-info'>surname: {this.state.surname}</p>
                <p className='profile-info'>username: {this.state.username}</p>
                <section><button className='btn-logout' onClick={this.handleEditClick}>Edit</button></section>
            </div>
            
        </div>

            
            
        
    }
}

export default withRouter(Profile)