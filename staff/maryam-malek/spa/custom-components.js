function Landing(title, tag, registerCallback, loginCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'panel';

    this.title.className = 'panel__title';
    this.register = document.createElement('button');
    this.register.innerText = 'Register';
    this.register.addEventListener('click', registerCallback);
    this.register.className = 'panel__button';

    this.element.appendChild(this.register);

    this.element.appendChild(document.createTextNode(' or '));

    this.login = document.createElement('button');
    this.login.innerText = 'Login';
    this.login.addEventListener('click', loginCallback);
    this.login.className = 'panel__button';

    this.element.appendChild(this.login);
}

Landing.prototype = Object.create(Panel.prototype);
Landing.prototype.constructor = Landing;

function Login(title, tag, loginCallback, backCallback) {
    Panel.call(this, title, tag);
    
    this.element.className = 'panel';
    
    this.title.className = 'panel__title';
    
    // this.element.style.display = 'none';
    this.hide();

    this.form = document.createElement('form');
    this.form.className = 'panel-form';
    this.form.addEventListener('submit', function(event) {
        event.preventDefault();

        var username = this.username.value;
        var password = this.password.value;

        loginCallback(username, password);
    }.bind(this));
    this.element.appendChild(this.form);

    this.username = document.createElement('input');
    this.username.placeholder = 'Username...';
    this.username.className = 'panel-form__element';

    this.form.appendChild(this.username);

    this.password = document.createElement('input');
    this.password.type = 'password';
    this.password.placeholder = 'Password...';
    this.password.className = 'panel-form__element';

    this.form.appendChild(this.password);

    this.login = document.createElement('button');
    // this.login.type = 'button'; //Que no sigui submit, i no envii al servidor
    this.login.innerText = 'Login';
    // this.login.addEventListener('click', loginCallback);
    this.login.className = 'panel__button';

    this.form.appendChild(this.login);

    this.back = document.createElement('a');
    this.back.innerText = 'Back';
    this.back.className = 'panel__back';
    this.back.addEventListener('click', backCallback);
    
    this.element.appendChild(this.back);
}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;

function Register(title, tag, registerCallback, backCallback){
    Panel.call(this, title, tag);

    this.element.className = 'panel';

// this.element.style.display = 'none';
    this.hide();    
    this.title.className = 'panel__title';

    this.form = document.createElement('form');
    this.form.className = 'panel-form';
    this.form.addEventListener('submit', function(event) {
        event.preventDefault();

        var name = this.name.value;
        var email = this.email.value;
        var username = this.username.value;
        var password = this.password.value;

        registerCallback(name, email, username, password);
    }.bind(this));
    this.element.appendChild(this.form);

    this.name = document.createElement('input');
    this.name.placeholder = 'Name...';
    this.name.className = 'panel-form__element';

    this.form.appendChild(this.name);
    
    this.username = document.createElement('input');
    this.username.placeholder = 'Username...';
    this.username.className = 'panel-form__element';

    this.form.appendChild(this.username);
    
    this.email = document.createElement('input');
    this.email.placeholder = 'Email adress...';
    this.email.className = 'panel-form__element';

    this.form.appendChild(this.email);

    this.password = document.createElement('input');
    this.password.type = 'password';
    this.password.placeholder = 'Password...';
    this.password.className = 'panel-form__element';

    this.form.appendChild(this.password);

    this.register = document.createElement('button');
    // this.register.type = 'button';
    this.register.innerText = 'Register';
    // this.register.addEventListener('click', registerCallback);
    this.register.className = 'panel__button';

    this.form.appendChild(this.register);

    this.back = document.createElement('a');
    this.back.innerText = 'Back';
    this.back.className = 'panel__back';
    this.back.addEventListener('click', backCallback);
    this.element.appendChild(this.back);
}

Register.prototype = Object.create(Panel.prototype);
Register.prototype.constructor = Register;

function Welcome(title, tag, logOutCallback){
    Panel.call(this, title, tag);

    this.element.className = 'panel';

    // this.element.style.display = 'none';
    this.hide();
    this.title.className = 'panel__title';

    this.h1 = document.createElement('h1');
    this.h1.innerText = 'Welcome, Benvinguda, Bienvenida!!!';

    this.element.appendChild(this.h1);

    this.logOut = document.createElement('button');
    this.logOut.type = 'button';
    this.logOut.innerText = 'Log out';
    this.logOut.addEventListener('click', logOutCallback);
    this.logOut.className = 'panel__button';

    this.element.appendChild(this.logOut);
}

Welcome.prototype = Object.create(Panel.prototype);
Welcome.prototype.constructor = Welcome;