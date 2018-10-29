describe('Logic', function () {
    describe('search', function () {
        it('should fail on non-function callback', function () {
            expect(function() {
                LOGIC.search();
            }).toThrowError('callback is not a function');
        });
    });

    describe('artistAlbums', function () {
        it('should fail on non-function callback', function () {
            expect(function() {
                LOGIC.artistAlbums('id');
            }).toThrowError('callback is not a function');
        });
    });

    describe('albumTracks', function () {
        it('should fail on non-function callback', function () {
            expect(function() {
                LOGIC.albumTracks('id');
            }).toThrowError('callback is not a function');
        });
    });
});
