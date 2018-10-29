describe('logic', function () {
    describe('search', function () {
        it('should succeed on correct query', function (done) {
            var query = 'mahou';

            logic.search(query, function (beers) {
                expect(beers).toBeDefined();

                expect(beers.length).toBeGreaterThan(0);

                done();
            });
        });

   false && describe('failing search (slow test)', function() {
        var originalTimeout;
        
        beforeEach(function() {
            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

            jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
        });


        it('should fail on unmatching query', function (done) {
            var query = 'fanta';
            logic.search(query, function (beers) {
                expect(beers).toBeDefined();

                expect(beers.length).toEqual(0);

                done();
            });
        });

        afterEach(function() {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });
        });
    });
});