function Landing(title, tag, registerCallback, loginCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'landing';

    this.title.className = 'landing__title';

    this.register = document.createElement('button');
    this.register.className = 'btn btn-success';
    this.register.innerText = 'Register';
    this.register.addEventListener('click', registerCallback);

    this.element.appendChild(this.register);

    this.element.appendChild(document.createTextNode(' or '));

    this.login = document.createElement('button');
    this.login.className = 'btn btn-primary';
    this.login.innerText = 'Login';
    this.login.addEventListener('click', loginCallback);

    this.element.appendChild(this.login);
}

Landing.prototype = Object.create(Panel.prototype);
Landing.prototype.constructor = Landing;

function Login(title, tag, loginCallback, backCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'login';
    this.element.style.display = 'none';
    
    this.title.className = 'login__title';
   
    this.form = document.createElement('form');

    this.form.addEventListener('submit', function(event) {
        event.preventDefault();

        var username = this.username.value;
        var password = this.password.value;

        loginCallback(username, password);
    }.bind(this));

    this.element.appendChild(this.form);

    this.username = document.createElement('input');
    this.form.appendChild(this.username);
    this.username.placeholder = "username";
    this.username.className = 'login_input';

    this.password = document.createElement('input');
    this.form.appendChild(this.password);
    this.password.placeholder = "password";
    this.password.type = "password";
    this.password.className = 'login_input';


    this.login = document.createElement('button');
    this.form.appendChild(this.login);
    this.login.innerText = "Login";
    this.login.className = "btn btn-primary";

    this.back = document.createElement('a');
    this.back.href = '#';
    this.back.innerText = 'Back';
    this.back.addEventListener('click', backCallback);
    this.element.appendChild(this.back);
}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;

// TODO Register & Welcome

function Register (title, tag, registerCallback, backCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'register';

    this.title.className = 'register__title';

    this.element.style.display = 'none';

    this.form = document.createElement('form');
    this.form.addEventListener('submit', function(event){
        event.preventDefault();

        var name = this.name.value;
        var surname = this.surname.value;
        var username = this.username.value;
        var password = this.password.value;

        registerCallback(name, surname, username, password);
    }.bind(this));

    this.element.appendChild(this.form);

    this.name = document.createElement('input');
    this.name.placeholder = "Name";
    this.name.className = 'register__input';
    this.form.appendChild(this.name);
   

    this.surname = document.createElement('input');
    this.surname.className = 'register__input';
    this.surname.placeholder = "Surname";
    this.form.appendChild(this.surname);

    this.username = document.createElement('input');
    this.username.className = 'register__input';
    this.username.placeholder = "New username";
    this.form.appendChild(this.username);

    this.password = document.createElement('input');
    this.password.className = 'register__input';
    this.password.placeholder = "New password";
    this.password.type = 'password';
    this.form.appendChild(this.password);

    this.register = document.createElement('button');
    this.register.innerText = "ok";
    this.register.className = "btn btn-primary";
    this.form.appendChild(this.register);

    this.back = document.createElement('a');
    this.back.href = '#';
    this.back.innerText = 'Back';
    this.back.addEventListener('click', backCallback);

    this.element.appendChild(this.back);
}

Register.prototype = Object.create(Panel.prototype);
Register.prototype.constructor = Register;


function Welcome (title, tag) {
    Panel.call(this, title, tag);

    this.element.style.display = 'none';
    this.title.className = 'welcome__title';
    this.element.className = 'welcome';


}

Welcome.prototype = Object.create(Panel.prototype);
Welcome.prototype.constructor = Welcome;