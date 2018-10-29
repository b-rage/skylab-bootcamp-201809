describe('logic', function () {

        var name;
        var surname;
        var username;
        var password;

    beforeEach(function() {  
        name= 'pepe';
        surname= 'garcia';
        username= 'pepeg';
        password= '1234';

    });


// __________________________________REGISTER______________________________//

    describe('register', function () {
        it('succes case', function () {

            logic.register(name, surname, username, password,
                function () {
                    error = false;

                },
                function (message){
                    throw Error(message);
                }
            );
        });

        it('should fail saving on undefined username', function () {

            username = "";
            logic.register(name, surname, username, password,
                function () {
                    throw Error();
    
                },
                function (message){
                    expect(message).toEqual('invalid username');
                }
            );
                
            });

        it('should fail saving on undefined password', function () {

            password = "";
            logic.register(name, surname, username, password,
                function () {
                    throw Error();
    
                },
                function (message){
                    expect(message).toEqual('invalid password');
                }
            );
                
            });

            it('should fail saving on undefined surname',function () {
    
                surname = "";
                logic.register(name, surname, username, password,
                    function () {
                        throw Error();
        
                    },
                    function (message){
                        msg = message;
                        error = true;
                    }
                );
                    expect(msg).toEqual('invalid surname');
                });

        
            it('should fail saving on undefined on succes callback', function () {
                expect(function () {
                    logic.register(name, surname, username, password,
                        "",
                        function(message){
                            throw Error(message);
                        }
                    );
                    
                }).toThrowError(TypeError, " is not a function");
                });

            it('should fail saving on undefined on succes callback', function () {
                expect(function () {
                    logic.register(name, surname, username, password,
                        undefined,
                        function(message){
                            throw Error(message);
                        }
                    );
                }).toThrowError(TypeError, "undefined is not a function");
             });

             it('should fail saving on undefined on succes callback', function () {
                expect(function () {
                    logic.register(name, surname, username, password,
                        null,
                        function(message){
                            throw Error(message);
                        }
                    );
                    
                }).toThrowError(TypeError, "null is not a function");
    
             });
    
            }); 






// __________________________________ LOGIN____________________________________//




        describe('login', function () {

            beforeEach(function() {
                user = {
                    name: 'pepe',
                    surname: 'garcia',
                    username: 'pepeg',
                    password: '1234'
                }
            });
            
            it('succes case', function () {

            logic.login(username, password,
                function () {
                    expect(user).toBeDefined();
                    expect(user.username).toEqual("pepeg");
                    expect(user.password).toEqual("1234");
                    expect(user.name).toEqual("pepe");
                    expect(user.surname).toEqual("garcia");

                },
                function (message){
                    throw Error(message);
                }
            );
            });

         // .................. INVALID USERNAME CASES..............//

            it('should fail saving on wrong username', function () {
                logic.login(undefined, password,
                function () {
                    throw Error();        
                },
                function (message){
                    expect(message).toEqual('invalid username');
                }
            );
                
            });

            it('should fail saving on wrong username', function () {
                logic.login(null, password,
                function () {
                    throw Error();        
                },
                function (message){
                    expect(message).toEqual('invalid username');
                }
            );
                
            });

            it('should fail saving on wrong username', function () {
                logic.login("", password,
                function () {
                    throw Error();        
                },
                function (message){
                    expect(message).toEqual('invalid username');
                }
            );
                // .................. INVALID PASSWORD CASES..............//
            });

            it('should fail saving on undefined password', function () {
                logic.login(username, "",
                    function () {
                        throw Error();        
                    },
                function (message){
                    expect(message).toEqual('invalid password');
                }
            );
               
            });

            it('should fail saving on undefined password', function () {
                logic.login(username, undefined,
                    function () {
                        throw Error();        
                    },
                function (message){
                    expect(message).toEqual('invalid password');
                }
            );
               
            });

            it('should fail saving on undefined password', function () {
                logic.login(username, null,
                    function () {
                        throw Error();        
                    },
                function (message){
                    expect(message).toEqual('invalid password');
                }
            );
               
            });

              // .................. WRONG CREDENTIALS..............//

            it('wrong credentials', function () {
                
                logic.login("123", "pepeg",
                function () {
                    throw Error();        
                },
                function (message){
                    expect(message).toEqual('wrong credentials!');
                }
            );
                
            });

            // it('should fail saving on undefined on succes callback', function () {
            //     expect(function () {
            //         logic.login(name, surname, username, password,
            //             "",
            //             function(message){
            //                 throw Error(message);
            //             }
            //         );
                    
            //     }).toThrowError(TypeError, " is not a function");
            //     });

            // it('should fail saving on undefined on succes callback', function () {
            //     expect(function () {
            //         logic.register(name, surname, username, password,
            //             undefined,
            //             function(message){
            //                 throw Error(message);
            //             }
            //         );
            //     }).toThrowError(TypeError, "undefined is not a function");
            //  });

            //  it('should fail saving on undefined on succes callback', function () {
            //     expect(function () {
            //         logic.register(name, surname, username, password,
            //             null,
            //             function(message){
            //                 throw Error(message);
            //             }
            //         );
                    
            //     }).toThrowError(TypeError, "null is not a function");
            // });  
   
        });
    });  

