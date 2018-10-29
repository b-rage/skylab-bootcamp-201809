// // TODO ...
describe('Logic', function () {

    true && describe('function search', function () {

        it('should return successfully the correct message', function () {
            return logic.search('mahou')
                .then(function (res) {
                    expect(res).toBeDefined();

                    expect(res.length).toBeGreaterThan(0);
                })
        });

        true && describe('failing search (slow test)', function () {
            beforeEach(function () {
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 35000;

            });

            it('should fail on unmatching query', function () {
                return logic.search('fanta')
                    .catch(function (beers) {
                        expect(beers).toBeDefined();

                        expect(beers.length).toEqual(0);
                    });
            });

            afterEach(function () {
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;

            });
        });

        true && it('should throw error on undefined query', function () {
            expect(function () {
                logic.search(undefined, function () {});
            }).toThrowError(TypeError, 'undefined is not a string');
        });

        true && it('should throw error on empty query', function () {
            expect(function () {
                logic.search('', function () {});
            }).toThrowError(Error, 'query is empty or blank');
        });

        true && it('should throw error on blank query', function () {
            expect(function () {
                logic.search('  \t\n', function () {});
            }).toThrowError(Error, 'query is empty or blank');
        });

        true && it('should throw error on non-string query (object)', function () {
            expect(function () {
                logic.search({}, function () {});
            }).toThrowError(TypeError, '[object Object] is not a string');
        });

        true && it('should throw error on non-string query (number)', function () {
            expect(function () {
                logic.search(123, function () {});
            }).toThrowError(TypeError, '123 is not a string');
        });

        true && it('should throw error on non-string query (boolean)', function () {
            expect(function () {
                logic.search(true, function () {});
            }).toThrowError(TypeError, 'true is not a string');
        });

        true && it('should throw error on non-string query (array)', function () {
            expect(function () {
                logic.search([], function () {});
            }).toThrowError(TypeError, ' is not a string');
        });
    });
    true && describe('function retrieve Beer', function () {
        
        true && describe('failing retrieve beer (slow test)', function () {
            beforeEach(function () {
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 35000;
                
            });
            
            it('failing retrieving (slow test)', function () {
                return logic.retrieveBeer('8Oucf')
                .catch(function (){
                    expect(res).toEqual(undefined);
                })
            });
            
            afterEach(function () {
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
                
            });
            
        });
        // 
        // 
        // 
        // 
        // TODO LO DE ABAJO HA DE ADAPTARSE A LAS PROMISES
        // 
        // 
        // 
        // 
        // 

        it('should return no-undefined', function () {
            logic.retrieveBeer('8OucfG',
                function (res) {
                    expect(res instanceof Object).toEqual(true);

                });
        });

        it('should return successfully the correct message', function () {
            logic.retrieveBeer('8OucfG',
                function (res) {
                    expect(res.id).toEqual('8OucfG');

                });
        });

        it('should fail when id is not a string (null)', function () {
            expect(function () {
                logic.retrieveBeer(null,
                    function (res) {
                        throw Error(res);
                    }, ' ',
                    function (message) {}
                );
            }).toThrowError('null is not a string');

        });

        it('should fail when id is not a string (undefined)', function () {
            expect(function () {
                logic.retrieveBeer(undefined,
                    function (res) {
                        throw Error(res);
                    }, ' ',
                    function (message) {}
                );
            }).toThrowError('undefined is not a string');

        });

        it('should fail when id is not a string (num)', function () {
            expect(function () {
                logic.retrieveBeer(123,
                    function (res) {
                        throw Error(res);
                    }, ' ',
                    function (message) {}
                );
            }).toThrowError('123 is not a string');

        });

        it('should fail when id is not a string (boolean)', function () {
            expect(function () {
                logic.retrieveBeer(true,
                    function (res) {
                        throw Error(res);
                    }, ' ',
                    function (message) {}
                );
            }).toThrowError('true is not a string');

        });

        it('should fail when id is not a string (array)', function () {
            expect(function () {
                logic.retrieveBeer([1, 2],
                    function (res) {
                        throw Error(res);
                    }, ' ',
                    function (message) {}
                );
            }).toThrowError('1,2 is not a string');

        });

        it('should fail when id is not a string (object)', function () {
            expect(function () {
                logic.retrieveBeer({
                        ob: 'ject'
                    },
                    function (res) {
                        throw Error(res);
                    }, ' ',
                    function (message) {}
                );
            }).toThrowError('[object Object] is not a string');

        });

        it('should fail when id is not a string (function)', function () {
            expect(function () {
                logic.retrieveBeer(function () {},
                    function (res) {
                        throw Error(res);
                    }, ' ',
                    function (message) {}
                );
            }).toThrowError('function () {} is not a string');

        });

    });
});