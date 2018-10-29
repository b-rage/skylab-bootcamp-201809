const $artists = $('.artists')
const $albums = $('.albums')
const $songs = $('.songs')
const $player = $('.player')
const $form = $('form')
const $imgArtist = $('.imgArtist')
const $imgAlbum = $('.imgAlbum')

$artists.hide()
$imgArtist.hide()
$albums.hide()
$imgAlbum.hide()
$songs.hide()
$player.hide()

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