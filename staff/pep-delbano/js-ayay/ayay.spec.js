describe('Ayay', function () {
    var ayay;

    beforeEach(function() {
        ayay = new Ayay;
    });


    describe('push', function () {
        it('should push items', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            expect(ayay.length).toEqual(3);

            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
        });

        
        it('should push an object', function () {
            ayay.push({active: true});
            
            expect(ayay[0]).toEqual({active: true});
            
        });
    });
        it('should fail if there is no element', function () {

            expect(function() {
                ayay.push();
            }).toThrowError('element not defined');

        });
    

    describe('forEach', function () {

        it('should keep always same length', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var result = [];

            ayay.forEach(function (elem, index) {
                result[index] = elem * 2; });
                
            expect(result.length).toEqual(ayay.length);
        });

        it('should fail if callback is not a function', function() {
            
            expect(function() {
                ayay.forEach();
            }).toThrowError('undefined is not a function');
        
        })
    });


    describe('map', function () {
        it('should fail with no number to multiply', function () {
        ayay.push(1);
        ayay.push(2);
        ayay.push(3);

            expect(function() {
                ayay.map();
            }).toThrowError('no number defined');
        });

        it('should fail if ayay is an empty array', function() {
            
            expect(function() {
                ayay.map(2);
            }).toThrowError('ayay is empty');
        })

        it('should fail if argument is not a number', function() {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var arg = "hello";

            expect(function() {
                ayay.map(arg);
            }).toThrowError(arg + ' is not a number');
        })
    });


    describe('sort', function () {

        it('should accept array of numbers', function() {
            
            var arrOfNums = [48,29,56,82,13];
            
            expect(ayay.sort(arrOfNums)).toEqual([13, 29, 48, 56, 82]);
        })

        it('should accept array of strings aswell', function() {
    
            var arrOfStrings = ['first', 'second', 'third', 'fourth', 'fifth'];
            
            expect(ayay.sort(arrOfStrings)).toEqual(['fifth', 'first', 'fourth', 'second', 'third']);
        })

        it('should fail if array is not valid', function () {
        
            expect(function() {
                ayay.sort([]);
            }).toThrowError('array is empty');
        });

        it('should fail if array is not defined', function() {

            expect(function() {
                ayay.sort();
            }).toThrowError('array is not defined yet');
        })

        it('should fail if arr is not an array', function() {
            
            expect(function() {
                ayay.sort("hello");
            }).toThrowError('array is not valid');
        })


    });


    describe('filter', function () { //it returns an array with all the coincidences

        it('should succeed with an ayay of numbers', function() {
            
            ayay.push(1);
            ayay.push(2);
            ayay.push(5);
            ayay.push(9);

            var expected = [5,9]
            var result = ayay.filter(function(elem){return (elem > 4)});
            
            for(var i=0; i<ayay.length; i++) {
                expect(expected[i]).toEqual(result[i]);
            }

            // expect(JSON.stringify(expected)).toEqual(JSON.stringify(result));
        })

        it('should succeed with an ayay of strings', function() {

            ayay.push('as');
            ayay.push('ed');
            ayay.push('dfe');
            ayay.push('ghy');

            var expected = ['ed', 'dfe'];
            var result = ayay.filter(function(elem){if(elem.includes('e')) {return elem}});
            
            for(var i=0; i<ayay.length; i++) {
                expect(expected[i]).toEqual(result[i]);
            }

            // expect(ayay.filter(function(elem){if(elem.includes('e')) {return elem}})).toEqual(["ed", "dfe"]);
        }) 

        it('should fail if callback is a string', function() {
            
            expect(function() {
                ayay.filter('hello');
            }).toThrowError('callback is not a function');
        })

        it('it should fail if callback is an array', function() {

            expect(function() {
                ayay.filter([1,2,3]);
            }).toThrowError('callback is not a function');
        })

        it('it should fail if callback is a number', function() {
 
            expect(function() {
                ayay.filter(5);
            }).toThrowError('callback is not a function');
        })



    });

    describe('find', function () { //it only returns the first coincidence!

        it('should succeed with array of numbers', function() {
            
            ayay.push(1);
            ayay.push(2);
            ayay.push(5);
            ayay.push(9);

            var expected = 5;
            var result = ayay.find(function(elem){return (elem > 4)});
            
            for(var i=0; i<ayay.length; i++) {
                expect(expected[i]).toEqual(result[i]);
            }
        })

        it('should succeed with array of strings', function() {

            ayay.push('as');
            ayay.push('ed');
            ayay.push('dfe');
            ayay.push('ghy');

            var expected = 'ed';                                                                                                     
            var result = ayay.find(function(elem){if(elem.includes('e')) {return elem}});
            
            for(var i=0; i<ayay.length; i++) {
                expect(expected[i]).toEqual(result[i]);
            }

            // expect(ayay.find(arrOfStr, function(elem){if(elem.includes('e')) {return elem}})).toEqual('ed');
        })

        it('should fail if callback is a string', function() {
            
            expect(function() {
                ayay.find('hello');
            }).toThrowError('callback is not a function');
        })

        it('it should fail if callback is an array', function() {

            expect(function() {
                ayay.find([1,2,3]);
            }).toThrowError('callback is not a function');
        })

        it('it should fail if callback is a number', function() {
 
            expect(function() {
                ayay.find(5);
            }).toThrowError('callback is not a function');
        })

    });



    
});