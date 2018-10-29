const $form = $('form')
logic.token='BQAR-b7FRAXj3UWwyQgjY-RmG3Z_Ts1znm7b6e9s0LYay8pgZhSTbm-75TtCCLbViOe0WlxAgfzBWAnZaVLDD5AgewesIonvrYXMxgTQxuSiZ3QvOC9vvRHHxvqQNTJB8rG125Gnhn0';

$form.submit(event => {
    event.preventDefault()

    const $input = $form.find('input')

    const query = $input.val()

    logic.searchArtists(query)
        .then(arr => {
            let artists = [];
            artists.push(...arr.artists.items)
            view.listArtist(artists)
        })
        .catch(console.error)
})

