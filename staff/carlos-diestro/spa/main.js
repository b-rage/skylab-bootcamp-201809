var landing = new Landing('Choose an option', 'section',
  function() {
    landing.hide();
    register.show();
  },
  function() {
    landing.hide();
    login.show();
  }
);

document.body.appendChild(landing.element);

var register = new Register('Register', 'section',
  function(email, name, password, rePassword) {
    logic.register(email, name, password, rePassword,
      function() {
          register.hide();
          registerError.element.innerText = '';
          login.show();
      },
      function(message) {
        registerError.element.innerText = message;
      }
    );
  },
  function() {
    register.hide();
    registerError.element.innerText = '';
    landing.show();
  }
);

var registerError = new inputError('', 'p');

document.body.appendChild(register.element);
register.element.appendChild(registerError.element);

var login = new Login('Login', 'section',
  function(name, password) {
    logic.login(name, password,
      function(user) {
        login.hide();
        loginError.element.innerText = '';

        welcome.title.innerText = 'Welcome ' + user.name; 
        welcome.show();
      },
      function(message) {
        loginError.element.innerText = message;
      });
  },
  function() {
    login.hide();
    loginError.element.innerText = '';
    landing.show();
  }
);

var loginError = new inputError('', 'p');

document.body.appendChild(login.element);
login.element.appendChild(loginError.element);

var welcome = new Welcome('Welcome', 'section', function() {
  welcome.hide();
  landing.show();
});

document.body.appendChild(welcome.element);