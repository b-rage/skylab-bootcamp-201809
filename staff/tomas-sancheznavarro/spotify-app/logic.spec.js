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

        it('should fail on invalid query', () => {
            expect(function () {
                logic.searchArtists(undefined);
            }).toThrowError(TypeError, 'undefined is not a string');
        })

        it('should fail on invalid query (empty input)', () => {
            expect(function () {
                logic.searchArtists('');
            }).toThrowError(Error, 'query is empty or blank');
        })

        it('should fail on invalid query (blank input)', () => {
            expect(function () {
                logic.searchArtists('      \n\t')
            }).toThrowError(Error, 'query is empty or blank');
        })

        it('should throw error on non-string query (object)', function () {
            expect(function () {
                logic.searchArtists({});
            }).toThrowError(TypeError, '[object Object] is not a string');
        });

        it('should throw error on non-string query (number)', function () {
            expect(function () {
                logic.searchArtists(123);
            }).toThrowError(TypeError, '123 is not a string');
        });

        it('should throw error on non-string query (boolean)', function () {
            expect(function () {
                logic.searchArtists(true)
            }).toThrowError(TypeError, 'true is not a string');
        });

        it('should throw error on non-string query (array)', function () {
            expect(function () {
                logic.searchArtists([]);
            }).toThrowError(TypeError, ' is not a string');
        });
    })

    describe('list albums', () => {
        it('should succeed on matching id', () => {
            var id = '6tbjWDEIzxoDsBA1FuhfPW' // madonna

            return logic.searchAlbums(id)
                .then(albums => {
                    expect(albums).toBeDefined()

                    expect(albums.length).toBeGreaterThan(0)
                })
        })

        it('should fail on invalid id', () => {
            expect(function () {
                logic.searchAlbums(undefined);
            }).toThrowError(TypeError, 'undefined is not a string');
        })

        it('should fail on invalid query (empty input)', () => {
            expect(function () {
                logic.searchAlbums('');
            }).toThrowError(Error, 'query is empty or blank');
        })

        it('should fail on invalid query (blank input)', () => {
            expect(function () {
                logic.searchAlbums('      \n\t');
            }).toThrowError(Error, 'query is empty or blank');
        })

        it('should throw error on non-string query (object)', function () {
            expect(function () {
                logic.searchAlbums({});
            }).toThrowError(TypeError, '[object Object] is not a string');
        });

        it('should throw error on non-string query (number)', function () {
            expect(function () {
                logic.searchAlbums(123);
            }).toThrowError(TypeError, '123 is not a string');
        });

        it('should throw error on non-string query (boolean)', function () {
            expect(function () {
                logic.searchAlbums(true)
            }).toThrowError(TypeError, 'true is not a string');
        });

        it('should throw error on non-string query (array)', function () {
            expect(function () {
                logic.searchAlbums([]);
            }).toThrowError(TypeError, ' is not a string');
        });
    })

    describe('list songs', () => {
        it('should succeed on matching id', () => {
            var id = '0m6B5ZF9TTOR0mkxVH3DWz' // tom petty

            return logic.searchSongs(id)
                .then(albums => {
                    expect(albums).toBeDefined()

                    expect(albums.length).toBeGreaterThan(0)
                })
        })

        it('should fail on invalid query', () => {
            expect(function () {
                logic.searchSongs(undefined);
            }).toThrowError(TypeError, 'undefined is not a string');
        })

        it('should fail on invalid query (empty input)', () => {
            expect(function () {
                logic.searchSongs('');
            }).toThrowError(Error, 'query is empty or blank');
        })

        it('should fail on invalid query (blank input)', () => {
            expect(function () {
                logic.searchSongs('      \n\t');
            }).toThrowError(Error, 'query is empty or blank');
        })

        it('should throw error on non-string query (object)', function () {
            expect(function () {
                logic.searchSongs({});
            }).toThrowError(TypeError, '[object Object] is not a string');
        });

        it('should throw error on non-string query (number)', function () {
            expect(function () {
                logic.searchSongs(123);
            }).toThrowError(TypeError, '123 is not a string');
        });

        it('should throw error on non-string query (boolean)', function () {
            expect(function () {
                logic.searchSongs(true)
            }).toThrowError(TypeError, 'true is not a string');
        });

        it('should throw error on non-string query (array)', function () {
            expect(function () {
                logic.searchSongs([]);
            }).toThrowError(TypeError, ' is not a string');
        });
    })

})