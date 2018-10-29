var artists = new List('h2', 'section', 'artists')
$(document.body).append(artists.element);

var albums = new List('h3', 'section', 'albums')
$(document.body).append(albums.element);

var songs = new List('h4', 'section', 'songs')
$(document.body).append(songs.element);

var player = new Player('h5', 'section', 'player')
$(document.body).append(player.element);


const $artists = $('.artists')
const $albums = $('.albums')
const $songs = $('.songs')
const $player = $('.player')

$artists.hide()
$albums.hide()
$songs.hide()
$player.hide()

const view = {

    listArtist(artists) {
        $artists.show()
        $albums.hide()
        $songs.hide()
        $player.hide()
        const $titleArt = $artists.find('.panel__title')
        $titleArt.text('Artists with that name')
        const $divArt = $artists.find('.dropdown-menu')
        const $btnArt = $artists.find('button')
        $btnArt.text('Show artists')

        $divArt.empty()
        if (artists.artists.total === 0) {
            const $p = $('<p>Sorry but there are no artists with this name <p>')
            $artists.append($p)
        } else {

            const _artists = artists.artists.items
            _artists.forEach(artist => {
                const $a = $(`<a href="#">${artist.name}</a>`)
                $a.addClass('dropdown-item');


                $a.click(() => {
                    $albums.show()
                    $songs.hide()
                    $player.hide()
                    const $h3 = $albums.find('h3')
                    $h3.text(`${artist.name}`)
                    const id = artist.id
                    var name = artist.name
                    var img = artist.images[2].url
                    logic.listAlbums(id)
                        .then(albums => {
                            this.showAlbums(albums, name, img)
                        })
                        .catch(console.error)
                })

                $divArt.append($a)
            })
        }
    },

    showAlbums(albums, name, img) {
        const $titleAlb = $albums.find('.panel__title')
        $titleAlb.text(name)
        const $divAlb = $albums.find('.dropdown-menu')
        $divAlb.empty()
        const $btnAlb = $albums.find('button')
        $btnAlb.text('Show albums')
        var $img = $albums.find('img')
        $img.attr('src', img)
        var _albums = albums.items
        _albums.forEach(album => {
            const $aAlb = $(`<a href="#">${album.name}</a>`)
            $aAlb.addClass('dropdown-item');

            $aAlb.click(() => {
                $songs.show()
                $player.hide()
                $h4Sng = $songs.find('h4')
                $h4Sng.text(`${album.name}`)
                const idAlb = album.id
                var name = album.name
                var img = album.images[2].url

                logic.listSongs(idAlb)
                    .then(songs => {
                        this.showSongs(songs, name, img)
                    })
                    .catch(console.error)
            })

            $divAlb.append($aAlb)
        })

    },

    showSongs(songs, name, img) {
        const $titleSng = $songs.find('.panel__title')
        $titleSng.text(name)
        const $divSng = $songs.find('.dropdown-menu')
        $divSng.empty()
        const $btnSng = $songs.find('button')
        $btnSng.text('Show songs')
        var $img = $songs.find('img')
        $img.attr('src', img)
        var _songs = songs.items
        _songs.forEach(song => {
            const $aSng = $(`<a href="#">${song.name}</a>`)
            $aSng.addClass('dropdown-item');

            $aSng.click(() => {
                $player.show()
                $h5 = $player.find('h5')
                $h5.text(`${song.name}`)
                this.playSong(song, song.name)
            })

            $divSng.append($aSng)
        })
    },

    playSong(song, name) {
        // $player.empty()
        const $titlePlayer = $player.find('.panel__title')
        $titlePlayer.text(name)
        const $audio = $player.find('audio')
        $audio.empty()
        const $p = $('<p>')
        $p.empty()
        console.log(song)
        const idPly = song.preview_url
        if (idPly === null) {
            $audio.hide()
            $p.text('Sorry but audio is notavailable for this song')
            $player.append($p)
        } else {
            $audio.attr('src', '' + idPly + '')
        }
    }

}

