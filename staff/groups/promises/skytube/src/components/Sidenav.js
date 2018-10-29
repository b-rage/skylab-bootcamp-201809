import React, { Component } from 'react'

class Sidenav extends Component {
    checkActive = (link, handler) => {
        if (link === this.props.active) {
            return {
                className: 'sidenav__item sidenav__item--active',
            }
        } else {
            return {
                className: 'sidenav__item',
                onClick: handler
            }
        }
    }

    render() {
        return <aside className="sidenav">
            <div className="sidenav-head">
                <img className="sidenav-head__logo" src="/img/skytube.logo.png" alt="logo"></img>
                <h1 className="sidenav-head__title">SkyTube</h1>
            </div>

            <div className="sidenav__lists">
                <nav>
                    <ul className="sidenav__menu">
                        <li {...this.checkActive('/home', this.props.onClickHome)}><span className="sidenav__icon fas fa-home"></span>Home</li>
                        <li {...this.checkActive('/home/favourites', this.props.onClickFavourites)}><span className="sidenav__icon fas fa-star"></span>Favourites</li>
                        <li {...this.checkActive('/home/history', this.props.onClickHistory)}><span className="sidenav__icon fas fa-history"></span>History</li>
                        <li {...this.checkActive('/home/watch_later', this.props.onClickWatchLater)}><span className="sidenav__icon fas fa-clock"></span>Watch Later</li>                    
                    </ul>
                </nav>

                <nav>
                    <h2 className="sidenav__title">Playlists</h2>
                    <ul className="sidenav__menu">
                        {this.props.playlists && this.props.playlists.length > 0 && (
                            this.props.playlists.map(playlist => {
                                return <li key={playlist.id}  {...this.checkActive('/home/playlist/'+playlist.id, () => this.props.onClickPlaylist(playlist.id))}>
                                    <span className="sidenav__icon fas fa-list"></span>
                                    {playlist.title}
                                </li>
                            })
                        )}
                    </ul>
                </nav>
            </div>
        </aside>
    }
}

export default Sidenav
