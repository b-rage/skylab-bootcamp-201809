let query;

const $artists = $('.artists')
$artists.hide()

const $albums = $('.albums')
$albums.hide()

const $tracks = $('.tracks')
$tracks.hide()


const $oneTrack = $('.one-track')
$oneTrack.hide()

const $form = $('form')
$form.submit(event => {
    event.preventDefault()

    const $input = $form.find('input')

    query = $input.val()

    logic.searchArtists(query)
        .then((artists) => {
            listArtist(artists)
        })
        .catch(console.error)
})

function listArtist(artists) {

   
    const $ul = $artists.find('ul')
    const $title = $artists.find('h2')
    $title.text('Artist: ' + query)

    $ul.empty()


    artists.forEach(artist => {
        let artistName = artist.name
        const $a = $(`<a href="#">${artistName}</a>`)

        $a.click(() => {
            //console.log(artist)
            var id = artist.id
            logic.searchAlbums(id)
                .then(albums => {
                    listAlbums(albums,artistName)
                })
                .catch(console.error)
        })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)
    })
    $artists.show()
   
}

function listAlbums(albums, artistName){
    $artists.hide()

    const $ul = $albums.find('ul')
    const $title = $albums.find('h3')
    $title.text(artistName)


    $ul.empty()

    albums.forEach( album => {
        let albumName = album.name
        const $a = $(`<a href="#">${albumName}<a>`)

        $a.click(() => {
            var id = album.id
            logic.searchTracks(id)
                .then(tracks => {
                    listTracks(tracks,albumName)
                })
                .catch(console.erro)

        })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)

    })
    $albums.show();

}

function listTracks(tracks,albumName){

    $albums.hide()

    const $ul = $tracks.find('ul')
    const $title = $tracks.find('h4')
    $title.text(albumName)

    $ul.empty()

    tracks.forEach( track => {
        let trackName = track.name
        const $a = $(`<a href="#">${trackName}<a>`)

        $a.click(() => {
            var id = track.id
            logic.searchOneTrack(id)
                .then(track => {
                    showOneTrack(track,trackName)
                })
                .catch(console.error)

        })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)

    })
    $tracks.show();


}


function showOneTrack(track,trackName){

    $tracks.hide()
    const $title = $oneTrack.find('h5')
    $title.text(trackName)

    const $audio = $oneTrack.find('audio')
    $audio.attr('src',track)

    $oneTrack.show()

}