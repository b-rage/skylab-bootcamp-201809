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

            var token = 'BQARKGkt2wLZmoe4wapMKD8npqxufpRZofOKLDV2m0AMdx5ecyIbrFHZfDAq3miFu1c8YuuYLLPTuf6tTV-VQeXDy8Sbg7FGR_UvcnQ4NgIEGvfk3V1gKMoIVO44DHImyPyKBj79JWRTV-Ap'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    searchAlbums(id) {
        // TODO
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()
            
            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)

                resolve(res.items)
            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/artists/'+id+'/albums')

            var token = 'BQARKGkt2wLZmoe4wapMKD8npqxufpRZofOKLDV2m0AMdx5ecyIbrFHZfDAq3miFu1c8YuuYLLPTuf6tTV-VQeXDy8Sbg7FGR_UvcnQ4NgIEGvfk3V1gKMoIVO44DHImyPyKBj79JWRTV-Ap'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    searchTracks(albumId) {
        // TODO
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()
            
            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)

                resolve(res.items)
            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/albums/'+albumId+'/tracks')

            var token = 'BQARKGkt2wLZmoe4wapMKD8npqxufpRZofOKLDV2m0AMdx5ecyIbrFHZfDAq3miFu1c8YuuYLLPTuf6tTV-VQeXDy8Sbg7FGR_UvcnQ4NgIEGvfk3V1gKMoIVO44DHImyPyKBj79JWRTV-Ap'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    }
}