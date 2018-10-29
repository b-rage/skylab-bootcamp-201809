describe('Logic', function () {
    describe('register', function () {
        it('should fail on object as form', function () {
            expect(function() {
                logic.register({});
            }).toThrowError('no form passed as argument');
        });

        it('should fail on non form element', function () {
            expect(function() {
                var form = document.createElement('p');
                logic.register(form);
            }).toThrowError('no form passed as argument');
        });

        it('should fail on empty form argument', function () {
            expect(function() {
                logic.register();
            }).toThrowError('no form passed as argument');
        });

        it('should fail on non-function callback', function () {
            expect(function() {
                var form = document.createElement('form');
                logic.register(form);
            }).toThrowError('callback is not a function');
        });
    });

    describe('login', function () {
        it('should fail on non form argument', function () {
            expect(function() {
                logic.login({});
            }).toThrowError('no form passed as argument');
        });

        it('should fail on non form element', function () {
            expect(function() {
                var form = document.createElement('p');
                logic.login(form);
            }).toThrowError('no form passed as argument');
        });

        it('should fail on empty form argument', function () {
            expect(function() {
                var form = document.createElement('p');
                logic.login();
            }).toThrowError('no form passed as argument');
        });

        it('should fail on non-function callback', function () {
            expect(function() {
                var form = document.createElement('form');
                logic.login(form);
            }).toThrowError('callback is not a function');
        });
    });

    describe('logout', function () {
        it('should fail on non-function callback', function () {
            expect(function() {
                var form = document.createElement('form');
                logic.logout(form);
            }).toThrowError('callback is not a function');
        });
    });

    describe('validate', function () {
        it('should fail on object as form', function () {
            expect(function() {
                logic.validate({});
            }).toThrowError('no form passed as argument');
        });

        it('should fail on non form element', function () {
            expect(function() {
                var form = document.createElement('p');
                logic.validate(form);
            }).toThrowError('no form passed as argument');
        });

        it('should fail on empty form argument', function () {
            expect(function() {
                logic.validate();
            }).toThrowError('no form passed as argument');
        });

        it('should fail on non-array', function () {
            expect(function() {
                var form = document.createElement('form');
                logic.validate(form, []);
            }).toThrowError('array is not valid');
        });
    });

    describe('error', function () {
        it('should fail on invalid message', function () {
            expect(function() {
                logic.error();
            }).toThrowError('message is not valid');
        });
    });
});
