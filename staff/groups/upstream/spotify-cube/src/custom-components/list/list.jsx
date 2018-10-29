import React, { Component } from 'react'


export default class List extends Component {

    state = { isLogged: false, trackFoundInPlayListMessage: "", playLists: [], list: this.props.list, type: this.props.type }


    componentWillReceiveProps(props) {
        this.setState({ hiddePlayListDiv:props.hiddePlayListDiv, isLogged: props.isLogged, list: props.list ,playLists:props.playLists, trackFoundInPlayListMessage:props.trackFoundInPlayListMessage})

    }

    handleClick = (id) => {

        switch (this.state.type) {
            case "playlist":
                this.props.onPlayListClick(id)
                break;
            case "tracks":
                this.props.onAlbumClick(id)
                break;
            case "albums":
                this.props.onAlbums(id)
                break;
            case "songs":
                let track = this.state.list.find((el) => {

                    return el.id === id

                })
                let preview_url = !track.preview_url ? require("../../assets/audio/default.mp3") : track.preview_url
                this.props.onPlayTrack(preview_url)
                break;
        }
    }


    render() {


        return (

            <section className="list">
                <ul className="list__container">
                    {
                        this.state.list.map((item) =>

                            <li className="list__container__item">

                                <div className="list__container__item__group">
                                    <div className="list__container__item__group__img">
                                        <img src={item.image}></img>
                                    </div>
                                    <div onClick={() => this.handleClick(item.id)} className="list__container__item__group__name">{item.name}</div>
                                    {this.state.type === "playlist" && <div><button onClick={() => this.props.onDeleteClick(item.id)} className="list__container__item__group__button-delete btn btn-sm btn-dark">Delete</button></div>}
                                    {this.state.type === "songs" && this.state.isLogged && <div><button id={`button-${item.id}`} onClick={() => this.props.onClickAddTrackToList(item.id)} className="list__container__item__group__button-delete btn btn-sm btn-dark">Add To PlayList</button></div>}
                                </div>
                                {this.state.type === "songs" && <div id={item.id} className="display-none list__container__item__playlists">
                                    <ul className="list__container__item__playlists-list">
                                        {
                                            this.state.playLists.map(playlist => <li onClick={() => this.props.onPlayListClick(item.id, playlist.id)}>{playlist.name}</li>)

                                        }
                                    </ul>
                                    <div className="list__container__item__playlists-message">{this.state.trackFoundInPlayListMessage}</div>
                                </div>}
                            </li>)}
                </ul>
            </section>

        );
    }
}
