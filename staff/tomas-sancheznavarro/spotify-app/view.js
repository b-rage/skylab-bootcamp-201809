$artists.hide()
$albums.hide()
$tracklist.hide()
$player.hide()

function listArtist(artists) {
    $artists.show()

    const $ul = $artists.find('ul')
    $ul.empty()

    artists.forEach(artist => {
        const $a = $(`<a href="#">${artist.name}</a>`)

        $a.click(() => {

            $artists.hide()

            const id = artist.id

            logic.searchAlbums(id)
                .then(albums => {
                    listAlbums(albums, artist.name, artist.images[1].url)
                })
                .catch(console.error)
        })

        const $li = $('<li>')
        $li.addClass('list-group-item')
        $li.append($a)
        $ul.append($li)

    })

    function listAlbums(albums, artistName, artistPic) {

        $albums.show()

        const $h3 = $albums.find('h3')
        $h3.text(`Albums by ${artistName}`)

        const $img = $albums.find('img')

        $img.attr('src', artistPic)

        const $ul = $albums.find('ul')

        $ul.empty()

        albums.forEach(album => {
            const $a = $(`<a href="#">${album.name}</a>`)

            $a.click(() => {

                $artists.hide()

                const id = album.id

                console.log(id)

                logic.searchSongs(id)

                    .then(songs => {
                        listSongs(songs, album.name, album.images[1].url)
                    })
                    .catch(console.error)

            })

            const $li = $('<li>')
            $li.addClass('list-group-item')

            $li.append($a)

            $ul.append($li)


        })
    }

    function listSongs(songs, albumName, coverPic) {
        $tracklist.show()
        $albums.hide()

        const $h3 = $tracklist.find('h3')

        $h3.text(`Songs from the album "${albumName}"`)

        const $img = $tracklist.find('img')

        $img.attr('src', coverPic)

        const $ul = $tracklist.find('ul')

        $ul.empty()

        songs.forEach(song => {

            const $a = $(`<a href="#">${song.name}</a>`)
            const $li = $('<li>')
            $li.addClass('list-group-item')

            $li.append($a)

            $ul.append($li)

            $a.click(() => {

                $player.show()

                const song_url = song.preview_url

                if (!song_url) {

                    const $h3 = $player.find('h3')
                    $h3.text('Sorry, this song is not available for preview')

                } else {
                    playSong(song_url)
                }

            })
        })
    }

    playSong = (song_url) => { // lo mismo que "function playSong(url) {...}", pero en sintaxis ES6
        const $playSong = $player.find('audio')
        $playSong.attr('src', '' + song_url + '')
    }
}