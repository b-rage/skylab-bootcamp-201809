
const token = 'BQDdmr6x0m7xMQdkgz1okYHGMM0DJAm4bhHf-PetR-tZfCG0SiJKte8b17IXZym2lDZ3tLeIc5PRnBxOg5HSfdgnm1EIdIdo3rpbsDkj9VGCKICwvzakmbFKGo1z3JyqNAmQzcG-XXqPZw'

const logic = {

    
    searchArtists(query) {
        // IF QUERY !== STRING
        // IF QUERY.TRIM () 

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()

            xhr.addEventListener('load', () => {
                const res = JSON.parse(xhr.responseText)
                if (res.error) reject (new Error(res.error.message))
                else resolve(res.artists.items)
            })

            xhr.addEventListener('error', () => reject()) // TODO

            xhr.open('get', 'https://api.spotify.com/v1/search?type=artist&query=' + query)

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    listAlbums(id) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()

            xhr.addEventListener('load', () => {
                const res = JSON.parse(xhr.responseText)
                if (res.error) reject (new Error(res.error.message))
                else resolve(res.items)
            })

            xhr.addEventListener('error', () => reject()) // TODO

            xhr.open('get', `https://api.spotify.com/v1/artists/${id}/albums`)

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },

    listSongs(album_id) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()

            xhr.addEventListener('load', () => {
                const res = JSON.parse(xhr.responseText)
                if (res.error) reject (new Error(res.error.message))
                else resolve(res.items)
            })

            xhr.addEventListener('error', () => reject()) // TODO

            xhr.open('get', 'https://api.spotify.com/v1/albums/' + album_id + '/tracks')

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },
    
    playSongs(song_id) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()

            xhr.addEventListener('load', () => {
                const res = JSON.parse(xhr.responseText)
                if (res.error) reject (new Error(res.error.message))
                else resolve(res)
            })

            xhr.addEventListener('error', () => reject()) // TODO

            xhr.open('get', 'https://api.spotify.com/v1/tracks/' + song_id)

            xhr.setRequestHeader('authorization', 'Bearer ' + token)

            xhr.send()
        })
    },
}