
describe('login functionality', function () {
    it('should return an error if username is wrong', function () {
        var username = 'test1234';
        var password = 'skylab1';
        var err;

        logic.login(username, password, function() {
            err = false;
        }, function() {
            err = true;
        })

        expect(err).toEqual(true);


    });

    it('should return an error if username is blank', function () {
        var username = '';
        var password = 'skylab1';
        var err;

        logic.login(username, password, function() {
            err = false;
        }, function() {
            err = true;
        })

        expect(err).toEqual(true);

    });

    it('should return an error if password is wrong', function () {
        var username = 'seand52';
        var password = 'asdfasdf';
        var err;
        var message;

        logic.login(username, password, function() {
            err = false;
        }, function(param) {
            err = true;
            message = param;
        })

        expect(message).toEqual('wrong password!');

    });
    it('should return an error if password AND username are wrong', function () {
        var username = 'asdfasdf';
        var password = 'asdfasdf';
        var err;
        var message;

        logic.login(username, password, function() {
            err = false;
        }, function(param) {
            err = true;
            message = param;
        })

        expect(message).toEqual('wrong username and password!');

    });
});


describe('register functionality', function () {
    it('should return an error if email is blank', function () {
        var err;
        var email = '';
        var fullname = 'sean';
        var username = 'test';
        var password = 'asdfghjk1';
        var message;

        logic.register(email, fullname, username, password, function() {
            err = false;
        }, function(param) {
            err = true;
            message = param;
        })

        expect(message).toEqual('invalid email');


    });

    it('should give error when name is blank', function () {
        var err;
        var email = 'seand@gmail.com';
        var fullname = '';
        var username = 'test';
        var password = 'asdfghjk1';
        var message;

        logic.register(email, fullname, username, password, function() {
            err = false;
        }, function(param) {
            err = true;
            message = param;
        })

        expect(message).toEqual('invalid name');


    });

    it('should return error when username is blank', function () {
        var err;
        var email = 'seand@gmail.com';
        var fullname = 'sean';
        var username = '';
        var password = 'asdfghjk1';
        var message;

        logic.register(email, fullname, username, password, function() {
            err = false;
        }, function(param) {
            err = true;
            message = param;
        })

        expect(message).toEqual('invalid username');


    });

    it('should return approriate error message when password is blank', function () {
        var err;
        var email = 'seand@gmail.com';
        var fullname = 'sean';
        var username = 'test';
        var password = '';
        var message;

        logic.register(email, fullname, username, password, function() {
            err = false;
        }, function(param) {
            err = true;
            message = param;
        })

        expect(message).toEqual('blank password');

    });

    it('should return error message if password is less than 6 characters', function () {
        var err;
        var email = 'seand@gmail.com';
        var fullname = 'sean';
        var username = 'test';
        var password = 'as';
        var message;

        logic.register(email, fullname, username, password, function() {
    
        }, function(param) {
            err = true;
            message = param;
        })

        expect(err).toEqual(true);

    });

    it('should return error message if password does not contain a number', function () {
        var err;
        var email = 'seand@gmail.com';
        var fullname = 'sean';
        var username = 'test';
        var password = 'asasdfasdf';
        var message;

        logic.register(email, fullname, username, password, function() {
    
        }, function(param) {
            err = true;
            message = param;
        })

        expect(err).toEqual(true);

    });

});