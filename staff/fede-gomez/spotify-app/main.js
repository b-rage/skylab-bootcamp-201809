const $artists = $('.artists')
const $artists__title = $('.artists__title')
const $albums = $('.albums')
const $albums__title = $('.albums__title')
const $songs = $('.songs')
const $songs__title = $('.songs__title')
const $song = $('.song')

$artists.hide()
$albums.hide()
$songs.hide()
$song.hide()

$artists__title.click(()=>{
    $artists.find('.artists__list').slideToggle()
})

$albums__title.click(()=>{
    $albums.find('.albums__list').slideToggle()
})

$songs__title.click(()=>{
    $songs.find('.songs__list').slideToggle()
})

const $form = $('.main-form')

$form.submit(event => {
    $artists.fadeOut(200)
    $albums.fadeOut(200)
    $songs.fadeOut(200)
    // $song.hide()
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
    $artists.fadeIn(200)

    const $ul = $artists.find('ul')
    const $artists__list = $('<div>')
    $artists__list.addClass('artists__list')

    $ul.empty()

    artists.forEach(artist => {
        const $a = $(`<a href="#">${artist.name}</a>`)

        $a.click(() => {
            var id = artist.id

            // $artists.css('order', '100')
            $albums.find('.albums__list').slideDown()
            $albums.slideDown(300)
            $artists__list.slideUp(300)
            $songs.slideUp()
            logic.searchAlbums(id)
                .then(albums => {
                    listAlbums(albums, artist.name)
                })
                .catch(console.error)
        })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)
    })

    $artists__list.append($ul)

    $artists.append($artists__list)
}

function listAlbums(albums, artist) {
    $albums.slideDown(300)

    const $ul = $albums.find('ul')
    const $h3 = $albums.find('h3')

    $ul.empty()

    $h3.text('Albums from ' + artist)

    albums.forEach(album => {
        const $a = $('<a href="#">' + album.name + '</a>')

        $a.click(() => {
            var id = album.id
            
            // $albums.css('order', '10')
            logic.searchSongs(id)
                .then(songs => {
                    listSongs(songs.items, album.name, artist)
                })
                .catch(console.error)
        })

        const $li = $('<li>')

        $li.append($a)
        $ul.append($li)

    })
}

function listSongs(songs, album, artist) {
    $songs.fadeIn(1000)

    const $ul = $songs.find('ul')
    const $h4 = $songs.find('h4')

    $ul.empty()

    $h4.text(artist + ' - Album: ' + album)

    songs.forEach(song => {

        const $a = $('<a href="#">' + song.name + '</a>')

        $a.click(() => {
            playSong(song)
        })

        const $li = $('<li>')
        $li.append($a)
        $ul.append($li)

    })

}

function playSong(song) {
    $song.fadeIn(2000)

    const $h5 = $song.find('h5')
    const $player = $song.find('.player')
    const url = song.preview_url

    if (url) {
        $player.attr("src", url)
        $h5.text('Now Playing: ' + song.name)
    } else {
        $h5.text('You cannot play that song but we have something better for you...')
        $player.attr("src", "https://p.scdn.co/mp3-preview/a69cabb16c6c3333db903d1f538e808493689e40?cid=774b29d4f13844c495f206cafdad9c86")

    }

}