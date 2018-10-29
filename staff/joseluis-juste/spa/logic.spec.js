describe('Service', function () {
    var service;

    beforeEach(function () {
        service = factoryService();
    });

    describe('setUserData', function () {

        it('It should fail if firstname has an invalid format', function () {
            var message = "";

            service.setUserData(undefined, "juste", "jose", "1234", () => { }, (_message) => message = _message);
            expect(message).toEqual("invalid firstname");

        });

        it('It should fail if lastname has an invalid format', function () {
            var message = "";

            service.setUserData("jose luis", "", "jose", "1234", () => { }, (_message) => message = _message);
            expect(message).toEqual("invalid lastname");

        });

        it('It should fail if username has an invalid format', function () {
            var message = "";

            service.setUserData("jose luis", "juste", undefined, "1234", () => { }, (_message) => message = _message);
            expect(message).toEqual("invalid username");

        });

        it('It should fail if password has an invalid format', function () {
            var message = "";

            service.setUserData("jose luis", "juste", "jose", undefined, () => { }, (_message) => message = _message);
            expect(message).toEqual("invalid password");

        });

        it('It should fail if registerSuccess callback is not a function', function () {

            expect(function () { service.setUserData("jose luis", "juste", "jose", "1234", undefined, () => { }) }).toThrowError('registerSuccess is not a function');

        });

        it('It should fail if registerFail callback is not a function', function () {

            expect(function () { service.setUserData("jose luis", "juste", "jose", "1234", () => { }, undefined) }).toThrowError('registerFail is not a function');

        });

        it('It should success on correct data', function () {

            service.setUserData("John", "Doe", "jose", "1234", () => {

                var user = service.getUserData();
                expect(user.firstname).toEqual("John");
                expect(user.lastname).toEqual("Doe");

            }, message => { throw Error(message) });
        });
    });

    describe('login', function () {

        it('It should fail if username has an invalid format', function () {

            var message = "";
            service.login("", "1234", () => { }, (_message) => message = _message);
            expect(message).toEqual("invalid username");

        });

        it('It should fail if password has an invalid format', function () {

            var message = "";
            service.login("jose", "", () => { }, (_message) => message = _message);
            expect(message).toEqual("invalid password");

        });

        it('It should fail if registerSuccess callback is not a function', function () {

            expect(function () { service.login("jose", "1234", undefined, () => { }) }).toThrowError('loginSuccess is not a function');

        });

        it('It should fail if registerFail callback is not a function', function () {

            expect(function () { service.login("jose", "1234", () => { }, undefined) }).toThrowError('loginFail is not a function');

        });

        it('It should to do login on correct data', function () {

            var user;

            service.setUserData("John", "Doe", "jose", "1234", () => {


                service.login("jose", "1234", function () {

                    user = service.getUserData();
                    expect(user).toBeDefined();
                    expect(user.firstname).toEqual("John");
                    expect(user.lastname).toEqual("Doe");
                    expect(user.username).toBeUndefined();
                    expect(user.password).toBeUndefined();

                }, function (message) {
                    throw Error(message);
                });



            }, message => { throw Error(message) });
        });

        it('It should fails login on incorrect data', function () {

            var user;

            service.setUserData("John", "Doe", "jose", "1234", () => {


                service.login("jose", "12345", function () {

                    
                }, function (message) {
                    expect(message).toEqual("The credentials are not correct...");
                });

            }, message => { throw Error(message) });
        });

    });

});