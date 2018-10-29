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
    });

    describe('pop', function () {
        it('should pop items', function () {
            
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var num = ayay.length

            ayay.pop();

            expect(ayay.length).not.toEqual(num);            
        });
    });



    describe('forEach', function () {
        it('should iterate on valid ayay', function () {
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
    });

    describe('map', function () {
        it('should returns the same length', function () {

            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var num = ayay.length

            ayay.map(function(num) { return num * 2; });

            expect(ayay.length).toEqual(num);  
                       
        }); 

        it('should throw error, callback is not a function', function () {

            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var x =2;

            expect(function(){ayay.map(x);}).toThrowError(TypeError, x + ' is not a function')
                    
        });
    });

        describe('filter', function () {
            it('shuld return the items that meet the condition', function () {
    
                ayay.push('maria');
                ayay.push('pepe');
                ayay.push('judith');
                ayay.push('antoñito');
    
                var result = ayay.filter(function(element) { return element.length > 5; });
    
                result.forEach (function (element){
                    expect(element.length > 5).toBeTruthy();
                });
                           
            });
    
            it('It should fail on non-function second parameter', function () {
    
                ayay.push(1);
                ayay.push(2);
                ayay.push(3);
    
                var x =2;
    
                expect(function(){ayay.filter(x);}).toThrowError(TypeError, x + ' is not a function')
                        
            });
        });

        describe('find', function () {
            it('shuld return the 1rst item that meet the condition', function () {
    
                ayay.push('maria');
                ayay.push('pepe');
                ayay.push('judith');
                ayay.push('antoñito');
    
                var result = ayay.find(function(element) { return element.length > 5; });

                    expect(result.length > 5).toBeTruthy();
                           
            });
    
            it('It should fail on non-function second parameter', function () {
    
                ayay.push(1);
                ayay.push(2);
                ayay.push(3);
    
                var x =2;
    
                expect(function(){ayay.find(x);}).toThrowError(TypeError, x + ' is not a function')
                        
            });
        });
    
});