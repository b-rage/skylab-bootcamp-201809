describe("mocking ajax", function() {
  describe("suite wide usage", function() {
    beforeEach(function() {
      jasmine.Ajax.install();
    });

    afterEach(function() {
      jasmine.Ajax.uninstall();
    });

    it("allows responses to be setup ahead of time", function () {
      var doneFn = jasmine.createSpy("success");
      var res;

      var xhr = new XMLHttpRequest();
      xhr.addEventListener("load", function () {
        res = xhr.responseText;
        doneFn(xhr.responseText);
      });

      xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
      xhr.send();

      expect(doneFn).toHaveBeenCalledWith(res);
    });
  });
});