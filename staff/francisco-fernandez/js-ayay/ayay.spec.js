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

        it('should push several items at a time', function () {
            ayay.push(1,2,3);
           
            expect(ayay.length).toEqual(3);

            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
        });

        it('should be able to push and undefined', function () {
            ayay.push(1,2,3);
            ayay.push(undefined);
           
            expect(ayay.length).toEqual(4);
            expect(ayay[3]).toEqual(undefined);

        });

        it('should be able to push and empty string', function () {
            ayay.push('');
                       
            expect(ayay.length).toEqual(1);
            expect(ayay[0]).toEqual('');

        });

        it('should return correctly the ayay length', function () {
            ayay.push(3,'strin',true,undefined,[],{});
                       
            expect(ayay.length).toEqual(6);
            
        });

        it('should maintain the type of the object added', function () {
            ayay.push({});

            expect(ayay.length).toEqual(1);           
            expect(ayay[0] instanceof Object).toEqual(true);
            
        });

        it('should be able to add a function', function () {
            ayay.push(function(){});
                       
            expect(ayay.length).toEqual(1);
            expect(ayay[0] instanceof Function).toEqual(true);
            
        });

        it('should be able tu push items several times', function () {
            ayay.push(1,2,3);
            ayay.push(4);
            ayay.push(5);

                       
            expect(ayay.length).toEqual(5);
            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
            
        });

        it('should be able to add a string', function () {
            ayay.push('pepito');
                       
            expect(ayay.length).toEqual(1);
            expect(typeof ayay[0]).toEqual('string');
            
        });


});

    describe('pop', function () {
        it('should pop items', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            ayay.pop();

            expect(ayay.length).toEqual(2);

            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
        });
        it('should return undefined if the ayay is empty', function () {
            
            var result = ayay.pop();

            expect(ayay.length).toEqual(0);
            expect(result).toEqual(undefined);
            
        });

        it('should work properly with an ayay of one elementh', function () {
            
            ayay.push(1);

            var result = ayay.pop();

            expect(ayay.length).toEqual(0);
            expect(result).toEqual(1);
            
        });

        it('should work properly with an ayay of objects', function () {
            
            ayay.push({hola: "mundo"},{adios: 'mundo cruel'});

            var result = ayay.pop();

            expect(ayay.length).toEqual(1);
            expect(result).toEqual({adios: 'mundo cruel'});
            
        });

        it('should work properly with an ayay of arrays', function () {
            
            ayay.push([1,2,3],[4,5,6]);

            var result = ayay.pop();

            expect(ayay.length).toEqual(1);
            expect(result).toEqual([4,5,6]);
            
        });

        it('should work properly with an ayay of 0', function () {
            
            ayay.push(0,0,0,0,0);

            var result = ayay.pop();

            expect(ayay.length).toEqual(4);
            expect(result).toEqual(0);
            
        });

        it('should work properly with an ayay element,element,... with a come in the end', function () {
            
            ayay.push(1,2,3,4,);

            var result = ayay.pop();

            expect(ayay.length).toEqual(3);
            expect(result).toEqual(4);
            
        });

        it('should work properly if you put an argument in the function', function () {
            
            ayay.push(1,2,3,4);

            var result = ayay.pop(2);

            expect(ayay.length).toEqual(3);
            expect(result).toEqual(4);
            
        });

        

    });
    

    describe('forEach', function () {
        it('should apply the callback to each element of the ayay', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var result = [];

            ayay.forEach(function (elem, index) { result[index] = elem * 2; });

            expect(result.length).toEqual(ayay.length);

            result.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index] * 2);
            });
        });

        it('should return error if callback is not a function', function () {
            // ayay.push(1);
            var callback = 1;
            expect(function (){
                ayay.forEach(callback);
            }).toThrowError(TypeError, callback + ' is not a function');
            
        });

        it('should work properly if the function do nothing', function () {
            // ayay.push(1);
            var callback = function(){};
            expect(function (){
                forEach(callback);
            }).toThrow();
            
        });
        it('should return error if callback is an object', function () {
            // ayay.push(1);
            var callback = {};
            expect(function (){
                ayay.forEach(callback);
            }).toThrowError(callback + ' is not a function');
            
        });
    });

    describe('map', function () {
        it('should apply the callback to each element of the ayay and return a new ayay', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var result = [];

            ayay.map(function (elem, index) { result[index] = elem * 2; });

            expect(result.length).toEqual(ayay.length);

            result.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index] * 2);
            });
        });

        it('should return error if callback is not a function', function () {
            // ayay.push(1);
            var callback = 1;
            expect(function (){
                ayay.map(callback);
            }).toThrowError(TypeError, callback + ' is not a function');
            
        });

        it('should return error if callback is an object', function () {
            // ayay.push(1);
            var callback = {};
            expect(function (){
                ayay.map(callback);
            }).toThrowError(callback + ' is not a function');
            
        });

        it('should work properly if the function do nothing', function () {
            // ayay.push(1);
            var callback = function(){};
            expect(function (){
                map(callback);
            }).toThrow();
            
        });
    });

    describe('sort', function () {
        it('should sort an ayay of strings', function () {
            ayay.push('bison');
            ayay.push('aligator');
            ayay.push('zebra');

            result = new Ayay;

            result.push('aligator');
            result.push('bison');
            result.push('zebra');

            ayay.sort();

            expect(result.length).toEqual(ayay.length);

            result.forEach(function (elem, index) {
                expect(result[index]).toEqual(ayay[index]);
            });
        });

        it('should sort an ayay of numbers', function () {
            ayay.push(5,4,3);
            
            result = new Ayay;

            result.push(3,4,5)

            ayay.sort();

            expect(result.length).toEqual(ayay.length);

            result.forEach(function (elem, index) {
                expect(result[index]).toEqual(ayay[index]);
            });
        });

        it('should sort an ayay mix of type of elements', function () {
            ayay.push(5,3,'string',['a'],{});
            
            result = new Ayay;

            result.push(3,5,{},['a'],"string");

            ayay.sort();

            expect(result.length).toEqual(ayay.length);

            result.forEach(function (elem, index) {
                expect(result[index]).toEqual(ayay[index]);
            });
        });

        it('should sort if all the elements are equal', function () {
            ayay.push(1,1,1,1,1);
            
            result = new Ayay;

            result.push(1,1,1,1,1);

            ayay.sort();

            expect(result.length).toEqual(ayay.length);

            result.forEach(function (elem, index) {
                expect(result[index]).toEqual(ayay[index]);
            });
        });
    });

    describe('filter', function () {
        it('should filter an ayay', function () {
            var result = new Ayay;

            ayay.push(1,2,3);

            result = ayay.filter(isGreatThan);
            function isGreatThan(item){
                return item > 2;
            }
            
            expect(result.length).toEqual(1);

            result.forEach(function (elem, index) {
                expect(elem).toEqual(3)});
            
        });

        it('should return error if callback is an object', function () {
            // ayay.push(1);
            var callback = {};
            expect(function (){
                ayay.filter(callback);
            }).toThrowError(callback + ' is not a function');
            
        });

        it('should return an empty ayay if condition is not accomplished', function () {
            var result = new Ayay;

            ayay.push(1,2,3);

            result = ayay.filter(isGreatThan);
            function isGreatThan(item){
                return item < 1;
            }
            
            expect(result.length).toEqual(0);
          
        });

        it('should return error if callback is not a function', function () {
            // ayay.push(1);
            var callback = 1;
            expect(function (){
                ayay.filter(callback);
            }).toThrowError(TypeError, callback + ' is not a function');
            
        });
        
    });

    describe('find', function () {

        it('should return error if callback is not a function', function () {
            // ayay.push(1);
            var callback = 1;
            expect(function (){
                ayay.map(callback);
            }).toThrowError(TypeError, callback + ' is not a function');
            
        });

        it('should find the first matching element', function () {
            
            ayay.push(3,5,1);
            
            result = ayay.find(isGreatThan);
            function isGreatThan(item){
                return item > 3;
            }

            expect(result).toEqual(5);
                
        });

        it('should work properly if the function do nothing', function () {
            // ayay.push(1);
            result = ayay.find(isGreatThan);
            
            function isGreatThan(item){};

            expect(result).toEqual(undefined);
            
        });

        
        
    });
    
});