import React, { Component } from 'react'
import Register from '../../register/register'
import Header from '../../header/header'
import userService from '../../../services/userlogic'
import SideTitle from '../../sidetitle/sidetitle'
import List from '../../list/list'



export default class BottomSide extends Component {

    state = { preview: "", tracks: [], messageButton: "Add PlayList", registerPlaylistMessage: "", showFormAddPlayList: false, playlists: [], isLogged: false, playListName: "" }

    componentWillReceiveProps(props) {

        this.setState({ isLogged: props.isLogged, playlists: props.playlists })

    }

    handleChange = (ev) => {

        this.setState({ playListName: ev.target.value })

    }

    handleCreatePlayList = (ev) => {
        ev.preventDefault()

        userService.createPlayList(this.state.playListName).then(res => {

            userService.getUserPlayLists().then(res => {


                res.map(el => {

                    el.image = require('../../../assets/img/playlist.png')
                })

                this.setState({ messageButton: "Add PlayList", registerPlaylistMessage: "The playlist has been created", showFormAddPlayList: false }, () => {

                    this.props.OnCreatedPlayList()
                })

            })




        }).catch(err => {

            this.setState({ registerPlaylistMessage: err.message })


        })
    }

    handleAddPlaylistClick = () => {

        if (this.state.messageButton === "Add PlayList") {
            this.setState({ messageButton: "Close form" })
        } else {
            this.setState({ messageButton: "Add PlayList" })
        }
        this.state.showFormAddPlayList = !this.state.showFormAddPlayList
        this.setState({ registerPlaylistMessage: "", showFormAddPlayList: this.state.showFormAddPlayList })
    }

    handleDeleteClick = (id) => {

        userService.deletePlayList(id).then(res => {

            res.playLists.map(el => {
                el.image = require('../../../assets/img/playlist.png')
            })

            //this.setState({ playlists: res.playLists })
            this.props.OnCreatedPlayList()

        }).catch(err => {

            alert(err.message);
        })

    }

    handlePlayListClick = (id) => {

        const session = userService.getSessionFromStorage()
        userService.getUserInfo(session.id, session.token).then(data => {

            let user = userService.getUserFromData(data)
            let Playlists = user.Playlists.find(playlist => playlist.id === id)
            if (Playlists.tracks) {
                this.setState({ tracks: Playlists.tracks })
            }

        }).catch(err => {

            alert(err.message);

        })

    }

    handleBackToPlayList = () => {

        this.setState({ tracks: [] })
    }

    handleDeleteTrack = (trackId) => {

        const session = userService.getSessionFromStorage()
        userService.getUserInfo(session.id, session.token).then(data => {

            let user = userService.getUserFromData(data)
            user.deleteTrackFromPlayList(trackId)
            userService.updateUser(session.id, session.token, user)
                .then(res => {

                    this.setState({ tracks: this.state.tracks.filter(track => track.id !== trackId) })

                })
                .catch(err => alert(err.message))


        }).catch(err => {

            alert(err.message);
        })

    }

    play = (preview) => {

        if (!preview)
        {
            preview = require("../../../assets/audio/default.mp3")
        }

        this.setState({ preview })
    }

    render() {
        return (

            <section className="bottom">
                <div className="rotateX-180">

                    <Header showPlayer={this.state.isLogged} track={this.state.preview}></Header>
                    {this.state.isLogged && <SideTitle messageButton={this.state.messageButton} onClickAddPlayList={this.handleAddPlaylistClick} showAddPlayListButton={true} title="Playlists"></SideTitle>}
                    {this.state.isLogged && !this.state.showFormAddPlayList && !this.state.tracks.length && <List onPlayListClick={this.handlePlayListClick} onDeleteClick={this.handleDeleteClick} type="playlist" list={this.state.playlists}></List>}
                    {!this.state.isLogged && <Register onClickLogin={this.props.onClickLogin}></Register>}
                    {this.state.showFormAddPlayList && <form className="custom-form" onSubmit={(ev) => { this.handleCreatePlayList(ev) }}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Add Playlist</label>
                            <input onChange={(ev) => this.handleChange(ev)} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Add PlayList..." />
                        </div>
                        <button style={{"margin-left":"0"}} type="submit" className="btn btn-primary">Add Playlist</button>
                        <h2>{this.state.registerPlaylistMessage}</h2>
                    </form>}
                    {this.state.tracks.length > 0 && <div className="">

                        <ul className="list playlist-trackList">
                            <button className="back-btn btn btn-md btn-dark" onClick={this.handleBackToPlayList}>Back to PlayList</button>
                            {
                                this.state.tracks.map(track => <li className='bottom--list--item'>
                                    <div onClick={() => this.play(track.preview_url)}>{track.name}</div>
                                    <div><button className="btn btn-sm btn-dark" onClick={() => this.handleDeleteTrack(track.id)}>Delete</button></div>
                                </li>

                                )

                            }
                        </ul>

                        <div className=""></div>
                    </div>}
                </div>
            </section>
        );
    }
}
