import React, { Component } from 'react'

class Profile extends Component {
    state = {open: false}

    handleClick = () => {
        this.setState({open: !this.state.open})
    }

    render() {
        return <section className="profile">
            <button onClick={this.handleClick} className="profile__button">{this.props.user.username}</button>
            <div className={this.state.open ? "profile__content profile__content--open" : "profile__content"}>
                <section className="profile__info">
                    <div className="profile__image">
                        <img src="/img/default-user-profile.png" alt="profile"></img>
                    </div>

                    <div className="profile__text">
                        <h1>{this.props.user.name}</h1>
                        <p>{this.props.user.email}</p>
                        {/* <Link to='/edit'>Edit profile</Link> */}
                    </div>
                </section>
                <footer className="profile-footer">
                    <button onClick={this.props.onLogOut} className="profile-footer__button">Log Out</button>
                </footer>
            </div>
        </section>
    }
}

export default Profile
