function Landing(title, tag, registerCallback, loginCallback) {
    Panel.call(this, title, tag);

    this.element.className = "landing";
    this.register = document.createElement('button');
    this.register.innerText = 'Register';
    this.register.className = "button";
    this.register.addEventListener('click', registerCallback);

    this.element.appendChild(this.register);

    this.login = document.createElement('button');
    this.login.innerText = 'Login';
    this.login.className = "button";
    this.login.addEventListener('click', loginCallback);

    this.element.appendChild(this.login);
}

Landing.prototype = Object.create(Panel.prototype);
Landing.prototype.constructor = Landing;


function Login(title, tag, loginCallback, backCallback) {
    Panel.call(this, title, tag);

    this.hide();
    this.element.className = "login";

    this.inputs = [{ Username: "username" }, { Password: "password" }];

    this.inputs.forEach((x, i) => {

        var groupfield = document.createElement('div');
        var label = document.createElement('label');
        var input = document.createElement('input');
        for (var key in x) {
            
            label.innerText = key;
            input.placeholder = key;
            input.name = x[key];
            input.id = x[key];
            input.type = key === "Password" ? "password" : "text";
        }
        groupfield.appendChild(label);
        groupfield.appendChild(input);
        this.element.appendChild(groupfield);
    });


    this.login = document.createElement('button');
    this.login.type = "button";
    this.login.className = "button";
    this.login.innerText = "Login";

    this.back = document.createElement('button');
    this.back.type = "button";
    this.back.className = "button";
    this.back.innerText = "Back";

    this.login.addEventListener("click", eve => {
        loginCallback(this.element.username.value, this.element.password.value);
    });

    this.back.addEventListener("click", eve => {
        backCallback();
    });

    this.element.appendChild(this.login);
    this.element.appendChild(this.back);
}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;
Login.prototype.show = function () {
    this.element.reset();
    this.__proto__.__proto__.show.call(this);
    this.element.username.focus();
};



// TODO Register & Welcome


function Register(tag, registerCallback,backCallback) {
    Component.call(this, tag);
    
    this.hide();
    this.element.className = "register";

    this.inputs = [{ FirstName: "firstname" }, { LastName: "lastname" }, { Username: "username" }, { Password: "password" }];

    this.inputs.forEach((x, i) => {

        var groupfield = document.createElement('div');
        var label = document.createElement('label');
        var input = document.createElement('input');
        for (var key in x) {
            label.innerText = key;
            input.placeholder = key;
            input.name = x[key];
            input.id = x[key];
            input.type = key === "Password" ? "password" : "text";
        }
        groupfield.appendChild(label);
        groupfield.appendChild(input);
        this.element.appendChild(groupfield);
    });

    var button = document.createElement("button");
    button.className = "button";
    button.type = "button";
    button.innerText = "Send";
    button.addEventListener("click", x => {
        registerCallback(this.element.firstname.value, this.element.lastname.value, this.element.username.value, this.element.password.value);

    });
    this.element.appendChild(button);

    button = document.createElement("button");
    button.type = "button";
    button.className = "button";
    button.innerText = "Back";
    button.addEventListener("click", x => {
        backCallback();

    });
    this.element.appendChild(button);

}

Register.prototype = Object.create(Component.prototype);
Register.prototype.constructor = Register;
Register.prototype.show = function () {
    this.element.reset();
    this.__proto__.__proto__.show.call(this);
    this.element.firstname.focus();
};



