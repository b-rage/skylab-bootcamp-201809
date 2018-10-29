describe('logic', () => {
    describe('search artists', () => {
        it('should succeed on matching query', () => {
            var query = 'jackson'

            return logic.searchArtists(query)
                .then(artists => {
                    expect(artists).toBeDefined()

                    expect(artists.artists.items.length).toBeGreaterThan(0)
                })
        })

        it('should fail on invalid query', () => {
            expect(function () {
                logic.searchArtists(undefined);
            }).toThrowError(TypeError, 'undefined is not a string');
        })

        it('should fail on invalid query', () => {
            expect(function () {
                logic.searchArtists('');
            }).toThrowError(Error, 'query is empty or blank');
        })

        it('should throw an error on blank query', () => {
            expect(function () {
                logic.searchArtists('            \n');
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
                logic.searchArtists(true);
            }).toThrowError(TypeError, 'true is not a string');
        });

        it('should throw error on non-string query (array)', function () {
            expect(function () {
                logic.searchArtists([]);
            }).toThrowError(TypeError, ' is not a string');
        });
    })

    describe('list albums', () => {
        it('should succeed on matching query', () => {
            var id = '6tbjWDEIzxoDsBA1FuhfPW' // madonna

            return logic.listAlbums(id)
                .then(albums => {
                    expect(albums).toBeDefined()

                    expect(albums.items.length).toBeGreaterThan(0)
                })
        })

        it('should fail on invalid query', () => {
            expect(function () {
                logic.listAlbums(undefined);
            }).toThrowError(TypeError, 'undefined is not a string');
        })

        it('should fail on invalid query', () => {
            expect(function () {
                logic.listAlbums('');
            }).toThrowError(Error, 'query is empty or blank');
        })

        it('should throw an error on blank query', () => {
            expect(function () {
                logic.listAlbums('            \n');
            }).toThrowError(Error, 'query is empty or blank');
        })


        it('should throw error on non-string query (object)', function () {
            expect(function () {
                logic.listAlbums({});
            }).toThrowError(TypeError, '[object Object] is not a string');
        });

        it('should throw error on non-string query (number)', function () {
            expect(function () {
                logic.listAlbums(123);
            }).toThrowError(TypeError, '123 is not a string');
        });

        it('should throw error on non-string query (boolean)', function () {
            expect(function () {
                logic.listAlbums(true);
            }).toThrowError(TypeError, 'true is not a string');
        });

        it('should throw error on non-string query (array)', function () {
            expect(function () {
                logic.listAlbums([]);
            }).toThrowError(TypeError, ' is not a string');
        });
    })

    describe('list tracks', () => {
        it('should succeed on matching query', () => {
            var id = '4GjdtlX0gGwOxf5vta6Jpk' 

            return logic.listTracks(id)
                .then(tracks => {
                    expect(tracks).toBeDefined()

                    expect(tracks.items.length).toBeGreaterThan(0)
                })
        })

        it('should fail on invalid query', () => {
            expect(function () {
                logic.listTracks(undefined);
            }).toThrowError(TypeError, 'undefined is not a string');
        })

        it('should fail on invalid query', () => {
            expect(function () {
                logic.listTracks('');
            }).toThrowError(Error, 'query is empty or blank');
        })

        it('should throw an error on blank query', () => {
            expect(function () {
                logic.listTracks('            \n');
            }).toThrowError(Error, 'query is empty or blank');
        })


        it('should throw error on non-string query (object)', function () {
            expect(function () {
                logic.listTracks({});
            }).toThrowError(TypeError, '[object Object] is not a string');
        });

        it('should throw error on non-string query (number)', function () {
            expect(function () {
                logic.listTracks(123);
            }).toThrowError(TypeError, '123 is not a string');
        });

        it('should throw error on non-string query (boolean)', function () {
            expect(function () {
                logic.listTracks(true);
            }).toThrowError(TypeError, 'true is not a string');
        });

        it('should throw error on non-string query (array)', function () {
            expect(function () {
                logic.listTracks([]);
            }).toThrowError(TypeError, ' is not a string');
        });
    })

    describe('get song to play', () => {
        it('should succeed on matching query', () => {
            var id = '4JIeOo8F6Yl6yegQIfCBUp' 

            return logic.listTrackInfo(id)
                .then(res => {
                    expect(res).toBeDefined()
                })
        })

        it('should fail on invalid query', () => {
            expect(function () {
                logic.listTrackInfo(undefined);
            }).toThrowError(TypeError, 'undefined is not a string');
        })

        it('should fail on invalid query', () => {
            expect(function () {
                logic.listTrackInfo('');
            }).toThrowError(Error, 'query is empty or blank');
        })

        it('should throw an error on blank query', () => {
            expect(function () {
                logic.listTrackInfo('            \n');
            }).toThrowError(Error, 'query is empty or blank');
        })


        it('should throw error on non-string query (object)', function () {
            expect(function () {
                logic.listTrackInfo({});
            }).toThrowError(TypeError, '[object Object] is not a string');
        });

        it('should throw error on non-string query (number)', function () {
            expect(function () {
                logic.listTrackInfo(123);
            }).toThrowError(TypeError, '123 is not a string');
        });

        it('should throw error on non-string query (boolean)', function () {
            expect(function () {
                logic.listTrackInfo(true);
            }).toThrowError(TypeError, 'true is not a string');
        });

        it('should throw error on non-string query (array)', function () {
            expect(function () {
                logic.listTrackInfo([]);
            }).toThrowError(TypeError, ' is not a string');
        });
    })
})