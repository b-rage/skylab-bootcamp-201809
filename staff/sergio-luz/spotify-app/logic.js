const logic = {
    token:'',
    call(path) {
        if( typeof path!=='string') throw TypeError (path+ ' is not a string')
        if( !path.trim().length) throw Error(path+ ' is not valid')

        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)

                if(res.error) reject( new Error(res.error.message))
                else resolve(res)
            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })

            xhr.open('get', path)

            xhr.setRequestHeader('authorization', 'Bearer ' + this.token)

            xhr.send()
        })
    },
    searchArtists(query) {
        if( typeof query!=='string') throw TypeError (query+ ' is not a string')
        if( !query.trim().length) throw Error(query+ ' is not valid')

        return this.call('https://api.spotify.com/v1/search?type=artist&query=' + query)
    },

    searchAlbums(id) {
        if( typeof id!=='string') throw TypeError (id+ ' is not a string')
        if( !id.trim().length) throw Error(id+ ' is not valid')

        return this.call('https://api.spotify.com/v1/artists/' + id + '/albums')
    },

    searchSongs(id) {
        if( typeof id!=='string') throw TypeError (id+ ' is not a string')
        if( !id.trim().length) throw Error(id+ ' is not valid')

        return this.call('https://api.spotify.com/v1/albums/' + id + '/tracks')
    }
}