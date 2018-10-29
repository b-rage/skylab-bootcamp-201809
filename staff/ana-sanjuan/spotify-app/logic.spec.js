describe('logic', () => {
    describe('search artists', () => {
        it('should succeed on matching query', () => {
            var query = 'jackson'

            return logic.searchArtists(query)
                .then(res => {
                    var artists = res.artists.items
                    expect(artists).toBeDefined()

                    expect(artists.length).toBeGreaterThan(0)
                })
        })

        it('should fail on undefined query', () => {
            var param = undefined
            expect(function(){logic.searchArtists(param)}).toThrowError(TypeError, param + ' is not a string')

        })

        it('should fail on empty query', () => {
            var param = ''
            expect(function(){logic.searchArtists(param)}).toThrowError(TypeError, param + ' is blank or empty string')

        })

        it('should fail on blank query', () => {
            var param = '       '
            expect(function(){logic.searchArtists(param)}).toThrowError(TypeError, param + ' is blank or empty string')

        })

        it('should fail on non-string query(number)', () => {
            var param = 123
            expect(function(){logic.searchArtists(param)}).toThrowError(TypeError, param + ' is not a string')

        })
        it('should fail on non-string query(object)', () => {
            var param = {}
            expect(function(){logic.searchArtists(param)}).toThrowError(TypeError, param + ' is not a string')

        })
        it('should fail on non-string query(boolean)', () => {
            var param = true
            expect(function(){logic.searchArtists(param)}).toThrowError(TypeError, param + ' is not a string')

        })
        it('should fail on non-string query(array)', () => {
            var param = [123]
            expect(function(){logic.searchArtists(param)}).toThrowError(TypeError, param + ' is not a string')

        })


    })

   true && describe('list albums', () => {
        it('should succeed on matching query', () => {
            var id = '6tbjWDEIzxoDsBA1FuhfPW' // madonna

            return logic.searchAlbums(id)
                .then(res => {
                    var albums = res.items
                    expect(albums).toBeDefined()

                    expect(albums.length).toBeGreaterThan(0)
                })
        })

        it('should fail on undefined id', () => {
            var param = undefined
            expect(function(){logic.searchAlbums(param)}).toThrowError(TypeError, param + ' is not a string')
        
        })

        it('should fail on non-string id(number)', () => {
            var param = 123
            expect(function(){logic.searchAlbums(param)}).toThrowError(TypeError, param + ' is not a string')
        
        })
        it('should fail on non-string id(object)', () => {
            var param = {}
            expect(function(){logic.searchAlbums(param)}).toThrowError(TypeError, param + ' is not a string')
        
        })
        it('should fail on non-string id(boolean)', () => {
            var param = true
            expect(function(){logic.searchAlbums(param)}).toThrowError(TypeError, param + ' is not a string')
        
        })
        it('should fail on non-string id(array)', () => {
            var param = []
            expect(function(){logic.searchAlbums(param)}).toThrowError(TypeError, param + ' is not a string')
        
        })
        it('should fail on blank id', () => {
            var param = '       '
            expect(function(){logic.searchAlbums(param)}).toThrowError(TypeError, param + ' is blank or empty string')
        
        })
        it('should fail on empty id', () => {
            var param = ''
            expect(function(){logic.searchAlbums(param)}).toThrowError(TypeError, param + ' is blank or empty string')
        
        })

    })


    true && describe('list tracks', () => {
        it('should succeed on matching query', () => {
            var id = '07tbMxw9qeVsNIq0l7xBBX' // check to check album

            return logic.searchTracks(id)
                .then(res => {
                    var tracks = res.items;
                    expect(tracks).toBeDefined()

                    expect(tracks.length).toBeGreaterThan(0)
                })
        })

        it('should fail on undefined iq', () => {
            var param = undefined

            expect(function(){logic.searchTracks(param)}).toThrowError(TypeError, param + ' is not a string')

        })

        it('should fail on blank iq', () => {
            var param = ''

            expect(function(){logic.searchTracks(param)}).toThrowError(TypeError, param + ' is blank or empty string')

        })

        it('should fail on undefined iq', () => {
            var param = '       '

            expect(function(){logic.searchTracks(param)}).toThrowError(TypeError, param + ' is blank or empty string')

        })

        it('should fail on non-string iq(number)', () => {
            var param = 123

            expect(function(){logic.searchTracks(param)}).toThrowError(TypeError, param + ' is not a string')

        })

        it('should fail on non-string iq(object)', () => {
            var param = {}

            expect(function(){logic.searchTracks(param)}).toThrowError(TypeError, param + ' is not a string')

        })

        it('should fail on non-string iq(boolean)', () => {
            var param = true

            expect(function(){logic.searchTracks(param)}).toThrowError(TypeError, param + ' is not a string')

        })

        it('should fail on non-string iq(array)', () => {
            var param = []

            expect(function(){logic.searchTracks(param)}).toThrowError(TypeError, param + ' is not a string')

        })

    })


    true && describe('preview one song', () => {
        it('should succeed on matching query', () => {
            var id = '2GfhQgQXNUo1rW9WQRkrvU' // check to check song

            return logic.searchOneTrack(id)
                .then(res => {
                    var oneTrack = res.preview_url
                    expect(oneTrack).toBeDefined()

                    expect(oneTrack.length).toBeGreaterThan(0)
                })
        })
    })
})