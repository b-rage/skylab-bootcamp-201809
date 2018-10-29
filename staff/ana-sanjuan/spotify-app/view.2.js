const $artists = $('.artists')
$artists.hide()

const $albums = $('.albums')
$albums.hide()

const $tracks = $('.tracks')
$tracks.hide()

const $oneTrack = $('.one-track')
$oneTrack.hide()

var view = {
    
    listArtist(artists) {

        if($oneTrack.css('display') !== 'none') $oneTrack.hide()

        if($tracks.css('display') !== 'none') $tracks.hide()

        if($albums.css('display') !== 'none') $albums.hide()

        const $ul = $artists.find('ul')
        const $title = $artists.find('h2')
        $title.text('Artist: ' + query)

        $ul.empty()


        artists.forEach(artist => {
            let artistName = artist.name
            const $a = $(`<a href="#">${artistName}</a>`)

            $a.click(() => {
                var id = artist.id
                logic.searchAlbums(id)
                    .then(res => {
                        var albums = res.items
                        view.listAlbums(albums,artistName)
                    })
                    .catch(console.error)
            })

            const $li = $('<li>')

            $li.append($a)

            $ul.append($li)
        })
        $artists.show()
    
    },


    listAlbums(albums, artistName){
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
                    .then(res => {
                        var tracks = res.items;
                        view.listTracks(tracks,albumName)
                    })
                    .catch(console.erro)

            })

            const $li = $('<li>')

            $li.append($a)

            $ul.append($li)

        })
        $albums.show();

    },

    listTracks(tracks,albumName){

        if($oneTrack.css('display') !== 'none') $oneTrack.hide()
        if($tracks.css('display') !== 'none') $tracks.hide()


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
                    .then(res => {
                        var oneTrack = res.preview_url
                        view.showOneTrack(oneTrack,trackName)
                    })
                    .catch(console.error)

            })

            const $li = $('<li>')

            $li.append($a)

            $ul.append($li)

        })
        $tracks.show();


    },

    showOneTrack(oneTrack,trackName){

        
        const $title = $oneTrack.find('h5')
        $title.text(trackName)

        const $audio = $oneTrack.find('audio')
        $audio.attr('src',oneTrack)

        $oneTrack.show()

    }

}