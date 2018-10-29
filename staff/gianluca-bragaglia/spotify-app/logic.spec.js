describe('logic', () => {

    //Artists
    describe('search artists', () => {
        it('should succeed on matching query', () => {
            var query = 'jackson'

            return logic.searchArtists(query)
                .then(artists => {
                    expect(artists).toBeDefined()

                    expect(artists.length).toBeGreaterThan(0)
                })
        })

        it('should fail on invalid query', () => {
            expect(function() {
                logic.searchArtists(undefined);
            }).toThrowError(TypeError, 'undefined is not a string');
        })

        it('should fail on empty query', () => {
            expect(function() {
                logic.searchArtists('');
            }).toThrowError(Error, 'query is empty or blank');
        })

        it('should fail on blank query', () => {
            expect(function() {
                logic.searchArtists('  ');
            }).toThrowError(Error, 'query is empty or blank');
        })

        it('should fail on invalid query(array)', () => {
            expect(function() {
                logic.searchArtists([]);
            }).toThrowError(TypeError, ' is not a string');
        })

        it('should fail on invalid query(booleran)', () => {
            expect(function() {
                logic.searchArtists(true);
            }).toThrowError(TypeError, 'true is not a string');
        })

        it('should fail on invalid query(object)', () => {
            expect(function() {
                logic.searchArtists({});
            }).toThrowError(TypeError, '[object Object] is not a string');
        })

    })


    //Albums
    describe('search albums', () => {
        it('should succeed on valid id artist', () => {
            var id = '6tbjWDEIzxoDsBA1FuhfPW' // madonna

            return logic.searchAlbums(id)
                .then(albums => {
                    expect(albums).toBeDefined()

                    expect(albums.length).toBeGreaterThan(0)
                })
        })

        it('should fail on invalid id', () => {
            expect(function() {
                logic.searchAlbums(undefined);
            }).toThrowError(TypeError, 'undefined is not a string');
        })

        it('should fail on empty id', () => {
            expect(function() {
                logic.searchAlbums('');
            }).toThrowError(Error, 'id is empty or blank');
        })

        it('should fail on blank id', () => {
            expect(function() {
                logic.searchAlbums('  ');
            }).toThrowError(Error, 'id is empty or blank');
        })

        it('should fail on invalid id(array)', () => {
            expect(function() {
                logic.searchAlbums([]);
            }).toThrowError(TypeError, ' is not a string');
        })

        it('should fail on invalid id(boolean)', () => {
            expect(function() {
                logic.searchAlbums(true);
            }).toThrowError(TypeError, 'true is not a string');
        })

        it('should fail on invalid id(object)', () => {
            expect(function() {
                logic.searchAlbums({});
            }).toThrowError(TypeError, '[object Object] is not a string');
        })
    })

    //Tracks
    describe('search tracks', () => {
        it('should succeed on valid id album', () => {
            var idAlbum = '4vEqluvGq8AC9Xx2Fx4cZ3' // nirvana album

            return logic.searchTracks(idAlbum)
                .then(tracks => {
                    expect(tracks).toBeDefined()

                    expect(tracks.length).toBeGreaterThan(0)
                })
        })

        it('should fail on invalid id', () => {
            expect(function() {
                logic.searchAlbums(undefined);
            }).toThrowError(TypeError, 'undefined is not a string');
        })

        it('should fail on empty id', () => {
            expect(function() {
                logic.searchAlbums('');
            }).toThrowError(Error, 'id is empty or blank');
        })

        it('should fail on blank id', () => {
            expect(function() {
                logic.searchAlbums('  ');
            }).toThrowError(Error, 'id is empty or blank');
        })

        it('should fail on invalid id(array)', () => {
            expect(function() {
                logic.searchAlbums([]);
            }).toThrowError(TypeError, ' is not a string');
        })

        it('should fail on invalid id(boolean)', () => {
            expect(function() {
                logic.searchAlbums(true);
            }).toThrowError(TypeError, 'true is not a string');
        })

        it('should fail on invalid id(object)', () => {
            expect(function() {
                logic.searchAlbums({});
            }).toThrowError(TypeError, '[object Object] is not a string');
        })
    })

    //Play Tracks
    describe('play tracks', () => {
        it('should succeed on valid id track', () => {
            var idAlbum = '4vEqluvGq8AC9Xx2Fx4cZ3' // nirvana album

            return logic.playTrack(idAlbum)
                .then(tracks => {
                    expect(tracks).toBeDefined()

                    expect(tracks.length).toBeGreaterThan(0)
                })
        })

        it('should fail on invalid id', () => {
            expect(function() {
                logic.playTrack(undefined);
            }).toThrowError(TypeError, 'undefined is not a string');
        })

        it('should fail on empty id', () => {
            expect(function() {
                logic.playTrack('');
            }).toThrowError(Error, 'id is empty or blank');
        })

        it('should fail on blank id', () => {
            expect(function() {
                logic.playTrack('  ');
            }).toThrowError(Error, 'id is empty or blank');
        })

        it('should fail on invalid id(array)', () => {
            expect(function() {
                logic.playTrack([]);
            }).toThrowError(TypeError, ' is not a string');
        })

        it('should fail on invalid id(boolean)', () => {
            expect(function() {
                logic.playTrack(true);
            }).toThrowError(TypeError, 'true is not a string');
        })

        it('should fail on invalid id(object)', () => {
            expect(function() {
                logic.playTrack({});
            }).toThrowError(TypeError, '[object Object] is not a string');
        })
    })
})