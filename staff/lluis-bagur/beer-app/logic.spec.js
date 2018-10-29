
describe('logic', function () {
    describe('search', function () {

        beForeEach(function(){
            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

            jasmine.DEFAULT_TIMEOUT_INTERVAL = 40000;
        });

        it('should succeed on matching query', function () {

            var query = 'mahou';

            logic.search(query, function(beers) {
                expect(beers).toBeDefined();

                expect(beers.length).toBeGreaterThan(0);
                    
                done();
             
            });
        });

        it('should fail on unmatching query', function () {

            var query = 'fanta';

            logic.search(query, function(beers) {
                expect(beers).toBeDefined();

                expect(beers.length).toBeEqual(0);
                    
                done();
             
            });
        });
    });
});