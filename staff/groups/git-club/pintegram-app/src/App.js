import React, { Component } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile'
import AddPost from './components/AddPost'
import Home from './components/Home'
import Search from './components/Search'
import Error from './components/Error'
// import Landing from './components/Landing'
import logic from './logic'
import { Route, withRouter, Redirect } from 'react-router-dom'
import OtherProfile from './components/OtherProfile'


class App extends Component {
    state = { error: null, post : false, profile: false, otherUser: false, search:false }

    // handleRegisterClick = () => this.props.history.push('/register')

    handleLoginClick = () =>  this.props.history.push('/login')

    handleRegister = (name, surname, username, password) => {
        try {
            logic.registerUser(name, surname, username, password)
                .then(() => this.setState({ error: null }, () => this.props.history.push('/login')))
                .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    handleLogin = (username, password) => {
        try {
            logic.login(username, password)
                .then(() =>this.setState({error : null}, () => this.props.history.push('/home')))
                .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    handlePost = () =>{
        this.props.history.push('/addpost')
        this.setState({post: true, profile: false})
    }

    handleProfile = () =>{
        this.props.history.push('/profile')
        this.setState({post: false, profile: true})
    }

    handleSearch = () =>{
        this.props.history.push('/search')
        this.setState({post: false, profile: false, search:true})
    }

    handleAddPost = (url, text) =>{
        logic.createPost(url, text)
        .then(()=>this.setState({post : false, profile: false}))
    }

    handleLogoutClick = () => {
        logic.logout()

        this.props.history.push('/login')
    }

    handleGoBack = () => this.props.history.push('/')
    
    handleGoBack2 = () => {
        this.props.history.push('/home')
        this.setState({post : false, profile: false, search:false})
    }
    handleGoBack3 = () => {
        this.props.history.push('/profile')
        this.setState({profile: true, OtherUser: false})
    }

    handleUserSearch = (name) =>{
   
        logic.searchUserByName(name)
            .then(user =>{
                if (user){
                    this.setState({otherUser: user})
                    this.props.history.push(`/user/${user.id}`)
                    this.setState({post: false, otherUser: true})
                }
            } )
    }

    handleErrorClose = () => {
        this.setState({error:null})
    }

    render() {
        const { error, post, profile, otherUser, search } = this.state

        return <div>
            {/* <Route exact path="/" render={() => !logic.loggedIn ? <Landing onRegisterClick={this.handleRegisterClick} onLoginClick={this.handleLoginClick} /> : <Redirect to="/home" />} /> */}
            <Route exact path="/" render={() => !logic.loggedIn ? <Register onRegister={this.handleRegister} onGoBack={this.handleLoginClick} /> : <Redirect to="/home" />} />
            <Route path="/login" render={() => !logic.loggedIn ? <Login onLogin={this.handleLogin} onGoBack={this.handleGoBack} /> : <Redirect to="/home" />} />
            {error && <Error onErrorClose={this.handleErrorClose} message={error} />}
            <Route path="/home" render={() => logic.loggedIn && !post && !profile ? <Home onLogout={this.handleLogoutClick} onPost={this.handlePost} onSearch={this.handleSearch} onProfile={this.handleProfile} onUserSearch={this.handleUserSearch}/> : <Redirect to="/" />} />
            <Route path="/addpost" render={() => logic.loggedIn && post && !profile ? <AddPost onLogout={this.handleLogoutClick} onProfile={this.handleProfile} onPost={this.handleAddPost} onGoBack={this.handleGoBack2} onSearch={this.handleSearch}/> : <Redirect to="/home" />} />
            <Route path="/profile" render={() =>logic.loggedIn && profile && !post ? <Profile onLogout={this.handleLogoutClick} onPost={this.handlePost} onGoBack={this.handleGoBack2} onSearch={this.handleSearch}/> : <Redirect to="/home" />} />
            <Route path="/user/:id" render={ ()=>logic.loggedIn && !post && !profile && otherUser ?  <OtherProfile onLogout={this.handleLogoutClick} onPost={this.handlePost} onGoBack={this.handleGoBack3} onGoHome={this.handleGoBack2} id={this.props.match.params.id} onInitialize={this.state.otherUser} onSearch={this.handleSearch}/> :<Redirect to="/home"/>}/>
            <Route path="/search" render={() =>logic.loggedIn && !profile && !post && search ? <Search onUserSearch={this.handleUserSearch} onLogout={this.handleLogoutClick} onPost={this.handlePost} onGoBack={this.handleGoBack2} onProfile={this.handleProfile}/> : <Redirect to="/home" />} />
        </div>
    }
}

export default withRouter(App)
