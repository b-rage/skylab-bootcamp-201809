// segunda iteración de la Single Page Application, con la lógica separada en otro archivo
var landing = new Landing('Choose an option', 'section',
    function () {
        landing.hide(); //registerCallback
        register.show();

    },
    function () { //loginCallback
        landing.hide();
        login.show();
    });

document.body.appendChild(landing.element); //aquí estoy pegando el componente al body del documento

var register = new Register('Register', 'section', function (name, surname, username, password) {
    logic.register(name, surname, username, password, function () { //onSuccess
            register.hide();
            login.show();

        },
        function (message) { //onFail
            alert(message);
        }
    );
}, function () { //backCallback
    register.hide();
    landing.show();
});

document.body.appendChild(register.element); //aquí estoy pegando el componente al body del documento

var login = new Login('Login', 'section', function (username, password) {
    logic.login(username, password, function (user) { //onSuccess()
            login.hide();

            welcome.title.innerText = 'Welcome, ' + user.name + '!';

            welcome.show();
        },
        function (message) { //onFail()
            alert(message);
        });
}, function () { //backCallback
    login.hide();
    landing.show();
});

document.body.appendChild(login.element); //aquí estoy pegando el componente al body del documento

var welcome = new Welcome('Welcome', 'section');

document.body.appendChild(welcome.element); //aquí estoy pegando el componente al body del documento