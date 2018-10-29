function Landing(title, tag, registerCallback, loginCallback) {
    Panel.call(this, title, tag);

    this.register = document.createElement('button');
    $(this.register).html('Register');
    $(this.register).addClass('panel__button');
    $(this.register).on('click', registerCallback);
    $(this.element).append(this.register);

    this.login = document.createElement('button');
    $(this.login).html('Log In');
    $(this.login).addClass('panel__button');
    $(this.login).on('click', loginCallback);
    $(this.element).append(this.login);
}

Landing.prototype = Object.create(Panel.prototype);
Landing.prototype.constructor = Landing;

function Register(title, tag, registerCallback, cancelCallback) {
    Panel.call(this, title, tag);
    $(this.element).hide();

    this.form = new Form('register', [
        {
            element: 'input',
            id:'name'
        },
        {
            element: 'input',
            id:'username'
        },
        {
            element: 'input',
            id: 'password',
            type: 'password'
        },
        {
            element: 'input',
            id: 'confirm_password',
            type: 'password'
        },
        {
            element: 'button',
            label: 'Cancel',
            class: 'form-buttons__button form-buttons__button--link',
            on: {
                click: cancelCallback
            }
        },
        {
            element: 'button',
            label: 'Register',
            type: 'submit'
        }
    ]);


    $(this.form).on('submit', function(event) {
        event.preventDefault();
        registerCallback(this.form);
    }.bind(this));
    $(this.element).append(this.form);
}

Register.prototype = Object.create(Panel.prototype);
Register.prototype.constructor = Register;

function Login(title, tag, loginCallback, cancelCallback) {
    Panel.call(this, title, tag);
    $(this.element).hide();

    this.form = new Form('login', [
        {
            element: 'input',
            id: 'username'
        },
        {
            element: 'input',
            id: 'password',
            type: 'password'
        },
        {
            element: 'button',
            label: 'Cancel',
            class: 'form-buttons__button form-buttons__button--link',
            on: {
                click: cancelCallback
            }
        },
        {
            element: 'button',
            label: 'Log In',
            type: 'submit'
        }
    ]);

    $(this.form).on('submit', function(event) {
        event.preventDefault();
        loginCallback(this.form);
    }.bind(this));
    $(this.element).append(this.form);
}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;

function Welcome(title, tag, logoutCallback) {
    Panel.call(this, title, tag);
    $(this.element).hide();

    this.logout = document.createElement('button');
    $(this.logout).html('Log Out');
    $(this.logout).addClass('panel__button');
    $(this.logout).on('click', logoutCallback);
    $(this.element).append(this.logout);
}

Welcome.prototype = Object.create(Panel.prototype);
Welcome.prototype.constructor = Welcome;
