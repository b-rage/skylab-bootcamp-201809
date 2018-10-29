function listArtist(artists) {
    
    $artists.show()
    $imgArtist.hide()
    $albums.hide()
    $imgAlbum.hide()
    $songs.hide()

    const $ul = $artists.find('ul')
    
    $ul.empty()

    artists.forEach(artist => {
        const $a = $(`<a href="#" class="list-group-item list-group-item-action list-group-item-light">${artist.name}</a>`)
        $a.click(() => {
            const $artistPicUrl = artist.images[0].url
            const $artistName = artist.name
            logic.searchAlbums(artist.id)
            .then(albums => {
                showArtistPic($artistPicUrl, $artistName)
                listAlbums(albums)
            })
            .catch(console.error)

        })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)
        
    })
}

function showArtistPic (artistPicUrl, artistName) {
    
    const $artistPic = $(`<img src="${artistPicUrl}" alt="artist album" height="200" width="200">`)
    const $artistNameHeader = $(`<h1>${artistName}</h1>`)
    
    $imgArtist.empty()
    
    $imgArtist.append($artistPic)
    $imgArtist.append($artistNameHeader)
}

function listAlbums(albums) {
    $artists.show()
    $imgArtist.show()
    $albums.show()
    $imgAlbum.hide()
    $songs.hide()
   
    const $ul = $albums.find('ul')

    $ul.empty()
   
    albums.forEach(album => {
        const $a = $(`<a href="#" class="list-group-item list-group-item-action list-group-item-light">${album.name}</a>`) 
        let albumId = album.id
        $a.click(() => {
            const $albumPicUrl = album.images[0].url
            let $albumName = album.name
            logic.searchSongs(albumId)
            .then(songs => {
                listSongs(songs)
                showAlbumPic($albumPicUrl, $albumName)
            })
            .catch(console.error)
        })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)

    })
    
}

function showAlbumPic (albumPicUrl, albumName) {
    
    const $albumPic = $(`<img src="${albumPicUrl}" alt="artist album" height="200" width="200">`)
    const $artistNameHeader = $(`<h1>${albumName}</h1>`)
    
    $imgAlbum.empty()

    $imgAlbum.append($albumPic)
    $imgAlbum.append($artistNameHeader)
    
}

function listSongs(songs) {
    
    $artists.show()
    $imgArtist.show()
    $albums.show()
    $imgAlbum.show()
    $songs.show()
    
    const $ul = $songs.find('ul')

    $ul.empty()

    songs.forEach(song => {
        const $a = $(`<a href="#" class="list-group-item list-group-item-action list-group-item-light">${song.name}</a>`) 
        
        $a.click(() => {
            $url = song.preview_url
            playSong($url)
        })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)
    })
}

function playSong($url) {
    $artists.show()
    $imgArtist.show()
    $albums.show()
    $imgAlbum.show()
    $songs.show()

    $player.show()
    const $audio = $player.find('audio')

    $url ? $audio.attr('src', '' + $url + '') : alert('Only for premium users')
}