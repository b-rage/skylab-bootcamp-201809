describe('logic', function () {
    describe('search', function () {
        true && it('should succeed on matching query', function (done) {
            var query = 'mahou';

            logic.search(query, function (beers) {
                    expect(beers).toBeDefined();

                    expect(beers.length).toBeGreaterThan(0);
                    done()
                });
        });

        !true && describe('failing search (slow test)', function () {
            var originalTimeout;

            beforeEach(function () {
                originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

                jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
            });

            it('should fail on unmatching query', function () {
                var query = 'fanta';

                return logic.search(query)
                    .catch(function (beers) {
                        expect(beers).toBeDefined();

                        expect(beers.length).toEqual(0);
                    });
            });

            afterEach(function () {
                jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
            });
        });

        true && it('should throw error on undefined query', function () {
            expect(function () {
                logic.search(undefined, function () { });
            }).toThrowError(TypeError, 'undefined is not a string');
        });

        true && it('should throw error on empty query', function () {
            expect(function () {
                logic.search('', function () { });
            }).toThrowError(Error, 'query is empty or blank');
        });

        true && it('should throw error on blank query', function () {
            expect(function () {
                logic.search('  \t\n', function () { });
            }).toThrowError(Error, 'query is empty or blank');
        });

        true && it('should throw error on non-string query (object)', function () {
            expect(function () {
                logic.search({}, function () { });
            }).toThrowError(TypeError, '[object Object] is not a string');
        });

        true && it('should throw error on non-string query (number)', function () {
            expect(function () {
                logic.search(123, function () { });
            }).toThrowError(TypeError, '123 is not a string');
        });

        true && it('should throw error on non-string query (boolean)', function () {
            expect(function () {
                logic.search(true, function () { });
            }).toThrowError(TypeError, 'true is not a string');
        });

        true && it('should throw error on non-string query (array)', function () {
            expect(function () {
                logic.search([], function () { });
            }).toThrowError(TypeError, ' is not a string');
        });
    });

    describe('search', function () {
        true && it('should succeed on retrieving beer', function (done) {
            var id = '8OucfG';

            logic.search(id, function (beers) {
                    expect(beers).toBeDefined();

                    expect(beers.length).toBeGreaterThan(0);
                    done()
                });
        });

        !true && describe('failing search (slow test)', function () {
            var originalTimeout;

            beforeEach(function () {
                originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

                jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
            });

            it('should fail on unmatching query', function () {
                var query = 'fanta';

                return logic.search(query)
                    .catch(function (beers) {
                        expect(beers).toBeDefined();

                        expect(beers.length).toEqual(0);
                    });
            });

            afterEach(function () {
                jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
            });
        });

        true && it('should throw error on undefined query', function () {
            expect(function () {
                logic.search(undefined, function () { });
            }).toThrowError(TypeError, 'undefined is not a string');
        });

        true && it('should throw error on empty query', function () {
            expect(function () {
                logic.search('', function () { });
            }).toThrowError(Error, 'query is empty or blank');
        });

        true && it('should throw error on blank query', function () {
            expect(function () {
                logic.search('  \t\n', function () { });
            }).toThrowError(Error, 'query is empty or blank');
        });

        true && it('should throw error on non-string query (object)', function () {
            expect(function () {
                logic.search({}, function () { });
            }).toThrowError(TypeError, '[object Object] is not a string');
        });

        true && it('should throw error on non-string query (number)', function () {
            expect(function () {
                logic.search(123, function () { });
            }).toThrowError(TypeError, '123 is not a string');
        });

        true && it('should throw error on non-string query (boolean)', function () {
            expect(function () {
                logic.search(true, function () { });
            }).toThrowError(TypeError, 'true is not a string');
        });

        true && it('should throw error on non-string query (array)', function () {
            expect(function () {
                logic.search([], function () { });
            }).toThrowError(TypeError, ' is not a string');
        });
    });
});