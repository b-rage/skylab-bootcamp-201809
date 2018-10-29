/////ASYNC TEST//////////////////////////////////////////////////
describe('logic', function () {
    
    describe('search', function () {
        it ('should succed on correct query', function(done) {
            var query = 'mahou';

            logic.search(query, function (beers) {
                expect(beers).toBeDefined();
                expect(beers.length).toBeGreaterThan(0);

                done();
            })
        }); 

        false && describe('timeOut', function () {
            var originalTimeout;
            beforeEach(function () {
                originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

                jasmine.DEFAULT_TIMEOUT_INTERVAL = 32000;
            })

            it ('should succed on correct query', function() {
                var query = 'fanta';

                logic.search(query, function (beers) {
                    expect(beers).toBeDefined();
                    expect(beers.length).toEqual(0);

                    
                });
            });

            afterEach(function () {
                jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
            })
        });

        it ('should to throw error on undefined query', function() {
            expect(function(){
                logic.search('', function () {});
            }).toThrowError (TypeError, 'query is not a string');
        }); 


    });

    // describe('retrieveBeer', function () {
        
    // });

    // describe('call', function () {
        
    // });
    
});