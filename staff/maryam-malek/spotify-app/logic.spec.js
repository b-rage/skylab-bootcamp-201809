describe('logic', () => {
    describe('search artists', () => {
        it('should succeed on matching query', () => {
            var query = 'jackson'

            return logic.searchArtists(query)
                .then(artists => {
                    expect(artists.artists.items).toBeDefined()

                    expect(artists.artists.items.length).toBeGreaterThan(0)
                })
        })
        it('should fail on undefined query', () => {
            var query = undefined

            expect(() => {
                logic.searchArtists(query)

            }).toThrowError(TypeError, query + ' is not a valid query')
        })
        it('should fail on null query', () => {
            var query = null

            expect(() => {
                logic.searchArtists(query)

            }).toThrowError(TypeError, query + ' is not a valid query')
        })
        it('should fail on blank query', () => {
            var query = '   '

            expect(() => {
                logic.searchArtists(query)

            }).toThrowError(TypeError, query + ' is not a valid query')
        })
        it('should fail on empty query', () => {
            var query = ''

            expect(() => {
                logic.searchArtists(query)

            }).toThrowError(TypeError, query + ' is not a valid query')
        })
        it('should fail on non-string query (number)', () => {
            var query = 1

            expect(() => {
                logic.searchArtists(query)

            }).toThrowError(TypeError, query + ' is not a valid query')
        })
        it('should fail on non-string query (boolean)', () => {
            var query = true

            expect(() => {
                logic.searchArtists(query)

            }).toThrowError(TypeError, query + ' is not a valid query')
        })
        it('should fail on non-string query (object)', () => {
            var query = {}

            expect(() => {
                logic.searchArtists(query)

            }).toThrowError(TypeError, query + ' is not a valid query')
        })
        it('should fail on non-string query (array)', () => {
            var query = []

            expect(() => {
                logic.searchArtists(query)

            }).toThrowError(TypeError, query + ' is not a valid query')
        })
        // it('should fail on unmatching query', function () {
        //     var query = 'lalalalala'

        //     return logic.searchArtists(query)
        //         .catch(artists => {
        //             expect(artist).toBeDefined();

        //             expect(artists.total).toEqual(10);
        //         });
        // });
    })

    describe('list albums', () => {
        it('should succeed on matching id', () => {
            var id = '6tbjWDEIzxoDsBA1FuhfPW' // madonna

            return logic.listAlbums(id)
                .then(albums => {
                    expect(albums.items).toBeDefined()

                    expect(albums.items.length).toBeGreaterThan(0)
                })
        })
        it('should fail on undefined id', () => {
            var id = undefined

            expect(() => {
                logic.listAlbums(id)

            }).toThrowError(TypeError, id + ' is not a valid id')
        })
        it('should fail on null id', () => {
            var id = null

            expect(() => {
                logic.listAlbums(id)

            }).toThrowError(TypeError, id + ' is not a valid id')
        })
        it('should fail on blank id', () => {
            var id = '   '

            expect(() => {
                logic.listAlbums(id)

            }).toThrowError(TypeError, id + ' is not a valid id')
        })
        it('should fail on empty id', () => {
            var id = ''

            expect(() => {
                logic.listAlbums(id)

            }).toThrowError(TypeError, id + ' is not a valid id')
        })
        it('should fail on non-string id (number)', () => {
            var id = 1

            expect(() => {
                logic.listAlbums(id)

            }).toThrowError(TypeError, id + ' is not a valid id')
        })
        it('should fail on non-string id (boolean)', () => {
            var id = true

            expect(() => {
                logic.listAlbums(id)

            }).toThrowError(TypeError, id + ' is not a valid id')
        })
        it('should fail on non-string id (object)', () => {
            var id = {}

            expect(() => {
                logic.listAlbums(id)

            }).toThrowError(TypeError, id + ' is not a valid id')
        })
        it('should fail on non-string id (array)', () => {
            var id = []

            expect(() => {
                logic.listAlbums(id)

            }).toThrowError(TypeError, id + ' is not a valid id')
        })
    })

    describe('list songs', () => {
        it('should succeed on matching query', () => {
            var id = '5GafzQvK7U5aYFnGopnR27' //Cat Empire Album

            return logic.listSongs(id)
                .then(songs => {
                    expect(songs.items).toBeDefined()

                    expect(songs.items.length).toBeGreaterThan(0)
                })
        })
        it('should fail on undefined id', () => {
            var id = undefined

            expect(() => {
                logic.listSongs(id)

            }).toThrowError(TypeError, id + ' is not a valid id')
        })
        it('should fail on null id', () => {
            var id = null

            expect(() => {
                logic.listSongs(id)

            }).toThrowError(TypeError, id + ' is not a valid id')
        })
        it('should fail on blank id', () => {
            var id = '   '

            expect(() => {
                logic.listSongs(id)

            }).toThrowError(TypeError, id + ' is not a valid id')
        })
        it('should fail on empty id', () => {
            var id = ''

            expect(() => {
                logic.listSongs(id)

            }).toThrowError(TypeError, id + ' is not a valid id')
        })
        it('should fail on non-string id (number)', () => {
            var id = 1

            expect(() => {
                logic.listSongs(id)

            }).toThrowError(TypeError, id + ' is not a valid id')
        })
        it('should fail on non-string id (boolean)', () => {
            var id = true

            expect(() => {
                logic.listSongs(id)

            }).toThrowError(TypeError, id + ' is not a valid id')
        })
        it('should fail on non-string id (object)', () => {
            var id = {}

            expect(() => {
                logic.listSongs(id)

            }).toThrowError(TypeError, id + ' is not a valid id')
        })
        it('should fail on non-string id (array)', () => {
            var id = []

            expect(() => {
                logic.listSongs(id)

            }).toThrowError(TypeError, id + ' is not a valid id')
        })
    })


})