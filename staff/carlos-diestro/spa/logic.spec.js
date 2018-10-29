describe('SPA', function() {
  var email;
  var name;
  var password;

  describe('register test', function() {
    beforeEach(function() {
      email = 'carlos@skylab.com';
      name = 'carlos';
      password = 'qwerty';
    });

    afterEach(function() {
      user = undefined;
    });

    it('should succeed if email, name and password are correct', function() {

      logic.register(email, name, password,
      function() {
        expect(user.email).toEqual('carlos@skylab.com');
        expect(user.name).toEqual('carlos');
        expect(user.password).toEqual('qwerty');
      },
      function(message) {
        throw Error(message);
      });
    });

    it('should fail if email is empty', function() {
      email = '';

      logic.register(email, name, password,
      function() {
        throw Error();
      },
      function(message) {
        expect(message).toEqual('Email is empty');
      });
    });

    it('should fail if name is empty', function() {
      name = '';

      logic.register(email, name, password,
      function() {
        throw Error();
      },
      function(message) {
        expect(message).toEqual('Name is empty');
      });
    });

    it('should fail if password is empty', function() {
      var password = '';

      logic.register(email, name, password,
      function() {
        result = true;
      },
      function(message) {
        expect(message).toEqual('Password is empty');
      });
    });
  });

  describe('login test', function() {
    beforeEach(function() {
      email = 'carlos@skylab.com';
      name = 'carlos';
      password = 'qwerty';
  
      logic.register(email, name, password, function() {}, function() {});
    });

    it('should succeed if name and password are correct', function() {

      logic.login(name, password,
      function() {
        expect(user.name).toEqual('carlos');
        expect(user.password).toEqual('qwerty');
      },
      function(message) {
        throw Error(message);
      });
    });

    it('should fail if name is wrong', function() {
      name = 'ayy';

      logic.login(name, password,
      function() {
        throw Error();
      },
      function(message) {
        expect(message).toEqual('Credentials are wrong');
      });
    });

    it('should fail if password is wrong', function() {
      password = 'lmao';

      logic.login(name, password,
      function() {
        throw Error();
      },
      function(message) {
        expect(message).toEqual('Credentials are wrong');
      });
    });
  });
});