const logic = {

    call(path) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)

                resolve(res)
            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })

            xhr.open('get', path)

            var token = 'BQCUIIMCB-rVcVKZgmpeRddkbpaCNhLJtUJ4FY2I7VTut2-DVazDpDnSrTt_u0J00uQTYJN6fFifv0T8XLXhnBYm6Ik8ozIMP4cAGjih4inv1Tin3ImEbKNogEmj1ABf2JE5SzH6yaZKyek'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    searchArtists(query) {
        if (typeof query !== 'string') throw TypeError(`${query} is not a string`)
        if(!query.trim().length) throw Error(`query is empty or blank`)
        return this.call('https://api.spotify.com/v1/search?type=artist&query=' + query)
    },

    listAlbums(id) {
        if (typeof id !== 'string') throw TypeError(`${id} is not a string`)
        if(!id.trim().length) throw Error(`query is empty or blank`)
        return this.call('https://api.spotify.com/v1/artists/' + id + '/albums')
    },

    listTracks(id) {
        if (typeof id !== 'string') throw TypeError(`${id} is not a string`)
        if(!id.trim().length) throw Error(`query is empty or blank`)
        return this.call('https://api.spotify.com/v1/albums/' + id + '/tracks')

    },

    listTrackInfo(id) {
        if (typeof id !== 'string') throw TypeError(`${id} is not a string`)
        if(!id.trim().length) throw Error(`query is empty or blank`)
        return this.call('https://api.spotify.com/v1/tracks/' + id)
    },

    feelingLucky(id) {
        if (typeof id !== 'string') throw TypeError(`${id} is not a string`)
        if(!id.trim().length) throw Error(`query is empty or blank`)
        return this.call('https://api.spotify.com/v1/artists/' + id + '/related-artists')
    }
}

