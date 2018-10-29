const view = {
    listArtist(artists) {
        $artists.show()

        const $ul = $artists.find('ul')

        $ul.empty()

        artists.forEach(artist => {
            const $a = $(`<a href="#">${artist.name}</a>`)

            $a.click(() => {
                $albums.hide()
                $tracks.hide()
                const id = artist.id
                const artistName = artist.name

                logic.listAlbums(id)
                    .then(albums => {
                        var arr_albums = []
                        arr_albums.push(...albums.items)
                        this.showAlbums(arr_albums, artistName, id)
                    })
                    .catch(console.error)
            })

            const $li = $('<li>')
            $li.addClass('list-group-item list-group-item-action')

            $li.append($a)

            $ul.append($li)
        })
    },

    showAlbums(albums, artistName, id) {
        $albums.show()
        $feelingLucky.show()
        const $h3_albums = $albums.find('h3')
        $h3_albums.text(`Albums by ${artistName}`)
        const $ul_albums = $albums.find('ul')
        

        $ul_albums.empty()

        albums.forEach(album => {
            if (album.album_type === 'album') {
                const $li_albums = $('<li></li>')
                $li_albums.addClass('list-group-item list-group-item-action')
                const $a_albums = $(`<a href="#">${album.name}</a>`)


                $a_albums.click((event) => {
                    const $albumImg = album.images[0].url
                    event.preventDefault()
                    const albumName = album.name
                    const albumid = album.id
                    logic.listTracks(albumid)
                        .then(tracks => {
                            var arr_tracks = []
                            arr_tracks.push(...tracks.items)
                            this.showTracks(arr_tracks, albumName, $albumImg)
                        })
                        .catch(console.error)

                })


                $li_albums.append($a_albums)
                $ul_albums.append($li_albums)
            }
        })

        $feelingLucky.click(() => {
            this.hideEverything()
            // $trackInfo.show()
            logic.feelingLucky(id) 
                .then(relArtists => {
                    let relatedArtists = relArtists.artists
                    this.listArtist(relatedArtists)
                })
                .catch(console.error)
        })

    },

    showTracks(tracks, albumName, albumImg) {

        $tracks.show()

        const $h4_tracks = $tracks.find('h4')
        $h4_tracks.text(`songs in ${albumName}`)

        const $ul_tracks = $tracks.find('ul')

        $ul_tracks.empty()

        tracks.forEach(track => {
            const $a_tracks = $(`<a href="#">${track.name}</a>`)
            const $li_tracks = $('<li></li>')
            $li_tracks.addClass('list-group-item list-group-item-action')

            $a_tracks.click((event) => {
                event.preventDefault()
                const trackName = track.name
                const trackid = track.id

                logic.listTrackInfo(trackid)
                    .then(trackAudio => {
                        this.showTrackInfo(trackAudio, trackName, albumImg)
                    })
                    .catch(console.error)
            })

            $a_tracks.appendTo($li_tracks)
            $li_tracks.appendTo($ul_tracks)
        })
    },

    showTrackInfo(trackAudio, trackName, albumImg) {
        console.log(albumImg)
        $trackInfo.show()
        const $h5_trackInfo = $trackInfo.find('h5')
        $h5_trackInfo.text(trackName)
        $audioTrack.attr('src', '' + trackAudio.preview_url + '')
        
        test.attr('src', albumImg)

    },

    hideEverything() {
        $artists.hide()
        $feelingLucky.hide()
        $albums.hide()
        $tracks.hide()
        $trackInfo.hide()
    },

    soundPause() {
        $audioTrack.attr('src', '')
    }
}