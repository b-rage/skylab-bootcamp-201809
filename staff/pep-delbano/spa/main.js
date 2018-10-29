var landing = new Landing('Choose an option', 'section',
    function() { //registerCallback
       landing.hide();
       register.show();
    },
    function() { //loginCallback
        landing.hide();
        login.show();
    });

document.body.appendChild(landing.element);



var register = new Register('Register','section', function(name, lname, pc, usern, pass, confirmpass){   //saveDataCallback tiene q guardar los datos del cliente
    logic.register(name, lname, pc, usern, pass, confirmpass,
            function() { //onSuccess
            register.hide();
            login.show();
        },
        function(message) { //onFail
            alert(message);
        }
    );  //fin logic

    },          //fin callback saveDataCallback, 3º parametro del componente Register

    function() {        //backCallback, 4º parametro del componente Register
            register.hide();
            landing.show();
    });

document.body.appendChild(register.element);



var login = new Login('Login', 'section', function(username, password){  //matchCallback
        logic.login(username, password, function(user) { //onSuccess (1º callback del matchCallback)
                login.hide();

                welcome.title.innerText = 'Welcome, ' + user.name + '!';

                welcome.show();
            },
            function(message) { //onFail (2º callback del matchCallback)
                alert(message);
            }); //fin logic y matchCallback

        }, function() {  //
            login.hide();
            landing.show();
        });

document.body.appendChild(login.element);




var welcome = new Welcome ('Welcome','Section',
    function(){ //welcomeCallback, simplemente nos muestra la pagina welcome tras comprobar campos login
        login.hide();
        welcome.show();
    });

document.body.appendChild(welcome.element);