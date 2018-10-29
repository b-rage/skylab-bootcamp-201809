describe('Ayay', function () {
    var ayay;

    beforeEach(function () {
        ayay = new Ayay;
    });

    describe('push', function () {
        it('should sucessfully add input at the end of the ayay ', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            expect(ayay.length).toEqual(3);

            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
        });

        it('should succesfully push an ayay inside another one', function () {

            ayay2 = new Ayay;

            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            ayay2.push(4);
            ayay2.push(3);

            ayay.push(ayay2);

            expect(ayay.length).toEqual(4);
            expect(ayay[3]).toEqual(ayay2);

        });

       it('Should fail because of empty input',function(){

        
        
        expect(function () { ayay.push(); }).toThrowError(Error, 'an element to push is required');

       });

       it('should sucessfully push undefined to ayay', function () {


        var res;
        ayay.push(1);
        ayay.push(2);
        ayay.push(3);
    
        ayay.push(res);
        expect(ayay[3]).toEqual(undefined);
        
    
    
    });
    it('should sucessfully push null to ayay', function () {
    
    
        var res = null;
        ayay.push(1);
        ayay.push(2);
        ayay.push(3);
    
    
        ayay.push(res);

        expect(ayay[3]).toEqual(null);
    
    
    
    
    
    
    
    
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

        it('should fail because of empty ayay',function(){
            expect(function () { ayay.forEach(function (element, index) { res[index] = element * 2; }); }).toThrowError(Error, 'ayay is empty');
        });


        it('should fail because of non-function callback',function(){
                var nonFunction;
                ayay.push(1);
                ayay.push(2);
                ayay.push(3);
                expect(function(){ayay.forEach(nonFunction);}).toThrowError(Error,nonFunction + ' is not a function');
        });

        
        it('should fail on empty callback',function(){
            expect(function(){ayay.forEach();}).toThrowError(Error,'input is empty');
        });  
    });





    describe('pop', function () {


        it('should return as result item removed', function () {

            var res;

            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            res = ayay.pop();

            expect(res).toEqual(3)



        });

        it('should sucessfully permanently remove last item from ayay', function () {

            var res = [1, 2];

            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            ayay.pop();

            expect(ayay.length).toEqual(2);
            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(res[i]);


        });

        
        
        
        
        it('should fail because of empty ayay', function(){

            expect(function () { ayay.pop(); }).toThrowError(Error, 'ayay is empty');

        });
        
        it('should fail because detected an input',function(){
            expect(function(){ayay.pop(ayay);}).toThrowError(Error,'input not required');
        });
        
    });


    describe('map', function () {

        it('should sucessfully multiply numbers by 2', function () {

            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var res = [];

            ayay.map(function (element, index) { res[index] = element * 2; });


            expect(res.length).toEqual(ayay.length);

            res.forEach(function (element, index) {
                expect(element).toEqual(ayay[index] * 2);
            });

        });


        it('should fail because of empty ayay',function(){
            expect(function () { ayay.map(function (element, index) { res[index] = element * 2; }); }).toThrowError(Error, 'ayay is empty');
        });


        it('should fail because of non-function callback',function(){
                var nonFunction;
                ayay.push(1);
                ayay.push(2);
                ayay.push(3);
                expect(function(){ayay.map(nonFunction);}).toThrowError(Error,nonFunction + ' is not a function');
        });

        
        it('should fail on empty callback',function(){
            expect(function(){ayay.map();}).toThrowError(Error,'input is empty');
        });  

    });

    describe('filter', function () {
        it('should create a new element with elements that satisfy the test', function () {

            ayay.push(1);
            ayay.push(3);
            ayay.push(4);
            ayay.push(7);


            var result = ayay.filter(function (element, index) {
                return element > 3;
            });

            expect(result.length).toEqual(2);
            expect(result[0]).toEqual(4);
            expect(result[1]).toEqual(7);
        });

        it('should fail because of empty ayay',function(){
            expect(function () { ayay.filter(function (element, index) { res[index] = element * 2; }); }).toThrowError(Error, 'ayay is empty');
        });


        it('should fail because of non-function callback',function(){
                var nonFunction;
                ayay.push(1);
                ayay.push(2);
                ayay.push(3);
                expect(function(){ayay.filter(nonFunction);}).toThrowError(Error,nonFunction + ' is not a function');
        });

        
        it('should fail on empty callback',function(){
            expect(function(){ayay.filter();}).toThrowError(Error,'input is empty');
        });  





    });

    describe('find', function () {


        it('should create a new element with elements that satisfy the test', function () {

            ayay.push(1);
            ayay.push(3);
            ayay.push(4);
            ayay.push(7);


            var result = ayay.find(function (element, index) {
                return element > 3;
            });

            expect(result).toEqual(4);

        });

        it('should fail because of empty ayay',function(){
            expect(function () { ayay.find(function (element, index) { res[index] = element * 2; }); }).toThrowError(Error, 'ayay is empty');
        });


        it('should fail because of non-function callback',function(){
                var nonFunction;
                ayay.push(1);
                ayay.push(2);
                ayay.push(3);
                expect(function(){ayay.find(nonFunction);}).toThrowError(Error,nonFunction + ' is not a function');
        });

        
        it('should fail on empty callback',function(){
            expect(function(){ayay.find();}).toThrowError(Error,'input is empty');
        });  




    });

    describe('sort', function () {

        it('it should sucessfully sort given numeric ayay', function () {


            var res = new Ayay;
            ayay.push(21);
            ayay.push(4);
            ayay.push(31);
            ayay.push(9);

            res = ayay.sort();

            expect(res[0]).toEqual('21');
            expect(res[1]).toEqual('31');
            expect(res[2]).toEqual('4');
            expect(res[3]).toEqual('9');




        });
        
        it('should maintain original length',function(){

            ayay.push(1);
            ayay.push(3);
            ayay.push(2);

            ayay.sort();
            expect(ayay.length).toEqual(3);

        });

        it('it should sucessfully sort given alphabetic ayay', function () {

            ayay.push('Mar');
            ayay.push('Jan');
            ayay.push('Feb');
            ayay.push('Dec');

            res = ayay.sort();

            expect(res[0]).toEqual('Dec');
            expect(res[1]).toEqual('Feb');
            expect(res[2]).toEqual('Jan');
            expect(res[3]).toEqual('Mar');


        });

        it('should fail because of empty ayay', function(){

            expect(function () { ayay.sort(); }).toThrowError(Error, 'ayay is empty');

        });
        
        it('should fail because detected an input',function(){
            expect(function(){ayay.sort(ayay);}).toThrowError(Error,'input not required');
        });
        
        



    });

});



/*
*/
