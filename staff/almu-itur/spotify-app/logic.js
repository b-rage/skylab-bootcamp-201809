const logic = {
    searchArtists(query) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)
                resolve(res.artists.items)
            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/search?type=artist&query=' + query)

            var token = 'BQCP0SHqNK4CoULA-NYN47AsQV8TLS20_n8MWH_tDPUX4GBTMcrJHMwXbozb50f0ElkbJlMPWyLN0GArTbeNuUIAOCuHP9oVBoombK31tgsvXZappTllEGDG8vt5NKWPcW8BBoGhjUJO'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    searchAlbums(id) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)
                resolve(res.items)
            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/artists/' + id + '/albums')

            var token = 'BQCP0SHqNK4CoULA-NYN47AsQV8TLS20_n8MWH_tDPUX4GBTMcrJHMwXbozb50f0ElkbJlMPWyLN0GArTbeNuUIAOCuHP9oVBoombK31tgsvXZappTllEGDG8vt5NKWPcW8BBoGhjUJO'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    searchSongs(albumId) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)
                resolve(res.items)
            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })
        
            xhr.open('get', 'https://api.spotify.com/v1/albums/' + albumId + '/tracks')

            var token = 'BQCP0SHqNK4CoULA-NYN47AsQV8TLS20_n8MWH_tDPUX4GBTMcrJHMwXbozb50f0ElkbJlMPWyLN0GArTbeNuUIAOCuHP9oVBoombK31tgsvXZappTllEGDG8vt5NKWPcW8BBoGhjUJO'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    findSong(idTracks) {
        
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)
                resolve(res.items)
            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })
        
            xhr.open('get', 'https://api.spotify.com/v1/albums/' + idTracks + '/tracks')

            var token = 'BQCP0SHqNK4CoULA-NYN47AsQV8TLS20_n8MWH_tDPUX4GBTMcrJHMwXbozb50f0ElkbJlMPWyLN0GArTbeNuUIAOCuHP9oVBoombK31tgsvXZappTllEGDG8vt5NKWPcW8BBoGhjUJO'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    }
}