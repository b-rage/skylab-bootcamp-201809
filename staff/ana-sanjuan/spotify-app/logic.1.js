var token = 'BQAAs9rg8YQWSquddczmXZnlXOLGVJ7989rllCDXcLLnZVKvEBMqJtqKdDXHrUMjfDhRubwvUQYVvfrufAs8uc8PYbaZvuGrk9Z6mDxdCD1qaRd87iMEM-f5rkBMx7oGVsqVShe_b4DSlTDJ'

 
const logic = {
    searchArtists(query) {

        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)

                resolve(res.artists.items, query)
            })

            xhr.addEventListener('error', function () {
                reject() // TODO
            })

            xhr.open('get', 'https://api.spotify.com/v1/search?type=artist&query=' + query)

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
 
            xhr.setRequestHeader('authorization', 'Bearer ' + token)
 
            xhr.send()
       
        })

    },

    searchTracks(id) {

        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()
 
            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)
                console.log(res)
                resolve(res.items)
            })
 
            xhr.addEventListener('error', function () {
                reject() // TODO
            })
 
            xhr.open('get', 'https://api.spotify.com/v1/albums/' + id + '/tracks')
 
            xhr.setRequestHeader('authorization', 'Bearer ' + token)
 
            xhr.send()
       
        })

    },


    searchOneTrack(id) {

        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()
 
            xhr.addEventListener('load', function () {
                var res = JSON.parse(xhr.responseText)
                console.log(res)
                resolve(res.preview_url)
            })
 
            xhr.addEventListener('error', function () {
                reject() // TODO
            })
 
            xhr.open('get', 'https://api.spotify.com/v1/tracks/' + id)
 
            xhr.setRequestHeader('authorization', 'Bearer ' + token)
 
            xhr.send()
       
        })

    }
}