
const spotifyLogic = {

    token: 'BQBWsN1G_QqArpMcAhJY0VNn26DqvxqNSZSVpnXC3iuBD-fNrSk-R2GBVxO9gbnAag47CbH4otJSsU7988d_ESM_hB75WR_fzuE-rX6hN1fF5gMLGODaIvKtpTKC3KBR4UOBmRfSZtwD-JM0UfD7Yuyr1m-UJa-brnW92Uia1HI6VL30xO1nx6jX4vxkwGjODdMP59myucB5dNvmknEb2w',


    /**
     * 
     * @param {*} id The artist's at Spotify
     * 
     * @throws {Error in case of non-string id}
     * @throws {Error in case of empty or blank id}
     * @throws {Error in case of wrong id}
     * 
     */

    getArtistById(id) {

        if(!(typeof id === 'string')) throw TypeError (`${id} is not a a string`)
        if(!(id.length)) throw Error (`${id} is empty or blank`)

        return fetch(`https://api.spotify.com/v1/artists/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + this.token
            },
            // body: JSON.stringify({ name, surname, username, password })
        })
            .then(res => res.json())
            .then((res) => {
                if(res.error) throw Error (res.error.message)
                return res
            })
            
    },

    getArtists(query) {

        if(!(typeof query === 'string')) throw TypeError (`${query} is not a a string`)
        if(!(query.trim().length)) throw Error ('query cannot be empty')
        
        return fetch(`https://api.spotify.com/v1/search?q=${query}&type=artist`, {
            method: 'GET',
            headers: {
               
                'Authorization': 'Bearer ' + this.token
            },
           
        })
            .then(res => res.json())
            .then(res => {

                if (res.error) throw Error(res.error.message)
                else    
                    return res
            })
            .catch(err => {throw Error(err.message)})
    },

    getTrack(id) {
        return fetch(`https://api.spotify.com/v1/tracks/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + this.token
            }
        })
            .then((res) => res.json())
            .then((res) => {
                
                if(res.error) throw Error (res.error.message)
                
                const track = {}
                track.id = res.id
                track.name = res.name
                track.preview_url = res.preview_url ? res.preview_url : require("../assets/audio/default.mp3")
                track.image = res.album.images ? res.album.images[0].url : 'https://i.scdn.co/image/557a6058e3de72bf37ffcd2c12dd5932276df344'
                return track
            })
    },

    getPlaylistsTracks(playlistId) {

        if(!(typeof playlistId === 'string')) throw TypeError (`${playlistId} is not a a string`)
        if(!(playlistId.trim().length)) throw Error (`${playlistId} is empty or blank`)
        
        return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + this.token
            },
            // body: JSON.stringify({ name, surname, username, password })
        })
            .then(res => res.json()).then(res => {if (res.error) throw Error (res.error.message); else return res})
    },

    getAlbumsByArtistId(artistId) {
        return fetch(`https://api.spotify.com/v1/artists/${artistId}/albums`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + this.token
            },
            // body: JSON.stringify({ name, surname, username, password })
        })
            .then(res => res.json())
            .then(res => {
                if(res.error) throw Error (res.error.message)
                return res
            })
    },

    getSongsbyAlbumId(id) {
        return fetch(`https://api.spotify.com/v1/albums/${id}/tracks`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + this.token
            },
        })
            .then((res) => res.json())
            .then(res => {
                if(res.error) throw Error (res.error.message)
                //res.preview_url ? res.preview_url : require("../assets/audio/default.mp3")
                return res

            })
    },

    createPlaylist(name) {
        return fetch(`https://api.spotify.com/v1/me/playlists`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + this.token
            },
            body: JSON.stringify({name: name})
        })
            .then((res) => res.json())
            .then(res => {

                if (res.error) throw(res.error) 
                else
                    return res

            })
    },

    //id, name, preview_url, picture

    getTrack(id) {
        return fetch(`https://api.spotify.com/v1/tracks/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + this.token
            }
        })
            .then((res) => res.json())
            .then((res) => {
                if(res.error) throw Error (res.error.message)
                
                const track = {}
                track.id = res.id
                track.name = res.name
                track.preview_url = res.preview_url
                track.image = res.album.images ? res.album.images[0].url : 'https://i.scdn.co/image/557a6058e3de72bf37ffcd2c12dd5932276df344'
                return track
            })
    }
}

 export default spotifyLogic

// module.exports = spotifyLogic
