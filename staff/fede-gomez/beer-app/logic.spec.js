describe('Logic', function () {

    describe('search', function () {
        it('should succeed on correct query', function (done) {

            var query = 'mahou';

            logic.search(query, function (beers) {
                expect(beers).toBeDefined();
                expect(beers.length).toBeGreaterThan(0);

                done();
            });
        });

    });
});


//--------------------------------
//--------------------------------
//--------------------------------
// false && describe("long asynchronous specs", function() { //la flag false hace que no se ejecute el test

//     var originalTimeout;

//     beforeEach(function() {
//         originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
//         jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
//     });

//     it("takes a long time", function(done) {
//         setTimeout(function() {
//             done();
//         }, 9000);
//     });

//     afterEach(function() {
//         jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
//     });
// });