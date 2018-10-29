var token = 'BQAI0yesPNDJUyPD9rM2eFubsLvVp8Dcx_VWtTcnaJTzQ4WAIXHGw50Wsm-3HljOvQmj0GEXNI38auyAcnhYK_TX5hatGEEEMc9FwgZHEkJFRuf8R6AstnGvnnNjI9m8RKv3n5BX-CFXurs-'

 
const logic = {

    call(endpoint){
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)
                resolve(res)
            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })

            xhr.open('get', endpoint)

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    searchArtists(query) {
        if(typeof query !== 'string') throw TypeError(query + ' is not a string')
        if(query.trim().length === 0) throw TypeError(query + ' is blank or empty string')


        return logic.call('https://api.spotify.com/v1/search?type=artist&query=' + query)
    },

    searchAlbums(id) {
        if(typeof id !== 'string') throw TypeError(id + ' is not a string')
        if(id.trim().length === 0) throw TypeError(id + ' is blank or empty string')

        return logic.call('https://api.spotify.com/v1/artists/' + id + '/albums')
    },

    searchTracks(id) {
        if(typeof id !== 'string') throw TypeError(id + ' is not a string')
        if(id.trim().length === 0) throw TypeError(id + ' is blank or empty string')

        return logic.call('https://api.spotify.com/v1/albums/' + id + '/tracks')
    },

    searchOneTrack(id) {
        return logic.call('https://api.spotify.com/v1/tracks/' + id)
    }
}