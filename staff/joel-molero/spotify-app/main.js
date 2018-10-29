const $artists = $('.artists')

$artists.hide()

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
        const $a = $(`<a href="#">${artist.name}</a>`)

        $a.click(() => {
            console.log(artist)

            // TODO search albums by artist id
        })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)
    })
}


function listArtist(artists) {
    $artists.show()

    const $ul = $artists.find('ul')

    $ul.empty()

    artists.forEach(artist => {
        const $a = $(`<a href="#">${artist.name}</a>`)

        $a.click(() => {
            console.log(artist)

            // TODO search albums by artist id
        })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)
    })
}