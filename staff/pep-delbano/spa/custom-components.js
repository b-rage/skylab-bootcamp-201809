function Landing(title, tag, saveDataCallback, loginCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'landing'; //para edirarlo con sass
    this.title.className = 'landing__title'; //para edirarlo con sass

    this.register = document.createElement('button');
    this.register.innerText = 'Register';
    this.register.addEventListener('click', saveDataCallback);
    this.register.className = 'landing__button';
    this.element.appendChild(this.register);

    this.login = document.createElement('button');
    this.login.innerText = 'Login';
    this.login.className = 'login__button';
    this.login.addEventListener('click', loginCallback);

    this.element.appendChild(this.login);
}

Landing.prototype = Object.create(Panel.prototype);
Landing.prototype.constructor = Landing;



function Register(title, tag, saveDataCallback, backCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'register';

    this.title.className = 'register__title';

    this.hide();

    this.form = document.createElement('form');
    this.form.addEventListener('submit', function(event) {
        event.preventDefault();

        var name = this.name.value;
        var lname = this.lname.value;
        var pc = this.PC.value;
        var usern = this.username.value;
        var pass = this.password.value;
        var confirmpass = this.confirmPass.value;

        saveDataCallback(name, lname, pc, usern, pass, confirmpass); //llamamos la callback con los datos introducidos por el cliente como parámetros,

    }.bind(this)); //ligamos la funcion a this, así this deja de apuntar al window y apunta al padre de la funcion (osea a Register)


    this.element.appendChild(this.form);


    this.name = document.createElement('input');
    this.name.className = 'register--input';
    this.name.placeholder = 'name';
    this.form.appendChild(this.name);



    this.lname = document.createElement('input');
    this.lname.className = 'register--input';
    this.lname.placeholder = 'surname';
    this.form.appendChild(this.lname);



    this.PC = document.createElement('input');
    this.PC.className = 'register--input';
    this.PC.placeholder = 'postal code';
    this.form.appendChild(this.PC);


    this.username = document.createElement('input');
    this.username.className = 'register--input';
    this.username.placeholder = 'username';
    this.form.appendChild(this.username);


    this.password = document.createElement('input');
    this.password.className = 'register--input';
    this.password.type = "password";
    this.password.placeholder = 'password';
    this.form.appendChild(this.password);


    this.confirmPass = document.createElement('input');
    this.confirmPass.className = 'register--input';
    this.confirmPass.type = "password";
    this.confirmPass.placeholder = 'confirm password';
    this.form.appendChild(this.confirmPass);

    
    this.register = document.createElement('button');
    this.register.innerText = 'Register';
    this.register.className = 'register__button';
    this.form.appendChild(this.register);
    

    this.back = document.createElement('a');
    this.back.innerText = 'Back';
    this.back.href = '#';
    this.back.addEventListener('click', backCallback);
    this.form.appendChild(this.back);
    
}

Register.prototype = Object.create(Panel.prototype);
Register.prototype.constructor = Register;



function Login(title, tag, matchCallback, backCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'login';

    this.title.className = 'login__title';
    
    this.hide();
    
    this.form = document.createElement('form');
    this.form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        var username = this._username.value;
        var password = this._password.value;

        matchCallback(username, password);

    }.bind(this));

    this.element.appendChild(this.form);

    this._username = document.createElement('input');
    this._username.placeholder = "Username";
    this._username.className = 'userL';
    this.form.appendChild(this._username);

    this._password = document.createElement('input');
    this._password.placeholder = "Password";
    this._password.className = 'passL';
    this._password.type = "password";
    this.form.appendChild(this._password);

    this.login = document.createElement('button');
    this.login.innerText = 'Login';
    this.form.appendChild(this.login);


    this.back = document.createElement('a');
    this.back.innerText = 'Back';
    this.back.href = '#';
    this.back.addEventListener('click', backCallback);
    this.form.appendChild(this.back);

}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;



function Welcome(title, tag) {
    Panel.call(this, title, tag);

    this.hide();

    this.title.className = 'customizedTitle';
    
}

Welcome.prototype = Object.create(Panel.prototype);
Welcome.prototype.constructor = Welcome;