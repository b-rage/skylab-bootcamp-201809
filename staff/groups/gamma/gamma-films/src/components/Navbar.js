import React, { Component } from 'react'
import logic from '../logic'

class Navbar extends Component {

    state = {
        user: {},
        flagUser: false,
        name: ''
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.userID !== prevProps.userID) {
          this.fetchData(this.props.userID);
        }
        if(this.props.name!==prevProps.name){
            this.setState({name:this.props.name})
        }
      }


    render() {
        return <nav className="navbar">


            <div className="header_background">
            <div className="header_loggedin">
                {!!this.props.name && <p>{'Welcome '+this.props.name}</p>}
                {this.props.isLoggedIn && <button className="btn btn-outline-secondary" onClick={this.props.onLogoutClick}>Logout</button>}
                </div>
                {!this.props.isLoggedIn && <div className="navbar_buttons">
                    <button type="button" className="btn btn-outline-secondary" onClick={this.props.onLoginClick}>Login</button>
                    <button type="button" className="btn btn-outline-secondary" onClick={this.props.onRegisterClick}>Register</button>
                </div>}

                <div className="header">
                    <img onClick={this.props.onLogoClick} className="logo" />
                </div>
            </div>

        </nav>
    }

}

export default Navbar