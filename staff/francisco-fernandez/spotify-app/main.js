const $artists = $('.artists')

$artists.hide()

const $form = $('form')

const $albums = $('.albums')

$albums.hide()

const $tracks = $('.tracks')

$tracks.hide()

const $preview = $('.preview')

$preview.hide()

$form.submit(event => {
    event.preventDefault()

    const $input = $form.find('input')

    const query = $input.val()

    logic.searchArtists(query)
        .then(artists => {
            listArtist(artists)
        })
        .catch(console.error)
        const $title1 = $artists.find('h2')
        $title1.empty()
        const $title2 = $albums.find('h2')
        $title2.empty()
        const $title3 = $tracks.find('h2')
        $title3.empty()
        const $title4 = $preview.find('h2')
        $title4.empty()
        $preview.hide()
        $source =$(`<source src="#" type="audio/mpeg">`)
    
})

function listArtist(artists) {
    $artists.show()

    const $ul = $artists.find('ul')

    var $h2 = $artists.find('h2')

    // $h2.text('Artists')

    $ul.empty()

artists.forEach(artist => {
        const $a = $(`<a href="#">${artist.name}</a>`)

        $a.click(() => {
            $h2.empty() 

            $h2 = $(`<h2>${artist.name}</h2>`)

            $h2.appendTo($artists)

            $ul.empty()
            
            const id = artist.id

            logic.searchAlbums (id)
                .then(albums => {
                    listAlbums(albums)
                })
                .catch(console.error)
            })

            // TODO search albums by artist id

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)
    })
}

function listAlbums(albums){

    $albums.show()

    const $ul = $albums.find('ul')

    var $h2 = $albums.find('h2')

    $ul.empty()

    albums.forEach(album => {

        const $a = $(`<a href="#">${album.name}</a>`)

        $a.click(() => {
      
            $h2.empty() 

            $h2 = $(`<h2>${album.name}</h2>`)

            $h2.appendTo($albums)

            $ul.empty()
            
            const albumId = album.id

            logic.searchTracks (albumId)
                .then(tracks => {
                    listTracks(tracks)
                })
                .catch(console.error)

                })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)
    })
}

function listTracks(tracks){
    // console.log(tracks);
    $tracks.show()

    const $ul = $tracks.find('ul')

    var $h2 = $tracks.find('h2')

    $ul.empty()

    tracks.forEach(track => {
        const $a = $(`<a href="#">${track.name}</a>`)
        
        $a.click(() => { 
            $h2.empty() 

            $h2 = $(`<h2>${track.name}</h2>`)

            $h2.appendTo($tracks)

            $ul.empty()
            const trackUrl = track.preview_url
            playTrack(trackUrl);
        })        

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)
    })
}

function playTrack (trackUrl){
    $preview.show()
    var $audio = $preview.find('audio')
    $audio.empty()
    // var $source =(`<source src="${trackUrl}" type="audio/mpeg">`)
    $audio.attr('src',trackUrl)
    $audio.append($source)
    
}