describe('logic', () => {
    describe('search artists', () => {
        it('should succeed on matching query (artists)', () => {
            var query = 'jackson'

            return logic.searchArtists(query)
                .then(artists => {
                    expect(artists).toBeDefined()

                    expect(artists.length).toBeGreaterThan(0)
                })
        })

        it('should fail on invalid query (undefined)', () => {

            var query = undefined

            expect(() => {

                logic.searchArtists(query)

            }).toThrowError(TypeError, query + ' is not a string')

        })

        it('should fail on invalid query (number)', () => {

            var query = 12

            expect(() => {

                logic.searchArtists(query)

            }).toThrowError(TypeError, query + ' is not a string')

        })



        it('should fail on invalid query (boolean)', () => {

            var query = true

            expect(() => {

                logic.searchArtists(query)

            }).toThrowError(TypeError, query + ' is not a string')

        })



        it('should fail on invalid query (array)', () => {

            var query = [1,2]

            expect(() => {

                logic.searchArtists(query)

            }).toThrowError(TypeError, query + ' is not a string')

        })



        it('should fail on invalid query (object)', () => {

            var query = {ob:'ject'}

            expect(() => {

                logic.searchArtists(query)

            }).toThrowError(TypeError, query + ' is not a string')

        })



        it('should fail on invalid query (null)', () => {

            var query = null

            expect(() => {

                logic.searchArtists(query)

            }).toThrowError(TypeError, query + ' is not a string')

        })

        it('should fail on non-string search', () => {

            query = [12]

            expect(() => { logic.searchArtists(query) }).toThrowError(query + ' is not a string')

        })

        it('should fail on empty or blank search', () => {

            query = ' '

            expect(() => { logic.searchArtists(query) }).toThrowError(query + 'is empty or blank')

        })

    })

    describe('search albums', () => {
        it('should succeed on matching query (albums)', () => {
            var id = '6tbjWDEIzxoDsBA1FuhfPW' // madonna

            return logic.searchAlbums(id)
                .then(albums => {
                    expect(albums).toBeDefined()

                    expect(albums.length).toBeGreaterThan(0)
                })
        })

        it('should fail on invalid query (undefined)', () => {

            var id = undefined

            expect(() => {

                logic.searchAlbums(id)

            }).toThrowError(TypeError, id + ' is not a string')

        })

        it('should fail on invalid query (number)', () => {

            var id = 12

            expect(() => {

                logic.searchAlbums(id)

            }).toThrowError(TypeError, id + ' is not a string')

        })



        it('should fail on invalid query (boolean)', () => {

            var id = true

            expect(() => {

                logic.searchAlbums(id)

            }).toThrowError(TypeError, id + ' is not a string')

        })



        it('should fail on invalid query (array)', () => {

            var id = [1,2]

            expect(() => {

                logic.searchAlbums(id)

            }).toThrowError(TypeError, id + ' is not a string')

        })



        it('should fail on invalid query (object)', () => {

            var id = {ob:'ject'}

            expect(() => {

                logic.searchAlbums(id)

            }).toThrowError(TypeError, id + ' is not a string')

        })



        it('should fail on invalid query (null)', () => {

            var id = null

            expect(() => {

                logic.searchAlbums(id)

            }).toThrowError(TypeError, id + ' is not a string')

        })

        it('should fail on non-string search', () => {

            id = [12]

            expect(() => { logic.searchAlbums(id) }).toThrowError(id + ' is not a string')

        })

        it('should fail on empty or blank search', () => {

            id = ' '

            expect(() => { logic.searchAlbums(id) }).toThrowError(id + 'is empty or blank')

        })
    })

    describe('search songs', () => {
        it('should succed on matching query (songs)', () => {
            var albumId = '3qq44o8Qqvz5JQ7b5AevLT' // trivium, The sin and the sentence

            return logic.searchSongs(albumId)
                .then(songs => {
                    expect(songs).toBeDefined()

                    expect(songs.length).toBeGreaterThan(0)
                })
        })

        it('should fail on invalid query (undefined)', () => {

            var albumId = undefined

            expect(() => {

                logic.searchSongs(albumId)

            }).toThrowError(TypeError, albumId + ' is not a string')

        })

        it('should fail on invalid query (number)', () => {

            var albumId = 12

            expect(() => {

                logic.searchSongs(albumId)

            }).toThrowError(TypeError, albumId + ' is not a string')

        })



        it('should fail on invalid query (boolean)', () => {

            var albumId = true

            expect(() => {

                logic.searchSongs(albumId)

            }).toThrowError(TypeError, albumId + ' is not a string')

        })



        it('should fail on invalid query (array)', () => {

            var albumId = [1,2]

            expect(() => {

                logic.searchSongs(albumId)

            }).toThrowError(TypeError, albumId + ' is not a string')

        })



        it('should fail on invalid query (object)', () => {

            var albumId = {ob:'ject'}

            expect(() => {

                logic.searchSongs(albumId)

            }).toThrowError(TypeError, albumId + ' is not a string')

        })



        it('should fail on invalid query (null)', () => {

            var albumId = null

            expect(() => {

                logic.searchSongs(albumId)

            }).toThrowError(TypeError, albumId + ' is not a string')

        })

        it('should fail on non-string search', () => {

            albumId = [12]

            expect(() => { logic.searchSongs(albumId) }).toThrowError(albumId + ' is not a string')

        })

        it('should fail on empty or blank search', () => {

            albumId = ' '

            expect(() => { logic.searchSongs(albumId) }).toThrowError(albumId + 'is empty or blank')

        })
    })
})