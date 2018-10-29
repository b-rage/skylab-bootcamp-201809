var search = new Search('h1', 'section', 'search')

$(document.body).append(search.element);

const $form = $('form')

$form.submit(event => {
    event.preventDefault()

    const $input = $form.find('input')

    const query = $input.val()

    logic.searchArtists(query)
        .then(artists => {
            view.listArtist(artists)
        })
        .catch(console.error)
})

