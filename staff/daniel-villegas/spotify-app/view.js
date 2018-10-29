const $artists = $('.artists')

$artists.hide()

const $albums = $('.albums')

$albums.hide()

const $songs = $('.songs')

$songs.hide()

const $audio = $('.audio')

$audio.hide()

const $player = $('.player')

const $form = $('form')

function listArtist(artists) {
    $songs.hide()
    $artists.show()

    const $ul = $artists.find('ul')

    $ul.empty()

    artists.forEach(artist => {
        const $a = $(`<a href="#">${artist.name}</a>`)

        $a.click(() => {
            logic.searchAlbums(artist.id)
            .then(albums => {
                listAlbums(albums)
            })
            .catch(console.error)
        })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)
    })
}

function listAlbums(albums) {
    $albums.show()
    $artists.hide()

    const $ul = $albums.find('ul')

    $ul.empty()

    albums.forEach(album => {
        const $a = $(`<a href="#">${album.name}</a>`)

        $a.click(() => {
            const albumId = album.id
            
            logic.searchSongs(albumId)
            .then(songs => {
                listSongs(songs, album.images[0].url)
            })
            .catch(console.error)
            
        })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)

    })
}

function listSongs(songs, albumPic) {
    $songs.show()
    $albums.hide()

    const $ul = $songs.find('ul')

    $ul.empty()

    songs.forEach(song => {
        const $a = $(`<a href="#">${song.name}</a>`)

        $a.click(() => {
            $audio.show()
            albumPicture(albumPic);
            logic.playSong(song.preview_url)
        })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)
        
    })
}

function albumPicture(albumPic){

    var $img = $audio.find('img')

    $img.remove()

    $img = document.createElement('img')

    $img.src = albumPic ? albumPic : 'https://cdn1.macworld.co.uk/cmsdata/features/3630990/sync_itunes_apple_music_thumb800.jpg'
    $img.style.width = '300px'

    $audio.append($img)
}

