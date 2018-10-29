require('isomorphic-fetch')

const { expect } = require('chai')

const logic = require('./spotifyLogic')

// running test from CLI
// normal -> $ mocha src/logic.spec.js --timeout 10000
// debug -> $ mocha debug src/logic.spec.js --timeout 10000


describe('spotifyLogic', () => {
    describe('getArtistById', () => {

        it('should succeed on retrieving correct artist', () => {

            let id = '6J7biCazzYhU3gM9j1wfid'
            return logic.getArtistById(id)
                .then((res) => {
                    expect(res.name).to.equal('Jamiroquai')
                })
        })

        it('should throw correct error on non-string id (object)', () => {

            let id = {}
            try {
                logic.getArtistById(id)
            }
            catch (err) {
                expect(err.message).to.equal(`${id} is not a a string`)
            }
        })

        it('should throw correct error on non-string id (array)', () => {
            let id = []
            try {
                logic.getArtistById(id)
            }
            catch (err) {
                expect(err.message).to.equal(`${id} is not a a string`)
            }
        })

        it('should throw correct error on non-string id (boolean)', () => {
            let id = true
            try {
                logic.getArtistById(id)
            }
            catch (err) {
                expect(err.message).to.equal(`${id} is not a a string`)
            }
        })

        it('should throw correct error on non-string id (number)', () => {
            let id = 123
            try {
                logic.getArtistById(id)
            }
            catch (err) {
                expect(err.message).to.equal(`${id} is not a a string`)
            }
        })

        it('should throw correct error on non-string id (undefined)', () => {
            let id = undefined
            try {
                logic.getArtistById(id)
            }
            catch (err) {
                expect(err.message).to.equal(`${id} is not a a string`)
            }
        })

        it('should throw correct error on non-string id (null)', () => {
            let id = null
            try {
                logic.getArtistById(id)
            }
            catch (err) {
                expect(err.message).to.equal(`${id} is not a a string`)
            }
        })

        it('should throw correct error on empty id', () => {
            let id = '';
            try {
                logic.getArtistById(id)
            }
            catch (err) {
                expect(err.message).to.equal(`${id} is empty or blank`)
            }
        })

    })

    describe('getTrack', () => {
        it('should retrieve the correct track', () => {

            let id='5CQ30WqJwcep0pYcV4AMNc'
            return logic.getTrack(id)
                .then((track) => {
                    expect(track).not.to.be.undefined
                    expect(track.name).to.equal('Stairway To Heaven')
                    expect(track.id).to.equal('5CQ30WqJwcep0pYcV4AMNc')
                })
        })
    })

    describe('getArtists', () => {
        it('should succesfully search', () => {

            return logic.getArtists('Jamiroquai')
                .then((res) => {
                    expect(res).not.to.be.undefined
                    expect((res.artists.items[0].name)).to.equal('Jamiroquai')

                })
        })

        it('should throw correct error on non-string id (object)', () => {
            let id = {}
            try {
                logic.getArtists(id)
            }
            catch (err) {
                expect(err.message).to.equal(`${id} is not a a string`)
            }
        })

        it('should throw correct error on non-string id (array)', () => {
            let id = []
            try {
                logic.getArtists(id)
            }
            catch (err) {
                expect(err.message).to.equal(`${id} is not a a string`)
            }
        })

        it('should throw correct error on non-string id (boolean)', () => {
            let id = true
            try {
                logic.getArtists(id)
            }
            catch (err) {
                expect(err.message).to.equal(`${id} is not a a string`)
            }
        })

        it('should throw correct error on non-string id (number)', () => {
            let id = 123
            try {
                logic.getArtists(id)
            }
            catch (err) {
                expect(err.message).to.equal(`${id} is not a a string`)
            }
        })

        it('should throw correct error on non-string id (undefined)', () => {
            let id = undefined
            try {
                logic.getArtists(id)
            }
            catch (err) {
                expect(err.message).to.equal(`${id} is not a a string`)
            }
        })

        it('should throw correct error on non-string id (null)', () => {
            let id = null
            try {
                logic.getArtists(id)
            }
            catch (err) {
                expect(err.message).to.equal(`${id} is not a a string`)
            }
        })

        it('should throw correct error on empty query', () => {
            try {
                logic.getArtists('')
            }
            catch (err) {
                expect(err.message).to.equal('query cannot be empty')
            }



        })
    })

    describe('getPlaylistsTracks', () => {
        let id = '0AUisiV8Q5KcZ41nPOhrIr'
        it('should succeed on retrieving tracks of a playlist', () => {

            return logic.getPlaylistsTracks(id)
                .then((res) => {
                    expect(res.items).not.to.be.undefined
                    expect(res.href).to.equal('https://api.spotify.com/v1/playlists/0AUisiV8Q5KcZ41nPOhrIr/tracks?offset=0&limit=100')
                })
        })

        it('should throw correct error on non-string id (object)', () => {

            let id = {}
            try {
                logic.getPlaylistsTracks(id)
            }
            catch (err) {
                expect(err.message).to.equal(`${id} is not a a string`)
            }
        })

        it('should throw correct error on non-string id (array)', () => {
            let id = []
            try {
                logic.getPlaylistsTracks(id)
            }
            catch (err) {
                expect(err.message).to.equal(`${id} is not a a string`)
            }
        })

        it('should throw correct error on non-string id (boolean)', () => {
            let id = true
            try {
                logic.getPlaylistsTracks(id)
            }
            catch (err) {
                expect(err.message).to.equal(`${id} is not a a string`)
            }
        })

        it('should throw correct error on non-string id (number)', () => {
            let id = 123
            try {
                logic.getPlaylistsTracks(id)
            }
            catch (err) {
                expect(err.message).to.equal(`${id} is not a a string`)
            }
        })

        it('should throw correct error on non-string id (undefined)', () => {
            let id = undefined
            try {
                logic.getPlaylistsTracks(id)
            }
            catch (err) {
                expect(err.message).to.equal(`${id} is not a a string`)
            }
        })

        it('should throw correct error on non-string id (null)', () => {
            let id = null
            try {
                logic.getPlaylistsTracks(id)
            }
            catch (err) {
                expect(err.message).to.equal(`${id} is not a a string`)
            }
        })

        it('should throw correct error on empty id', () => {
            let id = '';
            try {
                logic.getPlaylistsTracks(id)
            }
            catch (err) {
                expect(err.message).to.equal(`${id} is empty or blank`)
            }
        })

    })

    describe('getAlbumsByArtistId', () => {
        let id = '6J7biCazzYhU3gM9j1wfid'
        it('should succeed on retrieving correct albums', () => {

            return logic.getAlbumsByArtistId(id)
                .then((res) => {
                    expect(res.items.length).to.equal(20)
                    return res
                })
        })
    })

    describe('getSongsbyAlbumId', () => {
        let id = '1xQq0txMTpstjFUwp4c4E0'
        it('should succeed on retrieving correct tracks from album', () => {

            return logic.getSongsbyAlbumId(id)
                .then((res) => {
                    expect(res.items[1].name).to.equal('Automaton')
                })
            // .then((res) => console.log(res))
            // .then(res => console.log(res))
        })
    })

    describe('createPlaylist', () => {

        let name = 'Playlist Test 2'
        let description = 'Description of the playlist'

        it('should succeed on creating a playlist', () => {

            return logic.createPlaylist(name, description)
                .then((res) => {
                    expect(res.name).to.equal(name)
                    return res
                })
        })
    })
})
