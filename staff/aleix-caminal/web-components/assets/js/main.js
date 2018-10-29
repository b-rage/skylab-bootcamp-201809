var landing = new Landing('Choose an option', 'section',
    function() {
        landing.hide();
        register.show();
    },

    function() {
        landing.hide();
        login.show();
    }
);

var register = new Register('Register', 'section',
    function(form) {
        logic.register(form, function() {
            register.hide();
            login.show();
        });
    },

    function() {
        register.hide();
        landing.show();
    }
);

var login = new Login('Login', 'section',
    function(form) {
        logic.login(form, function() {
            $('.panel__title').html('Welcome ' + user.name + '!');
            login.hide();
            welcome.show();
        });
    },

    function() {
        login.hide();
        landing.show();
    }
);

var welcome = new Welcome('Welcome', 'section', function() {
    logic.logout(function() {
        welcome.hide();
        login.show();
    });
});

$('body').append(landing.element);
$('body').append(register.element);
$('body').append(login.element);
$('body').append(welcome.element);
