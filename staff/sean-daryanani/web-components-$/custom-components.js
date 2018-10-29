function Landing(title, tag, registerCallback, loginCallback) {
    Panel.call(this, title, tag);

    this.element.addClass('landing');

    this.register = document.createElement('button');
    this.register = $('<button></button>')
    this.register.append('Register');
    this.register.on('click', registerCallback);
    this.register.addClass('button landing__button btn-primary btn-lg');

    this.register.appendTo(this.element);

    this.login = $('<button></button>');
    this.login.append('Login');
    this.login.on('click', loginCallback)
    this.login.className = 'button landing__button'
    this.login.addClass('button landing__button btn-primary btn-lg');


    this.login.appendTo(this.element);
    this.login.appendTo(this.element);
}

Landing.prototype = Object.create(Panel.prototype);
Landing.prototype.constructor = Landing;

function Login(title, tag, loginCallback, newUserCallback) {
    Panel.call(this, title, tag);

    this.element.hide();
    this.element.addClass('login');

    this.form = document.createElement('form');
    this.form = $('<form></form>');
    this.form.addClass('login__form');

    this.form.appendTo(this.element);

    this.username = document.createElement('input');
    this.username = $('<input></input>')
    this.username.prop('type', 'text');
    this.username.addClass('testone');
    this.username.attr('placeholder', 'Username');

    this.username.addClass('input login__username');

    this.username.appendTo(this.form)

    this.password = $('<input></input>');
    this.password.prop('type', 'password');
    this.password.addClass('testtwo');
    this.password.attr('placeholder', 'Password');
    this.password.addClass('input login__password');

    this.password.appendTo(this.form)

    this.login = $('<button></button>')
    this.form.on('submit', function(event) {
        event.preventDefault();

        var username = this.username.val();
        var password = this.password.val();

        loginCallback(username, password);
    }.bind(this));

    this.login.append('Submit');
    this.login.on('click', loginCallback);
    this.login.addClass('button login__button');

    this.login.appendTo(this.form);

    this.newUser = $('<p></p>');
    this.newUser.append('New user?')
    this.newUser.appendTo(this.element);
    
    
    this.backToRegister = document.createElement('button');
    this.backToRegister = $('<button></button>');
    this.backToRegister.prop('type', 'button');
    this.backToRegister.append('Register here');
    this.backToRegister.on('click', newUserCallback);
    this.backToRegister.addClass('button login__back-to-register');

    this.backToRegister.appendTo(this.element);
}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;

// TODO Register & Welcome

function Register(title, tag, registerCallback, backCallBack) {
    Panel.call(this, title, tag);

    this.element.hide();
    this.element.addClass('register');

    this.form = $('<form></form>')
    this.form.addClass('register__form');
    this.form.on('submit', function() {
        event.preventDefault();
        var name = this.name.val();
        var surname = this.surname.val();
        var username = this.userName.val();
        var password = this.password.val();
        registerCallback(name, surname, username, password);
    }.bind(this));

    this.form.appendTo(this.element);

    this.name = $('<input></input>')
    this.name.prop('type', 'text');
    this.name.attr('placeholder', 'Name');
    this.name.addClass('input register__email');

    this.name.appendTo(this.form);

    this.surname = $('<input></input>')
    this.surname.prop('type', 'text');
    this.surname.attr('placeholder', 'Full Name');
    this.surname.addClass('input register__fullname');

    this.surname.appendTo(this.form);

    this.userName = document.createElement('input');
    this.userName = $('<input></input>')
    this.userName.prop('type', 'text');
    this.userName.attr('placeholder', 'Username');
    this.userName.addClass('input register__username');

    this.userName.appendTo(this.form);

    this.password = $('<input></input>')
    this.password.prop('type', 'password');
    this.password.attr('placeholder', 'Password');
    this.password.addClass('input register__password');

    this.password.appendTo(this.form);

    this.register = $('<button></button>')
    this.register.append('Register Now');
    this.register.addClass('button register__submit');

    
    this.register.appendTo(this.form);

    this.backButton = $('<a></a>');
    this.backButton.attr('href', '#');
    this.backButton.append('Back to home')
    this.backButton.on('click', backCallBack);
    this.backButton.appendTo(this.element);

}
Register.prototype = Object.create(Panel.prototype);
Register.prototype.constructor = Register;

function Welcome(title, tag) {
    Panel.call(this, title, tag);
    this.element.hide();
    this.element.addClass('welcome');
}

Welcome.prototype = Object.create(Panel.prototype);
Welcome.prototype.constructor = Welcome;


function Credentials(title, tag) {
    Panel.call(this, title, tag); 
    this.element.addClass('login__error');
    this.element.hide();

}

Credentials.prototype = Object.create(Panel.prototype);
Credentials.prototype.constructor = Credentials;