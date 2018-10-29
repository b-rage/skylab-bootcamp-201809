describe('Ayay', function () {
    var ayay;

    beforeEach(function() {
        ayay = new Ayay;
    });

    describe('push', function () {
        it('should push items', function () {

            var numOfAddedElems = 20;
            for(var i=0; i<numOfAddedElems; i++) {
                ayay.push(i+1);
            }

            expect(ayay.length).toEqual(numOfAddedElems);

            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i+1);
        });
        
        it('should return the length of the ayay even if no element is passed as argument', function () {
            ayay.push(1);   
            ayay.push(2);
            ayay.push(3);
            ayay.push(4);

            var returnedValue = ayay.push();
            
            expect(returnedValue).toEqual(4);
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

        
        it('should return the correct error message on passing a non-function element as argument', function(){
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var notFuction = 123;

            var err;

            expect(function() {ayay.forEach(notFuction);}).toThrowError(TypeError, notFuction + ' is not a function')

            // try{
            //     ayay.forEach(notFuction);
            // } catch(error) {
            //     err = error;
            // }

            // var expectedErrorMessage = notFuction + ' is not a function';

            // expect(err.message).toEqual(expectedErrorMessage);

        });
    });

    describe('pop', function () {
        it('should remove and return last element of the ayay', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var lastElem = ayay[2];
            var poppedElem = ayay.pop();

            expect(poppedElem).toEqual(lastElem);

            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
            
        });

        it('should change the length of the ayay', function(){
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            ayay.pop();

            expect(ayay.length).toEqual(2);

        });

        it('should not contain the removed value', function(){
            
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var poppedElem = 6;
            ayay.push(poppedElem);

            ayay.pop();
            expect(ayay).not.toContain(poppedElem);

        });
    });

    describe('map', function(){
        it('should return a new ayay with the correct length', function(){

            var numOfAddedElems = 20;

            for(var i=0; i<numOfAddedElems; i++) ayay.push(i+1);

            var returnedAyay = new Ayay;

            returnedAyay = ayay.map(function(elem, index){return elem < 5});

            expect(returnedAyay.length).toEqual(4);

        });
    });
});