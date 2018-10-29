const logic = {
  token: "BQBPkrtwK0HmSrCu-RCK2E653BKdbqSjbL6xUVVPdNxVWaTwRXlrgTw0xEyUPxDE20vNP92FFWm_9Mc3mDhoZcELonqTjmKRYSkZmLMxaH1qtPbWctFX4WUGBk-ksDp_rm8ueslen0k3sYPVX7RDQmCtJhr3n_EV_g",

  call(path) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest()

      xhr.addEventListener("load", function () {
          var response = JSON.parse(xhr.responseText)

          if(response.error) return reject(new Error(response.error.message))

          resolve(response)
      })

      xhr.addEventListener("error", function () {
          reject() // TODO
      })

      xhr.open("GET", path)

      xhr.setRequestHeader("authorization", "Bearer " + this.token)

      xhr.send()
    })
  },

  searchArtists(name) {
    if(!name || name.length === 0) throw TypeError(`${name} is empty or blank`)
    if(typeof name !== "string") throw Error(`${name} is invalid value`)

    return this.call("https://api.spotify.com/v1/search?type=artist&query=" + name)
  },

  listAlbums(albumId) {
    if(!albumId || albumId.length === 0) throw TypeError(`${albumId} is empty or blank`)
    if(typeof albumId !== "string") throw Error(`${albumId} is invalid value`)

    return this.call("https://api.spotify.com/v1/artists/" + albumId + "/albums")
  },

  listTracks(trackId) {
    if(!trackId || trackId.length === 0) throw TypeError(`${trackId} is empty or blank`)
    if(typeof trackId !== "string") throw Error(`${trackId} is invalid value`)

    return this.call("https://api.spotify.com/v1/albums/" + trackId + "/tracks")
  }
}