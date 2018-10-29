function Landing(title, tag, registerCallback, loginCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'landing';

    this.title.className = 'landing__title';

    this.register = document.createElement('button');
    this.register.innerText = 'Register';
    this.register.addEventListener('click', registerCallback);
    this.register.className = 'landing__button';

    this.element.appendChild(this.register);

    this.element.appendChild(document.createTextNode(' or '));

    this.login = document.createElement('button');
    this.login.innerText = 'Login';
    this.login.addEventListener('click', loginCallback);
    this.login.className = 'landing__button';

    this.element.appendChild(this.login);
}

Landing.prototype = Object.create(Panel.prototype);
Landing.prototype.constructor = Landing;

function Register(title, tag, registerCallback, backCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'register';

    this.title.className = 'register__title';

    this.hide();

    this.form = document.createElement('form');
    this.form.addEventListener('submit', function (event) {
        event.preventDefault(); // evita el comportamiento default del form que es el de enviar información al presionar

        var name = this.name.value; // 'value' hace referencia al valor del campo del formulario
        var surname = this.surname.value;
        var username = this.username.value;
        var password = this.password.value;

        registerCallback(name, surname, username, password);
    }.bind(this));

    this.element.appendChild(this.form);

    this.name = document.createElement('input');
    this.name.className = 'register__input';
    this.name.placeholder = 'name';

    this.form.appendChild(this.name);

    this.surname = document.createElement('input');
    this.surname.className = 'register__input';
    this.surname.placeholder = 'surname';

    this.form.appendChild(this.surname);

    this.username = document.createElement('input');
    this.username.className = 'register__input';
    this.username.placeholder = 'username';

    this.form.appendChild(this.username);

    this.password = document.createElement('input');
    this.password.className = 'register__input';
    this.password.type = 'password';
    this.password.placeholder = 'password';

    this.form.appendChild(this.password);

    this.register = document.createElement('button');
    this.register.innerText = 'Register';
    this.register.className = 'register__button';

    this.form.appendChild(this.register);

    this.back = document.createElement('a');
    this.back.href = '#';
    this.back.innerText = 'Back';
    this.back.addEventListener('click', backCallback);

    this.element.appendChild(this.back);
}

Register.prototype = Object.create(Panel.prototype);
Register.prototype.constructor = Register;


function Login(title, tag, loginCallback, backCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'login';

    this.title.className = 'login__title';

    this.hide(); // estoy llamando al this.element.style.display = 'none' de Component

    this.form = document.createElement('form');
    this.element.addEventListener('submit', function (event) {
        event.preventDefault();

        var username = this.username.value;
        var password = this.password.value;

        loginCallback(username, password);
    }.bind(this));

    this.element.appendChild(this.form);

    this.username = document.createElement('input');
    this.username.className = 'login__input';
    this.username.placeholder = 'Enter username';

    this.form.appendChild(this.username);


    this.password = document.createElement('input');
    this.password.className = 'login__input';
    this.password.type = 'password';
    this.password.placeholder = 'password';

    this.form.appendChild(this.password);


    this.login = document.createElement('button');
    this.login.innerText = 'Login';
    this.login.className = 'login__button';

    this.form.appendChild(this.login);

    this.back = document.createElement('a');
    this.back.href = '#';
    this.back.innerText = 'Back';
    this.back.addEventListener('click', backCallback);

    this.element.appendChild(this.back);
}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;


function Welcome(title, tag) {
    Panel.call(this, title, tag);


    this.element.className = 'welcome';
    this.element.style.display = 'none'; // o this.hide() heredado de Components en web-components.js

    this.title.className = 'welcome__title';
}

Welcome.prototype = Object.create(Panel.prototype);
Welcome.prototype.constructor = Welcome;