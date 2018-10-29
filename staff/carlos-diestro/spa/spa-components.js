function Landing(title, tag, registerCallback, loginCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'landing';

    this.register = document.createElement('button');
    this.register.innerText = 'Register';
    this.register.addEventListener('click', registerCallback);
    this.element.appendChild(this.register);

    this.element.appendChild(document.createTextNode(' or '));

    this.login = document.createElement('button');
    this.login.innerText = 'Login';
    this.login.addEventListener('click', loginCallback);
    this.element.appendChild(this.login);
}

Landing.prototype = Object.create(Panel.prototype);
Landing.prototype.constructor = Landing;

function Register(title, tag, registerCallback, backCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'register';
    this.hide();

    this.form = document.createElement('form');
    this.form.addEventListener('submit', function(event) {
        event.preventDefault();

        var email = this.email.value;
        var name = this.name.value;
        var password = this.password.value;
        var rePassword = this.rePassword.value;

        registerCallback(email, name, password, rePassword);
    }.bind(this));
    this.element.appendChild(this.form);

    this.email = document.createElement('input');
    this.email.type = 'text';
    this.email.name = 'email';
    this.email.placeholder = 'Email';
    this.form.appendChild(this.email);

    this.name = document.createElement('input');
    this.name.type = 'text';
    this.name.name = 'name';
    this.name.placeholder = 'Name';
    this.form.appendChild(this.name);

    this.password = document.createElement('input');
    this.password.type = 'password';
    this.password.name = 'password';
    this.password.placeholder = 'Password';
    this.form.appendChild(this.password);

    this.rePassword = document.createElement('input');
    this.rePassword.type = 'password';
    this.rePassword.name = 'rePassword';
    this.rePassword.placeholder = 'Repeat password';
    this.form.appendChild(this.rePassword);

    this.register = document.createElement('button');
    this.register.innerText = 'Register';
    this.form.appendChild(this.register);

    this.form.appendChild(document.createTextNode(' '));

    this.back = document.createElement('a');
    this.back.href = '#';
    this.back.innerText = 'Back';
    this.back.className = 'back';
    this.back.addEventListener('click', backCallback);
    this.form.appendChild(this.back);
}

Register.prototype = Object.create(Panel.prototype);
Register.prototype.constructor = Register;

function Login(title, tag, loginCallback, backCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'login';
    this.hide();

    this.form = document.createElement('form');
    this.form.addEventListener('submit', function(event) {
        event.preventDefault();

        var name = this.name.value;
        var password = this.password.value;

        loginCallback(name, password);
    }.bind(this));
    this.element.appendChild(this.form);

    this.name = document.createElement('input');
    this.name.type = 'text';
    this.name.name = 'password';
    this.name.placeholder = 'Name';
    this.form.appendChild(this.name);

    this.password = document.createElement('input');
    this.password.type = 'password';
    this.password.name = 'password';
    this.password.placeholder = 'Password';
    this.form.appendChild(this.password);

    this.login = document.createElement('button');
    this.login.innerText = 'Login';
    this.form.appendChild(this.login);

    this.form.appendChild(document.createTextNode(' '));

    this.back = document.createElement('a');
    this.back.href = '#';
    this.back.innerText = 'Back';
    this.back.className = 'back';
    this.back.addEventListener('click', backCallback);
    this.form.appendChild(this.back);
}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;

function Welcome(title, tag, logoutCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'welcome';
    this.hide();

    this.paragraph = document.createElement('p');
    this.paragraph.appendChild(document.createTextNode('Hello my friend'));
    this.element.appendChild(this.paragraph);

    this.logout = document.createElement('button');
    this.logout.innerText = 'Logout';
    this.logout.addEventListener('click', logoutCallback);
    this.element.appendChild(this.logout);
}

Welcome.prototype = Object.create(Panel.prototype);
Welcome.prototype.constructor = Welcome;

function inputError(message, tag) {
    Panel.call(this, message, tag);

    this.element.className = 'error';
}

inputError.prototype = Object.create(Panel.prototype);
inputError.prototype.constructor = inputError;