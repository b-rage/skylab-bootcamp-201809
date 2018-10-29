const $artists = $('.artists')
const $albums = $('.albums')
const $songs = $('.songs')
const $player = $('.player')

let $playerTrack = $player.find('audio')

$artists.hide()
$albums.hide()
$songs.hide()
$player.hide()


const $form = $('form')

$form.submit(event => {
    event.preventDefault()

    const $input = $form.find('input')

    const query = $input.val()

    logic.searchArtists(query)
        .then(artists => {
            listArtist(artists)
        })
        .catch(console.error)
})

function listArtist(artists) {
    
    $artists.show()

    const $ul = $artists.find('ul')

    $ul.empty()

    artists.forEach(artist => {
        const $a = $(`<a>${artist.name}</a>`)

        $a.click(() => {
            console.log(artist)
            const id = artist.id
            logic.listAlbums(id)
                .then(albums => {
                    const artist_name = artist.name
                    viewAlbums(albums,artist_name)
                    
            })
        })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)
    })
}

function viewAlbums(albums,artist_name) {
    $artists.hide()
    $albums.show()

    // Titulo
    const $ul__album = $albums.find('ul')

    $ul__album.empty()

    albums.forEach(album => {
        const $a__album = $(`<a>${album.name}</a>`)

        $a__album.click(() => {

            console.log(album)
            const album_id = album.id
                logic.listSongs(album_id)
                 .then(songs => {
                     viewSongs(songs,)
                    
            })
        })

        const $li__album = $('<li>')

        $li__album.append($a__album)

        $ul__album.append($li__album)
    })
}
    

function viewSongs(songs,) {
    
    $albums.hide()
    $songs.show()

    // Titulo
    const $ul__songs = $songs.find('ul')

    $ul__songs.empty()

    songs.forEach(song => {
        const $a__songs = $(`<a>${song.name}</a>`)

        $a__songs.click(() => {

            console.log(song)
            const song_id = song.id
                logic.playSongs(song_id)
                .then(track => {
                    playTrack(track)
                    
            })
        })

        const $li__songs = $('<li>')

        $li__songs.append($a__songs)

        $ul__songs.append($li__songs)
    })
    
}

function playTrack(track) {

    $songs.hide()
    $player.show()

    $playerTrack.attr('src', '' + track.preview_url + '')

}