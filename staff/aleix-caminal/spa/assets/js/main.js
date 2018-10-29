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
            welcome.element.querySelector('.panel__title').innerText = 'Welcome ' + user.name + '!';
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

document.body.appendChild(landing.element);
document.body.appendChild(register.element);
document.body.appendChild(login.element);
document.body.appendChild(welcome.element);
