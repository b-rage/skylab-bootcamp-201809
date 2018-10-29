var landing = new Landing('Choose an option', 'section',
    function () {
        landing.element.hide();
        register.element.show();
    },
    function () {
        landing.element.hide();
        login.element.show();
    });

landing.element.appendTo($('.container'));

var login = new Login('Login', 'section', function (username, password) {
    logic.login(username, password, function () {
        wrongCredentials.element.hide();
        login.element.hide();
        welcome.title.append( 'Welcome, ' + username + '. Enjoy!')
        welcome.element.show();
    }, function (message) {
        wrongCredentials.title.text(message);
        wrongCredentials.element.show();
    })

}, function () {  
    wrongCredentials.element.hide();
    login.element.hide();
    register.element.show();

});

login.element.appendTo($('.container'));

var wrongCredentials = new Credentials('Wrong password!', 'section');
wrongCredentials.element.appendTo($('.container'));

var register = new Register('Register Now!', 'section', function (name, surname, username, password) {
    logic.register(name, surname, username, password, function () {

        wrongRegister.element.hide();
        register.element.hide();
        login.element.show();
    }, function (message) {
        wrongRegister.title.text(message);
        wrongRegister.element.show();
    });
}, function() {
    wrongRegister.element.hide();
    register.element.hide();
    landing.element.show();
})

register.element.appendTo($('.container'));

var wrongRegister = new Credentials('', 'section');
wrongRegister.element.appendTo($('.container'));


var welcome = new Welcome('', 'section');

welcome.element.appendTo($('.container'));