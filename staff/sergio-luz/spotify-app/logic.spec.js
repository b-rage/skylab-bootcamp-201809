describe('logic', () => {

    beforeEach(() => {
        logic.token = 'BQAR-b7FRAXj3UWwyQgjY-RmG3Z_Ts1znm7b6e9s0LYay8pgZhSTbm-75TtCCLbViOe0WlxAgfzBWAnZaVLDD5AgewesIonvrYXMxgTQxuSiZ3QvOC9vvRHHxvqQNTJB8rG125Gnhn0'
    })

    describe('search artists', () => {
        it('should succeed on matching query', () => {
            var query = 'jackson'

            return logic.searchArtists(query)
                .then(arr => {
                    expect(arr).toBeDefined()

                    expect(arr.artists.items.length).toBeGreaterThan(0)
                })
        })
        // 
        //         
        // 
        //  COMPROBAR QUE INDICA CORRECTAMENTE QUE EL TOKEN ESTÁ CADUCADO
        // 
        // 
        // 
        //         

        it('should fail on invalid query (undefined)', () => {
            var query = undefined
            expect(function () {
                logic.searchArtists(query);
            }).toThrowError(TypeError, query + ' is not a string');
        })

        it('should fail on invalid query (number)', () => {
            var query = 12
            expect(function () {
                logic.searchArtists(query);
            }).toThrowError(TypeError, query + ' is not a string');
        })

        it('should fail on invalid query (boolean)', () => {
            var query = true
            expect(function () {
                logic.searchArtists(query);
            }).toThrowError(TypeError, query + ' is not a string');
        })

        it('should fail on invalid query (array)', () => {
            var query = [1, 2]
            expect(function () {
                logic.searchArtists(query);
            }).toThrowError(TypeError, query + ' is not a string');
        })

        it('should fail on invalid query (object)', () => {
            var query = {
                ob: 'ject'
            }
            expect(function () {
                logic.searchArtists(query);
            }).toThrowError(TypeError, query + ' is not a string');
        })

        it('should fail on invalid query (null)', () => {
            var query = null
            expect(function () {
                logic.searchArtists(query);
            }).toThrowError(TypeError, query + ' is not a string');
        })

        it('should fail on invalid query (blank)', () => {
            var query = '      \n\t'
            expect(function () {
                logic.searchArtists(query);
            }).toThrowError(Error, query + ' is not valid');
        })
    })

    describe('search albums', () => {
        it('should succeed on matching id', () => {
            var id = '6tbjWDEIzxoDsBA1FuhfPW' // madonna

            return logic.searchAlbums(id)
                .then(albums => {
                    expect(albums).toBeDefined()

                    expect(albums.items.length).toBeGreaterThan(0)
                })
        })

        it('should fail on invalid id (undefined)', () => {
            var id = undefined
            expect(function () {
                logic.searchAlbums(id);
            }).toThrowError(TypeError, id + ' is not a string');
        })

        it('should fail on invalid id (number)', () => {
            var id = 12
            expect(function () {
                logic.searchAlbums(id);
            }).toThrowError(TypeError, id + ' is not a string');
        })

        it('should fail on invalid id (boolean)', () => {
            var id = true
            expect(function () {
                logic.searchAlbums(id);
            }).toThrowError(TypeError, id + ' is not a string');
        })

        it('should fail on invalid id (array)', () => {
            var id = [1, 2]
            expect(function () {
                logic.searchAlbums(id);
            }).toThrowError(TypeError, id + ' is not a string');
        })

        it('should fail on invalid id (object)', () => {
            var id = {
                ob: 'ject'
            }
            expect(function () {
                logic.searchAlbums(id);
            }).toThrowError(TypeError, id + ' is not a string');
        })

        it('should fail on invalid id (null)', () => {
            var id = null
            expect(function () {
                logic.searchAlbums(id);
            }).toThrowError(TypeError, id + ' is not a string');
        })

        it('should fail on invalid id (blank)', () => {
            var id = '      \n\t'
            expect(function () {
                logic.searchAlbums(id);
            }).toThrowError(Error, id + ' is not valid');
        })
    })

    describe('search songs', () => {
        it('should succeed on matching id', () => {
            var id = '0xrhBMCv1GbpTVIBXkNltA'

            return logic.searchSongs(id)
                .then(tracks => {
                    expect(tracks).toBeDefined()

                    expect(tracks.items.length).toBeGreaterThan(0)
                })
        })

        it('should fail on invalid song (undefined)', () => {
            var id = undefined
            expect(function () {
                logic.searchSongs(id);
            }).toThrowError(TypeError, id + ' is not a string');
        })

        it('should fail on invalid song (number)', () => {
            var id = 12
            expect(function () {
                logic.searchSongs(id);
            }).toThrowError(TypeError, id + ' is not a string');
        })

        it('should fail on invalid song (boolean)', () => {
            var id = true
            expect(function () {
                logic.searchSongs(id);
            }).toThrowError(TypeError, id + ' is not a string');
        })

        it('should fail on invalid song (array)', () => {
            var id = [1, 2]
            expect(function () {
                logic.searchSongs(id);
            }).toThrowError(TypeError, id + ' is not a string');
        })

        it('should fail on invalid song (object)', () => {
            var id = {
                ob: 'ject'
            }
            expect(function () {
                logic.searchSongs(id);
            }).toThrowError(TypeError, id + ' is not a string');
        })

        it('should fail on invalid song (null)', () => {
            var id = null
            expect(function () {
                logic.searchSongs(id);
            }).toThrowError(TypeError, id + ' is not a string');
        })

        it('should fail on invalid song (blank)', () => {
            var id = '      \n\t'
            expect(function () {
                logic.searchSongs(id);
            }).toThrowError(Error, id + ' is not valid');
        })
    })

    describe('function call', () => {

        it('should return no-undefined', () => {

            return logic.call('https://api.spotify.com/v1/search?type=artist&query=dani')
                .then(response => {
                    expect(response).toBeDefined()

                    expect(response.artists.items.length).toBeGreaterThan(0)
                })
        })

        it('should fail when path is not a string (null)', () => {

            var path = null
            expect(function () {
                logic.searchSongs(path);
            }).toThrowError(Error, path + ' is not a string');
        })

        it('should fail when path is not a string (undefined)', () => {
            var path = undefined
            expect(function () {
                logic.searchSongs(path);
            }).toThrowError(Error, path + ' is not a string');
        })

        it('should fail when path is not a string (num)', () => {
            var path = 123
            expect(function () {
                logic.searchSongs(path);
            }).toThrowError(Error, path + ' is not a string');
        })

        it('should fail when path is not a string (boolean)', () => {
            var path = true
            expect(function () {
                logic.searchSongs(path);
            }).toThrowError(Error, path + ' is not a string');
        })

        it('should fail when path is not a string (array)', () => {
            var path = [1, 2]
            expect(function () {
                logic.searchSongs(path);
            }).toThrowError(Error, path + ' is not a string');
        })

        it('should fail when path is not a string (object)', () => {
            var path = {
                ob: 'ject'
            }
            expect(function () {
                logic.searchSongs(path);
            }).toThrowError(Error, path + ' is not a string');
        })

        it('should fail when path is not a string (function)', () => {
            var path = function () {}
            expect(function () {
                logic.searchSongs(path);
            }).toThrowError(Error, path + ' is not a string');
        })
    });
})