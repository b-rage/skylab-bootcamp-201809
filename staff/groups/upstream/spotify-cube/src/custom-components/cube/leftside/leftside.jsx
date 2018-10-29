import React, { Component } from 'react'
import Header from '../../header/header'
import SideTitle from '../../sidetitle/sidetitle'
import List from '../../list/list';
import userService from '../../../services/userlogic'
import $ from 'jquery'

export default class LeftSide extends Component {


  state = { playLists:[], isLogged: false, logo: "", tracks: [], track: '', trackFoundInPlayListMessage:""}

  componentWillReceiveProps(props) {
    let tracks = props.tracks.map(el => {el.image = !el.image ? require("../../../assets/img/playlist.png") : el.image; return el})
    let back = !tracks.length ? "" : tracks[0].image
    this.setState({ isLogged: props.isLogged, logo: back, tracks: tracks })

  }

  handlePlayTrack = (previewUrl) => {
    this.setState({ track: previewUrl })

  }

  getUserInfo = () => {

    const session = userService.getSessionFromStorage()
    return userService.getUserInfo(session.id, session.token).then(data => {

        return data

    }).catch(err => { throw Error(err.message) })

  }

  handlePlaylistClick = (trackId, playListId) => {

    this.getUserInfo()
      .then((data) => {
    
        if (userService.existsTrackInPlayList(data, trackId)) {
          this.setState({ trackFoundInPlayListMessage: "This track is already in the playList" }, () => {

            setTimeout(() => {

              this.setState({ trackFoundInPlayListMessage: "" , hiddePlayListDiv:"playListId"})

            }, 2000)
          })

        }
        else
          return data
      })
      .then(data => {

        if (data) {

          let user = userService.getUserFromData(data)
          return userService.addTrackToPlayList(trackId, playListId, user)
        } else return data

      })
      .then(res => {
        if (res)
          this.setState({ trackFoundInPlayListMessage: "This track has been added to the playList" }, () => {


            setTimeout(() => {

              this.setState({ trackFoundInPlayListMessage: "" })

            }, 2000)

          })
      })
      .catch(err => alert(err.message))

  }

  handleAddTrackToListClickButton = (trackId) => {

    //$("button[id^='button-']").

    const text = $("#button-" + trackId).text()

    if (text === "Close") {
        $(`#${trackId}`).addClass("display-none")
        $("#button-" + trackId).text("Add To PlayList")
    } else {

        this.getUserInfo().then((data) => {

            if (data.playLists.length)
                this.setState({ playLists: data.playLists }, () => {

                    $(`#${trackId}`).removeClass("display-none")
                    $("#button-" + trackId).text("Close")
                })
            else{

                 alert("The user has not any playList")
                        
            }

        }).catch(err => alert(err.message))
    }

}



  render() {


    return (

      <section className="left">
        <div className="rotateY--180" >
          <Header track={this.state.track} showPlayer={true}></Header>
          <SideTitle logo={this.state.logo} image="metallica.png" title="Track List"></SideTitle>
          <List  trackFoundInPlayListMessage = {this.state.trackFoundInPlayListMessage} playLists={this.state.playLists} onClickAddTrackToList={this.handleAddTrackToListClickButton} onPlayListClick = {this.handlePlaylistClick} isLogged={this.state.isLogged} onPlayTrack={this.handlePlayTrack} showLink={true} type="songs" list={this.state.tracks}></List>
        </div>

      </section>
    );
  }
}