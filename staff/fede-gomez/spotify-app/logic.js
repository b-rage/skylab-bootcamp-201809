const logic = {

    // var token: 'BQCdxDt99_KeAyV1t0rUhU1EpErQem8UzlAKOmlsA5a5QQGh9fOkd8fyDoV1uPU0coYB-gGE7b_5b7ADiis_TidsPDMyegeGLEEVmmJtIoEsKHOY0ReoLuyrLnq_hTZ9s_n9ntCEvNBjY5baiZE9CgMJZPa2ntKCX97V3W6bWjqkz_bUNDk6QNpc4SHzDV1-4wxrD6ThiW3RNNk_',

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

            token = 'BQCdxDt99_KeAyV1t0rUhU1EpErQem8UzlAKOmlsA5a5QQGh9fOkd8fyDoV1uPU0coYB-gGE7b_5b7ADiis_TidsPDMyegeGLEEVmmJtIoEsKHOY0ReoLuyrLnq_hTZ9s_n9ntCEvNBjY5baiZE9CgMJZPa2ntKCX97V3W6bWjqkz_bUNDk6QNpc4SHzDV1-4wxrD6ThiW3RNNk_'

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

            var token = 'BQCdxDt99_KeAyV1t0rUhU1EpErQem8UzlAKOmlsA5a5QQGh9fOkd8fyDoV1uPU0coYB-gGE7b_5b7ADiis_TidsPDMyegeGLEEVmmJtIoEsKHOY0ReoLuyrLnq_hTZ9s_n9ntCEvNBjY5baiZE9CgMJZPa2ntKCX97V3W6bWjqkz_bUNDk6QNpc4SHzDV1-4wxrD6ThiW3RNNk_'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    searchSongs(id){
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', () => {
                const res = JSON.parse(xhr.responseText)
                console.log(res)
                resolve(res)
            })

            xhr.addEventListener('error', () => {
                reject() // TODO
            })

            xhr.open('get', `https://api.spotify.com/v1/albums/${id}/tracks`)

            var token = 'BQCdxDt99_KeAyV1t0rUhU1EpErQem8UzlAKOmlsA5a5QQGh9fOkd8fyDoV1uPU0coYB-gGE7b_5b7ADiis_TidsPDMyegeGLEEVmmJtIoEsKHOY0ReoLuyrLnq_hTZ9s_n9ntCEvNBjY5baiZE9CgMJZPa2ntKCX97V3W6bWjqkz_bUNDk6QNpc4SHzDV1-4wxrD6ThiW3RNNk_'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },
}
