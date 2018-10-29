var artists = new List('Artists', 'section', 'artists')

$(document.body).append(artists.element);

var albums = new List('Albums', 'section', 'albums')

$(document.body).append(albums.element);

var songs = new List('Songs', 'section', 'songs')

$(document.body).append(songs.element);

var player = new Player('Player', 'section', 'player')

$(document.body).append(player.element);

const $artists = $('.artists')

const $albums = $('.albums')

const $songs = $('.songs')

const $player = $('.player')

$artists.hide()
$albums.hide()
$songs.hide()
$player.hide()

function listArtist(artists) {
    $artists.show()
    $albums.hide()
    $songs.hide()
    $player.hide()
    const $ul = $artists.find('ul')

    $ul.empty()
    if(artists.artists.total === 0) {
        const $p = $('<p>Sorry but there are no artists with this name <p>')
        $artists.append($p)
    }else{ 

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
                console.log(artist)
                const id = artist.id
                var img = artist.images[2].url
                logic.listAlbums(id)
                    .then(albums => {
                        showAlbums(albums, img)
                    })
                    .catch(console.error)
            })

            const $li = $('<li>')

            $li.append($a)

            $ul.append($li)
        })
    }
}

function showAlbums(albums, img) {
    const $ulAlb = $albums.find('ul')
    $ulAlb.empty()
    var $img = $albums.find('img')
    $img.attr('src', img)
    var _albums = albums.items
    _albums.forEach(album => {
        const $aAlb = $(`<a href="#">${album.name}</a>`)
        $aAlb.click(() => {
            $songs.show()
            $player.hide()
            $h4Sng = $songs.find('h4')
            $h4Sng.text(`${album.name}`)
            const idAlb = album.id
            var img = album.images[2].url

            logic.listSongs(idAlb)
                .then(songs => {
                    showSongs(songs, img)
                })
                .catch(console.error)
        })
        const $liAlb = $('<li>')
        
        $liAlb.append($aAlb)

        $ulAlb.append($liAlb)
    })

} 

function showSongs(songs, img) {
    const $ulSng = $songs.find('ul')
    $ulSng.empty()
    var $img = $songs.find('img')
    $img.attr('src', img)
    console.log(songs)
    var _songs = songs.items
    _songs.forEach(song => {
        const $aSng = $(`<a href="#">${song.name}</a>`)
        $aSng.click(() => {
            console.log(song)
            $player.show()
            $h5 = $player.find('h5')
            $h5.text(`${song.name}`)
            playSong(song)
        })
        const $liSng = $('<li>')
        
        $liSng.append($aSng)

        $ulSng.append($liSng)
    })
}

function playSong(song){
    const $audio = $player.find('audio')
    $audio.empty()
    console.log(song)
    const idPly = song.preview_url
    console.log(idPly)
    $audio.attr('src', '' +idPly+'')
}


