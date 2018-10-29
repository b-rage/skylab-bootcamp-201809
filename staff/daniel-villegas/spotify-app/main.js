$form.submit(event => {
    event.preventDefault()

    const $input = $form.find('input')

    const query = $input.val()

    logic.call(query)
        .then(artists => {
            listArtist(artists)
        })
        .catch(console.error)
})