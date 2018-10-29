import React, { Component } from 'react'
import { Route, withRouter, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import LogIn from './components/LogIn'
import Sidenav from './components/Sidenav'
import Search from './components/Search'
import Profile from './components/Profile'
import VideoList from './components/VideoList'
import SearchList from './components/SearchList'
import Playlist from './components/Playlist'
import Player from './components/Player'
import logic from './logic'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            auth_info: logic.authInfo(),
            video_search: logic.video_search,
            current_video: logic.current_video,
            populars: []
        }
    }

    componentDidMount() {
        if (this.props.location.pathname === '/home' || this.props.location.pathname === '/login') {
            logic.getMostPopular()
                .then(populars => this.setState({populars}))
                .catch(err => console.log(err.message))
        }
    }

    handleRegister = (name, surname, username, email, password, repPassword) => {
        try {
			logic.registerUser(name, surname, username, email, password, repPassword)
				.then(() => {
                    this.setState({error: null})
                    this.props.history.push('/login')
                })
				.catch((err) => {
                    if (err.message === `user with username "${username}" already exists`) {
                        this.setState({error: 'username already exists'})
                    } else {
                        this.setState({error: err.message})
                    }
                })
        } catch (err) {
            this.setState({error: err.message})
        }
	}

	handleLogIn = (username, password) => {
		try {
			logic.loginUser(username, password)
				.then(info => {
                    this.setState({
                        error: null,
                        auth_info: info
                    })
                })
                .catch(res => {this.setState({error: "Incorrect username or password"})})
		} catch (err) {
            this.setState({error: err.message})
		}
	}

	handleLogOut = () => {
		logic.logoutUser()

		this.setState({error: null})
    }

	handleSearch = query => {
        if (this.props.location.pathname !== '/home/search') this.props.history.push('/home/search')

		logic.search(query)
			.then(result => this.setState({video_search: result}))
            .catch(error => console.error(error))
	}

	handleVideoClick = video => {
		logic.getVideo(video)
			.then(result => this.setState({current_video: result}, () => this.props.history.push('/home/player')))
            .catch(error => console.error(error))
    }

    handlePlayWatchLater = video => {
        this.handleVideoClick(video)
        logic.removeWatchLater(video.id)
        this.setState({auth_info: logic.authInfo()})
    }

    handleNewFavourite = video => {
        logic.addFavourite(video)
        this.setState({auth_info: logic.authInfo()})
    }

    handleRemoveFavourite = video_id => {
        logic.removeFavourite(video_id)
        this.setState({auth_info: logic.authInfo()})
    }

    handleNewWatchLater = video => {
        logic.addWatchLater(video)
        this.setState({auth_info: logic.authInfo()})
    }

    handleRemoveWatchLater = video_id => {
        logic.removeWatchLater(video_id)
        this.setState({auth_info: logic.authInfo()})
    }

    handleNewPlaylist = title => {
        const playlist = logic.addPlaylist(title)
        this.setState({auth_info: logic.authInfo()})
        return playlist.id
    }

    handleRemovePlaylist = playlist_id => {
        logic.removePlaylist(playlist_id)
        this.setState({auth_info: logic.authInfo()}, () => this.props.history.push('/home'))
    }

    handleUpdatePlaylist = (playlist_id, title) => {
        logic.updatePlaylist(playlist_id, title)
        this.setState({auth_info: logic.authInfo()})
    }

    handleAddToPlaylist = (video, playlist_id) => {
        logic.addVideoToPlaylist(video, playlist_id)
        this.setState({auth_info: logic.authInfo()})
    }

    handleRemoveFromPlaylist = (video_id, playlist_id) => {
        logic.removeVideoFromPlaylist(video_id, playlist_id)
        this.setState({auth_info: logic.authInfo()})
    }

    handleClickHome = () => {
        this.props.history.push('/home')
    }

    handleClickFavourites = () => {
        this.props.history.push('/home/favourites')
    }

    handleClickHistory = () =>{
        this.props.history.push('/home/history')
    }

    handleClickWatchLater = () => {
        this.props.history.push('/home/watch_later')
    }

    handleClickPlaylist = playlist_id => {
        this.props.history.push('/home/playlist/' + playlist_id)
    }

    renderLanding() {
        return <div className="landing">
            <Navbar/>
            <Header error={this.state.error} onSubmitSignUp={this.handleRegister} />
            <main>
                <section className="showcase">
                    <div className="showcase__show">
                        <img className="showcase__image" src="./img/shot-home.png" alt="shot" />
                    </div>
                    <div className="showcase__case">
                        <h1 className="showcase__title">Home.</h1>
                        <p className="showcase__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.</p>
                    </div>
                </section>
                <section className="showcase showcase--odd">
                    <div className="showcase__case">
                        <h1 className="showcase__title">Playlist.</h1>
                        <p className="showcase__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="showcase__show">
                        <img className="showcase__image" src="./img/shot-list.png" alt="shot" />
                    </div>
                </section>
                <section className="showcase">
                    <div className="showcase__show">
                        <img className="showcase__image" src="./img/shot-player.png" alt="shot" />
                    </div>
                    <div className="showcase__case">
                        <h1 className="showcase__title">Player.</h1>
                        <p className="showcase__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.</p>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    }

    renderHome() {
        return <div className="home">
            <Sidenav onClickHome={this.handleClickHome} onClickFavourites={this.handleClickFavourites} onClickHistory={this.handleClickHistory} onClickWatchLater={this.handleClickWatchLater} onClickPlaylist={this.handleClickPlaylist} playlists={this.state.auth_info.playlists} active={this.props.location.pathname} />
            <Search onSearch={this.handleSearch}/>
            <Profile onLogOut={this.handleLogOut} user={{username:this.state.auth_info.username, name:this.state.auth_info.name+' '+this.state.auth_info.surname, email:this.state.auth_info.email}}/>
            <main className='main'>
                <Route exact path='/home' render={() => <VideoList title="Most Populars" onVideoClick={this.handleVideoClick} videos={this.state.populars} />} />
                <Route exact path='/home' render={() => <VideoList title="Watch Again" onVideoClick={this.handleVideoClick} videos={logic.getHistory().videos} />} />
                <Route path='/home/search' render={() => <SearchList title={this.state.search_query} onVideoClick={this.handleVideoClick} videos={this.state.video_search} />} />
                <Route path='/home/player' render={() => <Player video={this.state.current_video} playlists={this.state.auth_info.playlists} onNewFavourite={this.handleNewFavourite} onRemoveFavourite={this.handleRemoveFavourite} onNewWatchLater={this.handleNewWatchLater} onRemoveWatchLater={this.handleRemoveWatchLater} onNewPlaylist={this.handleNewPlaylist} onAddToPlaylist={this.handleAddToPlaylist} onRemoveFromPlaylist={this.handleRemoveFromPlaylist} />} />
                <Route path='/home/favourites' render={() => <Playlist onVideoClick={this.handleVideoClick} playlist={logic.getFavourites()} />} />
                <Route path='/home/history' render={() => <Playlist onVideoClick={this.handleVideoClick} playlist={logic.getHistory()} />} />
                <Route path='/home/watch_later' render={() => <Playlist onVideoClick={this.handlePlayWatchLater} playlist={logic.getWatchLaters()} />} />
                <Route path='/home/playlist/:id' render={props => <Playlist onVideoClick={this.handleVideoClick} onRemove={this.handleRemovePlaylist} onUpdate={this.handleUpdatePlaylist} playlist={logic.getPlaylist(props.match.params.id)} />} />
            </main>
        </div>
	}

    render() {
        return <div>
            <Route exact path='/' render={() => !logic.isAuthenticated() ? this.renderLanding() : <Redirect to='/home'/>} />
            <Route path='/home' render={() => logic.isAuthenticated() ? this.renderHome() : <Redirect to='/login' />} />
            <Route path='/login' render={() => !logic.isAuthenticated() ? <LogIn error={this.state.error} onLogInSubmit={this.handleLogIn}/> : <Redirect to='/home' />} />
        </div>
    }
}

export default withRouter(App);
