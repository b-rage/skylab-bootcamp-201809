function Landing(title, tag, registerCallback, loginCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'landing';

    this.title.className = 'landing__title';

    this.register = document.createElement('button');
    this.register.innerText = 'Register';
    this.register.className = 'landing__button'
    this.register.addEventListener('click', registerCallback);

    this.element.appendChild(this.register);

    this.element.appendChild(document.createTextNode(' or '));

    this.login = document.createElement('button');
    this.login.className = 'landing__button';
    this.login.innerText = 'Login';
    this.login.addEventListener('click', loginCallback);

    this.element.appendChild(this.login);
}

Landing.prototype = Object.create(Panel.prototype);
Landing.prototype.constructor = Landing;

function Login(title, tag, loginCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'login';

    this.element.title.className = 'login__title'

    this.element.style.display = 'none';

    this.form = document.createElement('form');

    this.element.appendChild(this.form);

    this.username = document.createElement('input');
    this.username.className = 'login__input';
    this.username.name = ('input1');
    

    this.form.appendChild(this.username);

    this.password = document.createElement('input');
    this.password.className = 'login__input';
    this.password.name = ('input2');

    this.form.appendChild(this.password);

    this.login = document.createElement('button');
    this.login.className='login__button';

    this.login.innerText = ('Login');

    this.login.type = ('button');

    this.login.addEventListener('click', loginCallback);

    this.form.appendChild(this.login);

    this.message = document.createElement('p');
    this.message.name = 'alertlogin';
    this.message.class = 'alertclass';
    this.message.innerText = '';
    this.form.appendChild(this.message);
}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;


// TODO Register & Welcome

function Register(title, tag, registerCallback, backCallback){
    Panel.call(this, title, tag);

    this.element.className = 'register';

    this.element.title.className = 'register__title'

    this.hide();

    this.form = document.createElement('form');
    this.form.addEventListener('submit', function(event) {
        event.preventDefault();

        var name = this.name.value;
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

    this.user = document.createElement('p');
    this.user.innerText = 'Usuario';
    this.form.appendChild(this.user);

    this.username = document.createElement('input');
    this.username.className = 'register__input';
    this.username.name = ('userreg');
    this.username.placeholder = 'username';

    this.form.appendChild(this.username);

    this.pass = document.createElement('p');
    this.pass.innerText = 'Password';
    this.form.appendChild(this.pass);

    this.password = document.createElement('input');
    this.password.className = 'register__input';
    this.password.name = ('passreg');
    this.password.type = 'password';
    this.password.placeholder = 'password';

    this.form.appendChild(this.password);

    this.register = document.createElement('button');
    this.register.innerText = ('Register');
    this.register.type=('button');
    this.register.className='register__button'
    this.register.addEventListener('click', registerCallback);

    this.form.appendChild(this.register);

    this.message = document.createElement('p');
    this.message.innerText = '';
    this.form.appendChild(this.message);

    this.back = document.createElement('a');
    this.back.href = '#';
    this.back.innerText = 'Back';
    this.back.addEventListener('click', backCallback);

    this.element.appendChild(this.back);

}

Register.prototype = Object.create(Panel.prototype);
Register.prototype.constructor = Landing;

function Welcome (title, tag){

    Panel.call(this, title, tag);

    this.element.style.display = 'none';

    this.element.className = 'welcome';
    this.title.className ='welcome__title'

    this.h1 = document.createElement('h1');
    this.element.appendChild(this.h1);
    this.h1.innerText = ('Welcome to the page of Pacus!!');
    

}

Welcome.prototype = Object.create(Panel.prototype);
Welcome.prototype.constructor = Welcome;

