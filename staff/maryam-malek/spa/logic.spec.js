describe('logic', function () {
    
    
    describe('register', function () {
        var name;
        var email;
        var username;
        var password;
        beforeEach(function () {
            name = 'ma';
            email = 'ma@ma.com';
            username = 'maryam';
            password = '123';
            user = undefined; //important per a netejar el user
        });
            it('should fail on undefined name', function () {
                name = undefined;
                var msg;
                logic.register(name, email, username, password, function () {
                    throw Error();
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid name');
            });
            it('should fail on undefined username', function () {
                username = undefined;
                var msg;
                logic.register(name, email, username, password, function () {
                    throw Error();
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid username');
            });
            it('should fail on undefined email', function () {
                email = undefined;
                var msg;
                logic.register(name, email, username, password, function () {
                    throw Error();
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid email');
            });
            it('should fail on undefined password', function () {
                password = undefined;
                var msg;
                logic.register(name, email, username, password, function () {
                    throw Error();
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid password');
            });
            it('should fail on empty name', function () {
                name = '';
                var msg;
                logic.register(name, email, username, password, function () {
                    throw Error();
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid name');
            });
            it('should fail on empty username', function () {
                username = '';
                var msg;
                logic.register(name, email, username, password, function () {
                    throw Error();
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid username');
            });
            it('should fail on empty email', function () {
                email = '';
                var msg;
                logic.register(name, email, username, password, function () {
                    throw Error();
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid email');
            });
            it('should fail on empty password', function () {
                password = '';
                var msg;
                logic.register(name, email, username, password, function () {
                    throw Error();
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid password');
            });
            it('should fail on null name', function () {
                name = null;
                var msg;
                logic.register(name, email, username, password, function () {
                    throw Error();
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid name');
            });
            it('should fail on null username', function () {
                username = null;
                var msg;
                logic.register(name, email, username, password, function () {
                    throw Error();
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid username');
            });
            it('should fail on null email', function () {
                email = null;
                var msg;
                logic.register(name, email, username, password, function () {
                    throw Error();
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid email');
            });
            it('should fail on null password', function () {
                password = null;
                var msg;
                logic.register(name, email, username, password, function () {
                    throw Error();
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid password');
            });
            it('should fail on blanck name', function () {
                name = '   ';
                var msg;
                logic.register(name, email, username, password, function () {
                    throw Error();
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid name');
            });
            it('should fail on blanck username', function () {
                username = '   ';
                var msg;
                logic.register(name, email, username, password, function () {
                    throw Error();
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid username');
            });
            it('should fail on blanck email', function () {
                email = '   ';
                var msg;
                logic.register(name, email, username, password, function () {
                    throw Error();
                    //Aquí podria posar un throw Error, per si un cas entra en aquesta funció. És convenient fer-ho així! En tots els exemples.
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid email');
            });
            it('should fail on blanck password', function () {
                password = '   ';
                var msg;
                logic.register(name, email, username, password, function () {
                    throw Error();
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid password');
            });
            it('should fail on non-string name', function () {
                name = 1;
                var msg;
                logic.register(name, email, username, password, function () {
                    throw Error();
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid name');
            });
            it('should fail on non-string username', function () {
                username = 1;
                var msg;
                logic.register(name, email, username, password, function () {
                    throw Error();
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid username');
            });
            it('should fail on non-string email', function () {
                email = 1;
                var msg;
                logic.register(name, email, username, password, function () {
                    throw Error();
                    //Aquí podria posar un throw Error, per si un cas entra en aquesta funció. És convenient fer-ho així! En tots els exemples.
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid email');
            });
            it('should fail on non-string password', function () {
                password = 1;
                var msg;
                logic.register(name, email, username, password, function () {
                    throw Error();
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid password');
            });
            it('should throw error on undefined succes callback', function(){
                expect(function(){
                logic.register(name, email, username, password, undefined, 
                    function(message){
                        throw Error(message)
                });
                }).toThrowError(TypeError, 'undefined is not a function');
            });
            it('should throw error on undefined fail callback', function(){     
                expect(function(){
                logic.register(name, email, username, password, function(){
                    throw Error();
                }, undefined); 
                }).toThrowError(TypeError, 'undefined is not a function');
            });
            it('should throw error on null succes callback', function(){
                expect(function(){
                logic.register(name, email, username, password, null, 
                    function(message){
                        throw Error(message)
                });
                }).toThrowError(TypeError, 'null is not a function');
            });
            it('should throw error on null fail callback', function(){     
                expect(function(){
                logic.register(name, email, username, password, function(){
                    throw Error();

                }, null); 
                }).toThrowError(TypeError, 'null is not a function');
            });
            it('should throw error on non-function succes callback (number)', function(){
                expect(function(){
                logic.register(name, email, username, password, 1, 
                    function(message){
                        throw Error(message)
                });
                }).toThrowError(TypeError, '1 is not a function');
            });
            it('should throw error on non-function fail callback (number)', function(){     
                expect(function(){
                logic.register(name, email, username, password, function(){
                    throw Error();

                }, 1); 
                }).toThrowError(TypeError, '1 is not a function');
            });
            it('should throw error on non-function succes callback (string)', function(){
                expect(function(){
                logic.register(name, email, username, password, '', 
                    function(message){
                        throw Error(message)
                });
                }).toThrowError(TypeError, ' is not a function');
            });
            it('should throw error on non-function fail callback (string)', function(){     
                expect(function(){
                logic.register(name, email, username, password, function(){
                    throw Error();

                }, ''); 
                }).toThrowError(TypeError, ' is not a function');
            });
            it('should throw error on non-function succes callback (boolean)', function(){
                expect(function(){
                logic.register(name, email, username, password, true, 
                    function(message){
                        throw Error(message)
                });
                }).toThrowError(TypeError, 'true is not a function');
            });
            it('should throw error on non-function fail callback (boolean)', function(){     
                expect(function(){
                logic.register(name, email, username, password, function(){
                    throw Error();

                }, true); 
                }).toThrowError(TypeError, 'true is not a function');
            });
            it('should succeed on keeping user data', function(){

                var error;
                logic.register(name, email, username, password, function(){
                    error = false
                }, function(){
                    error = true;
                    //Aquí podria posar un throw Error, ja que en aquest expect no hi ha de passar. I si hi passa jasmin em mostrarà un error
                });
                expect(error).toEqual(false);
                expect(user.name).toEqual(name);
                expect(user.email).toEqual(email);
                expect(user.username).toEqual(username);
                expect(user.password).toEqual(password);
                //Aquests 4 ultims expects podrien directament anar dins de la 1º funció, i no caldria la variable error
            });
            afterEach(function(){
                user = undefined;
            }); //es pot posar aquest o el beforeEach

    });

    describe('login', function () {
        var username;
        var password;
        
        beforeEach(function() {
            username = 'maryam';
            password= '123';
            user = {
                name: 'ma',
                email: 'ma@ma.com',
                username: 'maryam',
                password: '123'
            };
        }); 
        it('should fail on undefined username', function () {
            var username = undefined;
            logic.login(username, password, function () {
                throw Error();
            }, function (message) {
                expect(message).toEqual('invalid username');
            });
        });
        it('should fail on undefined password', function () {
            var password = undefined;
            logic.login(username, password, function () {
                throw Error();
            }, function (message) {
                expect(message).toEqual('invalid password');
            });
        });
        it('should fail on blank username', function () {
            var username = '    ';
            logic.login(username, password, function () {
                throw Error();
            }, function (message) {
                expect(message).toEqual('invalid username');
            });
        });
        it('should fail on blank password', function () {
            var password = '    ';
            logic.login(username, password, function () {
                throw Error();
            }, function (message) {
                expect(message).toEqual('invalid password');
            });
        });
        it('should fail on empty username', function () {
            var username = '';
            logic.login(username, password, function () {
                throw Error();
            }, function (message) {
                expect(message).toEqual('invalid username');
            });
        });
        it('should fail on empty password', function () {
            var password = '';
            logic.login(username, password, function () {
                throw Error();
            }, function (message) {
                expect(message).toEqual('invalid password');
            });
        });
        it('should fail on null username', function () {
            var username = null;
            logic.login(username, password, function () {
                throw Error();
            }, function (message) {
                expect(message).toEqual('invalid username');
            });
        });
        it('should fail on null password', function () {
            var password = null;
            logic.login(username, password, function () {
                throw Error();
            }, function (message) {
                expect(message).toEqual('invalid password');
            });
        });
        it('should fail on non-string username (number)', function () {
            var username = 1;
            logic.login(username, password, function () {
                throw Error();
            }, function (message) {
                expect(message).toEqual('invalid username');
            });
        });
        it('should fail on non-string password (number)', function () {
            var password = 1;
            logic.login(username, password, function () {
                throw Error();
            }, function (message) {
                expect(message).toEqual('invalid password');
            });
        });
        it('should fail on non-string username (boolean)', function () {
            var username = true;
            logic.login(username, password, function () {
                throw Error();
            }, function (message) {
                expect(message).toEqual('invalid username');
            });
        });
        it('should fail on non-string password (boolean)', function () {
            var password = true;
            logic.login(username, password, function () {
                throw Error();
            }, function (message) {
                expect(message).toEqual('invalid password');
            });
        });
        it('should fail on non-string username (object)', function () {
            var username = {};
            logic.login(username, password, function () {
                throw Error();
            }, function (message) {
                expect(message).toEqual('invalid username');
            });
        });
        it('should fail on non-string password (object)', function () {
            var password = {};
            logic.login(username, password, function () {
                throw Error();
            }, function (message) {
                expect(message).toEqual('invalid password');
            });
        });
        it('should succeed on correct username and password', function () {
           //logic.register('m', 'm', 'maryam', '123', function () { }, function () { })//Hauria d'intentar prescindir del register, per si fallés el register. hauria de posar-ho com a user = {name:'sss', username:.....}; Però en el beforeEach
            logic.login(username, password, function (user) {
                expect(user).toBeDefined();
                expect(user.name).toEqual('ma');
                expect(user.email).toEqual('ma@ma.com');
                expect(user.username).toEqual('maryam');
                expect(user.password).not.toBeDefined();
            }, function (message) {
                throw Error(message);
            });
        });
        it('should fail on incorrect username', function () {
            var username = 'mar';
            var error;
            var msg;
            logic.login(username, password, function () {
                error = false;
            }, function (message) {
                error = true;
                msg = message
            });
            expect(error).toEqual(true);
            expect(msg).toEqual('wrong credentials!');
        });
        it('should fail on incorrect password', function () {
            var username = 'maryam';
            var password = '13';
            var error;
            var msg;
            logic.login(username, password, function () {
                error = false;
            }, function (message) {
                error = true;
                msg = message
            });
            expect(error).toEqual(true);
            expect(msg).toEqual('wrong credentials!');
        }); 
        it('should throw error on undefined success callback', function () {
            expect(function () {
                logic.login(username, password,
                    undefined,
                    function (message) {
                        throw Error(message);
                    }
                );
            }).toThrowError(TypeError, 'undefined is not a function');
        });
        it('should throw error on undefined fail callback', function () {
            expect(function () {
                logic.login(username, password, function(){
                    throw Error();
                }, undefined);
            }).toThrowError(TypeError, 'undefined is not a function');
        });
        it('should throw error on null success callback', function () {
            expect(function () {
                logic.login(username, password,
                    null,
                    function (message) {
                        throw Error(message);
                    }
                );
            }).toThrowError(TypeError, 'null is not a function');
        });
        it('should throw error on null fail callback', function () {
            expect(function () {
                logic.login(username, password, function(){
                    throw Error();
                }, null);
            }).toThrowError(TypeError, 'null is not a function');
        });
        it('should throw error on non-function success callback (number)', function () {
            expect(function () {
                logic.login(username, password,
                    1,
                    function (message) {
                        throw Error(message);
                    }
                );
            }).toThrowError(TypeError, '1 is not a function');
        });
        it('should throw error on non-function fail callback (number)', function () {
            expect(function () {
                logic.login(username, password, function(){
                    throw Error();
                }, 1);
            }).toThrowError(TypeError, '1 is not a function');
        });
    });

});