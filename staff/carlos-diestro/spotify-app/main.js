const $searchify = $(".searchify")
const $form = $("form")
let $artists = $(".artists")
let $albums = $(".albums")
let $tracks = $(".tracks")
let $player = $(".player")
let currentArtist
let currentAlbum

$form.submit(event => {
  event.preventDefault()

  const $input = $form.find("input")

  const query = $input.val()

  logic.searchArtists(query)
    .then(response => {
      listArtist(response.artists.items)
    })
    .catch(console.error)
})

function listArtist(artists) {
  if ($artists.length) {
    $albums.remove()
    $artists.remove()
    $tracks.remove()
  }

  $artists = $(`<section class="artists row justify-content-sm-center">
                        <div class="col-sm-12 col-md-8 py-3 text-center">
                          <h2>Artists</h2>
                          <div class="artist-list row"></div>
                        </div>
                      </section>`)
  
  $searchify.append($artists)
  
  const $artistList = $(".artist-list")

  artists.forEach(artist => {
    let id = artist.id
    let image = (artist.images.length ? artist.images[1].url : "https://dummyimage.com/320x320/d6d6d6/000&text=+")
    let name = artist.name
    
    const $artist = $(`<div data-id="${id}" class="artist col-sm-3 py-3 text-center">
                        <img src="${image}" class="img-fluid" alt="Responsive image">
                        <h6>${name}</h6>
                      </div>`)

    $artist.click((event) => {
      const id = $artist.data("id")
      console.log(event)
      currentArtist = $(event.currentTarget).find("h6").text()

      logic.listAlbums(id)
        .then(response => {
          listAlbums(response.items)
        })
        .catch(console.error)
    })

    $artistList.append($artist)
  })
}

function listAlbums(albums) {
  console.log(albums)

  if ($albums.length) $albums.remove()
  
  $artists.hide()

  $albums = $(`<section class="albums row justify-content-sm-center">
                        <div class="col-sm-12 col-md-8 py-3 text-center">
                          <h2>${currentArtist} > Albums</h2>
                          <a class="artists-back" href="#">Back</a>
                          <div class="album-list row"></div>
                        </div>
                      </section>`)
  
  $searchify.append($albums)
  
  const $back = $(".artists-back")

  $back.click(event => {
    event.preventDefault()
    $albums.hide()
    $artists.show()
  })

  const $albumsList = $(".album-list")

  albums.forEach(album => {
    let id = album.id
    let image = (album.images.length ? album.images[1].url : "https://dummyimage.com/320x320/d6d6d6/000&text=+")
    let name = album.name
    
    const $album = $(`<div data-id="${id}" class="album col-sm-3 py-3 text-center">
                        <img src="${image}" class="img-fluid" alt="Responsive image">
                        <h6>${name}</h6>
                      </div>`)

    $album.click(() => {
      const id = $album.data("id")
      currentAlbum = $(event.currentTarget).find("h6").text()

      logic.listTracks(id)
        .then(response => {
          listTracks(response.items)
        })
        .catch(console.error)
    })

    $albumsList.append($album)
  })
}

function listTracks(tracks) {
  console.log(tracks)

  if ($tracks.length) $tracks.remove()
  
  $albums.hide()

  $tracks = $(`<section class="tracks row justify-content-sm-center">
                        <div class="col-sm-12 col-md-8 py-3 text-center">
                          <h2>${currentArtist} > ${currentAlbum} > Tracks</h2>
                          <a class="albums-back" href="#">Back</a>
                          <div class="row">
                          <div class="track-list list-group list-group-flush w-100 text-left"></div>
                          </div>
                        </div>
                      </section>`)
  
  $searchify.append($tracks)

  const $back = $(".albums-back")

  $back.click(event => {
    event.preventDefault()
    $player.remove()
    $tracks.hide()
    $albums.show()
  })

  const $tracksList = $(".track-list")

  tracks.forEach(track => {
    let id = track.id
    let url = (track.preview_url ? track.preview_url : "")
    let number = track.track_number
    let name = track.name
    
    const $track = $(`<a href="#" data-id="${id}" data-preview="${url}" class="list-group-item list-group-item-action">${number}. ${name}</a>`)

    $track.click((event) => {
      event.preventDefault()

      if ($player.length) $player.remove()

      console.log(event)
      const preview = $track.data("preview")

      $player = $(`<audio class="player my-1 w-100" src="${preview}" controls preload autoplay></audio>`)

      $(event.target).after($player)
    })

    $tracksList.append($track)
  })
}