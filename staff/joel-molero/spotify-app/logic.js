var token = 'BQC8POiGlCFCG2eQbT8dB3EHYhMSb-D_Ia5UmkWmgstv6qeR-smwFKvhnJEm8zZH_orkn-dEhN8_cSdf0hBFOV2UgZjCai7n73TcVZuO76Skri1tgaOlSSHdMeGhkTIWTsL7Mqnxdata'

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

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    listAlbums(id) {
        return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                const res = JSON.parse(xhr.responseText)

                resolve(res.items)
            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })

            xhr.open('get', `https://api.spotify.com/v1/artists/${id}/albums`)  //'https://api.spotify.com/v1/artists/' + id + '/albums')

            xhr.setRequestHeader('authorization', `Bearer ${this.token}`)

            xhr.send()
        })     
    },

    listTracks(id) {
        var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)

                resolve(res.items)
            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/albums/' + id + '/tracks')

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()     
    }
}