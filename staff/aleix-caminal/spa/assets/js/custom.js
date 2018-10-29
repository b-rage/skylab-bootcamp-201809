function Landing(title, tag, registerCallback, loginCallback) {
    Panel.call(this, title, tag);

    this.register = document.createElement('button');
    this.register.innerText = 'Register';
    this.register.className = 'panel__button';
    this.register.addEventListener('click', registerCallback);
    this.element.appendChild(this.register);

    this.login = document.createElement('button');
    this.login.innerText = 'Log In';
    this.login.className = 'panel__button';
    this.login.addEventListener('click', loginCallback);
    this.element.appendChild(this.login);
}

Landing.prototype = Object.create(Panel.prototype);
Landing.prototype.constructor = Landing;

function Register(title, tag, registerCallback, cancelCallback) {
    Panel.call(this, title, tag);
    this.element.style.display = 'none';
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

    this.form.addEventListener('submit', function(event) {
        event.preventDefault();
        registerCallback(this.form);
    }.bind(this));

    this.element.appendChild(this.form);
}

Register.prototype = Object.create(Panel.prototype);
Register.prototype.constructor = Register;

function Login(title, tag, loginCallback, cancelCallback) {
    Panel.call(this, title, tag);
    this.element.style.display = 'none';
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

    this.form.addEventListener('submit', function(event) {
        event.preventDefault();
        loginCallback(this.form);
    }.bind(this));

    this.element.appendChild(this.form);
}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;

function Welcome(title, tag, logoutCallback) {
    Panel.call(this, title, tag);
    this.element.style.display = 'none';

    this.logout = document.createElement('button');
    this.logout.type = 'button';
    this.logout.innerText = 'Log Out';
    this.logout.className = 'panel__button';
    this.logout.addEventListener('click', logoutCallback);
    this.element.appendChild(this.logout);
}

Welcome.prototype = Object.create(Panel.prototype);
Welcome.prototype.constructor = Welcome;
