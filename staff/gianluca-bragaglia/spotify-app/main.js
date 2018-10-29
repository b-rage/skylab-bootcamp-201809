const $artists = $('.artists')
const $albums = $('.albums')
const $tracks = $('.tracks')
const $player = $('.player')
const $form = $('form')

let $ul = $artists.find('ul')
let $ulAlbums = $albums.find('ul')
let $liAlbums = $ulAlbums.find('li')
let $aAlbums = $liAlbums.find('a')
let $h4Track = $tracks.find('h4')
let $ulTracks = $tracks.find('ul')
let $liTracks = $ulTracks.find('li')
let $aTracks = $liTracks.find('a')
let $h5Track = $player.find('h5')
let $audioTrack = $player.find('audio')
let $pPlayer = $player.find('p')
let $imgAlbums = $liAlbums.find('img')

$artists.hide()
$albums.hide()
$tracks.hide()
$player.hide()
$pPlayer.hide()

// capture input query
$form.submit(event => {
    event.preventDefault()

    const $input = $form.find('input')
    const query = $input.val() //capture input query

    $artists.hide()
    $albums.hide()
    $tracks.hide()
    $player.hide()
    $pPlayer.hide()
    $audioTrack.attr('src', '')

    logic.searchArtists(query) // send input query to logic
        .then(artists => {
            listArtist(artists)
        })
        .catch(console.error)
})

function listArtist(artists) { // use responde of ajax call to draw in html

    $artists.show()
    $ul.empty()

    artists.forEach(artist => { // loop iteration throw response ajax

        let $li = $('<li>') //create a list
        $li.addClass('list-group-item')
        let $a = $(`<a href="#">${artist.name}</a>`) //create artist name item of the list

        $a.click(() => {

            let id = artist.id

            $albums.show()
            $tracks.hide()
            $player.hide()
            $pPlayer.hide()
            $audioTrack.attr('src', '')

            logic.searchAlbums(id) //send id artist to logic
                .then(albums => {
                    listAlbums(albums)
                })
                .catch(console.error)
        })

        $li.append($a) // draw in html
        $ul.append($li)

    })
}


function listAlbums(albums) {

    $ulAlbums.empty() // empty the list

    albums.forEach(album => { // loop iteration throw response ajax

        $liAlbums = $('<li>') // create li,img,a
        $liAlbums.addClass('list-group-item media')
        $imgAlbums = $(`<img class='img-circle'/>`)
        $imgAlbums.attr('src', '' + album.images[2].url + '')
        $aAlbums = $(`<a href="#">${album.name}</a>`)

        $aAlbums.click(() => {
            event.preventDefault()

            let idAlbum = album.id
            $h4Track.text(album.name)
            $tracks.show()
            $audioTrack.attr('src', '')
            $player.hide()
            $pPlayer.hide()

            logic.searchTracks(idAlbum) // send id of album to logic
                .then((tracks) => {
                    listTracks(tracks)
                })
                .catch(console.error)

        })

        $liAlbums.append($imgAlbums) // draw in html
        $liAlbums.append($aAlbums)
        $ulAlbums.append($liAlbums)

    })


}

function listTracks(tracks) {

    $ulTracks.empty()

    tracks.forEach(track => { // loop iteration throw response ajax

        $aTracks = $(`<a href="#">${track.name}</a>`)

        $aTracks.click(() => {
            event.preventDefault()

            $player.show()
            $h5Track.text(track.name)
            let trackPlaying = track.preview_url

                !trackPlaying ? nullPreviewTrack() : $audioTrack.attr('src', '' + trackPlaying + '') //assign preview url to audio tag

        })
        $liTracks = $('<li>') //create li
        $liTracks.addClass('list-group-item')
        $liTracks.append($aTracks) //draw to html
        $ulTracks.append($liTracks)

    })

    function nullPreviewTrack() {

        $pPlayer.text('track avaiable only for premium users')
        $audioTrack.hide()
        $pPlayer.show()
    }

}