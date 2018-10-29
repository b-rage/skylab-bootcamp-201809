import React, {Component} from 'react'
import logic from '../logic'

class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            favourite: this.checkFavourite(),
            watchLater: this.checkWatchLater()
        }
    }

    iframe() {
        return {__html: this.props.video.iframe}
    }

    handleKeyPress = event => {
        const input = event.target
        if (event.key === 'Enter' && input.value) {
            this.props.onAddToPlaylist(this.props.video, this.props.onNewPlaylist(input.value))
            input.value = ''
        }
    }

    handleClick = () => {
        this.setState({open: !this.state.open})
    }

    handlePlaylistCheck = (playlist_id, event) => {
        if (event.target.checked) {
            this.props.onAddToPlaylist(this.props.video, playlist_id)
        } else {
            this.props.onRemoveFromPlaylist(this.props.video.id, playlist_id)
        }
    }

    handleClickFavourite = () => {
        if (!this.state.favourite) {
            this.props.onNewFavourite(this.props.video)
            this.setState({favourite: true})
        } else {
            this.props.onRemoveFavourite(this.props.video.id)
            this.setState({favourite: false})
        }
    }

    handleClickWatchLater = () => {
        if (!this.state.watchLater) {
            this.props.onNewWatchLater(this.props.video)
            this.setState({watchLater: true})
        } else {
            this.props.onRemoveWatchLater(this.props.video.id)
            this.setState({watchLater: false})
        }
    }

    checkPlaylist = videos => {
        if (videos) {
            for (var i = 0; i < videos.length; i++) {
                if (videos[i].id === this.props.video.id) {
                    return true
                }
            }
        }
        return false
    }

    checkFavourite = () => {
        const fav = logic.getFavourite(this.props.video.id)
        return fav && Object.keys(fav).length > 0
    }

    checkWatchLater = () => {
        const watchLater = logic.getWatchLater(this.props.video.id)
        return watchLater && Object.keys(watchLater).length > 0

    }

    render() {
        return <section className="player">
            <div className="player__video" dangerouslySetInnerHTML={this.iframe()}></div>
            <footer className="player-footer">
                <h1 className="player-footer__title">{this.props.video.title}</h1>
                <div className="player-footer__buttons">
                    <button className={this.state.favourite ? "player-footer__button player-footer__button--active" : "player-footer__button"} onClick={this.handleClickFavourite}><span className="fas fa-star"></span></button>
                    <button className={this.state.watchLater ? "player-footer__button player-footer__button--active" : "player-footer__button"} onClick={this.handleClickWatchLater}><span className="fas fa-clock"></span></button>
                    <div className="playlists">
                        <button onClick={this.handleClick} className="player-footer__button player-footer__button--text">playlists</button>
                        <section className={this.state.open ? "playlists__content playlists__content--open" : "playlists__content"}>
                            <nav>
                                <h2 className="playlists__title">Add to...</h2>
                                <ul className="playlists__menu">
                                    {this.props.playlists && this.props.playlists.length > 0 && (
                                        this.props.playlists.map(playlist => {
                                            return <label key={playlist.id} className="playlists__item">{playlist.title}
                                                <input type="checkbox" onChange={event => this.handlePlaylistCheck(playlist.id, event)} checked={this.checkPlaylist(playlist.videos)}/>
                                                <span className="checkmark"></span>
                                            </label>
                                        })
                                    )}
                                </ul>
                                <input className="playlists__input" onKeyPress={this.handleKeyPress} placeholder="New playlist..." />
                            </nav>
                        </section>
                    </div>
                </div>
            </footer>
        </section>
    }
}

export default Player
