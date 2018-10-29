var user;
var error;

var logic = {
  register: function(email, name, password, rePassword, onSuccess, onFailure) {
    if(!email || !email.trim().length) {
      onFailure('Email is empty');
    } else if(!name || !name.trim().length) {
      onFailure('Name is empty');
    } else if(!password || !password.trim().length) {
      onFailure('Password is empty');
    } else if(!rePassword || !rePassword.trim().length) {
      onFailure('Repeated password is empty');
    } else if(password !== rePassword) {
      onFailure('Passwords do not match');
    } else {
      user = {
        email: email,
        name: name,
        password: password
      }

      onSuccess();
    }
  },

  login: function(name, password, onSuccess, onFailure) {
    if(!name || !name.trim().length) {
      onFailure('Name is not valid');
    } else if(!password || !password.trim().length) {
      onFailure('Password is not valid');
    } else if(user){
      if(name === user.name && password === user.password) {
        onSuccess({
          email: user.email,
          name: user.name
        });
      } else {
        onFailure('Credentials are wrong');
      }
    }
  }
};