const wrapper = document.querySelector(".wrapper")

let artistList = new List('section', 'Artists')

wrapper.appendChild(artistList.element)

let albumList = new List('section', 'Albums')

wrapper.appendChild(albumList.element)

let songList = new List('section', 'Songs')
wrapper.appendChild(songList.element)

view.hideAll()

let searchBar = new Search('section', function (query) {
    view.hideAll()
    view.emptyAll()
    logic.searchArtists(query)

        .then(artists => {
            var arr_artists = []
            arr_artists.push(...artists.artists.items)
            view.paintArtists(arr_artists)
        })
        .catch(console.error)
}.bind(view))
nav = document.querySelector('nav')
nav.appendChild(searchBar.element)

