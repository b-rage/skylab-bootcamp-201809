describe('logic', () => {
    describe('search artists', () => {
        it('should succeed on matching query', () => {
            var query = 'jackson'

            return logic.searchArtists(query)
                .then(artists => {
                    expect(artists).toBeDefined()

                    expect(artists.length).toBeGreaterThan(0)
                })
        })

        it('should fail on undefinded query', () =>{
            var query = 1223
            

        })
    })

    describe('list albums', () => {
        it('should succeed on matching query', () => {
            var id = '6tbjWDEIzxoDsBA1FuhfPW' // madonna

            return logic.listAlbums(id)
                .then(albums => {
                    expect(albums).toBeDefined()

                    expect(albums.length).toBeGreaterThan(0)
                })
        })
    })

    describe('list tracks', () => {
        it('should succeed on matching query', () => {
            var id_album = '6aYbP8x2bbGRP8Zd0XH4CK' // estopa

            return logic.listSongs(id_album)
                .then(track => {
                    expect(track).toBeDefined()

                    expect(track.length).toBeGreaterThan(0)
                })
        })
    })

    // describe('play track', () => {
    //     it('should succeed on matching query', () => {
    //         var id_song = '492HojxOhsDpX0CoqRT6Nb' // estopa, Por la Raja de Tu Falda

    //         return logic.listSongs(id_song)
    //             .then(track => {
    //                 expect(track).toBeDefined()

    //                 expect(track.length).toBeGreaterThan(0)
    //             })
    //     })
    // })
})