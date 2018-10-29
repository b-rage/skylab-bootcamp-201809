const view = {
    paintArtists(arr_artists) {
        artistList.show()
        arr_artists.forEach(artist => {
            
            songList.emptyList()
            const id = artist.id
            artistList.list_elements = document.createElement('li')
            artistList.list_elements.innerText = artist.name
            artistList.ul.appendChild(artistList.list_elements)

            artistList.list_elements.addEventListener('click', () => {
                albumList.emptyList()

                logic.listAlbums(id)
                    .then(albums => {
                        var arr_albums = []
                        arr_albums.push(...albums.items)
                        this.showAlbums(arr_albums)
                    }).catch(console.error)
            })
        })
    },

    showAlbums(arr_albums) {
        albumList.show()
        arr_albums.forEach(album => {
            

            const album_id = album.id
            albumList.list_elements = document.createElement('li')
            albumList.list_elements.innerText = album.name
            albumList.ul.appendChild(albumList.list_elements)

            albumList.list_elements.addEventListener('click', () => {
                songList.emptyList()

                logic.listTracks(album_id)
                    .then(tracks => {
                        var arr_tracks = []
                        arr_tracks.push(...tracks.items)
                        this.showTracks(arr_tracks)

                    }).catch(console.error)
            })
        })
    },

    showTracks(arr_tracks) {
        songList.show()
        arr_tracks.forEach(track => {

            const track_id = track.id
            const track_preview = track.preview_url
            songList.list_elements = document.createElement('li')
            songList.list_elements.innerText = track.name
            songList.ul.appendChild(songList.list_elements)

            songList.list_elements.addEventListener('click', () => {
                let selectedTrack = new TrackBox('section', 'https://via.placeholder.com/350x150', track_preview)
                wrapper.appendChild(selectedTrack.element)
            })
        })
    },

    hideAll() {
        artistList.hide()
        albumList.hide()
        songList.hide()
    },

    emptyAll() {
        artistList.emptyList()
        albumList.emptyList()
        songList.emptyList()
    }

}