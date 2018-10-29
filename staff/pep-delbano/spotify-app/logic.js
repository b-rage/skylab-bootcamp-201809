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

            var token = 'BQDC-hqIyF8ZXfBBgoHHoBd8Nnh6AmU9jlj2hzv0GbYozZp3ElRVJrDauE_LKgGE32N80cZ_kyB-t--d3PwQQODO--3EPpoyYuaL0ffZUs_MH5XTkmxuKE4xcS3yL8p5nsdoHocRQid6ok8'

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    listAlbums(id) {
        // TODO
    }
}