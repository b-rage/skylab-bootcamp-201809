import React, { Component } from 'react'
import Header from '../../header/header';
import SideTitle from '../../sidetitle/sidetitle';
import List from '../../list/list';
import spotifyLogic from '../../../services/spotifylogic'


export default class RightSide extends Component {

  state = { artists: [] }


  componentWillReceiveProps(props) {

    let artists = props.artists.map(el => { el.image = !el.image ? require("../../../assets/img/playlist.png") : el.image; return el })
    this.setState({ artists: artists })

  }

  handleAlbums = (id) => {

    spotifyLogic.getAlbumsByArtistId(id).then((res) => {

      let albums = []
      res.items.map(item => {

        albums.push({ id: item.id, name: item.name, image: item.images.length ? item.images[0].url : "" })

      })

      this.props.onAlbums(albums)

    })
      .catch(err => alert(err.message))// mostrar modal
  }

  render() {

    return (

      <section className="right">
        <Header></Header>
        <SideTitle title="Artists List" image="metallica.png"></SideTitle>
        <List onAlbums={this.handleAlbums} type="albums" list={this.state.artists}></List>
      </section>
    );
  }
}
