import React, { Component } from 'react'
import Header from '../../header/header'
import SideTitle from '../../sidetitle/sidetitle'
import List from '../../list/list'
import spotifyLogic from '../../../services/spotifylogic'


export default class BackSide extends Component {

  state = { albums: this.props.albumlist }

  componentWillReceiveProps(props) {

    let albums = props.albumlist.map(el => {el.image = !el.image ? require("../../../assets/img/playlist.png") : el.image; return el})
    this.setState({ albums: albums })

  }

  handleClickOnAlbum = (id) => {

    spotifyLogic.getSongsbyAlbumId(id)
      .then((res) => {

        let songs = []
      
        res.items.map(item => {

          songs.push({ id: item.id, name: item.name, preview_url: item.preview_url, image: this.state.albums.find(x => x.id === id).image })

        })
        this.props.onTracks(songs)
        this.props.setBackGround(this.state.albums.find(x => x.id === id).image)

      })
      .catch(err => alert(err.message))// mostrar modal
  }

  render() {
    return (

      <section className="back">
        <div className="rotateY-180">
          <Header></Header>
          <SideTitle title="Albums list" image="metallica.png"></SideTitle>
          <List onAlbumClick={this.handleClickOnAlbum} type="tracks" list={this.state.albums}></List>
        </div>

      </section>
    )
  }
}