const $artists = $('.artists')
$artists.hide()

const $albums = $('.albums')
$albums.hide()

const $tracks = $('.tracks')
$tracks.hide()

const $track_panel = $('.track-panel')
$track_panel.hide()

const $media_player = $('.media_player')

let image;

const view = {
    listArtist(artists) {
        $artists.show()
        $albums.hide()
        $tracks.hide()
        $track_panel.hide()
    
        const $ul = $artists.find('ul')
    
        $ul.empty()
    
        artists.forEach(artist => {
            const $a = $(`<a href="#" class="list-group-item list-group-item-action">${artist.name}</a>`)
    
            $a.click((event) => {
                image=artist.images[0].url;
                $tracks.hide()
                $track_panel.hide()
                
                event.preventDefault()
    
                logic.searchAlbums(artist.id)
                    .then(albums => {
                        this.listAlbums(albums.items, artist.name);
                    })
                    .catch(console.error)
            })
    
            const $li = $('<li>')
    
            $li.append($a)
    
            $ul.append($li)
        })
    },
    
    listAlbums(albums, name) {
        $albums.show()

        const $h3 = $albums.find('h3')
        $h3.text(name)
    
        const $ul = $albums.find('ul')
    
        $ul.empty()
    
        albums.forEach(album => {
            const $a = $(`<a href="#" class="list-group-item list-group-item-action">${album.name}</a>`)
    
            $a.click((event) => {
                $track_panel.hide()

                event.preventDefault()
    
                logic.searchSongs(album.id)
                    .then(songs => {
                        this.listSongs(songs.items, album.name)
                    })
                    .catch(console.error)
            })
    
            const $li = $('<li>')
    
            $li.append($a)
    
            $ul.append($li)
        })
    },
    
    listSongs(songs, name) {
        $tracks.show()

        const $h4 = $tracks.find('h4')
        $h4.text(name)
    
        const $ul = $tracks.find('ul')
    
        $ul.empty()
    
        songs.forEach(song => {
            const $a = $(`<a href="#" class="list-group-item list-group-item-action">${song.name}</a>`)
    
            $a.click((event) => {
 
                event.preventDefault()
                this.PlaySong(song)
    
            })
    
            const $li = $('<li>')
    
            $li.append($a)
    
            $ul.append($li)
        })
    },
    PlaySong(song) {
        $track_panel.show()
       
        const $h5 = $track_panel.find('h5')
        $h5.text(song.name)

        const $img= $track_panel.find('img')
        $img.attr('src', ''+image )
    
        $media_player.attr('src', '' + song.preview_url + '')
    }

}