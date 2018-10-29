const $artists = $('.artists')
const $albums = $('.albums')
const $tracklist = $('.tracklist')
const $player = $('.player')
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

    $artists.hide()
    $albums.hide()
    $tracklist.hide()
    $player.hide()
})